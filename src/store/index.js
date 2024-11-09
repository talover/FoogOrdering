import { configureStore } from "@reduxjs/toolkit"
import API from "@settings/services/API"
import authReducer from "@settings/store/slices/auth/authSlice"
import notifySliceReducer from "@settings/store/slices/notify/notifySlice"
import verifySliceReducer from "@settings/store/slices/system/verifySlice"
import settingsReducer from "@settings/store/slices/settings/settingsSlice"; 

const store = configureStore( {
    reducer: {
        [API.reducerPath]: API.reducer,
        auth: authReducer,
        notify: notifySliceReducer,
        "system/verify": verifySliceReducer,
        settings: settingsReducer 
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat( API.middleware ),
    devTools: true
} )

export default store