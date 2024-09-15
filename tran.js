function filterTransactions() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const statusFilter = document.getElementById("status-filter").value;
    const methodFilter = document.getElementById("method-filter").value;
    const dateFilter = document.getElementById("date-filter").value;
    const minAmount = parseFloat(document.getElementById("min-amount").value) || 0;
    const maxAmount = parseFloat(document.getElementById("max-amount").value) || Infinity;
    const typeFilter = document.getElementById("type-filter").value;

    const transactions = document.querySelectorAll(".transaction");

    transactions.forEach(transaction => {
        const transactionStatus = transaction.getAttribute("data-status");
        const transactionMethod = transaction.getAttribute("data-method");
        const transactionDate = transaction.getAttribute("data-date");
        const transactionAmount = parseFloat(transaction.getAttribute("data-amount"));
        const transactionType = transaction.getAttribute("data-type");
        const transactionText = transaction.innerText.toLowerCase();

        let isVisible = true;

        // Filter by search term
        if (searchTerm && !transactionText.includes(searchTerm)) {
            isVisible = false;
        }

        // Filter by status
        if (statusFilter !== "all" && transactionStatus !== statusFilter) {
            isVisible = false;
        }

        // Filter by payment method
        if (methodFilter !== "all" && transactionMethod !== methodFilter) {
            isVisible = false;
        }

        // Filter by date
        if (dateFilter && transactionDate !== dateFilter) {
            isVisible = false;
        }

        // Filter by amount
        if (transactionAmount < minAmount || transactionAmount > maxAmount) {
            isVisible = false;
        }

        // Filter by payment type
        if (typeFilter !== "all" && transactionType !== typeFilter) {
            isVisible = false;
        }

        transaction.style.display = isVisible ? "block" : "none";
    });
}
