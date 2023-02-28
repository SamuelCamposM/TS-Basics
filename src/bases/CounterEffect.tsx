import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setcounter] = useState(5);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const handleClick = () => {
    setcounter((counter) => Math.min(counter + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.log(
      "%cSe llego al valor maximo",
      "color:red; background-color:black; font-size: 20px;"
    );
    const tl = gsap.timeline();
    tl.to(counterRef.current, {
      y: -10,
      color: "red",
      duration: 0.2,
      ease: "ease.out",
    }).to(counterRef.current, {
      y: 0,
      color: "red",
      duration: 1,
      ease: "bounce.out",
    });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterRef}>{counter}</h2>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        +1
      </button>
    </>
  );
};
