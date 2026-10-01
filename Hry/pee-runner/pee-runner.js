async function spustitNejnovejsiPeeRunner() {
    let cislo = 0;
    let posledniFunkcni = null;
    let poctuNeexistujicichVRade = 0;
    const maxPrazdnychPokusu = 3; 

    while (true) {
        let cisloStr = String(cislo).padStart(3, '0');
        // Tady natvrdo říkáme: hledej ve velké složce Hry/pee-runner/
        let cesta = `Hry/pee-runner/pee-runner_${cisloStr}.html`; 
        
        try {
            let response = await fetch(cesta, { method: 'HEAD' });
            
            if (response.ok) {
                posledniFunkcni = cesta;
                poctuNeexistujicichVRade = 0;
                cislo++;
            } else {
                poctuNeexistujicichVRade++;
                cislo++;
                
                if (poctuNeexistujicichVRade >= maxPrazdnychPokusu) {
                    break;
                }
            }
        } catch (error) {
            break;
        }
    }

    if (posledniFunkcni) {
        window.location.href = posledniFunkcni;
    } else {
        alert("Žádná platná verze pee-runner nebyla nalezena!");
    }
}
