// ===== Edit these values for your event =====
window.EVENT_CONFIG = {
  // Supabase > Project Settings > API
  SUPABASE_URL: "https://imwjrgdlleixoauvpwck.supabase.co",
  SUPABASE_ANON_KEY: "KEY",

  // Must match the bucket created in setup.sql
  BUCKET: "event-photos",

  // Shown on the guest page and the printed QR card
  EVENT_NAME: "Marco & Kelly",
  EVENT_SUBTITLE: "Share your photos with us",

  // Shrink photos on the phone before upload (saves storage and mobile data).
  // 0 = upload originals.
  MAX_DIMENSION: 2560,

  // Storage limit for the bar on the admin page (MB). Free plan = 1024, Pro = 102400
  STORAGE_LIMIT_MB: 1024
};
