# Instructions

1. `yarn`
2. `yarn watch` to watch files
3. `yarn serve` to open a simple http server

In browser, go to http://localhost:8080/ and open the console.

They're inputs compile to

```
!function() {
  "use strict";
  let o = 0;
  for (let o = 0; o < 10; o++) {
    const o = o++;
    console.log(o)
  }
}();

```

Is this the expected behavior?
