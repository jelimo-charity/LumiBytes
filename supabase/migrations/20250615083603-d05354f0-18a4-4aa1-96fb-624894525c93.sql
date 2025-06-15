
-- Update user role for Charity to admin
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email ILIKE '%charity%'
ON CONFLICT (user_id, role) DO NOTHING;
