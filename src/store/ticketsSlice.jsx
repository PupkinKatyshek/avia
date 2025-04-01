import { createSlice } from "@reduxjs/toolkit";
import { TicketFetcher } from "../api/ticketApi";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTickets: (state, action) => {
      state.items = [...state.items, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(TicketFetcher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(TicketFetcher.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(TicketFetcher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export const { addTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
