import { FC } from 'react';
import { result } from '@/constants/result';
import { EventItemType } from '@/typings/event';
import { Result } from '@/components/mobile/result/Result';
import { Upcoming } from '@/components/mobile/upcoming/Upcoming';

const IndexViews: FC<{ upcoming: EventItemType[] }> = ({ upcoming }) => (
    <div className="index-views">
        <Result list={result} />

        <Upcoming
            upcoming={upcoming}
        />
    </div>
);

export default IndexViews;
