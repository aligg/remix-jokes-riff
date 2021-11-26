import { redirect } from "remix";
import { db } from "../../utils/db.server";

export let action = async ({ request }) => {
  let form = await request.formData();
  let name = "User added joke";
  let content = form.get("content");
  let punchline = form.get("punchline");

  if (content.length < 10 || punchline.length < 10) {
    alert(`Joke and punchline are required`); // TODO: this needs JS
  }

  let fields = { name, content, punchline };

  let joke = await db.joke.create({ data: fields });
  return redirect(`/jokes/${joke.id}`);
};

export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own hilarious, kid-friendly joke</p>
      <form method="post">
        <div>
          <label>
            Joke: <textarea name="content" />
          </label>
        </div>
        <div>
          <label>
            Punchline: <textarea name="punchline" />
          </label>
        </div>
        <div>
          <button id="add" type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
