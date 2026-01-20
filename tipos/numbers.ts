(() => {
    let avengers: number = 10;
    console.log(avengers);
    const villanos: number = 20;

    if (avengers < villanos) {
        console.log("Estamos malos.");
    } else {
        console.log("Estamos salvados.");
    }

    avengers = Number("10asd");
    console.log({ avengers });
})();