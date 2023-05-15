import type { NextApiRequest, NextApiResponse } from 'next';
import resultMock from '../../__mock__/ru/result.json';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(resultMock);
};

export default handler;
