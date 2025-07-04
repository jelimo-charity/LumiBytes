
-- Set charity.kipruto@griffinglobaltech.com as admin
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'charity.kipruto@griffinglobaltech.com'
ON CONFLICT (user_id, role) DO NOTHING;
