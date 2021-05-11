import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
// import { authActions } from '../store/index';

import classes from './Counter.module.css';

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
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show ? <h3 className={classes.value}>{counter}</h3> : ''}
            <button
                type="button"
                className="btn-lg btn-primary"
                onClick={incrementHandler}
            >
                Increment
            </button>
            <button className="btn-lg btn-primary" onClick={addFive}>
                Increase by 10
            </button>
            <button className="btn-lg btn-primary" onClick={decrementHandler}>
                Decrement
            </button>
            <button className="btn-lg btn-primary" onClick={toggleHandler}>
                Toggle Counter
            </button>
        </main>
    );
}
