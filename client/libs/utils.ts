import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(str: string, numInitials: number) {
  return str
    .split(" ")
    .reduce((prev, curr) => {
      if (prev.length >= numInitials) return prev;
      prev.push(curr);
      return prev;
    }, [] as string[])
    .map((str) => str[0])
    .join("")
    .toUpperCase();
}
