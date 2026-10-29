import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-display text-7xl text-text mb-4">404</h1>
      <p className="text-xl text-text/70 mb-8">Page Not Found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-mineral text-bg text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}

