import { cn } from "@/lib/utils";

export const BrandLogo = ({
  className,
  showMark = true,
}: {
  className?: string;
  showMark?: boolean;
}) => (
  <span
    className={cn(
      "inline-flex select-none items-baseline gap-[2px] font-display uppercase leading-none tracking-[0.06em]",
      className,
    )}
  >
    {showMark && (
      <span aria-hidden="true" className="mr-1.5 inline-block h-[0.62em] w-[0.28em] -skew-x-12 bg-primary" />
    )}
    Veloz
  </span>
);
