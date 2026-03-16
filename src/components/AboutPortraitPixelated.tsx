"use client";

import { useEffect, useRef, useState } from "react";

import { PixelatedCanvas } from "@caffeinebounce/ui";

import { cn } from "@/lib/utils";

interface AboutPortraitPixelatedProps {
  className?: string;
}

interface FrameSize {
  height: number;
  width: number;
}

export function AboutPortraitPixelated({
  className,
}: AboutPortraitPixelatedProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [frameSize, setFrameSize] = useState<FrameSize | null>(null);
  const [readyCanvasKey, setReadyCanvasKey] = useState<string | null>(null);
  const canvasKey = frameSize
    ? `${frameSize.width}x${frameSize.height}`
    : "about-portrait-pending";
  const isCanvasReady = readyCanvasKey === canvasKey;

  useEffect(() => {
    const node = frameRef.current;
    if (!node) {
      return;
    }

    const measureFrame = () => {
      const nextWidth = Math.round(node.clientWidth);
      const nextHeight = Math.round(node.clientHeight);

      if (nextWidth > 0 && nextHeight > 0) {
        setFrameSize((previousSize) => {
          if (
            previousSize?.width === nextWidth &&
            previousSize?.height === nextHeight
          ) {
            return previousSize;
          }

          return { width: nextWidth, height: nextHeight };
        });
      }
    };

    measureFrame();

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) {
        return;
      }

      const nextWidth = Math.round(entry.contentRect.width);
      const nextHeight = Math.round(entry.contentRect.height);

      if (nextWidth > 0 && nextHeight > 0) {
        setFrameSize((previousSize) => {
          if (
            previousSize?.width === nextWidth &&
            previousSize?.height === nextHeight
          ) {
            return previousSize;
          }

          return { width: nextWidth, height: nextHeight };
        });
      }
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative aspect-[14/15] w-full overflow-hidden bg-[#133a79]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-[#133a79] transition-opacity duration-300",
          isCanvasReady ? "opacity-0" : "opacity-100",
        )}
      />
      {frameSize ? (
        <PixelatedCanvas
          alt="Keenan Beasley portrait"
          backgroundColor="transparent"
          cellSize={4}
          className={cn(
            "absolute inset-0 block h-full w-full transition-opacity duration-300",
            isCanvasReady ? "opacity-100" : "opacity-0",
          )}
          distortionMode="swirl"
          distortionRadius={70}
          distortionStrength={1.15}
          dotScale={0.94}
          dropoutStrength={0.08}
          fadeOnLeave
          fadeSpeed={0.14}
          followSpeed={0.14}
          height={frameSize.height}
          interactive
          jitterSpeed={1.8}
          jitterStrength={0.55}
          key={canvasKey}
          maxFps={36}
          objectFit="fill"
          onReady={() => setReadyCanvasKey(canvasKey)}
          sampleAverage
          shape="square"
          src="/images/about-portrait.webp"
          tintStrength={0}
          width={frameSize.width}
        />
      ) : null}
    </div>
  );
}
