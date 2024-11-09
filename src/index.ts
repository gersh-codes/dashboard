import { createSidebar } from "./components/sidebar.ts";
import { renderAppointmentChart } from "./components/dashboard.ts";

document.addEventListener("DOMContentLoaded", () => {
  createSidebar();
  renderAppointmentChart();
});

const withdrawButton = document.getElementById("withdraw-button");
withdrawButton?.addEventListener("click", () => {
  alert("Withdrawal process initiated.");
});
