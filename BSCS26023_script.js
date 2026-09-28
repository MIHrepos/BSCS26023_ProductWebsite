window.onload = function () {
    alert("Welcome to the Crikut OPF website.");
};
document.getElementById("year").textContent = new Date().getFullYear();
function showStock(stockId) {
    var stock = document.getElementById(stockId);
    if (stock.style.display === "none") {
        stock.style.display = "inline";
    } else {
        stock.style.display = "none";
    }
}