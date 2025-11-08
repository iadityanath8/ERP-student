// Front CMS Types
export interface CMSPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  pageType: 'static' | 'dynamic' | 'blog' | 'landing';
  isPublished: boolean;
  isHomePage: boolean;
  template?: string;
  featuredImage?: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface CMSMenu {
  id: string;
  name: string;
  label: string;
  url: string;
  type: 'page' | 'link' | 'dropdown';
  parentId?: string;
  order: number;
  isActive: boolean;
  children?: CMSMenu[];
}

export interface CMSBanner {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  linkUrl?: string;
  linkText?: string;
  position: 'home-hero' | 'home-slider' | 'sidebar' | 'footer';
  order: number;
  isActive: boolean;
  startDate?: string;
  endDate?: string;
  createdAt: string;
}

export interface CMSSettings {
  siteName: string;
  siteLogo: string;
  siteFavicon: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  seoSettings: {
    defaultMetaTitle: string;
    defaultMetaDescription: string;
    defaultMetaKeywords: string[];
  };
}

