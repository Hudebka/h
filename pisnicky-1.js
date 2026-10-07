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

        /* Text písničky: řádky se nikdy nezalamují, aby akordy zůstaly přesně nad slabikami. */
        .zp-text {
            display: inline-block;
            min-width: 100%;
            font-family: monospace;
            font-size: 16px;
            line-height: 1.45;
        }

        .zp-radek {
            white-space: pre;
        }

        .zp-akordy {
            margin-top: .8em;
            color: #ffd166;
            font-weight: bold;
        }

        .zp-akordy:first-child {
            margin-top: 0;
        }

        .zp-akordy .zp-dopln {
            color: #8a8a8a;
            font-weight: normal;
        }

        .zp-prazdny {
            height: .9em;
        }

        .zp-znacka {
            color: #ff6b78;
            font-weight: bold;
        }

        .zp-sekce {
            margin-top: 1.2em;
            color: #ff6b78;
            font-weight: bold;
        }

        .zp-sekce:first-child {
            margin-top: 0;
        }

        #zpevnikObsah .card.zp-karta {
            overflow-x: auto;
        }

        @media (max-width: 600px) {
            #zpevnikObsah {
                padding: 20px 10px 60px;
            }

            #zpevnikObsah .card.zp-karta {
                padding: 14px 10px;
            }
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

/* ---------- Rozpoznání akordů a značek (1., 2., R. ...) ---------- */

// Akord: A-H, případně #/b, moll/dur/sus/add/dim/aug, čísla a basový tón (C/G).
const AKORD = /^[A-H][#b]?(?:is|es)?(?:m|mi|min|maj|dim|aug|sus|add|M|\+|-|°|\d|\/[A-H][#b]?)*$/;

// Doplňky v akordové řádce: opakování a taktové čáry (x2, 2x, |, :|| ...).
const DOPLNEK = /^(?:[|:]+|[x×]\d+|\d+[x×]|[-–\/%.]+)$/;

// Značka na začátku textového řádku: 1.  2.  R.  R2.  B.  Refrén:  Intro: ...
const ZNACKA = /^(\s*)((?:\d+|[RB]\d*)\.|(?:Ref(?:rén)?|Bridge|Sloka|Intro|Outro|Coda|Mezihra|Předehra|Dohra)[.:]?)(?=\s|$)/i;

function jeAkord(token) {
    return AKORD.test(token.replace(/^[(\[]+|[)\]]+$/g, ""));
}

function jeAkordovyRadek(radek) {

    const tokeny = radek.trim().split(/\s+/).filter(Boolean);

    if (tokeny.length === 0) {
        return false;
    }

    let akordu = 0;

    for (const token of tokeny) {

        if (jeAkord(token)) {
            akordu++;
        }
        else if (!DOPLNEK.test(token)) {
            return false;
        }
    }

    return akordu > 0;
}

function vytvorRadek(radek) {

    const div = document.createElement("div");

    // Prázdný řádek = mezera mezi částmi písničky.
    if (radek.trim() === "") {
        div.className = "zp-radek zp-prazdny";
        return div;
    }

    // Samostatná značka: [Refrén] nebo "Refrén:" na vlastním řádku.
    const hranate = radek.match(/^\s*\[(.+)\]\s*$/);
    const sama = radek.match(ZNACKA);

    if (hranate || (sama && radek.trim() === sama[2])) {
        div.className = "zp-radek zp-sekce";
        div.textContent = radek;
        return div;
    }

    // Akordový řádek: akordy zvýrazněné, mezery zůstanou beze změny (kvůli zarovnání).
    if (jeAkordovyRadek(radek)) {

        div.className = "zp-radek zp-akordy";

        for (const cast of radek.split(/(\s+)/)) {

            if (cast === "") {
                continue;
            }

            if (/^\s+$/.test(cast)) {
                div.appendChild(document.createTextNode(cast));
                continue;
            }

            const span = document.createElement("span");
            span.textContent = cast;

            if (!jeAkord(cast)) {
                span.className = "zp-dopln";
            }

            div.appendChild(span);
        }

        return div;
    }

    // Textový řádek: případná značka (1., R. ...) se vybarví, text zůstane na svém místě.
    div.className = "zp-radek";

    if (sama) {

        div.appendChild(document.createTextNode(sama[1]));

        const znacka = document.createElement("span");
        znacka.className = "zp-znacka";
        znacka.textContent = sama[2];
        div.appendChild(znacka);

        div.appendChild(document.createTextNode(radek.substring(sama[0].length)));
    }
    else {
        div.textContent = radek;
    }

    return div;
}


/* ---------- Přizpůsobení velikosti písma šířce displeje ---------- */

const ZP_ZAKLAD = 16;   // největší velikost písma (px)
const ZP_MIN = 10;      // menší už se nezmenšuje, raději se text dá posouvat do stran

function prizpusobVelikost() {

    if (!zpevnikOtevren) {
        return;
    }

    const text = document.querySelector("#zpevnikObsah .zp-text");
    const karta = document.querySelector("#zpevnikObsah .zp-karta");

    if (!text || !karta) {
        return;
    }

    const styl = getComputedStyle(karta);
    const dostupna =
        karta.clientWidth
        - parseFloat(styl.paddingLeft)
        - parseFloat(styl.paddingRight);

    text.style.minWidth = "0";
    text.style.fontSize = ZP_ZAKLAD + "px";

    const potrebna = text.getBoundingClientRect().width;

    let velikost = ZP_ZAKLAD;

    if (potrebna > dostupna && potrebna > 0) {
        velikost = Math.max(ZP_MIN, Math.floor(ZP_ZAKLAD * dostupna / potrebna * 10) / 10);
    }

    text.style.fontSize = velikost + "px";
    text.style.minWidth = "";
}

window.addEventListener("resize", prizpusobVelikost);


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

    karta.className = "card zp-karta";


    const text =
        document.createElement("div");

    text.className = "zp-text";


    for (const radek of pisnicka.radky) {

        if (
            radek.startsWith("NÁZEV:") ||
            radek.startsWith("AUTOR:")
        ) {
            continue;
        }

        text.appendChild(vytvorRadek(radek));
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

    prizpusobVelikost();
}

window.addEventListener("popstate", () => zavriZpevnik(true));

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        zavriZpevnik(false);
    }
});


zobrazSeznam();
