"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const HexagonBackground = ({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const hexSize = 20;
    const hexWidth = Math.sqrt(3) * hexSize;
    const hexHeight = 2 * hexSize;
    const xSpacing = hexWidth;
    const ySpacing = hexHeight * 0.75;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      
      // Set actual canvas size to match display size for sharp rendering on high DPI
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const drawHexagon = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle_deg = 60 * i - 30;
        const angle_rad = (Math.PI / 180) * angle_deg;
        const px = x + size * Math.cos(angle_rad);
        const py = y + size * Math.sin(angle_rad);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const rows = Math.ceil(height / ySpacing) + 1;
      const cols = Math.ceil(width / xSpacing) + 1;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const xOffset = (i % 2 === 0) ? 0 : hexWidth / 2;
          const x = j * xSpacing + xOffset;
          const y = i * ySpacing;

          // Calculate distance to mouse
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Calculate opacity based on distance
          // Max distance for effect is 300px
          const maxDist = 300;
          const opacity = Math.max(0, 1 - distance / maxDist);

          drawHexagon(x, y, hexSize);

          // Base stroke
          // Using site's primary yellow: #D6C27A -> rgb(214, 194, 122)
          ctx.strokeStyle = `rgba(214, 194, 122, ${0.02 + opacity * 0.1})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Interactive fill
          if (opacity > 0) {
            ctx.fillStyle = `rgba(214, 194, 122, ${opacity * 0.15})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);
    
    resize();
    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden bg-transparent pointer-events-none",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className={cn("block w-full h-full", className)}
        style={{
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
};
