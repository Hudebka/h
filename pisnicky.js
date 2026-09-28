
const PISNICKY = [
    "valecna.txt"
];


async function nactiPisnicku(soubor) {

    const odpoved = await fetch("pisnicky/" + soubor);

    if (!odpoved.ok) {
        throw new Error(
            "TXT se nepodařilo načíst: " + soubor
        );
    }

    const text = await odpoved.text();

    const radky = text
        .replace(/\r/g, "")
        .split("\n");

    let nazev = "Bez názvu";
    let autor = "";

    for (const radek of radky) {

        if (radek.startsWith("NÁZEV:")) {
            nazev = radek.substring(6).trim();
        }

        if (radek.startsWith("AUTOR:")) {
            autor = radek.substring(6).trim();
        }
    }

    return {
        nazev: nazev,
        autor: autor,
        radky: radky
    };
}


async function zobrazSeznam() {

    const seznam =
        document.getElementById("seznamPisnicek");

    if (!seznam) {
        console.error("CHYBÍ #seznamPisnicek V INDEX.HTML");
        return;
    }

    seznam.innerHTML = "";

    try {

        const pisnicka =
            await nactiPisnicku("valecna.txt");

        const karta =
            document.createElement("div");

        karta.className = "card";

        karta.innerHTML = `
            <div class="icon">🎵</div>

            <h3>${pisnicka.nazev}</h3>

            <p>${pisnicka.autor}</p>

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

        console.log("Písnička načtena:", pisnicka);

    }
    catch (chyba) {

        console.error("CHYBA PÍSNIČKY:", chyba);

        seznam.innerHTML = `
            <div class="card">
                <h3>❌ Chyba</h3>
                <p>${chyba.message}</p>
            </div>
        `;
    }
}


function zobrazZpevnik(pisnicka) {

    const okno =
        document.getElementById("zpevnik");

    const obsah =
        document.getElementById("zpevnikObsah");

    obsah.innerHTML = "";

    const h1 =
        document.createElement("h1");

    h1.textContent =
        pisnicka.nazev;

    obsah.appendChild(h1);


    if (pisnicka.autor) {

        const autor =
            document.createElement("p");

        autor.textContent =
            pisnicka.autor;

        obsah.appendChild(autor);
    }


    const karta =
        document.createElement("div");

    karta.className = "card";


    const text =
        document.createElement("div");

    text.style.whiteSpace = "pre-wrap";
    text.style.fontFamily = "monospace";
    text.style.lineHeight = "1.6";


    for (const radek of pisnicka.radky) {

        if (
            radek.startsWith("NÁZEV:") ||
            radek.startsWith("AUTOR:")
        ) {
            continue;
        }

        const radekElement =
            document.createElement("div");

        radekElement.textContent = radek;

        text.appendChild(radekElement);
    }


    karta.appendChild(text);
    obsah.appendChild(karta);

    okno.style.display = "block";

    okno.scrollIntoView({
        behavior: "smooth"
    });
}


zobrazSeznam();

