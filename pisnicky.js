```javascript
/*
    HUDebka – automatický zpěvník

    Písničky jsou uložené jako TXT soubory v:
    /pisnicky/

    Formát TXT:

    NÁZEV: Válečná
    AUTOR: Alda

    1.
    Am                 G
    Za kouřovou clonou při rachotu děl
    Em                 Am
    odehrávají se zvěrstva co svět neviděl

    R.
    Am
    Tak nebuďte uražení
    G
    nehrajte si na kněze
*/


/* =========================================
   SEZNAM PÍSNIČEK
   ========================================= */

const PISNICKY = [
    "valecna.txt",
    "maruska.txt"
];


/* =========================================
   NAČTENÍ TXT
   ========================================= */

async function nactiPisnicku(soubor) {

    const odpoved = await fetch(
        "pisnicky/" + soubor
    );

    if (!odpoved.ok) {
        throw new Error(
            "Nepodařilo se načíst " + soubor
        );
    }

    const text = await odpoved.text();

    return zpracujPisnicku(text);
}


/* =========================================
   ZPRACOVÁNÍ TXT
   ========================================= */

function zpracujPisnicku(text) {

    const radky = text
        .replace(/\r/g, "")
        .split("\n");


    let nazev = "Bez názvu";
    let autor = "";


    /* -------------------------
       NÁZEV A AUTOR
       ------------------------- */

    for (const radek of radky) {

        if (radek.startsWith("NÁZEV:")) {
            nazev = radek
                .substring(6)
                .trim();
        }

        if (radek.startsWith("AUTOR:")) {
            autor = radek
                .substring(6)
                .trim();
        }

    }


    return {
        nazev: nazev,
        autor: autor,
        radky: radky
    };
}


/* =========================================
   VYKRESLENÍ SEZNAMU PÍSNIČEK
   ========================================= */

async function zobrazSeznam() {

    const seznam =
        document.getElementById("seznamPisnicek");

    if (!seznam) return;


    seznam.innerHTML = "";


    for (const soubor of PISNICKY) {

        try {

            const pisnicka =
                await nactiPisnicku(soubor);


            const karta =
                document.createElement("div");

            karta.className = "card";


            karta.innerHTML = `
                <div class="icon">🎵</div>

                <h3>${escapeHTML(pisnicka.nazev)}</h3>

                <p>
                    ${escapeHTML(pisnicka.autor)}
                </p>

                <button class="button">
                    Zobrazit zpěvník
                </button>
            `;


            karta
                .querySelector("button")
                .addEventListener(
                    "click",
                    () => zobrazZpevnik(pisnicka)
                );


            seznam.appendChild(karta);

        }

        catch (chyba) {

            console.error(chyba);

        }

    }

}


/* =========================================
   ZOBRAZENÍ ZPĚVNÍKU
   ========================================= */

function zobrazZpevnik(pisnicka) {

    const okno =
        document.getElementById("zpevnik");

    const obsah =
        document.getElementById("zpevnikObsah");


    obsah.innerHTML = "";


    /* NÁZEV */

    const h1 =
        document.createElement("h1");

    h1.textContent =
        pisnicka.nazev;

    obsah.appendChild(h1);


    /* AUTOR */

    if (pisnicka.autor) {

        const autor =
            document.createElement("div");

        autor.className = "subtitle";

        autor.textContent =
            pisnicka.autor;

        obsah.appendChild(autor);

    }


    /* KARTA */

    const karta =
        document.createElement("div");

    karta.className = "song";


    const text =
        document.createElement("div");

    text.className = "song-text";


    /* ZPRACOVÁNÍ ŘÁDKŮ */

    for (let i = 0; i < pisnicka.radky.length; i++) {

        const radek =
            pisnicka.radky[i];


        /* NÁZEV / AUTOR */

        if (
            radek.startsWith("NÁZEV:") ||
            radek.startsWith("AUTOR:")
        ) {
            continue;
        }


        /* PRÁZDNÝ ŘÁDEK */

        if (radek.trim() === "") {

            text.appendChild(
                document.createElement("br")
            );

            continue;

        }


        /* SLOKA */

        if (/^\d+\.$/.test(radek.trim())) {

            const sloka =
                document.createElement("span");

            sloka.className = "refren";

            sloka.textContent =
                radek.trim();

            text.appendChild(sloka);

            text.appendChild(
                document.createElement("br")
            );

            continue;

        }


        /* REFREN */

        if (
            radek.trim() === "R." ||
            radek.trim() === "R"
        ) {

            const refren =
                document.createElement("span");

            refren.className = "refren";

            refren.textContent = "R.";

            text.appendChild(refren);

            text.appendChild(
                document.createElement("br")
            );

            continue;

        }


        /* AKORD */

        if (jeAkordovyRadek(radek)) {

            const akord =
                document.createElement("span");

            akord.className = "chord";

            akord.textContent =
                radek;

            text.appendChild(akord);

            text.appendChild(
                document.createElement("br")
            );

            continue;

        }


        /* OBYČEJNÝ TEXT */

        const textRadek =
            document.createElement("span");

        textRadek.className =
            "lyrics-line";

        textRadek.textContent =
            radek;


        text.appendChild(textRadek);

        text.appendChild(
            document.createElement("br")
        );

    }


    karta.appendChild(text);

    obsah.appendChild(karta);


    /* ZOBRAZIT */

    okno.style.display = "block";

    okno.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   POZNÁNÍ AKORDOVÉHO ŘÁDKU
   ========================================= */

function jeAkordovyRadek(radek) {

    const cisty =
        radek.trim();

    if (!cisty) return false;


    const akordy =
        cisty.split(/\s+/);


    const povolene =
        /^(A|B|C|D|E|F|G)(#|b)?(m|maj|mi|dim|aug|sus|7|maj7|m7|6|9)?$/;


    return akordy.every(
        akord => povolene.test(akord)
    );

}


/* =========================================
   BEZPEČNÝ TEXT
   ========================================= */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================
   START
   ========================================= */

zobrazSeznam();
```
