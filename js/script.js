document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Formas apstrāde
    const travelForm = document.getElementById('travelForm');
    const resultArea = document.getElementById('resultArea');

    travelForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Aptur lapas pārlādi

        // Iegūstam vērtības no laukiem
        const name = document.getElementById('username').value;
        const email = document.getElementById('useremail').value;
        const country = document.getElementById('interest').value;
        const news = document.querySelector('input[name="news"]:checked').value;

        // JavaScript Datu apstrāde un attēlošana lapā
        resultArea.innerHTML = `
            <h3>Paldies par pieteikumu, ${name}!</h3>
            <p>Mēs esam saņēmuši Tavu ziņu par interesi apmeklēt <strong>${country}</strong>.</p>
            <p>Sīkāka informācija tiks nosūtīta uz e-pastu: <em>${email}</em>.</p>
            <p><small>Jaunumu saņemšana: ${news}</small></p>
        `;

        // Parādām rezultātu sadaļu
        resultArea.classList.remove('hidden');
        
        // Formas notīrīšana
        travelForm.reset();
        
        // Paziņojums (alert) kā papildus funkcija
        alert("Dati veiksmīgi apstrādāti!");
    });

    // 2. Galerijas interaktivitāte
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            // Izmanto JS, lai dinamiski mainītu stilu uz klikšķa
            img.style.border = "5px solid #3498db";
            console.log("Apskatīts attēls: " + img.alt);
        });
    });

    // 3. Konsoles ziņojums (darba pārbaudei)
    console.log("Skandināvijas vietne ir ielādēta un gatava darbam!");
});