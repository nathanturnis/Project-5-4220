export interface CommunityListing {
  id: number;
  title: string;
  category: "activities" | "events" | "groups" | "rideshare" | "volunteers";
  description?: string;
  location?: string;
  date_time?: string;
  contact_email?: string;
  contact_phone?: string;
  organization?: string;
  additional_info?: string;
}
