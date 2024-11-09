import { Fragment, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

const _user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        '/user.png',
}
const navigation = [
    { name: 'Settings', path: '/', label: 'Settings' },
    { name: 'Import', path: '/import', label: 'Import' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navigation = () => {

    const user = useSelector(state => state.auth.user)

    const [uN, setUN] = useState([])

    // useEffect(() => {

    //     setUN(prevUN => navPreparation(user, userNavigation))

    // }, [user])

    return (
        <>
            <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) => classNames(
                            isActive
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                        )
                        }
                        aria-current={() => isActive ? 'page' : undefined}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </>
    )
}
export default Navigation
