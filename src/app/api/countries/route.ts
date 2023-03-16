export async function GET(request: Request) {
  const res = await fetch(`http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&username=${process.env.GEONAMES_USERNAME}&type=json`)
  const data = await res.json().then(res => res)
  return new Response(JSON.stringify(data))
}
