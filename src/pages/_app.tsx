import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';
import Layouts from '@/layouts/Layouts';

import '@/styles/common.scss';

function App({ Component, pageProps, ...rest }: AppProps) {
    const { store } = wrapper.useWrappedStore(rest);

    return <Provider store={store}>
        <Layouts>
            <Component {...pageProps} />
        </Layouts>
    </Provider>
}

export default appWithTranslation(App);
