import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';

import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

function App() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    return (
        <div className="App">
            {/* FIXME: make responsive */}

            <div className="container">
                <Header />
                <div className="row d-flex justify-content-center align-items-center my-5">
                    {!isAuth ? (
                        <div className="col-md-4 auth_div">
                            <Auth />
                        </div>
                    ) : (
                        <div className="col-md-4 align-self-start">
                            <UserProfile />
                        </div>
                    )}
                    <div className="col-md-8">
                        <Counter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
