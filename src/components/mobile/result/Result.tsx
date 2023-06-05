import { FC } from 'react';
import { ResultList } from './ResultList';
import { ResultItemType } from '@/typings/result';

import styles from './result.module.scss';

export const Result: FC<{ list: ResultItemType[] }> = ({ list }) => {
    return (
        <div className={styles.result}>
            <div className="container">
                <ResultList
                    list={list}
                />
            </div>
        </div>
    );
};
