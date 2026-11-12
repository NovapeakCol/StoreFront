import { Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { StarRating } from "@/components/site/star-rating";

const TESTIMONIALS = [
  {
    quote:
      "Corrí mi mejor maratón con el tight Aerolithe. Cero rozaduras en 42 km y la compresión se mantiene igual en el kilómetro 40.",
    name: "Daniela Ríos",
    context: "Maratonista · Ciudad de México",
    rating: 5,
    highlight: "42 km sin rozaduras",
  },
  {
    quote:
      "El Vantablack Run 02 cambió mis series. Es la primera zapatilla donde la placa se siente como ayuda y no como pelea.",
    name: "Mateo Herrera",
    context: "Triatleta · Bogotá",
    rating: 5,
    highlight: "Series 8 × 1000 m",
  },
  {
    quote:
      "Entreno en box sin aire acondicionado. La Flux Tee sigue ligera a la hora y media, y eso no lo había logrado con ninguna otra.",
    name: "Camila Duarte",
    context: "Coach funcional · Lima",
    rating: 5,
    highlight: "90 min de entrenamiento",
  },
];

export const TestimonialsSection = () => (
  <section id="opiniones" className="scroll-mt-24 py-20 md:py-28">
    <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <SectionHeading
          eyebrow="Opiniones verificadas"
          title="Los que ya entrenan con Veloz"
          description="2,480 reseñas de atletas verificados con compra confirmada. Nada de testimonios de relleno."
          action={
            <div className="shrink-0 rounded-sm border border-border bg-card p-5 shadow-hairline">
              <p className="font-display text-4xl leading-none tracking-[-0.015em] text-foreground">
                4.9<span className="text-muted-foreground/70">/5</span>
              </p>
              <StarRating rating={5} className="mt-3" />
              <p className="label-eyebrow mt-3 text-muted-foreground">2,480 reseñas</p>
            </div>
          }
        />
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <RevealItem
            key={testimonial.name}
            className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 shadow-hairline transition-[transform,box-shadow,border-color] duration-300 ease-out-quint hover:-translate-y-1 hover:border-foreground/25 hover:shadow-md"
          >
            <Quote className="h-6 w-6 text-primary" />
            <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-foreground">
              {testimonial.quote}
            </p>
            <p className="label-eyebrow mt-6 inline-flex w-fit rounded-xs border border-primary/40 px-2.5 py-1.5 text-primary">
              {testimonial.highlight}
            </p>
            <div className="mt-6 border-t border-border pt-5">
              <StarRating rating={testimonial.rating} />
              <p className="mt-3 text-sm font-semibold text-foreground">{testimonial.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{testimonial.context}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  </section>
);
