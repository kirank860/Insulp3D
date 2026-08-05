import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toProperCase(str: string) {
  if (!str) return str;
  // If the string is mostly ALL CAPS, format it to Title Case
  const isAllCaps = str === str.toUpperCase();
  if (isAllCaps) {
    return str.toLowerCase().replace(/\b(?!and|or|the|in|of|a|an|with|for)\w+/g, 
      txt => txt.charAt(0).toUpperCase() + txt.slice(1)
    ).replace(/\b3d\b/gi, '3D').replace(/\bgrp\b/gi, 'GRP');
  }
  return str;
}
