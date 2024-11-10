import { Outlet } from "react-router-dom"
import { Navigation } from "@settings/components/Navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { setUser, destroyCredentials } from "@settings/store/slices/auth/authSlice"
import FlashMessages from "./FlashMessages"

const navigationData = [
	{ name: 'Settings', path: '/', label: 'Settings' },
	{ name: 'Import', path: '/import', label: 'Demo Import' },
  ];

const DefaultLayout = () => {
	
	return (
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