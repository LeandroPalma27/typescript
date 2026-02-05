"use strict";
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
//# sourceMappingURL=enum.js.map