export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "ShredDead Wiki",
  shortName: "ShredDead",
  logoText: "S",
  tagline: "Zombie-Shredding Strategy Guides, Builds & Progression",
  description: "Explore ShredDead with beginner guides, skill tree upgrades, weapons, grunt loadouts, defenses, loot, zombie evolution, and progression strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shreddead.top",
  supportEmail: "support@shreddead.top",
  gameUrl: "https://store.steampowered.com/app/4704520/ShredDead/",
  heroVideoId: "uixjC5D2898", // ShredDead Announcement Trailer by Weird Penguin Games
  social: {
    discord: "https://discord.gg/JGkyqCEcVk",
    youtube: "https://www.youtube.com/@weirdpenguingames7974/",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
