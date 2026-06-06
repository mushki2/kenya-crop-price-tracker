import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://db.sbzwqblkyxinueofnrfq.supabase.co';
const supabaseKey = 'sb_publishable_WM8HHn2jzRgSFMypX7MMtA_zxp4w1nt';

export const supabase = createClient(supabaseUrl, supabaseKey);
