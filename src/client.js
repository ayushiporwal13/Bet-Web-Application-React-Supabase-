import { createClient } from '@supabase/supabase-js'

const URL = 'https://xmlkkclqveqjhkpiyvqx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbGtrY2xxdmVxamhrcGl5dnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MTc3MzIsImV4cCI6MjAxNDA5MzczMn0.LPoMZEMaFHJbU74P0R_o5d5E2vIyPk5SIGHUvJkkltQ';

export const supabase = createClient(URL, API_KEY);