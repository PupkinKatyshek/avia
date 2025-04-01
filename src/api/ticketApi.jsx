import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTickets } from "../store/ticketsSlice";
import { notificationError } from "../utils/notificationError";
import { fetchSearchId, fetchTicketsBatch } from "./api";

export const TicketFetcher = createAsyncThunk(
  "tickets/fetchTickets",
  async (_, { dispatch }) => {
    let searchId;
    try {
      searchId = await fetchSearchId();
    } catch (error) {
      notificationError(
        `Произошла непредвиденная ошибка при получении: ${error}`
      );
      return;
    }

    let stop = false;

    while (!stop) {
      try {
        const { tickets, stop: batchStop } = await fetchTicketsBatch(searchId);
        if (tickets.length > 0) {
          dispatch(addTickets(tickets));
        }
        stop = batchStop;
      } catch (error) {
        notificationError(
          `Произошла непредвиденная ошибка при получении: ${error}`
        );
        return;
      }
    }
    console.log("Поиск тикетов завершен.");
  }
);
