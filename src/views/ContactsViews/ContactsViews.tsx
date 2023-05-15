import { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { Contacts } from '@/components/Contacts/Contacts';
import { Requisites } from '@/components/Requisites/Requisites';

import styles from './contacts.module.scss';

export const ContactsViews: FC<
    { contacts: ContactsItemType[], requisites: RequisitesItemType[] }
> = ({ contacts, requisites }) => {
    const { t } = useTranslation('contacts');

    return (
        <div className={styles['contacts-views']}>
            <div className="container">
                <h2 className={cn('title', styles['contacts-views__title'])}>
                    { t('title') }
                </h2>

                <div className={styles['contacts-views-wrap']}>
                    <Contacts
                        contacts={contacts}
                    />

                    <Requisites
                        requisites={requisites}
                    />
                </div>
            </div>
        </div>
    )
}
