interface DownloadProfileButtonProps {
  label: string;
}

export function DownloadProfileButton({ label }: DownloadProfileButtonProps) {
  return (
    <a
      href="/profile/reonu-company-profile.pdf"
      download
      className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-foreground text-white text-sm font-medium uppercase tracking-widest rounded-full hover:bg-accent transition-colors duration-300 w-fit"
    >
      {label}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </a>
  );
}
