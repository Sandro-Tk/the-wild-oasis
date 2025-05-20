import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qknkkcvomrckcjlvnyzx.supabase.co";

const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrbmtrY3ZvbXJja2NqbHZueXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg0MTEsImV4cCI6MjA2MTYwNDQxMX0.KWk3gyHFQ4QHAd0Mk7GPJD3lykrkwwPQoekSQpKWh-8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
