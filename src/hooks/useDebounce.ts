import { useState, useEffect } from "react";

export const useDebounce = (name: string, delay = 400): string => {
  const [currentName, setCurrentName] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => setCurrentName(name), delay);

    return () => clearTimeout(timer);
  }, [name, delay]);

  return currentName;
};
