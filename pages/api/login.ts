// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const KEY = 'adfadadada';

export default function(req: NextApiRequest, 
  res: NextApiResponse) {
    if (!req.body){
        res.statusCode = 404;
        res.end('Error');
        return;
    }
    // Not a Rect component
    const { username, password } = req.body;

    res.json({
        token: jwt.sign(
            {
                username,
                admin: username === 'admin@admin.com'
                && password === 'admin'
            },
            KEY
        )
    })
}

// http://localhost:3000/api/login