import { FC } from 'react';
import { MaterialIcon } from '@/components/Ui/MaterialIcon';

import styles from './search.module.scss';

export const Search: FC = () => {
    return (
        <div className={styles.search}>
            <button
                type="button"
                className={styles['search__button']}
            >
                <MaterialIcon name="MdSearch" />
            </button>
        </div>
    )
};
