A promise based simple Input-Output module for JavaScript.

Example:

```js

import Ezio from 'ezio.js';

const io = new Ezio();

io.ask('Hey, what\'s your name? ').then(answer => {
    io.print(`Hello, ${answer}!`)
})
```