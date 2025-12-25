
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  additionalImages?: string[];
  category: string;
  materials?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum AppRoute {
  HOME = 'home',
  GALLERY = 'gallery',
  SERVICES = 'services',
  CONTACT = 'contact'
}
