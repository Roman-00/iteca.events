import { FC } from 'react';
import Link from 'next/link';

import styles from './exhibitionsList.module.scss';

export const ExhibitionsList: FC = () => {
    return (
        <ul className={styles['exhibitions-list']}>
            <li className={styles['exhibitions-list__item']}>
                Hello Wolrd
            </li>
        </ul>
    )
};
