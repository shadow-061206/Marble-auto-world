export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'detailing' | 'repair' | 'utility';
  icon: string; // lucide icon name
  priceEstimate?: string;
  features: string[];
}

export interface BookingData {
  name: string;
  phone: string;
  carModel: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  carOwned: string;
  rating: number;
  comment: string;
  serviceReceived: string;
  avatar: string;
  timeAgo?: string;
  reviewCount?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  beforeUrl: string;
  afterUrl: string;
  description: string;
}

export interface ReviewPhoto {
  id: string;
  url: string;
  caption: string;
  category: string;
  fallbackUrl?: string;
}
