import { FC } from 'react';
import Meta from '@/components/Meta';
import { IndexViews } from '@/views/IndexViews/IndexViews';

const Index: FC = () => {
    return (
        <Meta
            title="Iteca Events"
            description="Iteca Events Description"
        >
            <IndexViews />
        </Meta>
    )
}

export default Index;
