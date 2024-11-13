export type imagesApi = {
  id: string;
  slug: string;
  alternative_slugs: Alternative_slugs;
  created_at: string;
  updated_at: string;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  breadcrumbs: [];
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: false;
  current_user_collections: [];
  sponsorship: null;
  topic_submissions: Topic;
  asset_type: string;
  user: User;
};

type Alternative_slugs = {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
};

type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};

type Links = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};
type User = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: object[];
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
};
type Topic = {
  [key: string]: object[];
};
