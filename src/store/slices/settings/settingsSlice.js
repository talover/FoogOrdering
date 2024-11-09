import { createSlice } from "@reduxjs/toolkit";

const loadSettingsFromLocalStorage = () => {
	try {
		const savedSettings = localStorage.getItem("settings");
		console.log('Loaded settings from localStorage:', savedSettings); 
		if (savedSettings) {
		return JSON.parse(savedSettings);
		}
		return {}; 
	} catch (error) {
		console.error("Error loading settings from localStorage", error);
		return {}; 
	}
};
  

const initialState = loadSettingsFromLocalStorage() || {
  menuSlug: 'test', 
  addOnsSlug: '',
  description: '',
  defaultPrice: '',
  location: ''
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
	setSetting: (state, action) => {
	  if (!action.payload) return;
	  const { name, value } = action.payload;
	  state[name] = value;
	  localStorage.setItem("settings", JSON.stringify(state));
	},
	setSettings: (state, action) => {
	  if (!action.payload) return;
	  Object.assign(state, action.payload);
	  localStorage.setItem("settings", JSON.stringify(state)); 
	}
  },
});

export const { setSetting, setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
