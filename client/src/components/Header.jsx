import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../redux/slices/auth_slice';

const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    return (
        <header className="header">
            {/* <h1>Redux Auth</h1>
            {isAuth && (
                <nav>
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )} */}
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button class="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    );
};

export default Header;
