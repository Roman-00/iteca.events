import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import styles from './usefulLink.module.scss';

const links = [
    {
        id:    'faq',
        title: 'useful.faq',
        link:  ''
    },
    {
        id:    'exhibition-rules',
        title: 'useful.exhibition-rules',
        link:  ''
    },
    {
        id:    'advice-exhibitors',
        title: 'useful.advice-exhibitors',
        link:  ''
    },
    {
        id:    'visa-regime',
        title: 'useful.visa-regime',
        link:  ''
    },
    {
        id:    'privacy-policy',
        title: 'useful.privacy-policy',
        link:  ''
    }
]

export const UsefulLink: FC = () => {
    const { t } = useTranslation('footer');

    return (
        <div className={styles['usefull-link']}>
            <h3 className={styles['usefull-link__title']}>
                { t('useful.title') }
            </h3>

            {links.map(link => (
                <Link
                    key={link.id}
                    href={link.link}
                    className={styles['usefull-link__link']}
                >
                    { t(`${link.title}`) }
                </Link>
            ))}
        </div>
    );
};
