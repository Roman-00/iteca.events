import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { UsefulLinkItemType } from '@/typings/usefulLink';

const data: UsefulLinkItemType[] = [
    { label: 'useful-link.faq', link: 'faq' },
    { label: 'useful-link.exhi-rules', link: 'exhi-rules' },
    { label: 'useful-link.exhi-advice', link: 'exhi-advice' },
    { label: 'useful-link.entry-regime', link: 'entry-regime' },
    { label: 'useful-link.privacy-policy', link: 'privacy-policy' },
]

import styles from './usefulLink.module.scss';

export const FooterUsefulLink: FC = () => {
    const { t } = useTranslation('footer');

    return (
        <div className={styles['footer-useful-link']}>
            <h3 className={styles['footer-useful-link__title']}>
                { t('useful-link.title') }
            </h3>

            <ul className={styles['footer-useful-link__list']}>
                {data.map((item) => (
                    <li
                        key={item.link}
                        className={styles['footer-useful-link__list-item']}
                    >
                        <Link
                            href={item.link}
                            className={styles['footer-useful-link__list-item-link']}
                        >
                            { t(`${item.label}`) }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};
