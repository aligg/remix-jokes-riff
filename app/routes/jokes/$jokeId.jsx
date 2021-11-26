import { Link, useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export let loader = async ({ params }) => {
  let joke = await db.joke.findUnique({
    where: { id: params.jokeId },
  });
  if (!joke) throw new Error("Joke not found");
  let data = { joke };
  return data;
};

export default function JokeRoute() {
  let data = useLoaderData();

  return (
    <div>
      <p>Your hilarious joke was added:</p>
      <p>{data.joke.content}</p>
      <p>{data.joke.punchline}</p>
      <Link to="/" title="Go Home">
        Go Home
      </Link>
    </div>
  );
}
