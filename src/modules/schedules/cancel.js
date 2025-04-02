import { scheduleCancel } from "../../services/schedule-cancel";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const parent = event.target.closest("li");
      const { id } = parent.dataset;

      if (id) {
        const isConfirm = confirm(
          "Você realmente deseja cancelar o agendamento?"
        );
        if (isConfirm) {
          await scheduleCancel({ id });
          schedulesDay();
          alert("Agendamento cancelado com sucesso!");
        }
      }
    }
  });
});
