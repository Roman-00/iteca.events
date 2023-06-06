import type { NextApiRequest, NextApiResponse } from 'next';
import requisitesMock from '../../__mock__/ru/requisites.json';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(requisitesMock);
};

export default handler;
