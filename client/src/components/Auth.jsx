import { useDispatch } from 'react-redux';
import { authActions } from '../redux/slices/auth_slice';

const Auth = () => {
    const dispatch = useDispatch();

    const loginHandler = e => {
        e.preventDefault();
        dispatch(authActions.login());
    };

    return (
        <main className="auth">
            <section>
                <form onSubmit={loginHandler}>
                    <div className="control">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="control">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button className="btn-lg btn-primary">Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
