//O [id] é o parametro a ser passado na url da api EX: http://localhost:3000/api/weather/1
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Cocal do Sul' })
}