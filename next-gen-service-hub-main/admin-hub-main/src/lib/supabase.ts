import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://puuuwgdumculmdcxuwcq.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1dXV3Z2R1bWN1bG1kY3h1d2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MjM3NjUsImV4cCI6MjA2NTI5OTc2NX0.sb_publishable_fSQhzPbb9u69JORQYErC9Q_Q31n18-3';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactMessage = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  service_type: string;
  message: string;
};
