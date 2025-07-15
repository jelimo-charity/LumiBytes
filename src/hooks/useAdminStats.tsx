
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AdminStats {
  totalUsers: number;
  activeSessions: number;
  publishedArticles: number;
  monthlyViews: number;
}

export const useAdminStats = () => {
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    activeSessions: 0,
    publishedArticles: 0,
    monthlyViews: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Get total users count
        const { data: totalUsersData, error: usersError } = await supabase
          .rpc('get_total_users');
        
        if (usersError) throw usersError;

        // Get active sessions count
        const { data: activeSessionsData, error: sessionsError } = await supabase
          .rpc('get_active_sessions');
        
        if (sessionsError) throw sessionsError;

        // Get published articles count
        const { count: articlesCount, error: articlesError } = await supabase
          .from('articles')
          .select('*', { count: 'exact', head: true })
          .eq('published', true);
        
        if (articlesError) throw articlesError;

        // Get monthly views (sum of all article views)
        const { data: viewsData, error: viewsError } = await supabase
          .from('articles')
          .select('views_count')
          .eq('published', true);
        
        if (viewsError) throw viewsError;

        const monthlyViews = viewsData?.reduce((sum, article) => sum + (article.views_count || 0), 0) || 0;

        setStats({
          totalUsers: totalUsersData || 0,
          activeSessions: activeSessionsData || 0,
          publishedArticles: articlesCount || 0,
          monthlyViews
        });
      } catch (err) {
        console.error('Error fetching admin stats:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
};
