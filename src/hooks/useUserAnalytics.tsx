
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface UserData {
  id: string;
  email: string;
  display_name: string | null;
  created_at: string;
  last_sign_in_at: string | null;
  status: 'active' | 'inactive';
  role: 'parent' | 'admin';
}

interface ContentAnalytics {
  id: string;
  title: string;
  type: 'blog' | 'material';
  views: number;
  likes: number;
  comments: number;
  downloads?: number;
  created_at: string;
}

export const useUserAnalytics = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [content, setContent] = useState<ContentAnalytics[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);

        // Fetch user data with roles
        const { data: usersData, error: usersError } = await supabase
          .from('profiles')
          .select(`
            id,
            display_name,
            created_at,
            user_roles (role)
          `);

        if (usersError) throw usersError;

        // Transform user data
        const transformedUsers: UserData[] = usersData?.map(user => ({
          id: user.id,
          email: `user${user.id.slice(0, 8)}@example.com`, // Placeholder since we can't access auth.users directly
          display_name: user.display_name,
          created_at: user.created_at || new Date().toISOString(),
          last_sign_in_at: new Date().toISOString(),
          status: 'active' as const,
          role: user.user_roles?.[0]?.role || 'parent' as const
        })) || [];

        // Fetch articles
        const { data: articlesData, error: articlesError } = await supabase
          .from('articles')
          .select('id, title, views_count, likes_count, comments_count, created_at')
          .eq('published', true);

        if (articlesError) throw articlesError;

        // Fetch learning materials
        const { data: materialsData, error: materialsError } = await supabase
          .from('learning_materials')
          .select('id, title, views_count, downloads_count, created_at')
          .eq('published', true);

        if (materialsError) throw materialsError;

        // Transform content data
        const transformedContent: ContentAnalytics[] = [
          ...(articlesData?.map(article => ({
            id: article.id,
            title: article.title,
            type: 'blog' as const,
            views: article.views_count || 0,
            likes: article.likes_count || 0,
            comments: article.comments_count || 0,
            created_at: article.created_at
          })) || []),
          ...(materialsData?.map(material => ({
            id: material.id,
            title: material.title,
            type: 'material' as const,
            views: material.views_count || 0,
            likes: 0,
            comments: 0,
            downloads: material.downloads_count || 0,
            created_at: material.created_at
          })) || [])
        ];

        setUsers(transformedUsers);
        setContent(transformedContent);
      } catch (err) {
        console.error('Error fetching analytics:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch analytics');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return { users, content, loading, error };
};
