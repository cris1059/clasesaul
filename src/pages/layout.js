import React from 'react';
import { Outlet, Link} from "react-router-dom";
import "../assets/css/styleL.css";

function Layout() {
    
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-optionsnav'>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <main>
                <Outlet/> {/*Se renderizan las paginas o pestanias*/}
            </main>
        </div>
    )
}

export default Layout;