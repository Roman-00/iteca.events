import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';
import type { TypeMaterialIconName } from '@/typings/icon';

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
    const IconComponent = MaterialIcons[name];

    return <IconComponent /> || <></>;
};
