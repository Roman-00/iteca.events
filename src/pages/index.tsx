import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '@/components/Meta';
import { IndexViews } from '@/views/IndexViews/IndexViews';
import { API_KEY } from '@/constants/config';

const Index: FC<{
    resultData: ResultItemType[], upcomingData: EventResponseType
}> = ({ resultData, upcomingData }) => {
    const { t } = useTranslation('meta');

    return (
        <Meta
            title={t('title')}
            description={t('description') || ''}
        >
            <IndexViews
                result={resultData}
                upcoming={upcomingData.confList}
            />
        </Meta>
    )
}

export default Index;

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const [result, upcoming] = await Promise.all([
        fetch(`${process.env.APP_URL}/api/result/${locale}`),
        fetch(`${process.env.API_URL}/exh-json/`, {
            method: 'POST',
            body:   JSON.stringify({
                apiKey:    API_KEY,
                lang:      locale,
                projectID: 0,
                recCount:  5,
            }),
        }),
    ]);

    const resultData = await result.json();
    const upcomingData = await upcoming.json();

    return {
        props: {
            resultData,
            upcomingData,
            ...(await serverSideTranslations(locale, [
                'common',
                'meta',
                'menu',
                'banner',
                'upcoming',
                'footer'
            ])),
        }
    }
};
