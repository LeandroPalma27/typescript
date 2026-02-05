"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}, ${lastName ?? 'Stark'}`;
    };
    const name = fullName("Leandro");
    console.log({ name });
})();
//# sourceMappingURL=args-required.js.map