export type Lesson = { id: string; title: string; duration: string; description: string };

export type Course = {
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  summary: string;
  description: string;
  outcomes: string[];
  lessons: Lesson[];
  accent: string;
};

const lessonSet = (prefix: string, lessons: [string, string, string][]): Lesson[] => lessons.map(([title, duration, description], index) => ({ id: `${prefix}-${index + 1}`, title, duration, description }));

export const courses: Course[] = [
  {
    slug: "ai-and-machine-learning-fundamentals",
    title: "AI and Machine Learning Fundamentals",
    category: "Artificial intelligence",
    level: "Beginner",
    duration: "4 lessons",
    summary: "Build a clear foundation in artificial intelligence, machine learning, data, and model evaluation.",
    description: "An accessible introduction to the ideas behind modern AI and machine learning, designed for learners who want to understand the field before choosing a technical path.",
    outcomes: ["Explain core AI and machine learning concepts", "Distinguish supervised, unsupervised, and reinforcement learning", "Understand the role of data in model quality", "Describe how models are evaluated"],
    lessons: lessonSet("aiml", [["What are AI and machine learning?", "15 min", "Understand the relationship between artificial intelligence, machine learning, and deep learning."], ["Data, features, and labels", "18 min", "Learn how training data shapes what a model can learn."], ["Learning types and model behavior", "20 min", "Compare the major machine learning approaches and their common uses."], ["Evaluation and responsible use", "17 min", "Explore accuracy, generalization, bias, and responsible deployment."]]),
    accent: "ai",
  },
  {
    slug: "ai-for-beginners",
    title: "AI for Beginners",
    category: "Artificial intelligence",
    level: "Beginner",
    duration: "4 lessons",
    summary: "Discover how everyday AI systems work and how to use AI tools thoughtfully.",
    description: "A friendly first step into artificial intelligence for learners from any background, with practical examples and simple explanations of models, prompts, automation, and limitations.",
    outcomes: ["Recognize AI in everyday products", "Understand basic model and prompt concepts", "Write clearer instructions for AI tools", "Identify limitations and risks in AI outputs"],
    lessons: lessonSet("aib", [["AI in everyday life", "12 min", "See how recommendation, search, language, and vision systems use AI."], ["How modern AI learns", "16 min", "Learn the basic idea of training data, models, and predictions."], ["Working with AI tools", "15 min", "Practice giving clear context, constraints, and expected outputs."], ["Thinking critically about AI", "14 min", "Understand errors, bias, privacy, and human responsibility."]]),
    accent: "privacy",
  },
  {
    slug: "python-for-beginners",
    title: "Python for Beginners",
    category: "Programming",
    level: "Beginner",
    duration: "5 lessons",
    summary: "Start programming with Python through simple, practical examples.",
    description: "Learn the building blocks of Python programming and develop the confidence to write small programs, work with data, and solve problems step by step.",
    outcomes: ["Write and run basic Python programs", "Use variables, conditions, and loops", "Create reusable functions", "Work with lists, dictionaries, and simple files"],
    lessons: lessonSet("python", [["Your first Python program", "15 min", "Set up the basic mental model for code, values, and instructions."], ["Variables and data types", "18 min", "Work with text, numbers, booleans, and conversions."], ["Conditions and loops", "20 min", "Make programs respond to decisions and repeat useful work."], ["Functions and collections", "22 min", "Organize logic and manage groups of values."], ["A small practical project", "25 min", "Combine the fundamentals into a useful beginner program."]]),
    accent: "ai",
  },
  {
    slug: "intro-into-machine-learning",
    title: "Intro into Machine Learning",
    category: "Machine learning",
    level: "Beginner",
    duration: "4 lessons",
    summary: "Learn the workflow used to frame, train, and evaluate a machine learning problem.",
    description: "Move from general AI concepts into the practical machine learning lifecycle: defining a problem, preparing data, training a model, and checking whether the result is useful.",
    outcomes: ["Frame a machine learning problem", "Prepare a simple dataset", "Understand training and testing splits", "Interpret basic evaluation results"],
    lessons: lessonSet("intro-ml", [["Framing the problem", "17 min", "Turn a real-world question into a measurable prediction task."], ["Preparing the data", "20 min", "Explore cleaning, features, labels, and data quality."], ["Training a first model", "22 min", "Understand how a model learns patterns from examples."], ["Testing and improving", "20 min", "Use evaluation results to find weaknesses and improve responsibly."]]),
    accent: "security",
  },
  {
    slug: "machine-learning-using-python",
    title: "Machine Learning using Python",
    category: "Machine learning",
    level: "Intermediate",
    duration: "5 lessons",
    summary: "Apply a practical machine learning workflow using Python tools and datasets.",
    description: "A hands-on path for learners who know basic Python and want to build, evaluate, and communicate a small machine learning project.",
    outcomes: ["Prepare tabular data for modeling", "Train a baseline model in Python", "Compare useful evaluation metrics", "Document and communicate model results"],
    lessons: lessonSet("ml-python", [["The Python ML toolkit", "18 min", "Understand the role of notebooks, arrays, dataframes, and model libraries."], ["Loading and preparing datasets", "22 min", "Inspect, clean, transform, and split data for experiments."], ["Training baseline models", "24 min", "Build a first model and establish a meaningful baseline."], ["Metrics and error analysis", "25 min", "Read results beyond one score and investigate model errors."], ["Presenting a reproducible experiment", "20 min", "Capture assumptions, methods, results, and next steps clearly."]]),
    accent: "privacy",
  },
  {
    slug: "intro-to-deep-learning",
    title: "Intro to Deep Learning",
    category: "Deep learning",
    level: "Intermediate",
    duration: "4 lessons",
    summary: "Understand neural networks, training loops, and the ideas behind deep learning systems.",
    description: "Explore how neural networks represent patterns, learn through optimization, and power modern applications in language, vision, and other domains.",
    outcomes: ["Describe the structure of a neural network", "Understand parameters, loss, and optimization", "Recognize overfitting and generalization", "Choose sensible next steps for deeper study"],
    lessons: lessonSet("deep", [["Neurons and network layers", "18 min", "Build an intuitive picture of how neural networks transform inputs."], ["Loss, gradients, and training", "22 min", "Understand how a network adjusts itself from errors."], ["Generalization and regularization", "20 min", "Explore why models fail and how training can be controlled."], ["Deep learning in practice", "18 min", "Connect neural network ideas to language, vision, and real projects."]]),
    accent: "ai",
  },
  {
    slug: "software-development-for-beginners",
    title: "Software Development for Beginners",
    category: "Software development",
    level: "Beginner",
    duration: "5 lessons",
    summary: "Learn how software teams plan, build, test, and improve digital products.",
    description: "A broad introduction to software development for new learners, covering problem solving, version control, collaboration, testing, and the journey from idea to working product.",
    outcomes: ["Break a problem into manageable requirements", "Understand the software development lifecycle", "Use collaboration and version-control concepts", "Recognize the role of testing and maintenance"],
    lessons: lessonSet("software", [["From idea to requirement", "16 min", "Translate a goal into clear user needs and success criteria."], ["Code, projects, and structure", "18 min", "Understand files, modules, dependencies, and maintainable organization."], ["Working with a team", "19 min", "Learn the basics of Git, reviews, tasks, and communication."], ["Testing and debugging", "21 min", "Find problems systematically and protect working behavior."], ["Shipping and improving", "17 min", "See how software continues after the first release."]]),
    accent: "security",
  },
  {
    slug: "human-rights-a-tool-for-change",
    title: "Human Rights - a tool for change",
    category: "Society and impact",
    level: "Beginner",
    duration: "4 lessons",
    summary: "Explore human rights as a practical framework for dignity, participation, and positive change.",
    description: "Understand the foundations of human rights and how individuals, communities, and organizations can use rights-based thinking to recognize injustice and support meaningful action.",
    outcomes: ["Describe the basic principles of human rights", "Connect rights to everyday situations", "Recognize responsibility and participation", "Identify constructive ways to support change"],
    lessons: lessonSet("rights", [["What are human rights?", "16 min", "Explore dignity, equality, freedom, and universality."], ["Rights in everyday life", "18 min", "Connect human rights principles to education, work, identity, and community."], ["Recognizing harm and exclusion", "20 min", "Develop a clearer lens for unfair treatment and structural barriers."], ["Turning principles into action", "18 min", "Learn how informed participation can contribute to positive change."]]),
    accent: "privacy",
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
