// Initialiser EmailJS
(function () {
    emailjs.init("ES8gTJ_TtiZhiQMb8");
})();

document.getElementById('reserve').onclick = function (event) {
    event.preventDefault();

    const form = document.forms['reservation'];
    const nom = form.nom.value.trim();
    const email = form.email.value.trim();
    const phone = form.numero.value.trim();
    const salle = form.salle_type.value;
    const date = form.date.value;

    if (!nom || !email || !phone || !salle || !date) {
        alert("Veuillez remplir tous les champs !");
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("Adresse e-mail incorrecte !");
        return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Le numéro doit contenir exactement 10 chiffres !");
        return false;
    }

    emailjs.send("service_a5f74cr", "template_zw84908", {
        nom: nom,
        email: email,
        numero: phone,
        salle_type: salle,
        date: date
    }).then(function () {
        alert("Formulaire envoyé avec succès ! Vous recevrez un appel de confirmation.");
        form.reset();
    }, function (error) {
        alert("Échec de l'envoi : " + JSON.stringify(error));
    });

    return true;
};
