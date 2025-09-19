import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Data from "../data/data.json"


export interface Extension {
  id: string;
  name: string;
  isActive: boolean;
  description: string;
  logo:string;
}


interface ExtensionState {
  extensions: Extension[];
  theme: "light" | "dark";
  filter: "all" | "active" | "inactive";
 
}

// Initial state 
const initialState: ExtensionState = {
  extensions: Data as Extension[],
  theme: "light",
  filter: "all",
};

const extensionSlice = createSlice({
  name: "extension",
  initialState,
  reducers: {
    toggleExtension: (state, action: PayloadAction<string>) => {
      const ext = state.extensions.find((e) => e.id === action.payload);
      if (ext) ext.isActive = !ext.isActive;
    },
    removeExtension: (state, action: PayloadAction<string>) => {
      state.extensions = state.extensions.filter((e) => e.id !== action.payload);
    },
    
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setFilter: (state, action: PayloadAction<"all" | "active" | "inactive">) => {
      state.filter = action.payload;
    },
  },
});

export const { toggleExtension, removeExtension, toggleTheme, setFilter } = extensionSlice.actions;
export default extensionSlice.reducer;
