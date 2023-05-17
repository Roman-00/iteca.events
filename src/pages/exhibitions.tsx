import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '@/components/Meta';
import { ExhibitionsViews } from '@/views/ExhibitionsViews/ExhibitionsViews';

const Exhibitions: FC<{ data: ExhibitionsItemType[] }> = ({ data }) => {
    const { t } = useTranslation('exhibitions');

    return (
        <Meta
            title={t('title')}
        >
            <ExhibitionsViews
                data={data}
            />
        </Meta>
    )
};

export default Exhibitions;

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const res = await fetch(`${process.env.APP_URL}/api/exhibitions/${locale}`);

    const data = await res.json();

    return {
        props: {
            data,
            ...(await serverSideTranslations(locale, [
                'common',
                'meta',
                'menu',
                'banner',
                'exhibitions',
                'footer'
            ]))
        },
    };
};
