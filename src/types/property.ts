export interface Property {
  id: string;

  landlordId: string;

  title: string;

  description: string;

  rent: string;

  location: string;

  isAvailable: boolean;

  amenities: string[];

  bedrooms: number;

  bathrooms: number;

  size: string;

  images: string[];

  createdAt: string;

  updatedAt: string;

  category: {
    id: string;
    name: string;
  };
  landlord: {
    id: string;
    name: string;
  };

  reviews?: string[];
}
