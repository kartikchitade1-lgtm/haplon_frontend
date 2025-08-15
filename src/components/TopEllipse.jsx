"use client";
import React from "react";

export default function TopEllipse({ color = "#F5F5F5", height = 200 }) {
  const gradientId = `ellipseGradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-0"
      style={{ height }}
      viewBox="0 0 1920 240"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <ellipse cx="960" cy="120" rx="1000" ry="120" fill={`url(#${gradientId})`} />
    </svg>
  );
}
