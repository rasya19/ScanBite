import { createClient } from '@supabase/supabase-js';

// Ambil langsung dari environment variable
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

// Jika tidak ada di .env, hentikan aplikasi (jangan biarkan pakai simulator)
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("SUPABASE ERROR: Environment variables tidak ditemukan!");
}

// Inisialisasi client yang murni, tanpa ada "bantuan" simulator
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
