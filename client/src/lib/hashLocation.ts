import { useState, useEffect, useCallback } from "react";

export const useHashLocation = () => {
  const [location, setLocation] = useState(getHashLocation());

  function getHashLocation() {
    let hashPath = window.location.hash.replace(/^#/, "") || "/";
    return hashPath;
  }

  useEffect(() => {
    const handleHashChange = () => {
      setLocation(getHashLocation());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [location, navigate] as const;
};
