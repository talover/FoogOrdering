import API from "@settings/services/API"

const Settings = API.injectEndpoints( {

    endpoints: builder => ( {
        // resetPassword: builder.mutation( {
        //     query: credentials => ( {
        //         url: '/reset-password',
        //         method: 'POST',
        //         body: { ...credentials }
        //     } )
        // } ),        
        getSettings: builder.query( {
            query: () => 'your-plugin/v1/settings',
        } ),
    } )

} )

export default Settings

export const {
    useGetSettingsQuery
 } = Settings