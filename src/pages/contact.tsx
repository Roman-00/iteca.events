import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ContactsItemType } from '@/typings/contact';
import { RequisitesItemType } from '@/typings/requisites';
import Meta from '@/components/Meta';
import ContactViews from '@/views/ContactViews/ContactViews';

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const [contacts, requisites] = await Promise.all([
        fetch(`${process.env.APP_URL}/api/contact/${locale}`),
        fetch(`${process.env.APP_URL}/api/requisites/${locale}`),
    ]);

    const contactsData = await contacts.json();
    const requisitesData = await requisites.json();

    return {
        props: {
            contactsData,
            requisitesData,
            ...(await serverSideTranslations(locale, [
                'banner',
                'common',
                'meta',
                'menu',
                'contact',
                'footer'
            ])),
        },
    };
};

const Contact: FC<
    { contactsData: ContactsItemType[], requisitesData: RequisitesItemType[]}
    > = ({ contactsData, requisitesData }) => {
        const { t } = useTranslation('contact');

        return (
            <Meta
                title={t('title') || ''}
            >
                <ContactViews
                    contacts={contactsData}
                    requisites={requisitesData}
                />
            </Meta>
        )
    }

export default Contact;
