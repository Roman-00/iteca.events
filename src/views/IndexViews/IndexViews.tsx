import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/store/module/counter';

import styles from './indexViews.module.scss';

export const IndexViews: FC = () => {
    const count = useSelector((state: { counter: CounterType }) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className={styles['index-views']}>
            <button
                type="button"
                onClick={() => dispatch(increment())}
            >
                +
            </button>
            <span>
                { count }
            </span>
            <button
                type="button"
                onClick={() => dispatch(decrement())}
            >
                -
            </button>
        </div>
    )
};
