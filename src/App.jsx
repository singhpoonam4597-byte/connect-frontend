import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './stores/authStore';
import { useSocketStore } from './stores/socketStore';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ChatPage from './pages/ChatPage';
import UserProfilePage from './pages/UserProfilePage';
import SettingsPage from './pages/SettingsPage';
import SearchPage from './pages/SearchPage';
import ProtectedRoute from './components/ProtectedRoute';
import ConnectionBanner from './components/ConnectionBanner';
import InstallPrompt from './components/InstallPrompt';
import ConnectLoader from './components/ConnectLoader';

function App() {
  const { user, isLoading, initializeAuth } = useAuthStore();
  const { connect } = useSocketStore();
  const [bootTimedOut, setBootTimedOut] = useState(false);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  useEffect(() => {
    if (!isLoading) {
      setBootTimedOut(false);
      return;
    }
    const t = setTimeout(() => setBootTimedOut(true), 12000);
    return () => clearTimeout(t);
  }, [isLoading]);

  useEffect(() => {
    if (user) connect?.();
  }, [user, connect]);

  if (isLoading && !bootTimedOut) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <ConnectLoader size={28} pill label="Loading…" />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<ChatPage />} />
              <Route path="/chat/:conversationId" element={<ChatPage />} />
              <Route path="/group/:groupId" element={<ChatPage />} />
              <Route path="/user/:userId" element={<UserProfilePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/signup" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
      <Toaster position="top-right" />
      {user ? <InstallPrompt /> : null}
    </Router>
  );
}

export default App;
