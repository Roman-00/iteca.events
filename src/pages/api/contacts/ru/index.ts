import type { NextApiRequest, NextApiResponse } from 'next';
import contactsMock from '../../__mock__/ru/contacts.json';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(contactsMock);
};

export default handler;