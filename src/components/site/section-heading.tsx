import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) => (
  <div className={cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-3 w-[3px] -skew-x-12 bg-primary" />
        <p className="label-eyebrow text-muted-foreground">{eyebrow}</p>
      </div>
      <h2 className="display-section mt-4 text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </div>
    {action}
  </div>
);
