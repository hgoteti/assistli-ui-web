import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function simulateDelay(promise, delay = 750) {
  return new Promise(resolve => {
    setTimeout(() => resolve(promise), delay)
  })
}
