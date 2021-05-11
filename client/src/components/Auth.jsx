import { useDispatch } from 'react-redux';
import { authActions } from '../redux/slices/auth_slice';

const Auth = () => {
    const dispatch = useDispatch();

    const loginHandler = e => {
        e.preventDefault();
        dispatch(authActions.login());
    };

    return (
        <div className="container auth">
            <form onSubmit={loginHandler}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div>
                    <label for="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Auth;
