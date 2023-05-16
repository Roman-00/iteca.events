import { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '@/components/Meta';
import { ExhibitionsSlugViews } from '@/views/ExhibitionsSlugViews/ExhibitionsSlugViews';
import {API_KEY} from '@/constants/config';

const Page: FC<{ data: EventResponseType }> = ({ data }) => {
    return (
        <Meta
            title="Hello World"
        >
            <ExhibitionsSlugViews
                data={data}
            />
        </Meta>
    )
}

export default Page;

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
                'banner'
            ]))
        },
    };
};
