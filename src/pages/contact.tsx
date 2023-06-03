import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '@/components/Meta';
import ContactViews from '@/views/ContactViews';

export const getStaticProps = async ({ locale }: { locale: string }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'meta',
                'menu',
            ])),
        },
    };
};

const Contact: FC = () => {
    const { t } = useTranslation('meta')

    return (
        <Meta
            title={t('title')}
            description={t('description')}
        >
            <ContactViews />
        </Meta>
    );
};

export default Contact;
