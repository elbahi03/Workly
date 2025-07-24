document.getElementById('reserve').onclick = function (event) {

    event.preventDefault();

    const form = document.reservation;
    const email = form.email.value;
    const phone = form.numero.value;

    if (!form.nom.value || !email || !phone || !form.date.value) {
        alert("Veuillez remplir tous les champs !");
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("Adresse e-mail incorrecte !");
        return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Le numéro doit contenir 10 chiffres !");
        return false;
    }

    alert('Formulaire validé ! Vous recevrez un appel de confirmation.');
    return true;

}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_a5f74cr", "template_zw84908", this)
        .then(function () {
            alert("Email sent successfully!");
        }, function (error) {
            alert("Failed to send email: " + JSON.stringify(error));
        });
});