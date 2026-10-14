
export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  featured: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "documentary-project",
    title: "A Story Worth Telling",
    category: "Documentary",
    year: "2026",
    description:
      "A sample documentary project exploring people, identity, and everyday experiences.",
    thumbnail: "/images/projects/documentary.jpg",
    youtubeUrl: "https://www.youtube.com/",
    featured: true,
  },
  {
    slug: "short-film-project",
    title: "Between Two Worlds",
    category: "Short Film",
    year: "2026",
    description:
      "A sample short-film concept focused on perspective, emotion, and human connection.",
    thumbnail: "/images/projects/short-film.jpg",
    youtubeUrl: "https://www.youtube.com/",
    featured: true,
  },
  {
    slug: "music-video-project",
    title: "Visual Rhythm",
    category: "Music Video",
    year: "2026",
    description:
      "A sample music-video concept combining visual composition and creative storytelling.",
    thumbnail: "/images/projects/music-video.jpg",
    youtubeUrl: "https://www.youtube.com/",
    featured: true,
  },
];
