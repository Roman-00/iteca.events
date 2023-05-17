import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

import styles from './logo.module.scss';

export const Logo: FC = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.logo}>
            <Link
                href="/"
                className={styles['logo-link']}
            >
                <Image
                    src="/logo.svg"
                    alt={t('title')}
                    width={140}
                    height={70}
                    quality={75}
                    loading="lazy"
                />
            </Link>
        </div>
    );
};
