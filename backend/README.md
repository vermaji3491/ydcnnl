# Backend setup

The backend stores application data in Supabase Postgres and authenticates administrators with Supabase Auth.

1. Run `../frontend/yaduvanshi-admin-cms/supabase/schema.sql` in the Supabase SQL Editor.
2. Add the Supabase project URL, anon/publishable key, and service-role key from `.env.example` to `.env`, retaining any existing admin credentials. Replace the example admin password before use. Keep the service-role key server-side; do not use a `VITE_` variable for it.
3. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD`, then run `npm install` and `npm run create-admin` from this directory.
4. Start the API with `npm run dev` or `npm start`.

The service-role key is used only by the backend for database operations. Admin login uses the public key to obtain a Supabase Auth access token, and protected API routes require that token's user ID to exist in `public.admin_users`.

Admission and recruitment file uploads are still written to the backend's local `uploads/` directory; Supabase stores their metadata. Use persistent server storage or migrate uploads to Supabase Storage before deploying where local files are ephemeral.