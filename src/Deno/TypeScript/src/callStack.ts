export default function greet(name: string) {
  console.log(`Hello, ${name}!`);
  greet2(name);
  console.log("Getting ready to say bye...");
  bye();
}

function greet2(name: string) {
  console.log(`How are you, ${name}?`);
}

function bye() {
  console.log("ok, bye!");
}
