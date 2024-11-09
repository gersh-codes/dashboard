import { createSidebar } from ".src/components/sidebar.ts";
import { renderAppointmentChart } from ".src/components/dashboard.ts";
import { updateWallet } from ".src/components/wallet.ts";

document.addEventListener("DOMContentLoaded", () => {
  createSidebar();
  renderAppointmentChart();
});

const withdrawButton = document.getElementById("withdraw-button");
withdrawButton?.addEventListener("click", () => {
  alert("Withdrawal process initiated.");
});
