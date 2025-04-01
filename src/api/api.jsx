const URL = "https://aviasales-test-api.kata.academy";

export const fetchSearchId = async () => {
  const response = await fetch(`${URL}/search`);
  if (!response.ok) {
    throw new Error("Ошибка при загрузке searchId");
  }
  const data = await response.json();
  return data.searchId;
};

export const fetchTicketsBatch = async (searchId) => {
  const response = await fetch(`${URL}/tickets?searchId=${searchId}`);
  if (!response.ok) {
    throw new Error(`Ошибка при загрузке тикетов: ${response.statusText}`);
  }
  return await response.json();
};
