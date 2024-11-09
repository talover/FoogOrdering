import { Outlet } from "react-router-dom"
import { Navigation } from "@settings/components/Navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useGetSettingsQuery } from "@settings/services/Settings"
// import { setUser, destroyCredentials } from "@settings/store/slices/auth/authSlice"
import FlashMessages from "./FlashMessages"

const navigationData = [
	{ name: 'Settings', path: '/', label: 'Settings' },
	{ name: 'Import', path: '/import', label: 'Demo Import' },
  ];

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
			<Navigation navigation={navigationData} />
	
			<main>
				<div>

					<Outlet />

				</div>
			</main>

			<FlashMessages />
		</>        
	)
}

export default DefaultLayout