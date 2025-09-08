import { useEffect, useState } from "react";

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(() => localStorage.getItem(key));

  useEffect(() => {
    const handleStorageChange = () => {
      setValue(localStorage.getItem(key));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  const updateValue = (newValue: string | null) => {
    if (newValue !== null) {
      localStorage.setItem(key, newValue);
    } else {
      localStorage.removeItem(key);
    }
    setValue(newValue);
  };

  return {
    value,
    setValue: updateValue,
    remove: () => updateValue(null),
  };
};
