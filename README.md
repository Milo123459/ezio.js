## About

Ezio is an easy-to-use promise-based Input-Output module for JavaScript. *Whew, that's a lot of hyphens for such a short sentence...anyway, here is how you install and use Ezio:*

## Installation

`npm i ezio.js`

## Example usage

```js
import Ezio from 'ezio.js';

const io = new Ezio();

io.ask('What is your name: ')
    .then(answer => io.print(`Hello there, ${answer}`));
```

## Links

- [GitHub](https://github.com/iShibi/ezio.js)
- [NPM](https://www.npmjs.com/package/ezio.js)