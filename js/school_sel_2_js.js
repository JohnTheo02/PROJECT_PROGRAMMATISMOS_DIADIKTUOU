

document.addEventListener("DOMContentLoaded", function() {
    // Προσθήκη event listener σε όλα τα στοιχεία με κλάση nav_link
    var navLinks = document.querySelectorAll('.nav_link');
    const Menu = document.querySelector(".fa-bars");
    const nav = document.querySelector(".nav");
    var mainContainer = document.querySelector('.main');
    nav.classList.toggle("active");

    
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            // Καθαρίζουμε το περιεχόμενο του image-container
            var imageContainer = document.querySelector('.image-container');
            
            imageContainer.innerHTML = '';
            
            // Παίρνουμε το κείμενο του επιλεγμένου στοιχείου
            var selectedText = this.textContent;

            // Δημιουργούμε το νέο περιεχόμενο για το image-container
            switch(selectedText) {
                case 'Ανθρωπιστικών και Κοινωνικών Επιστημών':
                    addImages(['photos/anthrwpistikwn/epistekp_kai_koin.png','photos/anthrwpistikwn/epistekp_prosx.png','photos/anthrwpistikwn/history.png', 'photos/anthrwpistikwn/philology.png', 'photos/anthrwpistikwn/philosophy.png', 'photos/anthrwpistikwn/theatrikwn.png'],
                ['Τμήμα Επιστημών της Εκπαίδευσης και Κοινωνικής Εργασίας', 'Τμήμα Επιστημών της Εκπαίδευσης και της Αγωγής στην Προσχολική Ηλικία', 'Τμήμα Θεατρικών Σπουδών', 'Τμήμα Ιστορίας-Αρχαιολογίας', 'Τμήμα Φιλολογίας', 'Τμήμα Φιλοσοφίας' ]);
                    nav.classList.remove('active');
                    break;
                case 'Γεωπονικών Επιστημών':
                    addImages(['photos/geoponia/aeiforikh_geoponia.png', 'photos/geoponia/epistimh_trofhmwn.png', 'photos/geoponia/geoponia.png', 'photos/geoponia/udatokalliergeia.png'], 
                ['Τμήμα Αειφορικής Γεωργία', 'Τμήμα Επιστήμης και Τεχνολογίας Τροφίμων', 'Τμήμα Γεωπονίας', 'Τμήμα Αλιείας και Υδατοκαλλιεργειών']);
                    nav.classList.remove('active');
                    break;
                case 'Επιστημών Αποκατάστασης Υγείας':
                    addImages(['photos/apokatastash_ugeias/fusikotherapeia.png', 'photos/apokatastash_ugeias/logotherapeia.png', 'photos/apokatastash_ugeias/noshleutikh.png'],
                ['Τμήμα Φυσικοθεραπείας', 'Τμήμα Λογοθεραπείας', 'Τμήμα Νοσηλευτικής']);
                    nav.classList.remove('active');
                    break;
                case 'Επιστημών Υγείας':
                    addImages(['photos/ugeias/iatrikh.png', 'photos/ugeias/pharmacy.png'], ['Τμήμα Ιατρικής', 'Τμήμα Φαρμακευτικής']);
                    nav.classList.remove('active');
                    break;
                case 'Θετικών Επιστημών':
                    addImages(['photos/thetikwn/biology.png', 'photos/thetikwn/maths.png', 'photos/thetikwn/geologia.png', 'photos/thetikwn/physics.png', 'photos/thetikwn/epistimh_ulikwn.png', 'photos/thetikwn/chemistry.png'],
                    ['Τμήμα Βιολογίας','Τμήμα Μαθηματικών', 'Τμήμα Γεωλογίας', 'Τμήμα Φυσικής', 'Τμήμα Επιστήμης των Υλικών', 'Τμήμα Χημείας']);
                    nav.classList.remove('active');
                    break;
                case 'Οικονομικών Επιστημών και Διοίκησης Επιχειρήσεων':
                    addImages(['photos/oikonomikwn_episthmwn_kai_texnologias/dioikhsh_epix.png', 'photos/oikonomikwn_episthmwn_kai_texnologias/dioikhsh_tourismou.png', 'photos/oikonomikwn_episthmwn_kai_texnologias/dioikhtikh_ep.png', 'photos/oikonomikwn_episthmwn_kai_texnologias/oikonikwn_episthmwn.png'], 
                    ['Τμήμα Διοίκησης Επιχειρήσεων','Τμήμα Διοίκησης Τουρισμού', 'Τμήμα Διοικητικής Επιστήμης και Τεχνολογίας', 'Τμήμα Οικονομικών Επιστημών']);
                    nav.classList.remove('active');
                    break;
                case 'Πολυτεχνική Σχολή':
                    addImages(['photos/polutexnikh/architecture.png', 'photos/polutexnikh/chemical_enginear.png', 'photos/polutexnikh/ece.png', 'photos/polutexnikh/mhx_hl_upolog.png', 'photos/polutexnikh/mhx_kai_aeronauphgwn.png', 'photos/polutexnikh/politikwn.png'],
                    ['Τμήμα Αρχιτεκτόνων Μηχανικών','Τμήμα Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών', 'Τμήμα Μηχανικών Ηλεκτρονικών Υπολογιστών και Πληροφορικής', 'Τμήμα Μηχανολόγων και Αεροναυπηγών Μηχανικών', 'Τμήμα Πολιτικών Μηχανικών', 'Τμήμα Χημικών Μηχανικών'] );
                    nav.classList.remove('active');
                    break;
                default:
                    // Αν δεν υπάρχει αντιστοίχιση, δεν κάνουμε τίποτα
                    break;
            }
            
        });
        Menu.addEventListener("click", () => {
            nav.classList.toggle("active")
        });
    
    });
});

// Συνάρτηση που προσθέτει εικόνες στο image-container
function addImages(imageArray, textArray) {
    var imageContainer = document.querySelector('.image-container');

    imageArray.forEach(function(imageSrc, index) {
        var imgContainer = document.createElement('a');
        imgContainer.style.border = '1px solid black'
        imgContainer.setAttribute('href', 'main.html');
        imgContainer.classList.add('img', 'img' + (index + 1));

        var img = document.createElement('img');
        img.setAttribute('src', imageSrc);
        img.setAttribute('alt', 'Image ' + (index + 1));

        var paragraph = document.createElement('p');
        var strong = document.createElement('strong');
        strong.textContent = textArray[index];
        paragraph.appendChild(strong);

        imgContainer.appendChild(img);
        imgContainer.appendChild(paragraph);
        imageContainer.appendChild(imgContainer);
    });
}
