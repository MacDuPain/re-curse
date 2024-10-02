function analyserListe(chiffres) {
    let chiffresEnregistres = [];

    for (let i = 0; i < chiffres.length; i++) {
        if (i === chiffres.length - 1 || chiffres[i] > chiffres[i + 1]) {
            chiffresEnregistres.push(chiffres[i]);
        }
    }

    return chiffresEnregistres.length;
}

const liste1 = [3, 8, 1, 5, 4, 9];

console.log(analyserListe(liste1));