"use client";

import { useEffect } from "react";

export default function ClickSparks() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const handleClick = (event: MouseEvent) => {
      const sparkCount = 8;
      const fragment = document.createDocumentFragment();

      for (let index = 0; index < sparkCount; index += 1) {
        const spark = document.createElement("span");
        const angle = (360 / sparkCount) * index + (Math.random() * 18 - 9);
        const distance = 70 + Math.random() * 120;
        const radians = (angle * Math.PI) / 180;

        spark.className = "click-spark";
        spark.style.left = `${event.clientX}px`;
        spark.style.top = `${event.clientY}px`;
        spark.style.setProperty("--spark-angle", `${angle}deg`);
        spark.style.setProperty("--spark-mid-x", `${Math.cos(radians) * distance * 0.45}px`);
        spark.style.setProperty("--spark-mid-y", `${Math.sin(radians) * distance * 0.45}px`);
        spark.style.setProperty("--spark-x", `${Math.cos(radians) * distance}px`);
        spark.style.setProperty("--spark-y", `${Math.sin(radians) * distance}px`);
        spark.style.setProperty("--spark-size", `${3 + Math.random() * 2}px`);
        fragment.appendChild(spark);

        window.setTimeout(() => spark.remove(), 4100);
      }

      document.body.appendChild(fragment);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}