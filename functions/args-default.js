"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName ?? "Stark"}`.toUpperCase();
        return `${firstName} ${lastName ?? "Stark"}`;
    };
    const name = fullName("Leandro", "Palma", true);
    console.log(name);
})();
//# sourceMappingURL=args-default.js.map