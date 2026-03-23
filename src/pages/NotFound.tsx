import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Az oldal nem található | Sport Recharge";
    trackEvent("page_not_found", {
      path: location.pathname,
    });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">A keresett oldal nem található.</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Vissza a főoldalra
        </a>
      </div>
    </div>
  );
};

export default NotFound;
