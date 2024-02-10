"use client";

import { useState, useEffect, useRef } from "react";

export const Mousefollow = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const { x, y } = point;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: {clientX: number, clientY: number}) => {
      const element = ref.current;

        const x = clientX - (element as HTMLElement).offsetLeft - (element as HTMLElement).offsetWidth / 2;
        const y = clientY - (element as HTMLElement).offsetTop - (element as HTMLElement).offsetHeight / 2;

      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="mousefollow"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    ></div>
  );
};