import { FC } from 'react';
import { Result } from '@/components/Result/Result';
import { Upcoming } from '@/components/Upcoming/Upcoming';

import styles from './indexViews.module.scss';

export const IndexViews: FC<
    { result: ResultItemType[], upcoming: EventItemType[]
}> = ({ result, upcoming }) => {
    return (
        <div className={styles['index-views']}>
            <Result
                list={result}
            />

            <Upcoming
                upcoming={upcoming}
            />
        </div>
    )
};
