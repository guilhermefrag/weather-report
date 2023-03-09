export async function GET(request: Request, { params }) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&units=mrtic&appid=${process.env.WEATHER_API_KEY}`)
  const data = await res.json()
  return new Response(JSON.stringify(data))
}