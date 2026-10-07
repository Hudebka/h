const PISNICKY = [
    "valecna.txt"
];


/* ---------- Styl zpěvníku (celoobrazovkový "nová stránka" režim) ---------- */

(function () {
    const styl = document.createElement("style");
    styl.textContent = `
        #zpevnik {
            position: fixed;
            inset: 0;
            z-index: 100;
            background: #111;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }

        #zpevnik.otevira {
            animation: zpevnikVstup .25s ease;
        }

        @keyframes zpevnikVstup {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: none; }
        }

        .zpevnik-lista {
            position: sticky;
            top: 0;
            z-index: 1;
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 12px 16px;
            background: rgba(15, 15, 15, .96);
            border-bottom: 1px solid #333;
        }

        .zpevnik-lista .zpet {
            font: inherit;
            font-weight: bold;
            color: white;
            background: #e63946;
            border: none;
            border-radius: 30px;
            padding: 10px 20px;
            cursor: pointer;
        }

        .zpevnik-lista .zpet:hover {
            background: #ff4d5a;
        }

        .zpevnik-lista .stitek {
            color: #aaa;
        }

        #zpevnikObsah {
            max-width: 800px;
            margin: 0 auto;
            padding: 30px 20px 80px;
        }

        #zpevnikObsah h1 {
            margin: 0 0 8px;
        }

        #zpevnikObsah > p {
            margin: 0 0 24px;
            color: #aaa;
        }
    `;
    document.head.appendChild(styl);
})();


/* ---------- Načtení písničky z TXT ---------- */

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


/* ---------- Seznam písniček ---------- */

function vytvorKartu(pisnicka) {

    const karta = document.createElement("div");
    karta.className = "card";

    const ikona = document.createElement("div");
    ikona.className = "icon";
    ikona.textContent = "🎵";

    const nadpis = document.createElement("h3");
    nadpis.textContent = pisnicka.nazev;

    const autor = document.createElement("p");
    autor.textContent = pisnicka.autor;

    const tlacitko = document.createElement("button");
    tlacitko.className = "button";
    tlacitko.textContent = "Zobrazit zpěvník";
    tlacitko.addEventListener("click", () => zobrazZpevnik(pisnicka));

    karta.append(ikona, nadpis, autor, tlacitko);

    return karta;
}

function vytvorChybovouKartu(zprava) {

    const karta = document.createElement("div");
    karta.className = "card";

    const nadpis = document.createElement("h3");
    nadpis.textContent = "❌ Chyba";

    const text = document.createElement("p");
    text.textContent = zprava;

    karta.append(nadpis, text);

    return karta;
}

async function zobrazSeznam() {

    const seznam =
        document.getElementById("seznamPisnicek");

    if (!seznam) {
        console.error("CHYBÍ #seznamPisnicek V INDEX.HTML");
        return;
    }

    seznam.innerHTML = "";

    for (const soubor of PISNICKY) {

        try {

            const pisnicka = await nactiPisnicku(soubor);

            seznam.appendChild(vytvorKartu(pisnicka));

            console.log("Písnička načtena:", pisnicka);

        }
        catch (chyba) {

            console.error("CHYBA PÍSNIČKY:", chyba);

            seznam.appendChild(vytvorChybovouKartu(chyba.message));
        }
    }
}


/* ---------- Zpěvník jako samostatná obrazovka ---------- */

let zpevnikOtevren = false;

function zavriZpevnik(zHistorie) {

    if (!zpevnikOtevren) {
        return;
    }

    zpevnikOtevren = false;

    document.getElementById("zpevnik").style.display = "none";
    document.body.style.overflow = "";

    // Zavřeno tlačítkem / Esc: vrátíme i položku v historii prohlížeče,
    // ať tlačítko Zpět v prohlížeči nebo v telefonu nezůstane o krok pozadu.
    if (!zHistorie && history.state && history.state.zpevnik) {
        history.back();
    }
}

function zobrazZpevnik(pisnicka) {

    const okno =
        document.getElementById("zpevnik");

    const obsah =
        document.getElementById("zpevnikObsah");

    // Horní lišta s tlačítkem Zpět (vytvoří se jen jednou).
    if (!okno.querySelector(".zpevnik-lista")) {

        const lista = document.createElement("div");
        lista.className = "zpevnik-lista";

        const zpet = document.createElement("button");
        zpet.className = "zpet";
        zpet.textContent = "← Zpět";
        zpet.addEventListener("click", () => zavriZpevnik(false));

        const stitek = document.createElement("span");
        stitek.className = "stitek";
        stitek.textContent = "🎵 Zpěvník";

        lista.append(zpet, stitek);
        okno.insertBefore(lista, okno.firstChild);
    }

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

    // Otevření jako nová stránka: přes celou obrazovku, od začátku písničky.
    okno.style.display = "block";
    okno.scrollTop = 0;
    okno.classList.remove("otevira");
    void okno.offsetWidth;
    okno.classList.add("otevira");
    document.body.style.overflow = "hidden";

    if (!zpevnikOtevren) {
        history.pushState({ zpevnik: true }, "", "#zpevnik");
    }

    zpevnikOtevren = true;
}

window.addEventListener("popstate", () => zavriZpevnik(true));

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        zavriZpevnik(false);
    }
});


zobrazSeznam();
