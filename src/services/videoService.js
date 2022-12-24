import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://vjvvhgwrjaxsimzsqeas.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqdnZoZ3dyamF4c2ltenNxZWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg2MjU2MDIsImV4cCI6MTk4NDIwMTYwMn0.NHSF7ELF7QM88D9hY10NyeVn6igGJOe1c5lN6EacSuM"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}