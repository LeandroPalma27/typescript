"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName ?? "Stark"}`.toUpperCase();
        return `${firstName} ${lastName ?? "Stark"}`;
    };
    const name = fullName("Leandro", "Palma", true);
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}, ${lastName ?? 'Stark'}`;
    };
    const name = fullName("Leandro");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}, ${lastName ?? 'Stark'}`;
    };
    const name = fullName("Leandro");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restNames) => {
        return `${firstName} ${restNames.join(" ")}`;
    };
    console.log(fullName("Leandro", "Palma", "Alvarado", "Martin"));
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}!`;
    const saveTheWorld = () => "El mundo esta salvado!";
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'SpiderMan';
    function returnName() {
        return hero;
    }
    const activarMensaje = () => {
        return 'hola';
    };
    console.log(typeof activarMensaje);
    const mensaje = activarMensaje();
})();
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
(() => {
    let customVariable = "Leandro";
    console.log(typeof customVariable);
    customVariable = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed"],
    };
    console.log(typeof customVariable);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villanos = ['Doctor Octopus', 'Duende Verde'];
    villanos.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isBatman = true && false;
    console.log({ isBatman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["one"] = 1] = "one";
        AudioLevel[AudioLevel["two"] = 2] = "two";
        AudioLevel[AudioLevel["three"] = 3] = "three";
        AudioLevel[AudioLevel["four"] = 4] = "four";
        AudioLevel[AudioLevel["five"] = 5] = "five";
        AudioLevel[AudioLevel["six"] = 6] = "six";
        AudioLevel[AudioLevel["seven"] = 7] = "seven";
        AudioLevel[AudioLevel["eight"] = 8] = "eight";
        AudioLevel[AudioLevel["nine"] = 9] = "nine";
        AudioLevel[AudioLevel["ten"] = 10] = "ten";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.ten;
    let currentAudioLevel2 = 10;
    console.log(currentAudioLevel);
    console.log(currentAudioLevel2);
    console.log(AudioLevel);
})();
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
(() => {
    let nada = undefined;
    let isActive = true;
    console.log(nada);
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villanos = 20;
    if (avengers < villanos) {
        console.log("Estamos malos.");
    }
    else {
        console.log("Estamos salvados.");
    }
    avengers = Number("10asd");
    console.log({ avengers });
})();
(() => {
    const batman = 'Batman';
    const greenLatern = 'Linterna verde';
    const volcanNegro = `Heroe: Linterna verde`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || "No hay un 10mo caracter.");
})();
(() => {
    const heroes = ['Spiderman', 1, true];
    console.log(heroes);
    heroes[0] = 'Ironman';
    heroes[1] = 2;
    heroes[2] = false;
    console.log(heroes);
})();
(() => {
    function callBatman() {
        return 'xd';
    }
    const updateUser = () => {
        return { name: 'Leandro' };
    };
    const response = callBatman();
    const response2 = updateUser();
    console.log(response);
    console.log(response2.name);
})();
//# sourceMappingURL=main.js.map