import { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { ContactsItemType } from '@/typings/contact';
import { RequisitesItemType } from '@/typings/requisites';
import { Contact } from '@/components/mobile/contact/Contact';
import { Requisites } from '@/components/mobile/requisites/Requisites';

import styles from './contact.module.scss';

export const ContactsViews: FC<
    { contacts: ContactsItemType[], requisites: RequisitesItemType[] }
    > = ({ contacts, requisites }) => {
        const { t } = useTranslation('contact');

        return (
            <div className={styles['contacts-views']}>
                <div className="container">
                    <h2 className={cn('title', styles['contacts-views__title'])}>
                        { t('title') }
                    </h2>

                    <div className={styles['contacts-views-wrap']}>
                        <div className={styles['contacts-views-wrap__content']}>
                            <Contact
                                contacts={contacts}
                            />

                            <Requisites
                                requisites={requisites}
                            />
                        </div>

                        <iframe
                            src="https://yandex.kz/map-widget/v1/?from=mapframe&ll=76.905311%2C43.224993&mode=usermaps&source=mapframe&um=constructor%3Ab7c6ee7762db963f0110873f2a6cf9ef416ba0128558779a9298c16149656357&utm_source=mapframe&z=16"
                            width="560"
                            height="480"
                            frameBorder="1"
                            allowFullScreen={true} />
                    </div>
                </div>
            </div>
        )
    }

export default ContactsViews;
