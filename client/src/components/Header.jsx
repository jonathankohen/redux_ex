import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../redux/slices/auth_slice';

const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    {/* eslint-disable-next-line */}
                    <a class="navbar-brand" href="#">
                        Redux Auth
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {isAuth && (
                            <>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        {/* eslint-disable-next-line */}
                                        <a
                                            class="nav-link active"
                                            aria-current="page"
                                            href="#"
                                        >
                                            My Products
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        {/* eslint-disable-next-line */}
                                        <a class="nav-link" href="#">
                                            My Sales
                                        </a>
                                    </li>
                                </ul>

                                {/* eslint-disable-next-line */}
                                <a
                                    className="logout btn btn-outline-warning"
                                    href="#"
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
