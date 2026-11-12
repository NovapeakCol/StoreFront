import { Instagram, Youtube } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";

const COLUMNS = [
  {
    title: "Tienda",
    links: ["Novedades", "Mujer", "Hombre", "Calzado", "Accesorios", "Outlet"],
  },
  {
    title: "Ayuda",
    links: ["Guía de tallas", "Envíos y entregas", "Devoluciones", "Rastrear pedido", "Contacto"],
  },
  {
    title: "Marca",
    links: ["Nuestra historia", "Tecnología", "Sostenibilidad", "Atletas", "Trabaja con nosotros"],
  },
];

export const SiteFooter = () => (
  <footer className="border-t border-border bg-background">
    <div className="mx-auto w-full max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <BrandLogo className="text-[1.75rem] text-foreground" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Ropa deportiva premium diseñada en laboratorio y probada en la calle. Rendimiento
            sin concesiones desde 2018.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a
              href="#inicio"
              aria-label="Instagram de Veloz"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors duration-150 ease-standard hover:border-foreground/50 hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#inicio"
              aria-label="YouTube de Veloz"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors duration-150 ease-standard hover:border-foreground/50 hover:text-foreground"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="label-eyebrow text-foreground">{column.title}</p>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#inicio"
                    className="text-sm text-muted-foreground transition-colors duration-150 ease-standard hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted-foreground">
          © 2026 Veloz Performance. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="label-eyebrow text-muted-foreground">México · MXN $</p>
          <p className="label-eyebrow text-muted-foreground">
            Visa · Mastercard · Amex · Meses sin intereses
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href="#inicio" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Privacidad
          </a>
          <a href="#inicio" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Términos
          </a>
        </div>
      </div>
    </div>
  </footer>
);
