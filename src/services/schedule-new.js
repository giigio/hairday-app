import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: String(id),
        name,
        when,
      }),
    });
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    alert("Não foi possível agendar, tente novamente mais tarde.");
    console.log(error);
  }
}
