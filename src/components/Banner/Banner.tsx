import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import Image from 'next/image';
import { MaterialIcon } from '@/components/ui/MaterialIcon';

import HeroBannerImg from '@/assets/images/hero-banner.jpeg';

import styles from './banner.module.scss';

export const Banner: FC = () => {
    const { t } = useTranslation('banner');

    return (
        <div className={styles.banner}>
            <div className="container">
                <h3
                    className={cn({
                        'animate__animated animate__fadeInLeft': true,
                    }, styles['banner__title'])}
                    dangerouslySetInnerHTML={{ __html: t('title') || '' }}
                />

                <p className={cn({
                    'animate__animated animate__delay-1s animate__fadeInUp': true,
                }, styles['banner__description'])}>
                    { t('description') }
                </p>

                <a
                    href=""
                    target="_blank"
                    className={cn({
                        'animate__animated animate__delay-2s animate__fadeInUp': true,
                    }, styles['banner__contact-us-btn'])}
                >
                    <MaterialIcon
                        name="MdEmail"
                    />

                    { t('button') }
                </a>
            </div>
        </div>
    );
};
