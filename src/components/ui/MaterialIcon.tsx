import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';
import { TypeMaterialIconName } from '../../../@types/icon';

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
    const IconComponent = MaterialIcons[name];

    return <IconComponent /> || <></>;
};
