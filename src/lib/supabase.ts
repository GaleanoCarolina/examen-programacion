import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vujnmvlgtehrisdmoapy.supabase.co';
const supabaseAnonKey = 'sb_publishable_eY2ravKxj9KZlo4ihU9Tew_2wX1bvsq';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});