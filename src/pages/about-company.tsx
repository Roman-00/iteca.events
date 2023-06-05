import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AboutParagraphType } from '@/typings/about';
import Meta from '@/components/Meta';
import AboutViews from '@/views/AboutViews/AboutViews';

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const res = await fetch(`${process.env.APP_URL}/api/about/${locale}`);

    const data = await res.json();

    return {
        props: {
            data,
            ...(await serverSideTranslations(locale, [
                'banner',
                'common',
                'meta',
                'menu',
                'about',
                'footer'
            ]))
        },
    };
};

const AboutCompany: FC<{ data: AboutParagraphType[] }> = ({ data }) => {
    const { t } = useTranslation('meta');

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

export default AboutCompany;
