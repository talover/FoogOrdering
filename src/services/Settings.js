import API from "@settings/services/API"

const Settings = API.injectEndpoints( {

    endpoints: builder => ( {
        setSettings: builder.mutation( {
            query: settings => ( {
                url: '/save-settings',
                method: 'POST',
                body: { ...settings }
            } )
        } ),        
        getSettings: builder.query( {
            query: () => 'your-plugin/v1/settings',
        } ),
    } )

} )

export default Settings

export const {
    useSetSettingsMutation,
    useGetSettingsQuery
 } = Settings