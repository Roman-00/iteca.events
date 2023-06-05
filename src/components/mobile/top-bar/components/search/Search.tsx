import { FC } from 'react';
import { MaterialIcon } from '@/components/Ui/MaterialIcon';

import styles from './search.module.scss';

export const TopBarSearch: FC = () => {
    return (
        <div className={styles['top-bar-search']}>
            <button
                type="button"
                className={styles['top-bar-search__button']}
            >
                <MaterialIcon name="MdSearch" />
            </button>
        </div>
    )
}
