export async function GET(request: Request, { params }) {
  const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${process.env.GEONAMES_USERNAME}`)
  
  return new Response(JSON.stringify(await res.json()))
}