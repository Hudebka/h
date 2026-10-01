async function spustitNejnovejsiPeeRunner() {
    let cislo = 0;
    let posledniFunkcni = null;
    let poctuNeexistujicichVRade = 0;
    
    // Pojistka: pokud narazí na 3 čísla za sebou, která neexistují, 
    // přestane dál zkoušet (ušetří to čas, když jsi např. u verze 015 a dál nic není).
    const maxPrazdnychPokusu = 3; 

    console.log("Hledám nejnovější verzi pee-runner...");

    while (true) {
        // Sestavíme přesný formát, který vyžaduješ
        let cisloStr = String(cislo).padStart(3, '0');
        let cesta = `pee-runner_${cisloStr}.html`; // např. pee-runner_000.html
        
        try {
            let response = await fetch(cesta, { method: 'HEAD' });
            
            if (response.ok) {
                posledniFunkcni = cesta;
                poctuNeexistujicichVRade = 0; // resetujeme počítadlo, našli jsme ho
                cislo++;
            } else {
                poctuNeexistujicichVRade++;
                cislo++;
                
                // Pokud už delší dobu nic dalšího neexistuje, končíme
                if (poctuNeexistujicichVRade >= maxPrazdnychPokusu) {
                    break;
                }
            }
        } catch (error) {
            break;
        }
    }

    // Pokud jsme našli alespoň jednu správnou verzi, jdeme do ní
    if (posledniFunkcni) {
        console.log(`Spouštím nejnovější verzi: ${posledniFunkcni}`);
        window.location.href = posledniFunkcni;
    } else {
        alert("Žádná platná verze pee-runner nebyla nalezena!");
    }
}
