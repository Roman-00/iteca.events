import { FC } from 'react';
import cn from 'classnames';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

export const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => (
    <Skeleton
        {...rest}
        baseColor="#bbbec9"
        highlightColor="#a1abad"
        className={cn('', className)}
    />
);
