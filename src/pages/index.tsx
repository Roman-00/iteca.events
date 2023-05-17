import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '@/components/Meta';
import { IndexViews } from '@/views/IndexViews/indexViews';

const Index: FC = () => {
    const { t } = useTranslation('common');

    return (
        <Meta
            title={t('title') || ''}
            description={t('description') || ''}
        >
            <IndexViews />
        </Meta>
    )
}

export default Index;

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'menu',
                'banner'
            ])),
        },
    };
};
