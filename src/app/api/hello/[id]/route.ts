interface Params {
  id: number;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const responseBody = {
    "message": "Hello, Next.js!",
    "id": +params.id
  };
  return new Response(JSON.stringify(responseBody));
}
