import { cn } from "@/lib/utils";
import type { CategoryId } from "@/data/products";

interface CategoryFilterProps {
  categories: { id: CategoryId; label: string }[];
  active: CategoryId;
  counts: Record<CategoryId, number>;
  onChange: (id: CategoryId) => void;
  className?: string;
}

export const CategoryFilter = ({
  categories,
  active,
  counts,
  onChange,
  className,
}: CategoryFilterProps) => (
  <div
    role="tablist"
    aria-label="Filtrar por categoría"
    className={cn(
      "no-scrollbar -mx-5 flex items-center gap-2 overflow-x-auto px-5 md:mx-0 md:px-0",
      className,
    )}
  >
    {categories.map((category) => {
      const isActive = category.id === active;
      return (
        <button
          key={category.id}
          type="button"
          role="tab"
          aria-selected={isActive}
          onClick={() => onChange(category.id)}
          className={cn(
            "label-eyebrow inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 transition-[background-color,color,border-color,transform] duration-150 ease-standard active:scale-[0.97]",
            isActive
              ? "border-transparent bg-primary text-primary-foreground"
              : "border-border bg-transparent text-muted-foreground hover:border-foreground/50 hover:text-foreground",
          )}
        >
          {category.label}
          <span
            className={cn(
              "tabular-nums transition-colors duration-150",
              isActive ? "text-primary-foreground/70" : "text-muted-foreground/60",
            )}
          >
            {counts[category.id]}
          </span>
        </button>
      );
    })}
  </div>
);
