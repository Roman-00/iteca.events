import { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { EventItemType } from '@/typings/event';
import { UpcomingSlider } from './UpcomingSlider';

import styles from './upcoming.module.scss';

export const Upcoming: FC<{ upcoming: EventItemType[] }> = ({ upcoming }) => {
    const { t } = useTranslation('upcoming');

    return (
        <div className={styles.upcoming}>
            <div className="container">
                <h3
                    className={styles['upcoming__title']}
                    dangerouslySetInnerHTML={{ __html: t('title') || '' }}
                />

                <UpcomingSlider
                    list={upcoming}
                />

                <Link
                    href="exhibition"
                    className={styles['upcoming__btn-link']}
                >
                    Календарь всех выставок
                </Link>
            </div>
        </div>
    )
}
