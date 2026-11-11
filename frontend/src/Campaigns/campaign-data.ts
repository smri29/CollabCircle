export type CampaignModule = { number: string; title: string; description: string; icon: "shield" | "ai" | "research" | "careers" };

export type Campaign = {
  slug: string;
  imagePath: string;
  bannerPath?: string;
  title: string;
  subtitle: string;
  overview: string[];
  modules: CampaignModule[];
  metrics: [string, string][];
  format: string[];
  takeaways: string[];
  ctaHeading: string;
  ctaSubtext: string;
};

export type CampaignTheme = {
  slug: string;
  name: string;
  imagePath: string;
  description: string;
  campaigns: Campaign[];
};

export const campaignThemes: CampaignTheme[] = [
  {
    slug: "ideas-made-to-move-people",
    name: "Ideas Made to Move People",
    imagePath: "/Campaigns/Ideas%20Made%20to%20Move%20People.png",
    description: "Ideas Made to Move People is the driving force behind our outreach initiatives—turning modern technology, research, and cyber awareness into tangible human impact.",
    campaigns: [
      {
        slug: "project-spark-1",
        imagePath: "/Campaigns/ProjectSpark1.png",
        bannerPath: "/Campaigns/Project%20Spark_%20Igniting%20Digital%20Futures.png",
        title: "Project Spark 1.0: Igniting Young Minds in AI, Cyber Safety & Tech",
        subtitle: "Empowering students with real-world digital literacy, artificial intelligence awareness, cyber self-defense, and future career roadmaps.",
        overview: [
          "At CollabCircle Official, we believe technology only reaches its true potential when it uplifts communities. Project Spark 1.0 is our flagship youth outreach seminar designed specifically for high school students at local community and NGO schools.",
          "While traditional ICT textbooks introduce basic computing concepts, today's teenagers navigate a complex digital world filled with rapid AI advancements and online threats. Through an interactive, two-hour live bootcamp led by our Research, Development, and Cybersecurity teams, we bridge the gap between classroom theory and modern tech reality.",
        ],
        modules: [
          { number: "01", title: "Cyber Safety & Digital Self-Defense", description: "Equip young internet users with practical digital hygiene. Students learn to identify phishing scams, protect family mobile financial accounts, secure social media profiles, and defend against cyberbullying.", icon: "shield" },
          { number: "02", title: "Artificial Intelligence in Everyday Life", description: "Demystify AI and Machine Learning by showing how AI works behind the scenes, how students can use AI tools ethically in their studies, and how to spot AI-generated misinformation.", icon: "ai" },
          { number: "03", title: "The Power of Research & Building", description: "Turn curiosity into creation through live, visual code demonstrations that show how websites and mobile apps are engineered from a single idea.", icon: "research" },
          { number: "04", title: "Future Tech Careers & Roadmaps", description: "Introduce clear pathways in Software Engineering, Cybersecurity, AI Research, and Quality Assurance that students can begin exploring after their SSC exams.", icon: "careers" },
        ],
        metrics: [["Target Group", "School/College Students"], ["Core Focus", "AI, Cyber Safety, Research & Careers"], ["Initiative Type", "Community & NGO School Outreach"], ["Powered By", "CollabCircle"]],
        format: ["1:30–2-hour interactive seminar and live tech demo", "Designed for school and college students", "Delivered by CollabCircle Research, Development, and Cybersecurity teams"],
        takeaways: ["The Spark Quiz Challenge is a live, 10-question assessment testing what students learned during the session.", "Special recognition awards are given to the top three winners: 1st, 2nd, and 3rd place.", "Every participating student receives an official CollabCircle Certificate of Participation, starter gifts, and refreshments."],
        ctaHeading: "Want to Host Project Spark at Your School?",
        ctaSubtext: "We partner with schools, youth organizations, and NGOs to bring free digital literacy and cyber safety seminars directly to students.",
      },
    ],
  },
];

export function getTheme(slug: string) { return campaignThemes.find((theme) => theme.slug === slug); }
export function getCampaign(themeSlug: string, campaignSlug: string) { return getTheme(themeSlug)?.campaigns.find((campaign) => campaign.slug === campaignSlug); }
