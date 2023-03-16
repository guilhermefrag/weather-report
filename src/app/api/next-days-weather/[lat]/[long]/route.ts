export async function GET(request: Request, { params }: { params: { lat: string, long: string } }) {
  const exclude = "current,minutely,hourly,alerts";
  const units = "metric";
  const cnt = 4;
  
  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${params.lat}&lon=${params.long}&exclude=${exclude}&units=${units}&cnt=${cnt}&appid=${process.env.WEATHER_API_KEY}`);

  return new Response(JSON.stringify(await res.json()));
}