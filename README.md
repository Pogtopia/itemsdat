# Items.dat Modifier
Items.dat reader/writer written purely with typescript.

## v2
v2 update introduces a lot of changes, such as the use of promises, and restructuring of the code.  
New Example Usage:
```js
const { ItemsDat } = require('itemsdat'),
  { readFileSync } = require('fs')

const file = readFileSync('/path/to/items.dat'),
  itemsDat = new ItemsDat(file)

itemsDat.decode()
.then(items => { /* do anything with the items */ })
```