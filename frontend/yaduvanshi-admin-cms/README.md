# Yaduvanshi Degree College Admin CMS

## Install
npm install @supabase/supabase-js lucide-react

## Environment
Copy .env.example to .env and fill VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.

## Database
Run supabase/schema.sql in the Supabase SQL Editor.
Create an administrator in Authentication > Users, copy its UUID, then run:
insert into public.admin_users(id,display_name) values('AUTH-USER-UUID','Website Administrator');

## Routes
Copy the routes from src/App.admin-routes.txt into the existing App.jsx.

Admin URLs:
/admin/login
/admin
/admin/achievements
/admin/training-placement
/admin/gallery
/admin/nss

Do not put a Supabase service-role key in Vite environment variables. Only use the public anon key in the browser.
