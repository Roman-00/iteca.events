import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

import styles from './logo.module.scss';

export const Logo: FC = () => {
    const { t } = useTranslation('meta');

    return (
        <div className={styles.logo}>
            <Link
                href="/"
                className={styles['logo__link']}
            >
                <Image
                    src="/logo.svg"
                    alt={t('title')}
                    width={120}
                    height={70}
                    property="true"
                />
            </Link>
        </div>
    )
};
