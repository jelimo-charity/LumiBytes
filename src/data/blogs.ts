export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage?: string;
  externalUrl?: string;
  type: "technical" | "personal";
}

export const blogs: Blog[] = [
  {
    id: "dev-dbt-opensky",
    title: "Using dbt to Transform OpenSky Flight Data",
    excerpt:
      "How I used dbt Core to turn OpenSky aircraft state vectors into analytics-ready models—covering modular SQL, testing, documentation, and medallion-style layering.",
    coverImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    content: `This article is published on DEV.\n\n[Read on DEV](https://dev.to/data_with_jelimo/using-dbt-to-transform-opensky-flight-data-2b51)`,
    date: "August 6, 2026",
    readTime: "Read on DEV",
    category: "Data Engineering",
    tags: ["dbt", "SQL", "Data Engineering", "OpenSky"],
    externalUrl:
      "https://dev.to/data_with_jelimo/using-dbt-to-transform-opensky-flight-data-2b51",
    type: "technical",
  },
  {
    id: "dev-warehouse",
    title: "What's a data warehouse?",
    excerpt:
      "A simple, practical explanation of what a data warehouse is, why businesses need it, and how it differs from operational databases, data lakes, and lakehouses.",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    content: `This article is published on DEV.\n\n[Read on DEV](https://dev.to/data_with_jelimo/whats-a-data-warehouse-7f0)`,
    date: "March 29, 2026",
    readTime: "Read on DEV",
    category: "Data Engineering",
    tags: ["Data Warehouse", "Data Engineering", "Analytics", "Beginners"],
    externalUrl: "https://dev.to/data_with_jelimo/whats-a-data-warehouse-7f0",
    type: "technical",
  },
  {
    id: "dev-matviews",
    title: "Refreshing PostgreSQL Materialized Views Without Downtime",
    excerpt:
      "A practical guide to refreshing materialized views safely in production—covering lock behavior, concurrent refresh caveats, and a blue/green swap strategy for minimizing downtime.",
    coverImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    content: `This article is published on DEV.\n\n[Read on DEV](https://dev.to/data_with_jelimo/refreshing-postgresql-materialized-views-without-downtime-28n6)`,
    date: "May 14, 2026",
    readTime: "Read on DEV",
    category: "PostgreSQL",
    tags: ["PostgreSQL", "Performance", "SQL", "Materialized Views"],
    externalUrl:
      "https://dev.to/data_with_jelimo/refreshing-postgresql-materialized-views-without-downtime-28n6",
    type: "technical",
  },
  {
    id: "dev-cte",
    title: "Common Table Expressions",
    excerpt:
      "A beginner-friendly introduction to SQL CTEs—what they are, why they matter, and how they can make complex queries easier to read and maintain.",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    content: `This article is published on DEV.\n\n[Read on DEV](https://dev.to/data_with_jelimo/common-table-expressions-59bd)`,
    date: "February 25, 2026",
    readTime: "Read on DEV",
    category: "SQL",
    tags: ["SQL", "CTE", "PostgreSQL", "Beginners"],
    externalUrl: "https://dev.to/data_with_jelimo/common-table-expressions-59bd",
    type: "technical",
  },
  {
    id: "4",
    title: "Hey Tech Newbies: Some Insights for Beginners",
    excerpt:
      "Essential insights for newcomers in tech about mentorship, dealing with pressure, and building your career with patience and persistence.",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    content: `As a newbie in the tech industry, every single day is an opportunity to learn and re-learn. It is a day to act and make a step or a day to fail, an opportunity to relearn a concept and rise up again. This is my journey thus far, of victories and failures, a whole journey that assures me I'm alive. I'd like to share some insights to fellow newbies in the field that this may guide us as we grow and build our brands in the industry.

This week I had a chance to join two spaces discussing mentorship and the pressure on newbies in this industry, and this is what I learnt:

## Mentorship: Your Growth Catalyst

Mentorship is a developmental relationship where one person helps another make significant positive changes in thinking, knowledge and work. It involves a **mentor** (well-experienced in their field who supports a mentee) and a **mentee** (the one who requires help and support and receives guidance from a mentor).

### The Numbers Tell a Story

**Stats Kenya** reveals that out of 100 university students, **73 do not receive mentorship** outside of their classrooms. This is shocking, right?

But here's the promising part: **89% of people who receive mentorship proceed to mentor others.** This shows how mentorship matters and creates a positive ripple effect.

### What to Look for in a Mentor

As we try and find mentors as newbies, this is what we should look for:

**Cheerleader** - Someone to cheer us on and who celebrates with us our small wins everyday is key. Having someone in your corner who genuinely believes in your potential makes all the difference.

**Resourceful** - One that provides the necessary resources we need to help us grow in the field. Whether it's sharing learning materials, introducing you to opportunities, or connecting you with others in the industry.

**Listener** - Someone who is always ready to listen to what we have to say. A mentor who takes time to understand your challenges, concerns, and aspirations without judgment.

It is our duty as mentees to face the fears, engage our mentors actively, and grow/make small milestones each day. The relationship works best when both parties are committed.

## Dealing with Pressure

As newbies we get so much pressure. Everyone has their reason as to why they joined this industry—be it the love and passion like me, money for others, or any other reason. Here are the advices I got on handling pressure in tech:

### Understanding the Journey

**This is a career and it takes time** to build knowledge and skills. Tech is an ambiguous and dynamic industry with demand on the rise. There is pressure to deliver and to get somewhere, but rushing the process often leads to burnout.

**The industry experts we admire did not win in a day.** They've toiled to be where they are. Each one of them has their own journey, so we also have to own our individual journeys. Comparison is the thief of joy—focus on your own progress.

### Keys to Success

**Join with an open mind** - Appreciate your journey, trust the process, start somewhere and use it as a stepping stone to get to where you want to be.

**Giving up is not an option** to take. It's about zeal, giving yourself motivation and just playing your cards right. Everything is doable and so let's master the skills and learn everyday.

**Build gradually** - You don't need to know everything at once. Master the fundamentals, then layer on complexity as you grow. Each small win builds your confidence and competence.

**Find your community** - Connect with other learners. Share struggles, celebrate wins together, and learn from each other's experiences. You're not alone in this journey.

## Final Thoughts

The tech industry can feel overwhelming, especially at the beginning. But remember: every expert was once a beginner. Every person you admire struggled with imposter syndrome, failed at something, and had moments of doubt.

What sets successful people apart isn't raw talent—it's persistence, continuous learning, and the willingness to keep showing up even when it's hard.

I hope these insights help us all as we work on building our careers in tech. Let's support each other, celebrate our progress, and remember that slow progress is still progress. All the best!

**Your journey is valid. Your pace is perfect. Keep going.**`,
    date: "November 11, 2022",
    readTime: "3 min read",
    category: "Career Advice",
    tags: ["Web Development", "Mentorship", "Career Growth", "Beginners"],
    type: "technical",
  },
  {
    id: "medium-good-things-are-here",
    title: "Good things are here.",
    excerpt:
      "A reflection on showing up through uncertainty—learning to trust the process, loosen control, and keep moving forward in the middle of becoming.",
    coverImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    content: `This article is published on Medium.\n\n[Read on Medium](https://medium.com/@charityjelimo/good-things-are-here-8254c9d2c096)`,
    date: "Apr 7, 2026",
    readTime: "3 min read",
    category: "Personal Growth",
    tags: ["Becoming", "Faith", "Courage", "Growth"],
    externalUrl: "https://medium.com/@charityjelimo/good-things-are-here-8254c9d2c096",
    type: "personal",
  },
  {
    id: "medium-when-the-world-quietly-changes",
    title: "When the World Quietly Changes",
    excerpt:
      "Stepping into adulthood and learning to live in the in-between—balancing responsibility, identity, and the questions that shape a new season.",
    coverImage:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&q=80",
    content: `This article is published on Medium.\n\n[Read on Medium](https://medium.com/@charityjelimo/when-the-world-quietly-changes-8e2cbb51bf42)`,
    date: "Jul 3, 202",
    readTime: "2 min read",
    category: "Life",
    tags: ["Adulthood", "Change", "Reflection", "Twenties"],
    externalUrl:
      "https://medium.com/@charityjelimo/when-the-world-quietly-changes-8e2cbb51bf42",
    type: "personal",
  },
  {
    id: "medium-breaking-free-from-denial",
    title: "Breaking Free from Denial: How Embracing Truth Fuels Personal Growth",
    excerpt:
      "On how denial delays progress—and why facing uncomfortable truth, listening to feedback, and taking small steps forward unlocks growth.",
    coverImage:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&q=80",
    content: `This article is published on Medium.\n\n[Read on Medium](https://medium.com/@charityjelimo/breaking-free-from-denial-how-embracing-truth-fuels-personal-growth-0094e3ee68a4)`,
    date: "Oct 29, 2024",
    readTime: "2 min read",
    category: "Personal Growth",
    tags: ["Growth", "Truth", "Mindset", "Self-Reflection"],
    externalUrl:
      "https://medium.com/@charityjelimo/breaking-free-from-denial-how-embracing-truth-fuels-personal-growth-0094e3ee68a4",
    type: "personal",
  },
  {
    id: "medium-aftermath-of-graduation",
    title: "“In the Aftermath of Graduation”",
    excerpt:
      "A post-graduation reflection on uncertainty, gratitude, and entering a new chapter—learning to trust the path even without all the answers.",
    coverImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    content: `This article is published on Medium.\n\n[Read on Medium](https://medium.com/@charityjelimo/in-the-aftermath-of-graduation-f04ad8624af2)`,
    date: "Sep 30, 2024",
    readTime: "3 min read",
    category: "Life",
    tags: ["Graduation", "New Chapter", "Reflection", "Courage"],
    externalUrl:
      "https://medium.com/@charityjelimo/in-the-aftermath-of-graduation-f04ad8624af2",
    type: "personal",
  },
  {
    id: "medium-whispers-of-serenity",
    title: "Whispers of serenity .",
    excerpt:
      "A quiet Sunday morning—birds, church songs, and stillness. A moment to breathe, reconnect, and feel grounded in who you are.",
    coverImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    content: `This article is published on Medium.\n\n[Read on Medium](https://medium.com/@charityjelimo/whispers-of-serenity-bc5c5c840bd2)`,
    date: "Jul 21, 2024",
    readTime: "1 min read",
    category: "Mindfulness",
    tags: ["Mindfulness", "Peace", "Nature", "Stillness"],
    externalUrl:
      "https://medium.com/@charityjelimo/whispers-of-serenity-bc5c5c840bd2",
    type: "personal",
  },
  {
    id: "1",
    title: "What is Progress Really Like?",
    excerpt:
      "Progress is not linear. It's about persisting through the valley of disappointment and breaking through the plateau of latent potential. A reflection on patience, consistency, and courage in personal growth.",
    coverImage:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    content: `This article is published on Medium.\n\n[Read on Medium](https://medium.com/@charityjelimo/what-is-progress-really-like-b23e565862e9)`,
    date: "April 23, 2023",
    readTime: "3 min read",
    category: "Personal Growth",
    tags: ["Growth", "Habits", "Mindset", "Positivity"],
    externalUrl:
      "https://medium.com/@charityjelimo/what-is-progress-really-like-b23e565862e9",
    type: "personal",
  },
  {
    id: "2",
    title: "The Present",
    excerpt:
      "Balance lives in the moment. A reflection on bringing ourselves back to the present, removing expectations, and discovering the transformative power of awareness.",
    coverImage:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
    content: `This article is published on Medium.\n\n[Read on Medium](https://medium.com/@charityjelimo/taking-the-road-to-an-enlightened-healthy-existence-8f4040a7ccc2)`,
    date: "April 18, 2023",
    readTime: "1 min read",
    category: "Mindfulness",
    tags: ["Mindfulness", "Personal Growth", "Balance", "Presence"],
    externalUrl:
      "https://medium.com/@charityjelimo/taking-the-road-to-an-enlightened-healthy-existence-8f4040a7ccc2",
    type: "personal",
  },
];
