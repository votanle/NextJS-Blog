import Link from 'next/link'
import { auth } from '../firebase'
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
                                    <div class="center row">
                                        <div class="col s12 " >
                                            <div class="row" >
                                                <div class="input-field col s6 s12 ">
                                                    <i class=" material-icons prefix ">search</i>
                                                    <input type="text" placeholder="Search !!!" id="autocomplete-input"class="autocomplete"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <nav>
                                        <div class="nav-wrapper">
                                            <form>
                                                <div class="input-field">
                                                    <input id="search" type="search" required />
                                                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                                    <i class="material-icons">close</i>
                                                </div>
                                            </form>
                                        </div>
                                    </nav> */}
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