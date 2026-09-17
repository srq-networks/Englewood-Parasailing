import { createContext, useContext } from "react";

// Provided by BookingWidget.jsx (the demo booking dialog). `open(boatId?)` opens it with
// that boat pre-selected.
export const BookingContext = createContext({ open: () => {} });

export default function useBooking() {
	return useContext(BookingContext);
}
