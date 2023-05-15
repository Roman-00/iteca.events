import { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { UpcomingSlider } from './UpcomingSlider';

import styles from './upcoming.module.scss';

export const Upcoming: FC<{ upcoming: EventItemType[] }> = ({ upcoming }) => {
    const { t } = useTranslation('upcoming');

    return (
        <div className={styles['upcoming']}>
            <div className="container">
                <h2
                    className={cn('title', styles['upcoming__title'])}
                    dangerouslySetInnerHTML={{ __html: t('title') || '' }}
                />

                <UpcomingSlider
                    list={upcoming}
                />
            </div>
        </div>
    );
};
