export type Post = {
  id: string;
  documentId: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  image: string;
};

export type Faq = {
  id: string;
  documentId: string;
  date: string;
  title: string;
  slug: string;
  content: string;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiBlog = {
  id: string;
  documentId: string;
  slug: string;
  excerpt: string;
  title: string;
  date: string;
  content: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string; };
      small?: { url: string; };
      medium?: { url: string; };
      large?: { url: string; };
    };
  };
};

export type StrapiFAQ = {
  id: string;
  documentId: string;
  slug: string;
  title: string;
  date: string;
  content: string;
}

export type StrapiSteward = {
  name: string;
  email: string;
  description: string;
  slug: string;
  avatar?: {
    url: string;
    formats?: {
      thumbnail?: { url: string; };
      small?: { url: string; };
      medium?: { url: string; };
      large?: { url: string; };
    };
  };
}
