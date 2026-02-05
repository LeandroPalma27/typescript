"use strict";
(() => {
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('Fallo');
    console.log('xd');
})();
//# sourceMappingURL=never.js.map