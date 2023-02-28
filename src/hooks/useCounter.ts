import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setcounter] = useState(5);
  const elementToAnimate = useRef<any>(null);
  const gsapRef = useRef(gsap.timeline());
  const handleClick = () => {
    setcounter((counter) => Math.min(counter + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) {
      return;
    }
    gsapRef.current
      .to(elementToAnimate.current, {
        y: -10,

        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,

        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);
  useEffect(() => {
    if (counter < maxCount) {
      return;
    }
    gsapRef.current.play(0);
    // eslint-disable-next-line 
  }, [counter]);

  return { counter, handleClick, elementToAnimate };
};
