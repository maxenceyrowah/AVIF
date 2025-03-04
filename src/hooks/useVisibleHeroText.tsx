import { useEffect, useState } from "react";

const useVisibleHeroText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return {
    isVisible,
  };
};

export default useVisibleHeroText;
