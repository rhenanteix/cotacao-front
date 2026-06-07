import { create } from "zustand";

interface QuoteStore {
    
    result: any;
    loading: boolean;
    

    setResult: (data: any) => void;
    setLoading: (loading: boolean) => void;
}

export const useQuoteStore = create<QuoteStore>((set) => ({
    result: null,
    loading: false,
    setResult: (data: any) => set({ result: data }),
    setLoading: (loading: boolean) => set({ loading }),
}));