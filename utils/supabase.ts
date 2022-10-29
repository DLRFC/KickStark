import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://iiknlmmhaortgfqyplkw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpa25sbW1oYW9ydGdmcXlwbGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxODQxMDcsImV4cCI6MTk4MTc2MDEwN30.lcx0hqtmvzh-ZbGROZoF4zB2fypbG0mgf44rMUBcUZE"
)