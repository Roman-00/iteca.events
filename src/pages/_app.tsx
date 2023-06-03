import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Layouts from '@/layouts/Layouts';
import { MantineProvider } from '@mantine/core';

import '@/styles/_globals.scss';

function App({ Component, pageProps }: AppProps) {
    return <MantineProvider>
        <Layouts>
            <Component {...pageProps} />
        </Layouts>
    </MantineProvider>
}

export default appWithTranslation(App);
