-- Make Charity an admin
INSERT INTO public.user_roles (user_id, role) VALUES
('39c89107-7a5a-4ad8-b24f-9e1a953a8c29', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;