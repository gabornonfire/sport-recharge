import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initializeAnalytics, trackPageView } from "@/lib/analytics";

const AnalyticsBootstrap = () => {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(path);
  }, [location.hash, location.pathname, location.search]);

  return null;
};

export default AnalyticsBootstrap;
