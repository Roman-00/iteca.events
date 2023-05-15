import { FC } from 'react';
import { useRouter } from 'next/router';

const Page: FC = () => {
    const router = useRouter();

    return (
        <div>
            Page: {router.query.slug}
        </div>
    )
}

export default Page;
