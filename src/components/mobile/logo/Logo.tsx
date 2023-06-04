import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import styles from './logo.module.scss';

export const Logo: FC = () => {
    const { t } = useTranslation('meta');

    return (
        <Link
            href="/"
            className={styles['logo-link']}
        >
            <Image
                src="/logo.svg"
                alt={t('title')}
                width={160}
                height={60}
                className={styles['logo-link__img']}
            />
        </Link>
    )
};
