# Socket io 

## Setup
[Tutorial](https://socket.io/docs/v4/tutorial/step-1)
1. Make sure we are using an ES Module config
Add this code to package.json
```json
  "type": "module",
  "name": "esmodule-example",
  "version": "1.0.0",
  "main": "main.mjs",
  "scripts": {
    "start": "node main.mjs"
  }
```

2. 
```bash
npm i express@4
```

3. 
```bash
npm install socket.io
```

4. Add the client side js
```html
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();
</script>
```
CDN is available at
```html
<script src="https://cdn.socket.io/4.7.4/socket.io.min.js"></script>
```

## Emitting Events
Any object serializable to JSON and binary data is supported
