export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="container-narrow flex flex-col items-start justify-between gap-4 py-8 text-sm text-white/60 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Basketball Skills Upgrader. Train smart, ages 7+.</p>
        <p className="text-white/40">
          Built with Next.js · YouTube-embedded lessons · Parent-friendly progress
        </p>
      </div>
    </footer>
  );
}
