-- Insert sample articles
INSERT INTO public.articles (title, content, excerpt, author_id, published, views_count, likes_count, comments_count) VALUES
('Getting Started with Child Development', 'This comprehensive guide covers the basics of child development from infancy to adolescence...', 'Learn the fundamentals of child development and how to support your child at every stage.', '39c89107-7a5a-4ad8-b24f-9e1a953a8c29', true, 245, 18, 5),
('Effective Parenting Techniques', 'Discover proven parenting strategies that help build strong relationships with your children...', 'Evidence-based parenting techniques that work for families of all sizes.', '39c89107-7a5a-4ad8-b24f-9e1a953a8c29', true, 189, 24, 8),
('Understanding Child Psychology', 'Dive deep into the psychological development of children and learn how to recognize...', 'A parent''s guide to understanding their child''s emotional and psychological needs.', '39c89107-7a5a-4ad8-b24f-9e1a953a8c29', true, 156, 12, 3),
('Building Healthy Routines', 'Creating structure and routine is essential for child development. This article explores...', 'Learn how to establish healthy daily routines that benefit the whole family.', '39c89107-7a5a-4ad8-b24f-9e1a953a8c29', true, 203, 31, 7),
('Managing Screen Time', 'In today''s digital age, managing children''s screen time has become more important than ever...', 'Practical strategies for balanced screen time that promotes healthy development.', '39c89107-7a5a-4ad8-b24f-9e1a953a8c29', false, 89, 6, 2);

-- Insert sample learning materials
INSERT INTO public.learning_materials (title, description, content, author_id, published, views_count, downloads_count) VALUES
('Child Development Milestone Checklist', 'A comprehensive checklist to track your child''s developmental milestones from birth to 5 years.', 'PDF checklist with detailed milestones for physical, cognitive, social, and emotional development...', '39c89107-7a5a-4ad8-b24f-9e1a953a8c29', true, 312, 156),
('Parenting Toolkit: Communication Strategies', 'Essential communication tools and techniques for effective parent-child interactions.', 'Interactive workbook with exercises and real-world examples for improving family communication...', '39c89107-7a5a-4ad8-b24f-9e1a953a8c29', true, 278, 134),
('Age-Appropriate Activities Guide', 'Fun and educational activities categorized by age group to support learning and development.', 'Comprehensive guide with over 100 activities for children aged 0-12 years...', '39c89107-7a5a-4ad8-b24f-9e1a953a8c29', true, 421, 267),
('Behavior Management Workbook', 'Practical strategies and worksheets for managing challenging behaviors in children.', 'Step-by-step workbook with proven techniques for positive behavior reinforcement...', '39c89107-7a5a-4ad8-b24f-9e1a953a8c29', false, 145, 78);

-- Insert a profile for the current user
INSERT INTO public.profiles (id, display_name, bio) VALUES
('39c89107-7a5a-4ad8-b24f-9e1a953a8c29', 'Charity Jelimo', 'Child development specialist and parenting expert with over 10 years of experience helping families thrive.')
ON CONFLICT (id) DO UPDATE SET
display_name = EXCLUDED.display_name,
bio = EXCLUDED.bio;