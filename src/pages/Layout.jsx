import { Outlet, Link } from "react-router-dom"

function Layout(){

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className='navbar-brand fw-bold text-white' to='/'>Routes</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className='nav-link text-white' to='about'>About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link text-white' to='services'>Services</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link text-white' to='contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container p-5">
            <Outlet />
            </div>


            <footer className='p-2 text-center fixed-bottom'>
                <b>All rights reserved</b>
            </footer>
        </>
    )

}

export default Layout