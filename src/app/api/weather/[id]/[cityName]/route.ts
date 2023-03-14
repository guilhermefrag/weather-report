export async function GET(request: Request, { params }) {
  const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=-15.79159&lon=-47.89558&appid=${process.env.WEATHER_API_KEY}`)
  
  return new Response(JSON.stringify(await res.json()))
}