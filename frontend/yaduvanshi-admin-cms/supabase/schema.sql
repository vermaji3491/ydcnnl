create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.achievements (
  id uuid primary key default gen_random_uuid(), title text not null, period text,
  category text default 'University Position', student_name text, description text,
  image_url text, video_url text, created_at timestamptz default now(), updated_at timestamptz default now()
);
create table if not exists public.industrial_visits (
  id uuid primary key default gen_random_uuid(), company_name text not null, visit_date date,
  location text, category text, duration text, students text, purpose text, description text,
  what_students_saw text, activities text, learnings text, outcomes text, coordinator text,
  main_image text, video_url text, gallery jsonb default '[]'::jsonb,
  created_at timestamptz default now(), updated_at timestamptz default now()
);
create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(), title text not null, category text default 'Campus',
  description text, media_type text default 'image' check(media_type in ('image','video')),
  media_url text not null, created_at timestamptz default now(), updated_at timestamptz default now()
);
create table if not exists public.nss_activities (
  id uuid primary key default gen_random_uuid(), title text not null, activity_date date, year text,
  location text, description text, students_participated text, main_image text, video_url text,
  gallery jsonb default '[]'::jsonb, created_at timestamptz default now(), updated_at timestamptz default now()
);

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.admin_users where id=auth.uid());
$$;

alter table public.admin_users enable row level security;
alter table public.achievements enable row level security;
alter table public.industrial_visits enable row level security;
alter table public.gallery_items enable row level security;
alter table public.nss_activities enable row level security;

drop policy if exists "admin self read" on public.admin_users;
create policy "admin self read" on public.admin_users for select to authenticated using(id=auth.uid());
drop policy if exists "public read achievements" on public.achievements;
create policy "public read achievements" on public.achievements for select to anon,authenticated using(true);
drop policy if exists "admin write achievements" on public.achievements;
create policy "admin write achievements" on public.achievements for all to authenticated using(public.is_admin()) with check(public.is_admin());
drop policy if exists "public read visits" on public.industrial_visits;
create policy "public read visits" on public.industrial_visits for select to anon,authenticated using(true);
drop policy if exists "admin write visits" on public.industrial_visits;
create policy "admin write visits" on public.industrial_visits for all to authenticated using(public.is_admin()) with check(public.is_admin());
drop policy if exists "public read gallery" on public.gallery_items;
create policy "public read gallery" on public.gallery_items for select to anon,authenticated using(true);
drop policy if exists "admin write gallery" on public.gallery_items;
create policy "admin write gallery" on public.gallery_items for all to authenticated using(public.is_admin()) with check(public.is_admin());
drop policy if exists "public read nss" on public.nss_activities;
create policy "public read nss" on public.nss_activities for select to anon,authenticated using(true);
drop policy if exists "admin write nss" on public.nss_activities;
create policy "admin write nss" on public.nss_activities for all to authenticated using(public.is_admin()) with check(public.is_admin());

insert into storage.buckets(id,name,public) values
('achievements','achievements',true),('training-placement','training-placement',true),
('gallery','gallery',true),('nss','nss',true) on conflict(id) do update set public=true;

drop policy if exists "admin upload college media" on storage.objects;
create policy "admin upload college media" on storage.objects for insert to authenticated
with check(bucket_id in('achievements','training-placement','gallery','nss') and public.is_admin());
drop policy if exists "admin update college media" on storage.objects;
create policy "admin update college media" on storage.objects for update to authenticated
using(bucket_id in('achievements','training-placement','gallery','nss') and public.is_admin())
with check(bucket_id in('achievements','training-placement','gallery','nss') and public.is_admin());
drop policy if exists "admin delete college media" on storage.objects;
create policy "admin delete college media" on storage.objects for delete to authenticated
using(bucket_id in('achievements','training-placement','gallery','nss') and public.is_admin());
drop policy if exists "public read college media" on storage.objects;
create policy "public read college media" on storage.objects for select to anon,authenticated
using(bucket_id in('achievements','training-placement','gallery','nss'));

-- After creating the admin user in Supabase Authentication > Users:
-- insert into public.admin_users(id,display_name) values('AUTH-USER-UUID','Website Administrator');

-- Extend the shared CMS tables for the backend API.
alter table public.achievements add column if not exists year text;
alter table public.achievements add column if not exists course text;
alter table public.achievements add column if not exists position text;
alter table public.achievements add column if not exists sport text;
alter table public.achievements add column if not exists event text;
alter table public.achievements add column if not exists exam text;
alter table public.achievements add column if not exists subject text;
alter table public.achievements add column if not exists score text;
alter table public.achievements add column if not exists pdf_url text;
alter table public.achievements add column if not exists published boolean not null default true;
update public.achievements set year = period where year is null and period is not null;

alter table public.industrial_visits add column if not exists published boolean not null default true;
alter table public.gallery_items add column if not exists image_url text;
alter table public.gallery_items add column if not exists published boolean not null default true;
alter table public.nss_activities add column if not exists image_url text;
alter table public.nss_activities add column if not exists published boolean not null default true;

create table if not exists public.admissions (
  id uuid primary key default gen_random_uuid(),
  student_name text not null,
  father_name text not null,
  mother_name text not null,
  dob text not null,
  gender text not null check (gender in ('Male', 'Female', 'Other')),
  category text not null check (category in ('General', 'SC', 'ST', 'OBC', 'Other')),
  mobile text not null check (mobile ~ '^[0-9]{10}$'),
  email text not null check (email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  state text not null,
  city text not null,
  address text not null,
  course text not null,
  academic_year text not null,
  last_qualification text not null,
  passing_year integer not null check (passing_year between 2000 and 2100),
  document jsonb not null default '{}'::jsonb,
  declaration boolean not null check (declaration is true),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.recruitments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null check (email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  phone text not null check (phone ~ '^[0-9]{10}$'),
  dob text not null default '',
  gender text not null default '',
  position text not null,
  department text not null default '',
  qualification text not null,
  specialization text not null default '',
  experience text not null default '',
  organization text not null default '',
  address text not null default '',
  cover_letter text not null default '',
  declaration boolean not null check (declaration is true),
  resume jsonb not null check (jsonb_typeof(resume) = 'object'),
  documents jsonb not null default '[]'::jsonb check (jsonb_typeof(documents) = 'array'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.notices (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text,
  date date not null default current_date,
  pdf_url text,
  image_url text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.fees (
  id uuid primary key default gen_random_uuid(),
  course text not null,
  duration text not null,
  total_fee numeric(12, 2) not null default 0 check (total_fee >= 0),
  first_year_fee numeric(12, 2) not null default 0 check (first_year_fee >= 0),
  other_fee numeric(12, 2) not null default 0 check (other_fee >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  code text,
  duration text,
  eligibility text,
  seats integer,
  fee text,
  description text,
  image_url text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  date date not null,
  time text,
  venue text,
  description text,
  image_url text,
  registration_link text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Private application data is accessed only by the server's service-role key.
alter table public.admissions enable row level security;
alter table public.recruitments enable row level security;
alter table public.contacts enable row level security;
alter table public.notices enable row level security;
alter table public.fees enable row level security;
alter table public.courses enable row level security;
alter table public.events enable row level security;
