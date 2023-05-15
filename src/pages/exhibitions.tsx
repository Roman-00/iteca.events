import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '@/components/Meta';
import { ExhibitionsViews } from '@/views/ExhibitionsViews/ExhibitionsViews';

const Exhibitions: FC = () => {
    const { t } = useTranslation('exhibitions');

    return (
        <Meta
            title={t('title')}
        >
            <ExhibitionsViews />
        </Meta>
    )
};

export default Exhibitions;

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'meta',
                'banner',
                'exhibitions'
            ]))
        },
    };
};
