# quine-js

This is a selfrep (quine) program. It returns its own source code.

## Usage

As a Node.js module:

```js
import { quine } from "quine-js";

console.log(quine());
```

As a CLI tool:

```sh
npx quine-js
```

## References

- [Quines (self-replicating programs)](http://www.madore.org/%7Edavid/computers/quine.html)

## License

The code in this project is released under the [MIT License](./LICENSE).
