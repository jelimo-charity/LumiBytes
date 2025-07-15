
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

        // Fetch user profiles
        const { data: profilesData, error: profilesError } = await supabase
          .from('profiles')
          .select('id, display_name, created_at');

        if (profilesError) throw profilesError;

        // Fetch user roles separately since there's no foreign key relationship
        const { data: rolesData, error: rolesError } = await supabase
          .from('user_roles')
          .select('user_id, role');

        if (rolesError) throw rolesError;

        // Create a map of user roles for easy lookup
        const userRolesMap = rolesData?.reduce((map, roleRecord) => {
          map[roleRecord.user_id] = roleRecord.role;
          return map;
        }, {} as Record<string, string>) || {};

        // Transform user data by combining profiles with roles
        const transformedUsers: UserData[] = profilesData?.map(profile => ({
          id: profile.id,
          email: `user${profile.id.slice(0, 8)}@example.com`, // Placeholder email
          display_name: profile.display_name || 'Unknown User',
          created_at: profile.created_at || new Date().toISOString(),
          last_sign_in_at: new Date().toISOString(), // Placeholder
          status: 'active' as const,
          role: (userRolesMap[profile.id] as 'admin' | 'parent') || 'parent'
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
