"use strict";
(() => {
    const fullName = (firstName, ...restNames) => {
        return `${firstName} ${restNames.join(" ")}`;
    };
    console.log(fullName("Leandro", "Palma", "Alvarado", "Martin"));
})();
//# sourceMappingURL=args-rest.js.map