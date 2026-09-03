import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("parasailing", "routes/parasailing.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("reviews", "routes/reviews.tsx"),
  route("photos", "routes/photos.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
