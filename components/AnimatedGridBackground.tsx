 "use client";

import React, { useEffect, useRef } from "react";
import styles from "./AnimatedGridBackground.module.css";

export type Direction = "right" | "left" | "up" | "down" | "diagonal";

export interface AnimatedGridBackgroundProps {
  direction?: Direction;
  speed?: number;
  squareSize?: number;
  borderColor?: string;
  hoverFillColor?: string;
}

const DEFAULT_DIRECTION: Direction = "right";
const DEFAULT_SPEED = 0.15;
const DEFAULT_SQUARE_SIZE = 28;
const DEFAULT_BORDER_COLOR = "rgba(0,0,0,0.05)";
const DEFAULT_HOVER_FILL_COLOR = "rgba(0,0,0,0.06)";

export const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = ({
  direction = DEFAULT_DIRECTION,
  speed = DEFAULT_SPEED,
  squareSize = DEFAULT_SQUARE_SIZE,
  borderColor = DEFAULT_BORDER_COLOR,
  hoverFillColor = DEFAULT_HOVER_FILL_COLOR,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const offsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hoverPositionRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let isRunning = true;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    const getVelocity = () => {
      switch (direction) {
        case "left":
          return { vx: -speed, vy: 0 };
        case "right":
          return { vx: speed, vy: 0 };
        case "up":
          return { vx: 0, vy: -speed };
        case "down":
          return { vx: 0, vy: speed };
        case "diagonal":
          return { vx: speed * 0.75, vy: speed * 0.75 };
        default:
          return { vx: speed, vy: 0 };
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const { x, y } = offsetRef.current;
      const hoverPos = hoverPositionRef.current;

      context.clearRect(0, 0, width, height);

      context.strokeStyle = borderColor;
      context.lineWidth = 1;

      const startX = -squareSize + (x % squareSize);
      const startY = -squareSize + (y % squareSize);

      const hoveredCell =
        hoverPos != null
          ? {
              col: Math.floor((hoverPos.x - startX) / squareSize),
              row: Math.floor((hoverPos.y - startY) / squareSize),
            }
          : null;

      for (let gridY = startY, row = 0; gridY < height + squareSize; gridY += squareSize, row += 1) {
        for (let gridX = startX, col = 0; gridX < width + squareSize; gridX += squareSize, col += 1) {
          // Subtle hover fill for the currently hovered cell
          if (
            hoveredCell &&
            hoveredCell.row === row &&
            hoveredCell.col === col &&
            hoverFillColor
          ) {
            context.fillStyle = hoverFillColor;
            context.fillRect(gridX, gridY, squareSize, squareSize);
          }

          context.strokeRect(gridX + 0.5, gridY + 0.5, squareSize, squareSize);
        }
      }
    };

    const { vx, vy } = getVelocity();

    const animate = () => {
      if (!isRunning) return;

      const nextX = (offsetRef.current.x + vx) % squareSize;
      const nextY = (offsetRef.current.y + vy) % squareSize;
      offsetRef.current = {
        x: nextX < 0 ? nextX + squareSize : nextX,
        y: nextY < 0 ? nextY + squareSize : nextY,
      };

      draw();
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      hoverPositionRef.current = { x, y };
    };

    const handleMouseLeave = () => {
      hoverPositionRef.current = null;
    };

    const handleResize = () => {
      resizeCanvas();
      draw();
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      isRunning = false;

      if (animationFrameRef.current != null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed, squareSize, borderColor, hoverFillColor]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default AnimatedGridBackground;

