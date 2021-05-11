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
                {!isAuth ? <Auth /> : <UserProfile />}
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <Counter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
