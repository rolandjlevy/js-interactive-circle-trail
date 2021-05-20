# Notes

### Random colours

```js
const rand = (n) => Math.floor(Math.random() * n);
const randomRgb = (n) => `rgb(${rand(n+1)}, ${rand(n+1)}, ${rand(n+1)})`;
```