import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

import classes from './Counter.module.css';

export default function Counter() {
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const addFive = () => {
        dispatch(counterActions.increase(5));
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
            {show ? <div className={classes.value}>{counter}</div> : ''}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={addFive}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={toggleHandler}>Toggle</button>
        </main>
    );
}
