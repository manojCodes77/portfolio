export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-0 pointer-events-none overflow-hidden">
      {/* Soft glow orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500 blur-3xl opacity-20 animate-gradient" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full bg-blue-600 blur-3xl opacity-20" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-cyan-400 blur-3xl opacity-10" />

      {/* Faint grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(6, 182, 212, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
