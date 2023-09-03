import React, { useState, useEffect } from "react";

type WindowSize = {
  width: number;
  height: number;
};

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  return windowSize;
};

export default useWindowSize;
