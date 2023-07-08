/* eslint-disable camelcase */
import { Document } from 'mongoose';

export interface IBrandProfile extends Document {
  profile: string;
  brand: string;
  website: string;
  type: string;
  industry_group: string;
  industry_categories: string;
  brand_market: string;
  target_audience: string;
  brand_brief: string;
  brand_story: string;
  brand_promise: string;
  brand_usp: string;
  brand_benefits: string;
  selling_points: string;
  trust_factors: string;
  brand_personality: string;
  brand_voice: string;
  brand_profile_prompt: string;
}

export default IBrandProfile;