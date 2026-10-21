import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  viewAllHref?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle, viewAllHref }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            {eyebrow}
          </span>
        )}
        <h2 className="section-heading mt-1">{title}</h2>
        {subtitle && <p className="section-subheading">{subtitle}</p>}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="flex shrink-0 items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-600 dark:text-white"
        >
          View All <FaArrowRight size={12} />
        </Link>
      )}
    </div>
  );
}
