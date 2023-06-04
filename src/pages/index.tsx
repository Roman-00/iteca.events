import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '@/components/Meta';
import IndexViews from '@/views/IndexViews';

export const getStaticProps = async ({ locale }: { locale: string }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'meta',
                'menu'
            ])),
        }
    }
}

const Index: FC = () => {
    const { t } = useTranslation('meta');

    return (
        <Meta
            title={t('title') || ''}
            description={t('description') || ''}
        >
            <IndexViews />
        </Meta>
    )
};

export default Index;
