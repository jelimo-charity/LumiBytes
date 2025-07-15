-- Create articles table
CREATE TABLE public.articles (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  content text,
  excerpt text,
  author_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  published boolean DEFAULT false NOT NULL,
  views_count integer DEFAULT 0 NOT NULL,
  likes_count integer DEFAULT 0 NOT NULL,
  comments_count integer DEFAULT 0 NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Create learning_materials table
CREATE TABLE public.learning_materials (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  content text,
  author_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  published boolean DEFAULT false NOT NULL,
  views_count integer DEFAULT 0 NOT NULL,
  downloads_count integer DEFAULT 0 NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_materials ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for articles
CREATE POLICY "Anyone can view published articles" 
ON public.articles 
FOR SELECT 
USING (published = true);

CREATE POLICY "Authors can manage their articles" 
ON public.articles 
FOR ALL 
USING (auth.uid() = author_id);

-- Create RLS policies for learning materials
CREATE POLICY "Anyone can view published materials" 
ON public.learning_materials 
FOR SELECT 
USING (published = true);

CREATE POLICY "Authors can manage their materials" 
ON public.learning_materials 
FOR ALL 
USING (auth.uid() = author_id);

-- Create admin function to get total users
CREATE OR REPLACE FUNCTION public.get_total_users()
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT COUNT(*)::integer FROM auth.users;
$$;

-- Create admin function to get active sessions (simplified version)
CREATE OR REPLACE FUNCTION public.get_active_sessions()
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT COUNT(*)::integer FROM auth.users WHERE last_sign_in_at > (now() - interval '24 hours');
$$;

-- Add triggers for updated_at
CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_learning_materials_updated_at
BEFORE UPDATE ON public.learning_materials
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();