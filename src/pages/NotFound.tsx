import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/site/brand-logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <BrandLogo className="text-2xl text-foreground" />
      <p className="font-display text-[4rem] uppercase leading-none tracking-[-0.015em] text-foreground">
        404
      </p>
      <p className="max-w-sm text-sm text-muted-foreground">
        Esta ruta no existe. Vuelve a la colección y sigue armando tu equipo.
      </p>
      <Button asChild size="lg">
        <a href="/">
          <ArrowLeft />
          Volver al inicio
        </a>
      </Button>
    </div>
  );
};

export default NotFound;
