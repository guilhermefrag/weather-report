export async function GET(request: Request, { params }) {
  const res = await fetch(`http://api.geonames.org/childrenJSON?geonameId=${params.id}&username=${process.env.GEONAMES_USERNAME}`)
  const data = await res.json().then(res => res)
  return new Response(JSON.stringify(data))
}