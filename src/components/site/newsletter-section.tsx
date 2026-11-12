import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    setStatus(isValid ? "success" : "error");
  };

  return (
    <section id="club" className="scroll-mt-24 bg-gradient-carbon">
      <div className="border-y border-border">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-3 w-[3px] -skew-x-12 bg-primary" />
              <p className="label-eyebrow text-muted-foreground">Club Veloz</p>
            </div>
            <h2 className="display-section mt-5 text-foreground">
              Acceso anticipado
              <br />
              a cada drop
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Lanzamientos 48 horas antes, 10% en tu primera compra y contenido de
              entrenamiento con nuestros atletas. Sin spam.
            </p>

            <div className="mt-9">
              <AnimatePresence mode="wait" initial={false}>
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    role="status"
                    className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-sm border border-primary/40 bg-background/70 px-5 py-4 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <p className="label-eyebrow text-foreground">
                      Listo · revisa tu correo
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={false}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="mx-auto max-w-md"
                    noValidate
                  >
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <label htmlFor="club-email" className="sr-only">
                        Correo electrónico
                      </label>
                      <input
                        id="club-email"
                        type="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        placeholder="tu@correo.com"
                        aria-invalid={status === "error"}
                        className={cn(
                          "h-14 flex-1 rounded-sm border bg-background/80 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
                          status === "error" ? "border-destructive" : "border-input",
                        )}
                      />
                      <Button type="submit" size="lg" className="sm:w-auto">
                        Suscribirme
                        <ArrowRight />
                      </Button>
                    </div>
                    {status === "error" && (
                      <p className="label-eyebrow mt-3 text-left text-destructive">
                        Ingresa un correo válido para continuar
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Al suscribirte aceptas nuestra política de privacidad. Cancela cuando quieras.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
