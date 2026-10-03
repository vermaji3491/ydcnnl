const { createClient } = require("@supabase/supabase-js");

let supabaseClient;
let supabaseAuthClient;

function getSupabase() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be configured.");
  }

  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  return supabaseClient;
}

function getSupabaseAuth() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const publicKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !publicKey) {
    throw new Error("SUPABASE_URL and SUPABASE_ANON_KEY must be configured.");
  }

  if (!supabaseAuthClient) {
    supabaseAuthClient = createClient(supabaseUrl, publicKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  return supabaseAuthClient;
}

async function connectDB() {
  getSupabaseAuth();
  const { error } = await getSupabase().from("admin_users").select("id").limit(1);

  if (error) {
    throw new Error(`Supabase connection failed: ${error.message}`);
  }

  console.log("Supabase connected");
}

module.exports = { connectDB, getSupabase, getSupabaseAuth };