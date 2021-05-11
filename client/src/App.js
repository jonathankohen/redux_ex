import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

function App() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    return (
        <div className="App">
            <div className="container">
                <Header />
                {!isAuth && <Auth />}
                {isAuth && <UserProfile />}
                <Counter />
            </div>
        </div>
    );
}

export default App;
