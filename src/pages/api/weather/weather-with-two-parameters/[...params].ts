import type { NextApiRequest, NextApiResponse } from 'next'

//request example http://localhost:3000/api/weather/weather-with-two-parameters/1/2/3/

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[]>
) {
  console.log(req.query)
  res.status(200).json(req.query.params.map(data =>({"numbers": data})))
}