import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '@/components/Meta';
import { ExhibitionsSlugViews } from '@/views/ExhibitionsSlugViews/ExhibitionsSlugViews';
import {API_KEY} from '@/constants/config';
import { EventResponseType } from '@/typings/event';

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const res = await fetch(`${process.env.API_URL}/exh-json/`,{
        method: 'POST',
        body:   JSON.stringify({
            apiKey:    API_KEY,
            lang:      locale,
            projectID: 0,
            recCount:  0,
            lastMonth: 1,
            industry:  'Travel_Tourism'
        }),
    });

    const data = await res.json();

    return {
        props: {
            data,
            ...(await serverSideTranslations(locale, [
                'common',
                'meta',
                'menu',
                'banner',
                'footer'
            ]))
        },
    };
};

const Page: FC<{ data: EventResponseType }> = ({ data }) => {
    const { t } = useTranslation('meta');

    return (
        <Meta
            title={t('title')}
        >
            <ExhibitionsSlugViews
                data={data}
            />
        </Meta>
    )
}

export default Page;
