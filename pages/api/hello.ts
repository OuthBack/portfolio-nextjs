// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

export default function(req: NextApiRequest, 
  res: NextApiResponse) {
    // Not a Rect component
    res.json( {hello: "world"} )
}

// http://localhost:3000/api/hello