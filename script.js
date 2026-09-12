function searchTransport() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
function showMessage() {
    document.getElementById("message").innerText =
        "All college buses are operating according to the scheduled timings.";
}