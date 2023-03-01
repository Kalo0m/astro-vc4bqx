import { APIRoute } from 'astro';

export const post: APIRoute = async ({ request, url }) => {
  const body = await request.json();
  console.log(body);
  return {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email: 'hello world' }),
  };
};
