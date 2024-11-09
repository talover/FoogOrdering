import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    settings: [
        {menu_slug: 'test'},
    ],
}

const settingsSlice = createSlice( {
    name: 'settings',
    initialState,
    reducers: {
        setSetting: ( state, action ) => {

            if( ! action.payload ) return
            
            const { data } = action.payload
            state.settings = data
        },
    },
} )

export const {
    setSetting,
} = settingsSlice.actions

export default settingsSlice.reducer