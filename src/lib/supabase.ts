import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      participants: {
        Row: {
          id: string;
          full_name: string;
          age: number;
          category: string;
          village_district: string;
          state: string;
          talent_description: string;
          photo_url: string | null;
          video_url: string | null;
          email: string;
          phone: string;
          status: 'pending' | 'approved' | 'rejected' | 'shortlisted' | 'winner';
          published: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          age: number;
          category: string;
          village_district: string;
          state: string;
          talent_description: string;
          photo_url?: string | null;
          video_url?: string | null;
          email: string;
          phone: string;
          status?: 'pending' | 'approved' | 'rejected' | 'shortlisted' | 'winner';
          published?: boolean;
          created_at?: string;
        };
      };
      cinzee_enquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          category: string;
          message: string;
          status: 'pending' | 'contacted' | 'verified';
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone: string;
          category: string;
          message: string;
          status?: 'pending' | 'contacted' | 'verified';
          created_at?: string;
        };
      };
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          enquiry_type: string;
          message: string;
          status: 'unread' | 'read' | 'replied';
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone: string;
          enquiry_type: string;
          message: string;
          status?: 'unread' | 'read' | 'replied';
          created_at?: string;
        };
      };
    };
  };
};
