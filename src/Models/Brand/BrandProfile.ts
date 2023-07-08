import mongoose from 'mongoose';

const BrandProfile = new mongoose.Schema({
  profile: { type: String },
  brand: { type: String },
  website: { type: String },
  type: { type: String },
  industry_group: { type: String },
  industry_categories: { type: String },
  brand_market: { type: String },
  target_audience: { type: String },
  brand_brief: { type: String },
  brand_story: { type: String },
  brand_promise: { type: String },
  brand_usp: { type: String },
  brand_benefits: { type: String },
  selling_points: { type: String },
  trust_factors: { type: String },
  brand_personality: { type: String },
  brand_voice: { type: String },
  brand_profile_prompt: { type: String },
  
});

export default mongoose.model('brandprofile', BrandProfile);
