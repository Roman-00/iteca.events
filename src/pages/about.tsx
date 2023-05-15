import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '@/components/Meta';
import { AboutViews } from '@/views/AboutViews/AboutViews';

const About: FC<{ data: AboutParagraphType[] }> = ({ data }) => {
    const { t } = useTranslation('about');

    return (
        <Meta
            title={t('title') || ''}
        >
            <AboutViews
                list={data}
            />
        </Meta>
    )
}

export default About;

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const res = await fetch(`${process.env.APP_URL}/api/about/${locale}`);

    const data = await res.json();

    return {
        props: {
            data,
            ...(await serverSideTranslations(locale, [
                'common',
                'meta',
                'banner',
                'about'
            ])),
        },
    };
};
