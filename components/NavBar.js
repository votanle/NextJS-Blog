import Link from 'next/link'
import { auth } from '../firebase'
import Follows from '../pages/follow/Follows'
export default function NavBar({ user }) {

    return (
        <div class="navbar-fixed">
            <nav>
                <div className="nav-wrapper #fb8c00 orange darken-1">
                    <Link href="/"><a className="brand-logo">Social Network</a></Link>
                    <ul className=" right sidenav-trigger hide-on-med-and-down">

                        {user ?
                            <>
                                <li>
                                  <Follows />
                                </li>
                                <li><Link href="/posts/createblog"><a>Create Blog</a></Link></li>
                                <li><Link href="/users/userinfo"><a>PROFILE</a></Link></li>
                                <li> <button className="btn red" onClick={() => auth.signOut()}>Logout</button></li>

                            </>

                            :
                            <>
                                <li><Link href="/login"><a>Login</a></Link></li>
                                <li><Link href="/signup"><a>Signup</a></Link></li>

                            </>
                        }

                    </ul>
                </div>
            </nav>

        </div>

    )
}