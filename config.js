// ===== Edit these values for your event =====
window.EVENT_CONFIG = {
  // Supabase > Project Settings > API
  SUPABASE_URL: "https://imwjrgdlleixoauvpwck.supabase.co/rest/v1/",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltd2pyZ2RsbGVpeG9hdXZwd2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwMTgxMTUsImV4cCI6MjEwODU5NDExNX0.b_VErR0hESAeA-Q5NR5ItmdRdTq6eC-2cUsMYJSnJLU",

  // Must match the bucket created in setup.sql
  BUCKET: "event-photos",

  // Shown on the guest page and the printed QR card
  EVENT_NAME: "Our Event",
  EVENT_SUBTITLE: "Share your photos with us",

  // 0 = upload original photos (best quality).
  // Set to e.g. 2560 to shrink photos on the phone before upload
  // (saves guests' mobile data, roughly 3-5x smaller files).
  MAX_DIMENSION: 0
};
