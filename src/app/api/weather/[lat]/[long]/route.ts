export async function GET(request: Request , { params } ) {
  //http://localhost:3000/api/weather/-15.79159/-47.89558
  const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${params.lat}&lon=${params.long}&appid=${process.env.WEATHER_API_KEY}`)
  
  return new Response(JSON.stringify(await res.json()))
}