import {FC, PropsWithChildren} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta: FC<PropsWithChildren<MetaType>> = (
    { title, description, image, children }
) => {
    const { asPath } = useRouter();
    const currentUrl = `${process.env.APP_URL}${asPath}`;

    return (
        <>
            <Head>
                <title itemProp="headline">
                    { title }
                </title>
                {description
                    ? <>
                        <meta itemProp="description" name="description" content={description} />
                        <meta property="og:title" content={title} />
                        <meta property="og:url" content={currentUrl} />
                        <meta property="og:image" content="/favicon.ico" />
                        <meta property="og:site_name" content="Iteca Events" />
                        <meta property="og:description" content={description} />
                        <link rel="canonical" href={currentUrl} />
                    </>
                    : (<meta name="robots" content="noindex, nofollow" />)
                }
            </Head>
            { children }
        </>
    )
};

export default Meta;
