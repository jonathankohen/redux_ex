import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../redux/slices/counter_slice';

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const addFive = () => {
        dispatch(counterActions.increase(10));
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleHandler = () => {
        dispatch(counterActions.toggle());
    };

    return (
        <div className="container counter">
            <h1>Redux Counter</h1>

            {show ? (
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-3">
                        <h3 className="counter">{counter}</h3>
                    </div>
                </div>
            ) : (
                ''
            )}

            <button
                type="button"
                className="btn btn-primary"
                onClick={incrementHandler}
            >
                Increment
            </button>
            <button className="btn btn-primary" onClick={addFive}>
                Increase by 10
            </button>
            <button className="btn btn-primary" onClick={decrementHandler}>
                Decrement
            </button>
            <button className="btn btn-primary" onClick={toggleHandler}>
                Toggle Counter
            </button>
        </div>
    );
}
