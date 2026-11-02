// Work done at Humak University of Applied Sciences (Humanistinen ammattikorkeakoulu),
// Education Support and Development unit, 2026.
// Two phases: the traineeship (March to end of July) and the expert job (August to September).

// A stat belongs to the card it is written in. Numeric stats count up when scrolled into view;
// stats with only `text` are shown as they are.
export type Stat = { prefix?: string; value?: number; text?: string; label: string };

export type CardInfo = {
  title: string;
  desc: string;
  points: string[];
  tags: string[];
  stats?: Stat[];
  workflow?: boolean; // shows the H5P workflow diagram inside the card
};

export type Phase = { title: string; period: string; summary: string; cards: CardInfo[] };

export const h5pWorkflow = [
  { title: "Moodle", desc: "≈700 H5P activities and quizzes" },
  { title: "Python + API", desc: "Pulls them to my computer for review" },
  { title: "Code + AI", desc: "Converts them into Canvas activities" },
  { title: "Manual check", desc: "Every activity fixed with HTML and CSS" },
  { title: "Canvas", desc: "Injected into the Swedish, English and Sign Language courses" },
];

export const phases: Phase[] = [
  {
    title: "Digital Pedagogy Trainee",
    period: "16.3. – 31.7.2026",
    summary:
      "My traineeship was about digital pedagogy and the Moodle to Canvas migration. After about a month of onboarding I worked in a team of three, mostly remotely with about two days a month at the Helsinki campus. Inside the team we used Finnish, with partner companies English. When Humak decided to drop H5P, my traineeship was extended to the end of July so I could take on the conversion.",
    cards: [
      {
        title: "Moodle to Canvas migration",
        desc: "Humak moved its learning environment from Hoodle (Moodle) to Canvas, and I was part of that project.",
        points: [
          "Tested trial migrations, found and reported failed content to the migration partner K16 before the main migration.",
          "Worked with Eduix on the Canvas–Peppi interface, so Canvas courses and codes transferred to Peppi.",
          "Built contacts and worked with partners in the US and UK in English.",
          "Responsible for quality assurance and reporting of the migration processes, and for coordinating and prioritising the steps as the situation changed.",
        ],
        tags: ["Canvas", "Moodle", "Peppi", "QA", "Stakeholders"],
      },
      {
        title: "Training and materials for teachers and students",
        desc: "Designed and built training and onboarding for the new platform.",
        points: [
          "Wrote a Moodle–Canvas terminology glossary to support the change.",
          "Taught Canvas Studio to teachers and students as course material, with video, text and modules, and explained it with practical examples.",
          "Made video modules and instructions for Canvas Studio, and gave Finnish-language webinars with live Q&A.",
          "Built three introductory Canvas courses for students and teachers, with my own videos, texts and quizzes.",
          "Used ThingLink to train staff with videos and instructions in Finnish and English.",
          "Guided teachers in using AI for teaching materials.",
        ],
        tags: ["Canvas Studio", "ThingLink", "Webinars", "Onboarding"],
        stats: [{ value: 3, label: "Canvas courses for students and teachers" }],
      },
      {
        title: "RAG-based AI agent for the Canvas transition",
        desc: "To support the move to Canvas I built an AI agent that helps students and teachers find their way in the new learning environment.",
        points: [
          "Retrieval-augmented agent (RAG), so users could learn the new platform at their own pace.",
          "Also built chatbots, agents that produce infographics, and Canvas and Moodle browser tools that make staff's daily work easier.",
          "Trained students and teachers to use and build RAG solutions and LLM agents.",
        ],
        tags: ["RAG", "LLM agents", "Chatbots", "Browser tools"],
      },
      {
        title: "H5P to Canvas conversion with code and AI",
        desc: "Almost 700 H5P activities would have had to be rebuilt in Canvas by hand. I did it differently.",
        points: [
          "Built a workflow with code and AI that converted the H5P activities into equivalent Canvas activities and injected them straight into the Swedish, English and Sign Language courses.",
          "Wrote a Python tool that pulled Moodle activities and quizzes through the API to my own computer, so I could order, review and test them locally.",
          "Checked and adjusted every activity by hand. Using HTML and CSS in Canvas quizzes I rebuilt drag-and-drop, image-audio and interactive video exercises that Canvas does not support natively.",
          "About six months of manual work was finished in two weeks.",
        ],
        tags: ["Python", "Claude", "HTML", "CSS", "H5P", "API"],
        stats: [{ prefix: "≈", value: 700, label: "H5P activities converted to Canvas" }],
        workflow: true,
      },
      {
        title: "Canvas administration and IT support",
        desc: "Worked as a Moodle and Canvas administrator and as technical support.",
        points: [
          "Helped teachers create modules and course templates, build exams and assignments, and manage media. Automated course template creation and course copying.",
          "Used AI to plan course structures and adjust settings.",
          "Supported colleagues with Windows, Microsoft software, SharePoint, cloud systems and AI tools (deployment, updates, ethical use, user permissions, accessibility).",
          "Took part in procurement of accessibility solutions such as captioning software, and of video and learning analytics tools.",
          "Tested AI-based training services in practice when they were being procured, and helped with the choice.",
        ],
        tags: ["Canvas admin", "Moodle admin", "Microsoft 365", "Procurement"],
      },
    ],
  },
  {
    title: "Digital Pedagogy Expert",
    period: "24.8. – 30.9.2026",
    summary:
      "After the traineeship I continued as an hourly Digital Pedagogy Expert (80 hours). Humak had moved to Canvas in August, so the job was to make sure the new courses worked and to help teachers get them right.",
    cards: [
      {
        title: "Quality review of the new Canvas courses",
        desc: "Reviewed the new courses from both the student's and the teacher's point of view, with a focus on digital pedagogy.",
        points: [
          "Evaluated 60 large courses: daytime, blended and self-study mass courses.",
          "Checked pedagogical quality, accessibility and functionality, and documented the issues I found.",
          "Fixed deficiencies and updated the courses when needed.",
        ],
        tags: ["Course design", "Accessibility", "Quality assurance"],
        stats: [{ value: 60, label: "large courses reviewed" }],
      },
      {
        title: "Teacher support after go-live",
        desc: "Helped teachers with the problems that came up when the new learning environment was in real use.",
        points: [
          "Supported teachers with corrections and with support tickets.",
          "Helped with different kinds of online learning environment problems.",
          "Reported recurring problems together with recommendations for fixing them.",
        ],
        tags: ["Support tickets", "Canvas", "Recommendations"],
      },
    ],
  },
];
