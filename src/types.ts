export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  features: string[];
}

export interface ChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
