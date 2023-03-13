//TODO: fazer o filtro de cidades por nome
export async function GET(request: Request, { params }) {
  const res = await fetch(`http://api.geonames.org/childrenJSON?geonameId=${params.id}&username=${process.env.GEONAMES_API_KEY}}`)
  const data = await res.json()
  return new Response(JSON.stringify(data))
}