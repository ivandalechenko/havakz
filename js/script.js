var language = window.navigator ? (window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage) : "en";
language = language.substr(0, 2).toLowerCase();

var who_we_are = document.getElementById("who_we_are");
var count_clients = document.getElementById("count_clients");
var how_much_you_need = document.getElementById("how_much_you_need");
var sum1 = document.getElementById("sum1");
var sum2 = document.getElementById("sum2");
var sum3 = document.getElementById("sum3");
var sum4 = document.getElementById("sum4");
var footer = document.getElementById("footer");



switch (language) {
    case "de":
        who_we_are.innerHTML = 'Finanzunternehmen Nr. 1 in Kasachstan';
        count_clients.innerHTML = 'Mehr als 420.000 zufriedene Kunden';
        how_much_you_need.innerHTML = 'Wie viel brauchen Sie jetzt?';
        sum1.innerHTML = '€100 - €999';
        sum2.innerHTML = '€1,000 - €9,999';
        sum3.innerHTML = '€10,000 - €29,999';
        sum4.innerHTML = '€30,000 - €100,000';
        footer.innerHTML = "Hava.kz – Kurzfristige Kredite. Die Kreditsumme liegt zwischen 100 und 100.000 Euro, die Kreditlaufzeit beträgt 10 bis 30 Tage";
        break;

    case "fr":
        who_we_are.innerHTML = 'Société financière №1 au Kazakhstan';
        count_clients.innerHTML = 'Plus de 420 000 clients satisfaits';
        how_much_you_need.innerHTML = 'De combien avez-vous besoin maintenant ?';
        sum1.innerHTML = '€100 - €999';
        sum2.innerHTML = '€1,000 - €9,999';
        sum3.innerHTML = '€10,000 - €29,999';
        sum4.innerHTML = '€30,000 - €100,000';
        footer.innerHTML = "Hava.kz – Prêts à court terme. Le montant du prêt est compris entre 100 et 100 000 euros, la durée du prêt est de 10 à 30 jours";
        break;

    case "it":
        who_we_are.innerHTML = 'Società finanziaria №1 in Kazakistan';
        count_clients.innerHTML = 'Più di 420 mila clienti soddisfatti';
        how_much_you_need.innerHTML = 'Quanto ti serve ora?';
        sum1.innerHTML = '€100 - €999';
        sum2.innerHTML = '€1,000 - €9,999';
        sum3.innerHTML = '€10,000 - €29,999';
        sum4.innerHTML = '€30,000 - €100,000';
        footer.innerHTML = "Hava.kz – Prestiti a breve termine. L'importo del prestito è compreso tra 100 e 100.000 euro, la durata del prestito è compresa tra 10 e 30 giorni";
        break;

    case "nl":
        who_we_are.innerHTML = 'Financieel bedrijf №1 in Kazachstan';
        count_clients.innerHTML = 'More than 420 thousand satisfied customers';
        how_much_you_need.innerHTML = 'Hoeveel heb je nu nodig?';
        sum1.innerHTML = '€100 - €999';
        sum2.innerHTML = '€1,000 - €9,999';
        sum3.innerHTML = '€10,000 - €29,999';
        sum4.innerHTML = '€30,000 - €100,000';
        footer.innerHTML = "Hava.kz - Kortlopende leningen. Het leenbedrag ligt tussen de 100 en 100.000 euro, de leentermijn is 10 tot 30 dagen";
        break;
}