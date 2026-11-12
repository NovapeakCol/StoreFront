const ITEMS = [
  "Envío gratis desde $2,500",
  "Devoluciones sin costo 30 días",
  "Garantía de por vida en costuras",
  "Paga en 3 meses sin intereses",
];

export const MarqueeStrip = () => (
  <div className="group relative overflow-hidden border-y border-border bg-card py-3.5">
    <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
      {[0, 1].map((group) => (
        <div key={group} className="flex items-center gap-10 pl-10">
          {ITEMS.map((item) => (
            <span key={item} className="label-eyebrow flex items-center gap-10 text-muted-foreground">
              {item}
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
