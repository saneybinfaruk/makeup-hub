import { Product } from "../pages/HomePage";

export default function getRandomItems(arr: Product[], num: number) {
  // Create a copy of the original array to avoid modifying it
  const shuffled = [...arr];

  // Shuffle the array randomly using the Fisher-Yates Shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Slice the shuffled array to get the desired number of items
  return shuffled.slice(0, num);
}
