import { FC } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { INDUSTRY_NAME_RU, INDUSTRY_NAME_EN } from '@/constants/exhibitions';
import { ExhibitionsSlugList } from '@/components/ExhibitionsSlug/ExhibitionsSlugList';

import styles from './exhibitionsSlug.module.scss';

export const ExhibitionsSlugViews: FC<{ data: EventResponseType }> = ({ data }) => {
    const router = useRouter();
    const searchParams = new URLSearchParams(router.asPath);

    const lang = searchParams.get('lang') || '';
    const industryId = searchParams.get('id') || '';

    return (
        <div className={styles['exhibitions-slug-views']}>
            <div className="container">
                <h2 className={cn('title', styles['exhibitions-slug-views__title'])}>
                    {lang === 'ru'
                        ? INDUSTRY_NAME_RU[industryId]
                        : INDUSTRY_NAME_EN[industryId]
                    }
                </h2>

                <ExhibitionsSlugList
                    list={data.confList}
                />
            </div>
        </div>
    )
};
