import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE =
  "https://cdn.enter.pro/resources/uid_100678664/veloz-hero-run_cae4c72d.png";

const STATS = [
  { value: "+120K", label: "Atletas activos" },
  { value: "4.9/5", label: "2,480 reseñas" },
  { value: "24 h", label: "Entrega en ciudades" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const HeroSection = () => (
  <section id="inicio" className="relative isolate overflow-hidden">
    <img
      src={HERO_IMAGE}
      alt="Dos atletas corriendo con ropa técnica negra de Veloz"
      crossOrigin="anonymous"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-gradient-hero-side" />

    <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-[1400px] flex-col justify-end px-5 pb-14 pt-40 md:px-10 md:pb-20">
      <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
        <motion.div variants={item} className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <p className="label-eyebrow text-muted-foreground">
            Drop 04 · Performance 2026
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="display-hero mt-6 text-[3.4rem] text-foreground sm:text-[5.5rem] lg:text-[7rem]"
        >
          Rompe el
          <br />
          <span className="text-outline">límite</span>
          <span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Prendas de compresión progresiva, calzado con retorno energético del 88% y capas
          ultraligeras. Diseñado en laboratorio, probado en la calle.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href="#coleccion">
              Explorar colección
              <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#tecnologia">Ver tecnología</a>
          </Button>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-14 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-border/70 bg-border/60 sm:grid-cols-3"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-background/70 px-5 py-4 backdrop-blur-sm">
              <dt className="label-eyebrow text-muted-foreground">{stat.label}</dt>
              <dd className="mt-1.5 font-display text-2xl uppercase tracking-[-0.01em] text-foreground">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <div className="mt-12 hidden items-center gap-3 md:flex">
        <ChevronDown className="h-4 w-4 animate-bounce text-muted-foreground" />
        <span className="label-eyebrow text-muted-foreground">Desliza para ver la colección</span>
      </div>
    </div>
  </section>
);
