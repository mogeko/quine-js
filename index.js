import fs from "node:fs";

export function quine() {
  // It's a cheating quine, but it's a quine nonetheless.
  console.log(fs.readFileSync(__filename, "utf8"));
}

quine();
