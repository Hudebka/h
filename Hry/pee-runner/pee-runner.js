async function spustitNejnovejsiPeeRunner(slozce = '') {
    let cislo = 0;
    let posledniFunkcni = null;
    let poctuNeexistujicichVRade = 0;
    const maxPrazdnychPokusu = 3; 

    console.log("Hledám nejnovější verzi pee-runner...");

    while (true) {
        let cisloStr = String(cislo).padStart(3, '0');
        // Tady se složka složí dohromady (např. "Hry/pee-runner/pee-runner_000.html")
        let cesta = `${slozce}pee-runner_${cisloStr}.html`; 
        
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
        console.log(`Spouštím nejnovější verzi: ${posledniFunkcni}`);
        window.location.href = posledniFunkcni;
    } else {
        alert("Žádná platná verze pee-runner nebyla nalezena!");
    }
}
