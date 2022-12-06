import {NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li><NavLink className="nav-item nav-link" to='/'>home</NavLink></li>
                    <li><NavLink className="nav-item nav-link" to='/editing'>editing & filter</NavLink></li>
                    <li><NavLink className="nav-item nav-link" to='/shop'>shop</NavLink></li>
                </ul>
            </header>

            <div className="wrapper">
                <Outlet/>
            </div>
        </>
    );
}
export {Layout}