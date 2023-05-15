import type { NextApiRequest, NextApiResponse } from 'next';
import exhibitionsMock from '../../__mock__/ru/exhibitions.json';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(exhibitionsMock);
};

export default handler;
