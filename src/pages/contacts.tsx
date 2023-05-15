import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '@/components/Meta';
import { ContactsViews } from '@/views/ContactsViews/ContactsViews';
import { Requisites } from '@/components/Requisites/Requisites';

const Contacts: FC<
    { contactsData: ContactsItemType[], requisitesData: RequisitesItemType[] }
> = ({ contactsData, requisitesData }) => {
    const { t } = useTranslation('contacts');

    return (
        <Meta
            title={t('title') || ''}
        >
            <ContactsViews
                contacts={contactsData}
                requisites={requisitesData}
            />
        </Meta>
    )
}

export default Contacts;

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const [contacts, requisites] = await Promise.all([
        fetch(`${process.env.APP_URL}/api/contacts/${locale}`),
        fetch(`${process.env.APP_URL}/api/requisites/${locale}`),
    ]);

    const contactsData = await contacts.json();
    const requisitesData = await requisites.json();

    return {
        props: {
            contactsData,
            requisitesData,
            ...(await serverSideTranslations(locale, [
                'common',
                'meta',
                'banner',
                'contacts'
            ]))
        },
    };
};
