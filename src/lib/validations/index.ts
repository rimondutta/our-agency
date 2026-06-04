import { z } from "zod";

// ─── User Schemas ───────────────────────────────────────────
export const createUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["superadmin", "admin", "team_member"]),
  phone: z.string().optional(),
  jobTitle: z.string().optional(),
  bio: z.string().optional(),
  isActive: z.boolean().optional(),
});

export const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
  role: z.enum(["superadmin", "admin", "team_member"]).optional(),
  avatar: z.string().optional(),
  phone: z.string().optional(),
  jobTitle: z.string().optional(),
  bio: z.string().optional(),
  skills: z.array(z.string()).optional(),
  socialLinks: z
    .object({
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      github: z.string().optional(),
      website: z.string().optional(),
    })
    .optional(),
  isActive: z.boolean().optional(),
});

export const updateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  avatar: z.string().optional(),
  phone: z.string().optional(),
  jobTitle: z.string().optional(),
  bio: z.string().optional(),
  skills: z.array(z.string()).optional(),
  socialLinks: z
    .object({
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      github: z.string().optional(),
      website: z.string().optional(),
    })
    .optional(),
});

// ─── Service Schemas ────────────────────────────────────────
const faqSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

const pricingPlanSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1),
  description: z.string().optional(),
  features: z.array(z.string()).optional(),
  blockedFeatures: z.array(z.string()).optional(),
  priceOriginal: z.number().nullable().optional(),
  priceDiscounted: z.number().min(0),
  currency: z.string().optional(),
  billingCycle: z.string().optional(),
});

const pricingSchema = z.object({
  monthlyPlans: z.array(pricingPlanSchema).optional(),
  yearlyPlans: z.array(pricingPlanSchema).optional(),
  serviceId: z.string().optional(),
});

export const serviceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().optional(),
  icon: z.string().optional(),
  shortDescription: z.string().optional(),
  fullDescription: z.string().optional(),
  coverImage: z.string().optional(),
  features: z.array(z.string()).optional(),
  price: z.number().optional(),
  faqs: z.array(faqSchema).optional(),
  pricing: pricingSchema.optional(),
  isPublished: z.boolean().optional(),
  order: z.number().optional(),
});

// ─── Portfolio / Project Schemas ────────────────────────────
export const portfolioSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().optional(),
  description: z.string().optional(),
  longDescription: z.string().optional(),
  coverImage: z.string().optional(),
  images: z.array(z.string()).optional(),
  techStack: z.array(z.string()).optional(),
  liveUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  category: z.string().nullable().optional(),
  featured: z.boolean().optional(),
  status: z.enum(["draft", "published"]).optional(),
  order: z.number().optional(),
  seo: z
    .object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
    })
    .optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
});

// ─── Blog / Post Schemas ────────────────────────────────────
export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().optional(),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  coverImage: z.string().optional(),
  category: z.string().nullable().optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(["draft", "published", "archived"]).optional(),
  publishedAt: z.string().nullable().optional(),
  readTime: z.number().optional(),
  seo: z
    .object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
    })
    .optional(),
});

// ─── Category Schemas ───────────────────────────────────────
export const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  slug: z.string().optional(),
  description: z.string().optional(),
  color: z.string().optional(),
  icon: z.string().optional(),
});

// ─── Tag Schemas ────────────────────────────────────────────
export const tagSchema = z.object({
  name: z.string().min(1, "Tag name is required"),
  slug: z.string().optional(),
  color: z.string().optional(),
});

// ─── Page Content Schemas ───────────────────────────────────
export const pageContentSchema = z.object({
  page: z.enum(["home", "about", "contact", "services"]),
  section: z.string().min(1, "Section is required"),
  key: z.string().min(1, "Key is required"),
  value: z.string().min(1, "Value is required"),
  type: z.enum(["text", "richtext", "image", "json"]).optional(),
});

// ─── Site Settings Schemas ──────────────────────────────────
export const siteSettingsSchema = z.object({
  siteName: z.string().optional(),
  tagline: z.string().optional(),
  logo: z.string().optional(),
  favicon: z.string().optional(),
  seo: z
    .object({
      defaultMetaTitle: z.string().optional(),
      defaultMetaDescription: z.string().optional(),
      ogImage: z.string().optional(),
    })
    .optional(),
  socialLinks: z
    .object({
      github: z.string().optional(),
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      instagram: z.string().optional(),
      youtube: z.string().optional(),
    })
    .optional(),
  contactEmail: z.string().optional(),
  footerText: z.string().optional(),
  maintenanceMode: z.boolean().optional(),
});

// ─── Contact / Message Schema ───────────────────────────────
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

// ─── Login Schema ───────────────────────────────────────────
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
