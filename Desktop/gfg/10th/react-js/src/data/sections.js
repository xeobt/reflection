

const sections = [
  {
    id: "intro",
    slug: "introduction",
    eyebrow: "Before we begin",
    title: "Introduce Yourself",
    subtitle: "Who you are and how this whole adventure started.",
    questions: [
      { id: "q1", prompt: "Introduce yourself.", answer: "My name is Stanislav, an intermediate programmer" },
      { id: "q2", prompt: "Which city in Poland are you from?", answer: "The Town of Zwirzyniec" },
      { id: "q3", prompt: "Why did you decide to join the Erasmus programme?", answer: "Accidentally joined" },
      { id: "q4", prompt: "Why did you choose Faro, Portugal?", answer: "I didn't have a choice on the city really" },
    ],
  },
  {
    id: "departure",
    slug: "before-departure",
    eyebrow: "01 · Poland",
    title: "Before Departure",
    subtitle: "Getting ready to leave home.",
    questions: [
      { id: "q5", prompt: "How did you prepare for your trip before leaving Poland?", answer: "Just gathered my belongings and went" },
    ],
  },
  {
    id: "journey",
    slug: "the-journey",
    eyebrow: "02 · In transit",
    title: "The Journey",
    subtitle: "Poland → Faro.",
    questions: [
      { id: "q6", prompt: "Describe your journey from Poland to Faro.", answer: "Four hour flight, what can i say" },
      { id: "q7", prompt: "How was your flight?", answer: "Very flighty" },
      { id: "q8", prompt: "Did you travel alone or with friends?", answer: "With my classmates" },
      { id: "q9", prompt: "What were your first impressions when you arrived?", answer: "Was kind of rough on the climate but overall okay" },
    ],
  },
  {
    id: "life-in-faro",
    slug: "life-in-faro",
    eyebrow: "03 · Faro",
    title: "Life in Faro",
    subtitle: "Accommodation, university life, culture, food, and people.",
    questions: [
      { id: "q10", prompt: "How has your life in Faro been so far?", answer: "Great" },
      {
        id: "q11",
        prompt:
          "Describe your accommodation, university life, Portuguese culture, food, people, and any differences between Poland and Portugal.",
        answer: "A lot of differences but I'm too unbothered to answer it all",
      },
      { id: "q12", prompt: "What has been your favourite experience or memory during your Erasmus stay?", answer: "My free time here" },
      { id: "q13", prompt: "What challenges have you faced, and how did you overcome them?", answer: "Learning to use ReactJS, overcame them easily" },
    ],
  },
  {
    id: "react-course",
    slug: "react-course",
    eyebrow: "Sidebar",
    title: "The React Course",
    subtitle: "A quick reflection on what you learned along the way.",
    questions: [
      { id: "q14", prompt: "Which React topics did you enjoy the most?", answer: "Router and Components" },
      { id: "q15", prompt: "Which topics were the most challenging?", answer: "Router" },
      { id: "q16", prompt: "What new skills have you gained?", answer: "ReactJS" },
    ],
  },
  {
    id: "going-home",
    slug: "going-home",
    eyebrow: "04 · Faro → Poland",
    title: "If It Ended Today",
    subtitle: "Imagining the journey back.",
    questions: [
      {
        id: "q17",
        prompt: "If your Erasmus exchange ended today, how would you describe your journey back to Poland?",
        answer: "Welp it ends tomorrow, I'd describe the journey as a Four Hour Flight(again)",
      },
      { id: "q18", prompt: "How would you feel leaving Faro?", answer: "Good, i wanna go home" },
      { id: "q19", prompt: "What memories would you take home, and what would you miss the most?", answer: "KFC" },
    ],
  },
  {
    id: "reflection",
    slug: "reflection",
    eyebrow: "Final thoughts",
    title: "Looking Back",
    subtitle: "What this exchange meant, and advice for those who follow.",
    questions: [
      { id: "q20", prompt: "How has Erasmus changed you personally or academically?", answer: "Not really" },
      { id: "q21", prompt: "Would you recommend Faro to future Erasmus students? Why?", answer: "Yes I do recommend. Cuz why not" },
      {
        id: "q22",
        prompt: "What advice would you give to the next group of Erasmus students coming to Faro?",
        answer: "Never turn off your room fan",
      },
    ],
  },
];

export default sections;
