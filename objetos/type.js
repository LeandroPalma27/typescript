"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed"],
    };
    let superman = {
        name: "Clark Kent",
        age: 32,
        powers: ["Strenght"],
        getName() {
            return "HOLA";
        }
    };
    console.log(flash.getName?.());
})();
//# sourceMappingURL=type.js.map