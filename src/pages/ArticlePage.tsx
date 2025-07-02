
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, User, Heart, Share2, BookOpen } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  const featuredContent = [
    {
      id: 1,
      title: "Building Emotional Intelligence in Toddlers",
      category: "Development",
      author: "Dr. Sarah Johnson",
      readTime: "8 min read",
      likes: 234,
      description: "Emotional intelligence is one of the most crucial skills your toddler can develop. This comprehensive guide explores proven techniques to help your little one identify, understand, and manage their emotions effectively.",
      tags: ["Toddlers", "Emotions", "Development", "Psychology"],
      gradient: "from-[#27187e] to-[#758bfd]",
      image: "🧠",
      fullContent: `
        <h2>Understanding Emotional Intelligence in Early Childhood</h2>
        <p>Emotional intelligence (EI) is the ability to recognize, understand, and manage our own emotions while effectively recognizing and responding to others' emotions. For toddlers, this foundational skill begins developing around 18 months and continues to mature throughout childhood.</p>
        
        <h3>Why Emotional Intelligence Matters</h3>
        <p>Research consistently shows that children with higher emotional intelligence:</p>
        <ul>
          <li>Perform better academically throughout their school years</li>
          <li>Have stronger, more meaningful relationships with peers and family</li>
          <li>Experience lower levels of anxiety and depression</li>
          <li>Demonstrate better problem-solving abilities</li>
          <li>Show greater resilience in facing challenges</li>
        </ul>

        <h3>The Building Blocks of Emotional Intelligence</h3>
        <p>Emotional intelligence consists of four key components that you can help your toddler develop:</p>
        
        <h4>1. Self-Awareness</h4>
        <p>Help your toddler identify and name their emotions. Use simple language like "I see you're feeling frustrated because the blocks fell down." This helps them connect internal feelings with external expressions.</p>

        <h4>2. Self-Management</h4>
        <p>Teach coping strategies through modeling and practice. Show them how to take deep breaths, count to ten, or use comfort objects when overwhelmed.</p>

        <h4>3. Social Awareness</h4>
        <p>Point out emotions in others: "Look at your sister's face. She looks sad. What do you think happened?" This builds empathy and observation skills.</p>

        <h4>4. Relationship Management</h4>
        <p>Guide them in responding appropriately to others' emotions. "When someone is sad, we can offer a hug or ask if they're okay."</p>

        <h3>Practical Strategies for Daily Life</h3>
        
        <h4>Create an Emotion-Rich Environment</h4>
        <p>Use emotion words throughout the day. Instead of just saying "good job," try "I can see you feel proud of yourself for putting on your shoes!"</p>

        <h4>Read Emotional Stories</h4>
        <p>Books are powerful tools for emotional learning. Choose stories that feature characters experiencing various emotions and discuss how the characters might be feeling.</p>

        <h4>Model Emotional Regulation</h4>
        <p>When you feel frustrated, verbalize your process: "I'm feeling frustrated right now. I'm going to take three deep breaths to help myself feel calmer."</p>

        <h4>Validate All Emotions</h4>
        <p>Remember that all emotions are valid, even if the behavior isn't acceptable. "I understand you're angry that it's time to leave the park. It's okay to feel angry, but we can't throw toys."</p>

        <h3>Common Challenges and Solutions</h3>
        
        <h4>Tantrums and Meltdowns</h4>
        <p>View tantrums as opportunities for learning rather than behavior problems. Stay calm, offer comfort, and help them identify what they're feeling once they've calmed down.</p>

        <h4>Difficulty Expressing Emotions</h4>
        <p>Some children struggle to verbalize emotions. Use visual aids like emotion cards or faces to help them communicate their feelings.</p>

        <h4>Overwhelming Emotions</h4>
        <p>Teach simple grounding techniques like naming five things they can see, four things they can touch, three things they can hear, and so on.</p>

        <h3>Building Long-Term Success</h3>
        <p>Remember that emotional intelligence develops over time. Be patient with your toddler's progress and celebrate small victories. The emotional skills they learn now will serve as the foundation for healthy relationships and emotional well-being throughout their life.</p>

        <p>By investing in your toddler's emotional development today, you're giving them tools that will help them navigate challenges, build meaningful relationships, and find greater happiness and success in all areas of their life.</p>
      `
    },
    {
      id: 2,
      title: "Healthy Screen Time Guidelines by Age",
      category: "Health",
      author: "Child Development Team",
      readTime: "12 min read",
      likes: 187,
      description: "Navigate the digital world with confidence using our comprehensive screen time guidelines. Based on the latest research from pediatric experts and child psychologists.",
      tags: ["Screen Time", "Health", "Guidelines", "Digital Wellness"],
      gradient: "from-[#758bfd] to-[#aeb8fe]",
      image: "📱",
      fullContent: `
        <h2>Understanding Screen Time in the Digital Age</h2>
        <p>In today's digital world, screens are everywhere. From smartphones to tablets, televisions to computers, our children are growing up surrounded by technology. While technology offers incredible learning opportunities, it's crucial to establish healthy boundaries that support your child's overall development.</p>

        <h3>Age-Appropriate Screen Time Guidelines</h3>
        
        <h4>Ages 0-18 Months: Avoid Screens (Except Video Chatting)</h4>
        <p>The American Academy of Pediatrics recommends avoiding screens for babies under 18 months, except for video chatting with family members. During this critical period, babies learn best through:</p>
        <ul>
          <li>Face-to-face interaction with caregivers</li>
          <li>Exploring their physical environment</li>
          <li>Developing motor skills through play</li>
          <li>Building secure attachment relationships</li>
        </ul>

        <h4>Ages 18-24 Months: Introduction with Co-Viewing</h4>
        <p>If you choose to introduce screens, watch together with your toddler. Choose high-quality programming and help them understand what they're seeing by:</p>
        <ul>
          <li>Narrating what's happening on screen</li>
          <li>Connecting content to real-world experiences</li>
          <li>Asking simple questions about what they see</li>
          <li>Limiting sessions to 15-30 minutes</li>
        </ul>

        <h4>Ages 2-5 Years: 1 Hour of High-Quality Content</h4>
        <p>Preschoolers can benefit from up to one hour of high-quality educational programming daily. Focus on content that:</p>
        <ul>
          <li>Teaches educational concepts (letters, numbers, problem-solving)</li>
          <li>Promotes social and emotional learning</li>
          <li>Encourages creativity and imagination</li>
          <li>Features diverse characters and experiences</li>
        </ul>

        <h4>Ages 6+ Years: Consistent Limits with Family Balance</h4>
        <p>For school-age children, establish consistent limits that ensure screen time doesn't interfere with:</p>
        <ul>
          <li>Adequate sleep (8-12 hours depending on age)</li>
          <li>Physical activity (at least 1 hour daily)</li>
          <li>Family time and social interactions</li>
          <li>Homework and educational activities</li>
        </ul>

        <h3>Quality Over Quantity: Choosing the Right Content</h3>
        
        <h4>Educational Programming Characteristics</h4>
        <p>Look for shows and apps that:</p>
        <ul>
          <li>Have clear educational goals</li>
          <li>Feature age-appropriate content</li>
          <li>Encourage interaction and participation</li>
          <li>Include diverse characters and perspectives</li>
          <li>Avoid excessive advertising or commercial content</li>
        </ul>

        <h4>Red Flags to Avoid</h4>
        <p>Be cautious of content that:</p>
        <ul>
          <li>Contains violence or scary imagery</li>
          <li>Promotes materialism or unhealthy behaviors</li>
          <li>Uses rapid scene changes or overstimulating effects</li>
          <li>Lacks educational value or clear learning objectives</li>
        </ul>

        <h3>Creating a Family Media Plan</h3>
        
        <h4>Establish Screen-Free Zones and Times</h4>
        <ul>
          <li><strong>Bedrooms:</strong> Keep screens out of bedrooms to protect sleep quality</li>
          <li><strong>Meal Times:</strong> Focus on family conversation and mindful eating</li>
          <li><strong>One Hour Before Bed:</strong> Blue light can interfere with sleep patterns</li>
          <li><strong>Car Rides:</strong> Encourage observation and conversation instead</li>
        </ul>

        <h4>Model Healthy Screen Habits</h4>
        <p>Children learn more from what we do than what we say. Practice:</p>
        <ul>
          <li>Putting devices away during family time</li>
          <li>Being mindful of your own screen usage</li>
          <li>Showing interest in offline activities</li>
          <li>Discussing your own media choices</li>
        </ul>

        <h3>Alternatives to Screen Time</h3>
        
        <h4>Indoor Activities</h4>
        <ul>
          <li>Art and craft projects</li>
          <li>Building with blocks or Legos</li>
          <li>Reading books together</li>
          <li>Playing board games or puzzles</li>
          <li>Cooking or baking together</li>
          <li>Music and dance activities</li>
        </ul>

        <h4>Outdoor Exploration</h4>
        <ul>
          <li>Nature walks and scavenger hunts</li>
          <li>Playground activities</li>
          <li>Gardening projects</li>
          <li>Sports and physical games</li>
          <li>Chalk drawing on sidewalks</li>
        </ul>

        <h3>Addressing Common Challenges</h3>
        
        <h4>Resistance to Limits</h4>
        <p>When children resist screen time limits:</p>
        <ul>
          <li>Explain the reasons behind the rules</li>
          <li>Offer appealing alternatives</li>
          <li>Use visual timers to help them understand time limits</li>
          <li>Stay consistent with boundaries</li>
          <li>Acknowledge their feelings while maintaining limits</li>
        </ul>

        <h4>Educational vs. Entertainment Balance</h4>
        <p>Aim for a balance that includes both educational content and age-appropriate entertainment. Pure entertainment isn't harmful in moderation, but prioritize content that supports learning and development.</p>

        <h3>The Role of Co-Viewing</h3>
        <p>Watching together transforms passive consumption into active learning. Co-viewing allows you to:</p>
        <ul>
          <li>Discuss what you're watching</li>
          <li>Answer questions and provide context</li>
          <li>Connect screen content to real-life experiences</li>
          <li>Model critical thinking about media messages</li>
        </ul>

        <h3>Preparing for the Digital Future</h3>
        <p>As your child grows, screen time guidelines will evolve. The goal is to help them develop:</p>
        <ul>
          <li>Self-regulation skills</li>
          <li>Critical thinking about media</li>
          <li>Balanced lifestyle habits</li>
          <li>Healthy relationships with technology</li>
        </ul>

        <p>Remember, these guidelines are starting points. Every family is different, and what works for one child may not work for another. The key is to remain intentional about your family's media use and adjust as needed to support your child's healthy development.</p>
      `
    }
    // Add more articles as needed...
  ];

  useEffect(() => {
    const foundArticle = featuredContent.find(article => article.id === parseInt(id));
    setArticle(foundArticle);
  }, [id]);

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleLike = () => {
    toast({
      title: "Article Liked!",
      description: "Added to your favorites",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share Link Copied",
      description: "Article link copied to clipboard",
    });
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f1f2f6] via-white to-[#aeb8fe]/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#27187e] mb-4">Article Not Found</h1>
          <Button onClick={handleBack} className="bg-gradient-to-r from-[#27187e] to-[#758bfd]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f2f6] via-white to-[#aeb8fe]/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-[#758bfd]/20 sticky top-0 z-10 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={handleBack}
              className="text-[#27187e] hover:bg-[#aeb8fe]/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLike}
                className="text-[#ff8600] hover:bg-[#ff8600]/10"
              >
                <Heart className="h-5 w-5 mr-1" />
                {article.likes}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleShare}
                className="text-[#758bfd] hover:bg-[#758bfd]/10"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-6xl">{article.image}</div>
            <div className="flex-1">
              <Badge className={`bg-gradient-to-r ${article.gradient} text-white border-0 px-4 py-2 rounded-full font-semibold mb-4`}>
                {article.category}
              </Badge>
              <h1 className="text-4xl font-bold text-[#27187e] mb-4 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center space-x-6 text-[#758bfd]">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Expert Guide</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#aeb8fe]/20 to-[#758bfd]/10 rounded-3xl p-6 border border-[#758bfd]/20 mb-8">
            <p className="text-lg text-[#27187e] leading-relaxed italic">
              {article.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-[#758bfd]/30 text-[#27187e] bg-[#aeb8fe]/20 rounded-full px-4 py-2">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <Card className="border-2 border-[#758bfd]/20 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl">
          <CardContent className="p-8">
            <div 
              className="prose prose-lg max-w-none text-[#27187e] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.fullContent }}
              style={{
                '--tw-prose-headings': '#27187e',
                '--tw-prose-body': '#27187e',
                '--tw-prose-bold': '#27187e',
                '--tw-prose-links': '#758bfd',
              }}
            />
          </CardContent>
        </Card>

        {/* Author Info */}
        <Card className="border-2 border-[#758bfd]/20 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#27187e] mb-4">About the Author</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#758bfd] to-[#ff8600] rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#27187e]">{article.author}</h3>
                <p className="text-[#758bfd]">Child Development Expert</p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default ArticlePage;
