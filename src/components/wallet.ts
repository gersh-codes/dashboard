interface Transaction {
    description: string;
    amount: number;
    date: string;
  }
  
  function updateWallet(totalEarnings: number, transactions: Transaction[]) {
    const walletBalance = document.getElementById("wallet-balance");
    const transactionHistory = document.getElementById("transaction-history ul");
  
    if (walletBalance) {
        walletBalance.querySelector("p")!.textContent = `Total Earnings: $${totalEarnings.toFixed(2)}`;
    }
  
    if (transactionHistory) {
        transactionHistory.innerHTML = ""; // Clear existing transactions
        transactions.forEach(transaction => {
            const li = document.createElement("li");
            li.textContent = `${transaction.description} - $${transaction.amount.toFixed(2)} - ${transaction.date}`;
            transactionHistory.appendChild(li);
        });
    }
  }
  
  // Example data
  const earnings = 4567.04;
  const transactions: Transaction[] = [
    { description: "Appointment", amount: 100, date: "May 6, 2022" },
    { description: "Appointment", amount: 150, date: "May 5, 2022" }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    updateWallet(earnings, transactions);
  });
  