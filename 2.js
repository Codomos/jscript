console.log("2.js");    // Path: 2.js   // How old are you? 
queueMicrotask(() => console.log("3.js"));    // Path: 3.js   // How old are you?
CountQueuingStrategy.prototype.size = () => 1;  // Path: 4.js   // How old are you?     