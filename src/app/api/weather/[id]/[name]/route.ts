interface Params {
  id: number;
  name: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const responseBody = {
    "message": "Hello From Weather",
    "id": +params.id,
    "name": params.name
  };
  return new Response(JSON.stringify(responseBody));
}