import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import styles from './requisites.module.scss';

export const Requisites: FC<{ requisites: RequisitesItemType[] }> = ({ requisites }) => {
    const { t } = useTranslation('contacts');

    return (
        <div className={styles.requisites}>
            <h4 className={styles['requisites__title']}>
                { t('requisites') }
            </h4>

            <div className={styles['requisites-content']}>
                {requisites.map(item => (
                    <p
                        key={item.id}
                        className={styles['requisites-content__item']}
                    >
                        <span>
                            { t(`${item.label}`) }:&nbsp;
                        </span>

                        { item.value }
                    </p>
                ))}
            </div>
        </div>
    )
};
