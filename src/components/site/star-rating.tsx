import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  reviews?: number;
  className?: string;
  starClassName?: string;
  showValue?: boolean;
}

export const StarRating = ({
  rating,
  reviews,
  className,
  starClassName,
  showValue = false,
}: StarRatingProps) => {
  const rounded = Math.round(rating);
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-[3px]" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              "h-3.5 w-3.5",
              index < rounded
                ? "fill-primary text-primary"
                : "fill-transparent text-muted-foreground/40",
              starClassName,
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className="label-eyebrow text-muted-foreground">
          {rating.toFixed(1)}
          {typeof reviews === "number" && (
            <span className="text-muted-foreground/60"> · {reviews} reseñas</span>
          )}
        </span>
      )}
      <span className="sr-only">
        {rating} de 5 estrellas{typeof reviews === "number" ? `, ${reviews} reseñas` : ""}
      </span>
    </div>
  );
};
