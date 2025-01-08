import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://atutgwcijtqpmfoaswqh.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0dXRnd2NpanRxcG1mb2Fzd3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNTExMDQsImV4cCI6MjA1MTkyNzEwNH0.xkQSkM1A9C_Ynm_JPFAy0bvPfCDogiN-fUGZpXyy60w'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
