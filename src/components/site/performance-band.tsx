import { Droplets, Gauge, ShieldCheck, Wind } from "lucide-react";
import { RevealGroup, RevealItem, Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const FEATURES = [
  {
    icon: Wind,
    label: "Cortavientos real",
    description: "Membrana de 10 000 g/m² que bloquea el viento sin sofocar el cuerpo.",
  },
  {
    icon: Droplets,
    label: "Secado en 18 min",
    description: "Tratamiento hidrófobo sin PFC que expulsa el sudor al instante.",
  },
  {
    icon: Gauge,
    label: "Retorno energético 88%",
    description: "Placa de carbono y espuma supercrítica calibradas en laboratorio.",
  },
  {
    icon: ShieldCheck,
    label: "Garantía de por vida",
    description: "Cubrimos cada costura y cierre mientras sigas entrenando.",
  },
];

const SPECS = [
  { value: "200 h", label: "Prueba por referencia" },
  { value: "22 mmHg", label: "Compresión progresiva" },
  { value: "118 g", label: "Peso del shell" },
  { value: "4.9/5", label: "Satisfacción verificada" },
];

export const PerformanceBand = () => (
  <section id="tecnologia" className="scroll-mt-24 bg-gradient-carbon">
    <div className="border-y border-border">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Tecnología Veloz"
            title="Ingeniería, no marketing"
            description="Cada pieza nace de un brief técnico: temperatura corporal, kilómetros acumulados y puntos de fricción. Después se prueba con atletas reales durante 200 horas."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <RevealItem
              key={feature.label}
              className="group relative bg-background/80 p-6 backdrop-blur-sm transition-colors duration-200 ease-standard hover:bg-accent"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out-quint group-hover:scale-x-100"
              />
              <feature.icon className="h-6 w-6 text-primary transition-transform duration-200 ease-standard group-hover:scale-110" />
              <p className="label-eyebrow mt-6 text-foreground">{feature.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {SPECS.map((spec) => (
            <RevealItem key={spec.label}>
              <p className="font-display text-[2.5rem] uppercase leading-none tracking-[-0.015em] text-foreground">
                {spec.value}
              </p>
              <p className="label-eyebrow mt-3 text-muted-foreground">{spec.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  </section>
);
