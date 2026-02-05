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
    };
    console.log(flash);
    console.log(superman);
    console.log(flash.getName?.() || "No hay funcion");
})();
//# sourceMappingURL=objects.js.map