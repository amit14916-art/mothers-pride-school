import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let supabaseInstance = null;

// In-memory array to simulate saving dynamic form submissions (inquiries) when Supabase is unconfigured
const simulatedInquiries = [];

// Clean, chainable Mock Engine to mirror standard Supabase client operations
const mockSupabaseClient = {
  from: (table) => {
    return {
      insert: async (data) => {
        console.log(`[Supabase Mock Service] Attempting insert into table "${table}":`, data);
        
        // Add a realistic 1.2s delay to simulate a network call
        await new Promise((resolve) => setTimeout(resolve, 1200));

        if (!data || Object.keys(data).length === 0) {
          return { data: null, error: { message: "Invalid payload: no data provided." } };
        }

        const insertedRecord = {
          id: `inq_${Math.random().toString(36).substr(2, 9)}`,
          ...data,
          created_at: new Date().toISOString()
        };

        if (table === 'Inquiries') {
          simulatedInquiries.push(insertedRecord);
          return { data: [insertedRecord], error: null };
        }

        return { data: [insertedRecord], error: null };
      },
      select: () => {
        return {
          order: (column, { ascending = true } = {}) => {
            return {
              data: table === 'Inquiries' ? [...simulatedInquiries] : [],
              error: null
            };
          }
        };
      }
    };
  }
};

// Singleton initialization with verification
if (supabaseUrl && supabaseAnonKey) {
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
    console.log("Supabase Client initialized successfully with environment variables.");
  } catch (error) {
    console.error("Critical: Supabase SDK initialization failed. Activating mock client fallback.", error);
    supabaseInstance = mockSupabaseClient;
  }
} else {
  console.warn(
    "Warning: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is undefined. " +
    "The application will seamlessly utilize a stateful simulated Mock Supabase client for all interactions."
  );
  supabaseInstance = mockSupabaseClient;
}

export const supabase = supabaseInstance;
