
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
        
        // For now, use mock data until types are updated
        // TODO: Replace with actual database calls once types are generated
        setStats({
          totalUsers: 125,
          activeSessions: 23,
          publishedArticles: 15,
          monthlyViews: 2847
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
