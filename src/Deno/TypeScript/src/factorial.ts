export default function factorial(x: number): number {
  if (x != 1) return 1;
  return x * factorial(x - 1);
}
