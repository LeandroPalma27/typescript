"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villanos = 20;
    if (avengers < villanos) {
        console.log("Estamos malos.");
    }
    else {
        console.log("Estamos salvados.");
    }
    avengers = Number("10asd");
    console.log({ avengers: avengers });
})();
