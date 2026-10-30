import React from 'react';

export default function ConnectLoader({
  size = 28,
  color,
  label,
  pill = false,
  className = '',
}) {
  const s = size;
  const stroke = Math.max(2, Math.round(s / 10));
  const spinColor = color || 'rgba(255,255,255,0.92)';
  const track = 'rgba(255,255,255,0.18)';

  const spinner = (
    <div
      className="relative shrink-0"
      style={{ width: s, height: s }}
      role="status"
      aria-label={label || 'Loading'}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: `${stroke}px solid ${track}` }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `${stroke}px solid transparent`,
          borderTopColor: spinColor,
          borderRightColor: spinColor,
          opacity: 0.95,
          animation: 'ios-spin 0.75s linear infinite',
        }}
      />
    </div>
  );

  if (pill) {
    return (
      <div className={`inline-flex flex-col items-center gap-2 select-none ${className}`}>
        <div
          className="flex items-center justify-center rounded-[14px]"
          style={{
            width: s + 28,
            height: s + 28,
            background: 'rgba(44, 44, 46, 0.92)',
            boxShadow: '0 8px 28px rgba(0,0,0,0.45)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {spinner}
        </div>
        {label ? (
          <p className="text-[13px] text-[#8E8E93] font-medium">{label}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-2.5 select-none ${className}`}>
      {spinner}
      {label ? (
        <p className="text-[13px] text-[#8E8E93] font-medium">{label}</p>
      ) : null}
    </div>
  );
}
