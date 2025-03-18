document.addEventListener("DOMContentLoaded", function() {
    // 1. Form Doğrulama
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Boş alan kontrolü
        if (!name || !email || !message) {
            alert("Lütfen tüm alanları doldurduğunuzdan emin olun.");
            event.preventDefault();  // Form gönderimini engeller
        } else {
            alert("Form başarıyla gönderildi!");
        }
    });

    // 2. Hizmet Filtreleme
    const serviceSelect = document.getElementById("serviceSelect");
    const serviceCards = document.querySelectorAll(".service-card");

    serviceSelect.addEventListener("change", function() {
        const selectedValue = serviceSelect.value;

        serviceCards.forEach(function(card) {
            if (selectedValue === "all" || card.getAttribute("data-category") === selectedValue) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

