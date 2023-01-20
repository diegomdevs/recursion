export default function countdown(num: number) {
  console.log(num);
  if (num != 0) countdown(num - 1);
}
