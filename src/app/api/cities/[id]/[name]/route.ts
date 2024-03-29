export async function GET(request: Request, { params }) {
  const res = await fetch(`http://api.geonames.org/childrenJSON?geonameId=${params.id}&username=${process.env.GEONAMES_USERNAME}`)
  const data = await res.json().then(res => res.geonames)
  const filteredData = data.filter(res => res.name.includes(params.name))
  return new Response(JSON.stringify(filteredData))
}