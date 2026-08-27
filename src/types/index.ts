export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  category: 'Campervan' | 'Motorhome' | '4x4 Overland' | 'Compact Camper';
  pricePerDay: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  passengers: number;
  sleeps: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Diesel' | 'Petrol' | 'Electric' | 'Hybrid';
  length: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  badge?: string;
  amenities: string[];
  specs: {
    engine: string;
    fuelTank: string;
    freshWater: string;
    greyWater: string;
    solarPower: string;
    acHeater: string;
    bedDimensions: string;
  };
  description: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
}

export interface FAQ {
  title: string;
  description: string;
}
