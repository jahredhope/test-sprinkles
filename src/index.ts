import { atoms } from "./atoms.css";

function run(name: string) {
  console.log(
    `Hello ${name}! (${atoms({
      color: "red100",
    })})`
  );
}
run("Fred");
run("George");
