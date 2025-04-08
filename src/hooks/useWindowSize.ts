import { useState, useEffect } from "react";
import { WindowSize } from "../types";

/**
 * Custom hook for tracking window size
 * Helps with responsive design decisions
 * @returns {WindowSize} - Object containing width and height of window
 */
const useWindowSize = (): WindowSize => {
  // Initialize with default values if window is not available (SSR)
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect runs only on mount and unmount

  return windowSize;
};

export default useWindowSize;
