import Logo from '../../components/Logo/Logo'
import LogOutButton from '../../components/LogOutButton/LogOutButton'

export default function NavBar(props) {
    return (
        <div id="navBar" className="my-4 pb-4">
            <div className="flex justify-between">
                <Logo />
                <div id="userProfileButton" className="flex">
                <LogOutButton logOutUser={props.logOutUser} />

                {/* this Button Below is to be replaced by userPorile component in the future */}
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                
                </div>
            </div>
        </div>
    )
}