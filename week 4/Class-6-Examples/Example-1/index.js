function globalThis() {
  console.log(this);
}

let testObj = {
  name: "test",
  objThis: function () {
    console.log(this);
  },
  arrowThis: () => {
    console.log(this);
  },
};

// Window {window: Window, self: Window, document: document, name: '', globalThis: ƒ, …}
// undefined
// testObj.objThis()
// index.js:8 {name: 'test', objThis: ƒ, arrowThis: ƒ}
// undefined
// testObj.arrowThis()
// index.js:11 Window {window: Window, self: Window, document: document, name: '', globalThis: ƒ, …}
