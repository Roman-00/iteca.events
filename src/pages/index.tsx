import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { API_KEY } from '@/constants/config';
import { EventResponseType } from '@/typings/event';
import Meta from '@/components/Meta';
import IndexViews from '@/views/IndexViews';

export const getStaticProps = async ({ locale }: { locale: string }) => {
    const upcoming = await fetch(`${process.env.API_URL}/exh-json/`, {
        method: 'POST',
        body:   JSON.stringify({
            apiKey:    API_KEY,
            lang:      locale,
            projectID: 0,
            recCount:  5,
        }),
    });

    const upcomingData = await upcoming.json();

    return {
        props: {
            upcomingData,
            ...(await serverSideTranslations(locale, [
                'banner',
                'common',
                'meta',
                'menu',
                'result',
                'upcoming',
                'footer'
            ])),
        }
    }
}

const Index: FC<{ upcomingData: EventResponseType }> = ({ upcomingData }) => {
    const { t } = useTranslation('meta');

    return (
        <Meta
            title={t('title') || ''}
        >
            <IndexViews
                upcoming={upcomingData.confList}
            />
        </Meta>
    )
};

export default Index;
