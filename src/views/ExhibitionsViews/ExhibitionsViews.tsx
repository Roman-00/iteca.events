import { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { ExhibitionsList } from '@/components/Exhibitions/ExhibitionsList';

import styles from './exhibitions.module.scss';

export const ExhibitionsViews: FC = () => {
    const { t } = useTranslation('exhibitions');

    return (
        <div className={styles['exhibitions-views']}>
            <div className="container">
                <h2
                    className={cn('title', styles['exhibitions-views__title'])}
                    dangerouslySetInnerHTML={{ __html: t('title') || '' }}
                />

                <ExhibitionsList />
            </div>
        </div>
    )
};
