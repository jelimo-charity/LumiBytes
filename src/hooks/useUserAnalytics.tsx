
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

        // For now, use mock data until types are updated
        // TODO: Replace with actual database calls once types are generated
        const mockUsers: UserData[] = [
          {
            id: '1',
            email: 'charityjelimo893@gmail.com',
            display_name: 'Charity Jelimo',
            created_at: '2024-01-15T10:00:00Z',
            last_sign_in_at: '2024-07-15T14:00:00Z',
            status: 'active',
            role: 'admin'
          },
          {
            id: '2',
            email: 'parent1@example.com',
            display_name: 'Sarah Johnson',
            created_at: '2024-02-20T09:30:00Z',
            last_sign_in_at: '2024-07-14T16:20:00Z',
            status: 'active',
            role: 'parent'
          },
          {
            id: '3',
            email: 'parent2@example.com',
            display_name: 'Michael Chen',
            created_at: '2024-03-10T11:15:00Z',
            last_sign_in_at: '2024-07-13T08:45:00Z',
            status: 'active',
            role: 'parent'
          }
        ];

        const mockContent: ContentAnalytics[] = [
          {
            id: '1',
            title: 'Understanding Child Development',
            type: 'blog',
            views: 234,
            likes: 18,
            comments: 5,
            created_at: '2024-06-01T10:00:00Z'
          },
          {
            id: '2',
            title: 'Parenting Guide PDF',
            type: 'material',
            views: 156,
            likes: 0,
            comments: 0,
            downloads: 42,
            created_at: '2024-06-15T14:30:00Z'
          },
          {
            id: '3',
            title: 'Building Healthy Habits',
            type: 'blog',
            views: 189,
            likes: 25,
            comments: 8,
            created_at: '2024-07-01T09:15:00Z'
          }
        ];

        setUsers(mockUsers);
        setContent(mockContent);
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
