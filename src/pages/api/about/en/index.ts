import type { NextApiRequest, NextApiResponse } from 'next';
import resultMock from '../../__mock__/en/about.json';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(resultMock);
};

export default handler;
