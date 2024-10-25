import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cspsgfkyjinebqayekqj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzcHNnZmt5amluZWJxYXlla3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1OTk0NTAsImV4cCI6MjA0MTE3NTQ1MH0.i2EnHfM8Z7TL4g5L13993VsWGfBw667ZLrFydPf2nqk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://cspsgfkyjinebqayekqj.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzcHNnZmt5amluZWJxYXlla3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1OTk0NTAsImV4cCI6MjA0MTE3NTQ1MH0.i2EnHfM8Z7TL4g5L13993VsWGfBw667ZLrFydPf2nqk";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabaseUrl;
