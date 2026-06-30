// Data for the LitRPG Library. Each entry is one favorite book series.
// This is a plain TypeScript module imported by Server Components.

export type Book = {
  /** URL-safe id used for the /books/[slug] route */
  slug: string;
  title: string;
  author: string;
  /** Short one-liner shown in the "quick look" panel on the list page */
  tagline: string;
  genre: string;
  /** Longer series blurb shown on the detail page */
  description: string;
  /** Path to a cover image in /public */
  cover: string;
};

export const books: Book[] = [
  {
    slug: "he-who-fights-with-monsters",
    title: "He Who Fights with Monsters",
    author: "Shirtaloon (Travis Deverell)",
    tagline: "An office-supplies manager wakes up in a world of magic — with powers that are all kind of evil.",
    genre: "Isekai · LitRPG",
    description:
      "Jason Asano goes to sleep in his own bed and wakes up in a strange world of magic and monsters. Making the career jump from middle manager to interdimensional adventurer is rough, especially when all of his hard-won powers are afflictions, curses, and other distinctly villainous abilities. Jason tries his best to be heroic anyway — talking faster than he fights and snarking his way past cannibals, cultists, gods, and monsters as he claws out a place for himself in a world that is strange yet sometimes strangely familiar.",
    cover: "/covers/he-who-fights-with-monsters.jpg",
  },
  {
    slug: "cradle",
    title: "Cradle",
    author: "Will Wight",
    tagline: "The weakest boy in a valley of sacred artists refuses to accept the fate written for him.",
    genre: "Cultivation · Progression Fantasy",
    description:
      "In the remote Sacred Valley, everyone trains in the sacred arts — everyone except Lindon, who was born 'Unsouled' and forbidden from the path to power. When he glimpses a vision of the apocalypse coming for his home, Lindon abandons the only rules he's ever known and sets out into a vast, dangerous world to grow strong enough to save it. Across the series he climbs from the bottom of the ladder toward the heights of cultivation, gathering unlikely allies and impossible techniques along the way.",
    cover: "/covers/cradle.jpg",
  },
  {
    slug: "dungeon-crawler-carl",
    title: "Dungeon Crawler Carl",
    author: "Matt Dinniman",
    tagline: "Earth becomes a deadly dungeon game show — starring one man and his ex-girlfriend's cat.",
    genre: "Apocalyptic · LitRPG Comedy",
    description:
      "The apocalypse arrives as entertainment. Alien overlords flatten every human structure on Earth and convert the planet into an eighteen-level dungeon broadcast across the galaxy as a brutal reality show. Carl went outside in his boxers and a hoodie to rescue his ex-girlfriend's cat, Princess Donut — and now the two of them are contestants. With dark humor, ruthless game mechanics, and a snarky AI narrator hyping the violence, Carl and Donut fight, scheme, and survive their way down level by level.",
    cover: "/covers/dungeon-crawler-carl.jpg",
  },
  {
    slug: "defiance-of-the-fall",
    title: "Defiance of the Fall",
    author: "TheFirstDefier (JF Brink)",
    tagline: "When the System integrates Earth, one ordinary man with a hatchet has to get strong or die.",
    genre: "System Apocalypse · Cultivation",
    description:
      "Zac is alone in the middle of a forest when the world changes. An unfeeling System drags the whole planet into a vast multiverse where countless races and civilizations fight for power and dominion. Surrounded by deadly beasts, demons, and worse, armed at first with nothing but a hatchet, Zac has to claw out a unique path to power as a mere mortal in a universe full of cultivators — all while racing to find his family before everything collapses. The series blends LitRPG class and skill systems with eastern cultivation on an epic, escalating scale.",
    cover: "/covers/defiance-of-the-fall.jpg",
  },
  {
    slug: "all-the-skills",
    title: "All the Skills",
    author: "Honour Rae",
    tagline: "In a world where magic lives in cards, a poor noble's son builds a deck around a legendary heart.",
    genre: "Deck-Building · Progression Fantasy",
    description:
      "In a world where every spell and skill has been captured inside cards, the people who can build the best deck hold the most power. Arthur lives with his fallen-noble father in a hardscrabble border village, condemned to toil for the Baron — until a dragon's gift leaves a stolen Legendary 'Master of Skills' heart card secretly in his possession. Building outward from that hidden card, Arthur is thrust into a realm of opportunity and danger, collecting skills and befriending dragons that range from adorably loopy to mystically wise.",
    cover: "/covers/all-the-skills.jpg",
  },
  {
    slug: "the-wandering-inn",
    title: "The Wandering Inn",
    author: "pirateaba",
    tagline: "A young woman from Earth ends up running an inn in a world of levels, [Classes], and monsters.",
    genre: "LitRPG · Web Serial",
    description:
      "Erin Solstice is suddenly stranded in another world — one full of monsters, magic, and a System that grants people [Classes] and levels. With no way home and no useful skills, she stumbles into an abandoned inn on a lonely hill and decides to run it. What begins as simple survival grows into one of the largest web serials ever written, sprawling across continents and a huge cast as Erin's little inn becomes a fixed point in a vast, often dangerous world.",
    cover: "/covers/the-wandering-inn.jpg",
  },
];
