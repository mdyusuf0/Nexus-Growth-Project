'use client';

import React, { useEffect, useRef } from 'react';

const START_HUE = 60;
const HUE_RANGE = 270;
const LIGHTNESS_VALUES = [65, 58, 52, 46, 60];
const FADE_IN_MS = 140;
const FADE_OUT_MS = 850;

const easeOut = (t: number) => 1 - (1 - t) ** 2;
const easeIn = (t: number) => t * t;

interface LitTile {
  col: number;
  row: number;
  colour: string;
  born: number;
  until: number;
}

export interface ScrollingTileGridUnderlayProps {
  cell?: number;
  reach?: number;
  ambient?: number;
  maxLit?: number;
}

export default function ScrollingTileGridUnderlay({
  cell = 28,
  reach = 2.4,
  ambient = 2,
  maxLit = 240,
}: ScrollingTileGridUnderlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    let scrollY = window.scrollY;
    let lastScrollY = scrollY;
    let pointerPos: { x: number; y: number } | null = null;
    let animFrame = 0;
    let isVisible = true;

    const litTiles = new Map<string, LitTile>();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      wake();
    };

    const getTileColor = (row: number) => {
      const rowCycle = ((row % 36) + 36) % 36;
      const hue = ((START_HUE - (rowCycle / 36) * HUE_RANGE) % 360 + 360) % 360;
      const lightness = LIGHTNESS_VALUES[Math.floor(Math.random() * LIGHTNESS_VALUES.length)];
      return `hsl(${Math.round(hue)} 92% ${lightness}%)`;
    };

    const lightTile = (col: number, row: number, duration: number) => {
      if (litTiles.size >= maxLit) return;
      const key = `${col},${row}`;
      const now = performance.now();
      const existing = litTiles.get(key);
      if (existing && now < existing.until) return;

      let born = now;
      if (existing) {
        const remaining = 1 - easeIn(Math.min(1, (now - existing.until) / FADE_OUT_MS));
        born = now - (1 - Math.sqrt(1 - remaining)) * FADE_IN_MS;
      }

      litTiles.set(key, {
        col,
        row,
        colour: existing?.colour ?? getTileColor(row),
        born,
        until: now + duration,
      });

      wake();
    };

    const triggerAtScreen = (screenX: number, screenY: number, radius = reach) => {
      const currentScroll = window.scrollY;
      const worldX = screenX;
      const worldY = screenY + currentScroll;
      const centerCol = Math.floor(worldX / cell);
      const centerRow = Math.floor(worldY / cell);
      const r = Math.ceil(radius);

      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          const dist = Math.hypot(dx, dy);
          if (dist > radius || Math.random() > 1 - dist / (radius + 0.6)) continue;
          lightTile(centerCol + dx, centerRow + dy, 280 + Math.random() * 850);
        }
      }
    };

    const draw = (now: number) => {
      animFrame = 0;
      ctx.clearRect(0, 0, width, height);
      scrollY = window.scrollY;

      // Sync hairline grid position with scroll
      if (container) {
        const offset = -(scrollY % cell);
        container.style.backgroundPosition = `0px ${offset}px`;
      }

      for (const [key, tile] of litTiles) {
        let alpha: number;
        if (now < tile.until) {
          alpha = easeOut(Math.min(1, (now - tile.born) / FADE_IN_MS));
        } else {
          const fadeProgress = (now - tile.until) / FADE_OUT_MS;
          if (fadeProgress >= 1) {
            litTiles.delete(key);
            continue;
          }
          alpha = 1 - easeIn(fadeProgress);
        }

        const screenX = tile.col * cell;
        const screenY = tile.row * cell - scrollY;

        // Culling: only draw tiles visible inside the current viewport
        if (screenX >= -cell && screenX <= width && screenY >= -cell && screenY <= height) {
          // Soft underlay alpha
          ctx.globalAlpha = alpha * 0.72;
          ctx.fillStyle = tile.colour;
          ctx.fillRect(screenX + 1, screenY + 1, cell - 2, cell - 2);
        }
      }

      ctx.globalAlpha = 1;

      if (litTiles.size > 0) {
        animFrame = requestAnimationFrame(draw);
      }
    };

    const wake = () => {
      if (!animFrame) {
        animFrame = requestAnimationFrame(draw);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      pointerPos = { x: e.clientX, y: e.clientY };
      triggerAtScreen(e.clientX, e.clientY);
    };

    const onScroll = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - lastScrollY);
      lastScrollY = currentScroll;

      // If pointer is on screen, illuminate tiles as page scrolls underneath it
      if (pointerPos) {
        triggerAtScreen(pointerPos.x, pointerPos.y, 1.8);
      }

      // If scrolling at speed, ignite a couple ambient tiles along the path
      if (delta > 10) {
        const randomX = Math.random() * width;
        const randomY = Math.random() * height;
        triggerAtScreen(randomX, randomY, 1.2);
      }

      wake();
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        pointerPos = { x: touch.clientX, y: touch.clientY };
        triggerAtScreen(touch.clientX, touch.clientY);
      }
    };

    // Ambient drift pulse
    let driftTimer = 0;
    const drift = () => {
      driftTimer = window.setTimeout(drift, 1200 + Math.random() * 1800);
      if (!isVisible || document.hidden) return;
      const currentScroll = window.scrollY;
      const totalCols = Math.ceil(width / cell);
      const visibleStartRow = Math.floor(currentScroll / cell);
      const visibleRows = Math.ceil(height / cell);

      for (let i = 0; i < ambient; i++) {
        const col = Math.floor(Math.random() * totalCols);
        const row = visibleStartRow + Math.floor(Math.random() * visibleRows);
        lightTile(col, row, 800 + Math.random() * 1500);
      }
    };

    driftTimer = window.setTimeout(drift, 400);

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) wake();
    };

    resize();

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      clearTimeout(driftTimer);
      cancelAnimationFrame(animFrame);
    };
  }, [cell, reach, ambient, maxLit]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      data-slot="scrolling-tile-grid-underlay"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#0A0A0A]"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: `${cell}px ${cell}px`,
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 size-full pointer-events-none" />
    </div>
  );
}
