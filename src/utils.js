import { useState, useEffect } from "react";

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const getElementDimensions = (element) => {
  const width = element.clientWidth;
  const height = element.clientWidth;
  return { width, height };
};

export const useGetElementDimensions = (elementRef) => {
  const [elementDims, setElementDims] = useState(getElementDimensions());

  const onElementResize = (e) => {
    setElementDims(getElementDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", onElementResize);
    return () => {
      window.removeEventListener("resize", onElementResize);
    };
  }, []);
  return elementDims;
};
export const useWindowDimensions = () => {
  const [windowDims, setWindowDims] = useState(getWindowDimensions());

  const onWindowResize = (e) => {
    setWindowDims(getWindowDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);
  return windowDims;
};

export class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
  static collides(r1, r2) {
    if (
      r1.x < r2.x + r2.width &&
      r1.x + r1.width > r2.x &&
      r1.y < r2.y + r2.height &&
      r1.y + r1.height > r2.y
    ) {
      return true;
    }
    return false;
  }
}
