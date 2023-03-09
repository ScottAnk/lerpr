import { Navigate, Link, useLocation } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ user }) {
    let location = useLocation()
    console.log(location.pathname)

    return (
        <div className='NavBarContainer'>
            <div className='NavLinks'>
                <nav>
                    <Link to='/editor' onClick={<Navigate to='/editor' />}>Editor</Link>
                    <Link to='/resources' onClick={<Navigate to='/resources' />}>Resources</Link> 
                    <Link to='/community' onClick={<Navigate to='/community' />}>Community</Link>
                </nav>
            </div>
        </div>
    )
}