export interface ServiceListing {
  id: number;
  title: string;
  category: string; // e.g., 'pet', 'cleaning', etc.
  provider_name?: string;
  location?: string;
  price?: number;
  description?: string;
  contact_email?: string;
  contact_phone?: string;
  available_days?: string; // e.g., "Mon-Fri", "Weekends"
  experience_years?: number;
  certifications?: string; // can be long text or comma-separated
}
