(() => {
    const batman: string = 'Batman';
    const greenLatern: string = 'Linterna verde';
    const volcanNegro: string = `Heroe: Linterna verde`;

    console.log(`I'm ${batman}`);

    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || "No hay un 10mo caracter.");
})();