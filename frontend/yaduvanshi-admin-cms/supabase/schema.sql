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

create policy "admin self read" on public.admin_users for select to authenticated using(id=auth.uid());
create policy "public read achievements" on public.achievements for select to anon,authenticated using(true);
create policy "admin write achievements" on public.achievements for all to authenticated using(public.is_admin()) with check(public.is_admin());
create policy "public read visits" on public.industrial_visits for select to anon,authenticated using(true);
create policy "admin write visits" on public.industrial_visits for all to authenticated using(public.is_admin()) with check(public.is_admin());
create policy "public read gallery" on public.gallery_items for select to anon,authenticated using(true);
create policy "admin write gallery" on public.gallery_items for all to authenticated using(public.is_admin()) with check(public.is_admin());
create policy "public read nss" on public.nss_activities for select to anon,authenticated using(true);
create policy "admin write nss" on public.nss_activities for all to authenticated using(public.is_admin()) with check(public.is_admin());

insert into storage.buckets(id,name,public) values
('achievements','achievements',true),('training-placement','training-placement',true),
('gallery','gallery',true),('nss','nss',true) on conflict(id) do update set public=true;

create policy "admin upload college media" on storage.objects for insert to authenticated
with check(bucket_id in('achievements','training-placement','gallery','nss') and public.is_admin());
create policy "admin update college media" on storage.objects for update to authenticated
using(bucket_id in('achievements','training-placement','gallery','nss') and public.is_admin())
with check(bucket_id in('achievements','training-placement','gallery','nss') and public.is_admin());
create policy "admin delete college media" on storage.objects for delete to authenticated
using(bucket_id in('achievements','training-placement','gallery','nss') and public.is_admin());
create policy "public read college media" on storage.objects for select to anon,authenticated
using(bucket_id in('achievements','training-placement','gallery','nss'));

-- After creating the admin user in Supabase Authentication > Users:
-- insert into public.admin_users(id,display_name) values('AUTH-USER-UUID','Website Administrator');
