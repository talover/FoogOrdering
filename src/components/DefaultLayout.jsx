import { Outlet } from "react-router-dom"
import Navigation from "@settings/components/Navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useGetSettingsQuery } from "@settings/services/Settings"
// import { setUser, destroyCredentials } from "@settings/store/slices/auth/authSlice"
import FlashMessages from "./FlashMessages"

const DefaultLayout = () => {

    const dispatch = useDispatch()
    const token = useSelector( state => state.auth.token )

    const {
        data,
        isLoading,
        isSuccess,
        isError
    } = useGetSettingsQuery( null, {
        skip: ! token
    } )

    console.log(data, isLoading, isSuccess, isError);

    const getUserData = () => {

        if( ! token ) return

        if( ! isLoading ) {

            if( isSuccess ) dispatch( setUser( data ) )

            if( isError ) dispatch( destroyCredentials() )

        }

    }

    useEffect( () => {

        getUserData()

    }, [isLoading] )
    
    return ( ! isLoading &&
        <>
            <Navigation />

            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                    <Outlet />

                </div>
            </main>

            <FlashMessages />

        </>        
    )
}

export default DefaultLayout