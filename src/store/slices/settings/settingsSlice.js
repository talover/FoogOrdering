import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fields: {
        menuSlug: '',
        addOnsSlug: '',
        description: '',
        defaultPrice: '',
        location: '',
    }
}

const settingsSlice = createSlice( {
    name: 'settings',
    initialState,
    reducers: {
        setSetting: ( state, action ) => {

            if( ! action.payload ) return
            
            const { data } = action.payload

            state.fields = data
        },
    },
} )

export const {
    setSetting,
} = settingsSlice.actions

export default settingsSlice.reducer