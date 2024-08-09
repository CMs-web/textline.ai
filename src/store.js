import { create } from "zustand";

export const useFetchedData = create((set) => ({
  data: [],
  isLoading: false,
  input: "",
  setInput : (text) => set({input : text }),
  fetchData: async (que) => {
    set({ isLoading: true })
    try {
      const res = await fetch("https://promtmania.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          question: que,
        }),
      });
      const result = await res.json();
      const newData = {
        question: que,
        answer: result.answer,
      };
      set({ isLoading: false });
      set((state) => ({ data: [...state.data, newData] }));
    } catch (error) { console.log(error)}
  },
}));
