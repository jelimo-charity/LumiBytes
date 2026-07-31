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
    id: "1",
    title: "What is Progress Really Like?",
    excerpt: "Progress is not linear. It's about persisting through the valley of disappointment and breaking through the plateau of latent potential. A reflection on patience, consistency, and courage in personal growth.",
    coverImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    content: `"When nothing seems to help, I go and look at a stonecutter hammering away at his rock, perhaps a hundred times without as much as a crack showing in it. Yet at the hundred and first blow it will split in two, and I know it was not that last blow that did it — but all that had gone before." — Jacob A. Riis.

This is my journey to redefining myself and to living an enlightened healthy existence. I've habits to break and habits to build. What am I learning about progress in this journey? Progress is not linear as I might have expected. The bad habits do not disappear in a day after we identify them, write them on a paper and the good habits do not build up in a day as well after we pen them down to replace the bad habits we want to break.

## The Valley of Disappointment

I have felt disappointed by myself when the next day, the next week I found myself in the same bad habit I promised myself to break. I have felt demotivated when my hardwork after weeks, months don't yield the results I've expected. Often, I've expected my efforts to yield the results quickly. That's not the point.

This is the new lesson I'm learning from the book **'Atomic Habits'** by James Clear. The work and efforts are not wasted. It is simply being stored. It is not until much later that the full value of previous efforts is revealed. The reality is we have to go through the "valley of disappointment" but the work, the efforts should persist enough to break the "plateau of latent potential".

## The Plateau of Latent Potential

Bamboo can barely be seen for the first five years as it builds extensive root systems underground before exploding ninety feet into the air within six weeks.

The moment we find ourselves struggling to build a good habit and break a bad habit, it is because we have not yet crossed the plateau. Complaining of not getting the results is like complaining why the bamboo has not built the roots within the early stages in the air.

When we finally break through the Plateau of Latent Potential, it is like an overnight success. The outside world only sees the most dramatic event rather than all that preceded it. But you know that it's the work you did long ago — when it seemed that you weren't making any progress — that makes the jump today possible.

## The Sum of All Efforts

It's not only the last blow that splits the rock. It's not just the weeks when the bamboo finally explodes to the air. It's the sum of all the efforts we make until we break the plateau of latent potential.

These require patience and consistency. These need courage. **Courage is to be disappointed, demotivated, afraid but with our knees knocking, heart beating and hands shaking to step out anyway, make a bold move to advance toward breaking the plateau of latent potential.**

Progress is not about the dramatic moments we see. It's about the hundred blows before the rock splits. It's about the five years of underground growth before the bamboo shoots up. It's about showing up day after day, even when we can't see the results yet.

The work is not wasted. It's being stored. And one day, when we least expect it, everything we've been building will reveal itself.`,
    date: "April 23, 2023",
    readTime: "3 min read",
    category: "Personal Growth",
    tags: ["Growth", "Habits", "Mindset", "Positivity"],
    type: "personal",
  },
  {
    id: "2",
    title: "The Present",
    excerpt: "Balance lives in the moment. A reflection on bringing ourselves back to the present, removing expectations, and discovering the transformative power of awareness.",
    coverImage: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
    content: `The world is a classroom to teach us something about ourselves. With every experience I'm learning to ask myself, **"What is this really about? What am I supposed to learn?"**

## Finding Balance in the Moment

Every experience is a gift that forces us to move right or left to find a new center of gravity. And balance lives in the moment. When we feel the earth is moving, we need to bring ourselves back to the present. Sometimes we expect much from ourselves, from those we love, from the world, and when these expectations are not met, we are disappointed. Balance lives in the moment. I'm removing any expectations I have of myself and bringing myself back to the now.

Oprah Winfrey wrote in the book **'What I Know for Sure'**: "There is no real meaning to life without a spiritual component. And spirit to me is the essence of who we are. It doesn't require any particular belief. And the key to this is simply being aware of the present moment".

## The Essence of Being Alive

The present is transformative and redefines what it means to be alive. It redefines what it means to live an enlightened healthy existence.

When we anchor ourselves in the present moment, we free ourselves from the weight of past regrets and future anxieties. We discover that true peace exists not in achieving perfection, but in accepting where we are right now. The present moment is all we truly have, and it holds infinite possibility for growth, healing, and transformation.

This awareness becomes our foundation—a place where we can breathe, reset, and move forward with clarity and purpose.`,
    date: "April 18, 2023",
    readTime: "1 min read",
    category: "Mindfulness",
    tags: ["Mindfulness", "Personal Growth", "Balance", "Presence"],
    type: "personal",
  },
  {
    id: "3",
    title: "Embracing the Unexpected",
    excerpt: "As 2024 unfolded differently than planned, I discovered valuable lessons about resilience, positivity, and the importance of backing goals with consistent action.",
    coverImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    content: `As the new year unfolded, I envisioned a version of myself committed to early mornings, diving into books, honing skills, and leveling up to a better woman. The start of 2023 seemed promising; I diligently pursued personal growth, establishing a morning routine, embracing hardcopy books instead of softcopy to minimize screen time, incorporating workouts into my life amongst others. Closing the year with a sense of accomplishment, I looked forward to carrying the same momentum into 2024.

Little did I anticipate that January would unfold differently.

## The Valley of Doubt

In the third week of the year, I found myself questioning my own actions, wondering why progress seemed elusive. I grappled with a sense of displacement, a feeling of being ten steps back after moving two steps forward. Worry and fear crept in, stealing my energy and reducing me to tears. One morning I decided to seek refuge in the company of a friend, I shared my struggles, and the encounter became a turning point, offering a renewed sense of strength.

Over the following two weeks, I redirected my focus towards positivity, determined to overcome present challenges and extract valuable lessons. Despite the uncertainties, I maintained hope that things would get better. Here are the valuable lessons I gained and the intentional steps I took to find my way back to the center, regaining control over my life and embracing the unexpected journey that 2024 had laid out before me.

## 1. Pour Yourself Into Positivity

Each morning, instead of finding uplifting content, I prioritized social media easily accessible and entertaining to silence my worries, fear and pain. Remember, it is not a solution! The day ends, you have achieved less and the result is more worry. Be intentional with whatever you feed yourself during the low moments, they can either rejuvenate or weaken you.

**No matter where you are on the pathway of your life, please don't let the pain, fear and stressful worries hinder the glory of your future.** It is wise to remain calm and positive and remember splendid victories and outright blessings are coming your way. Embrace the present and know you're exactly where you need to be to receive the growth you need.

If you feel drained and sense chaos in your life, this is because your fears are a little stronger than your faith. Remind yourself: excuses are seducers, fears are liars and your doubts are thieves. Choose positivity as your guiding light!

## 2. Put It Down on Paper

Entering 2024 without a clear vision proved challenging. Merely desiring a continuation of the past year wasn't sufficient. I've learned the importance of putting my goals down on paper. Having a tangible record creates a huge shift, reducing the risk of worry. A clear direction allows for gradual progress, bringing a sense of fulfillment and satisfaction. Without a defined vision, we may succumb to fear and worry.

## 3. Back Up Your Goals with Application

Intentions and ideas are worth nothing unless they are backed by action. The small implementations you make daily are essential. Make a decision to act on your intentions everyday—achieving small objectives or a module of your work provides motivation. Expecting progress where there is no application leads to frustration.

## Moving Forward

I've come to understand that life's narrative doesn't always follow the script we meticulously write. The unexpected twists, challenges, and moments of self-reflection are integral parts of our personal growth story. As I navigated the uncertainties of January, I discovered that embracing the journey requires a resilient spirit, a commitment to positivity, and a proactive approach to turning aspirations into reality.

By pouring myself into positivity, putting my goals on paper, and backing them with consistent action, I reclaimed control over my narrative. So, as I look ahead to the unwritten chapters of 2024, I am not just a spectator; I am an active participant, ready to embrace whatever twists and turns may come my way, knowing that each unexpected moment is an opportunity for growth and self-discovery.`,
    date: "February 16, 2024",
    readTime: "3 min read",
    category: "Life Lessons",
    tags: ["Self-Improvement", "Resilience", "Goals", "Positivity"],
    type: "personal",
  },
  {
    id: "4",
    title: "Hey Tech Newbies: Some Insights for Beginners",
    excerpt: "Essential insights for newcomers in tech about mentorship, dealing with pressure, and building your career with patience and persistence.",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
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
    type: "personal",
  }
];
