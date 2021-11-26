import { PrismaClient } from "@prisma/client";
let db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPrompts().map((joke) => {
      return db.joke.create({ data: joke });
    })
  );
}

seed();

function getPrompts() {
  return [
    {
      name: "Road worker",
      content: `I never wanted to believe that my Dad was stealing from his job as a road worker.`,
      punchline: `But when I got home, all the signs were there.`,
    },
    {
      name: "Frisbee",
      content: `I was wondering why the frisbee was getting bigger,`,
      punchline: `then it hit me.`,
    },
    {
      name: "Trees",
      content: `Why do trees seem suspicious on sunny days?`,
      punchline: `Dunno, they're just a bit shady.`,
    },
    {
      name: "Skeletons",
      content: `Why don't skeletons ride roller coasters?`,
      punchline: `They don't have the stomach for it.`,
    },
    {
      name: "Hippos",
      content: `Why don't you find hippopotamuses hiding in trees?`,
      punchline: `They're really good at it.`,
    },
    {
      name: "Dinner",
      content: `What did one plate say to the other plate?`,
      punchline: `Dinner is on me!`,
    },
    {
      name: "Elevator",
      content: `My first time using an elevator was an uplifting experience.`,
      punchline: `The second time let me down.`,
    },
  ];
}
