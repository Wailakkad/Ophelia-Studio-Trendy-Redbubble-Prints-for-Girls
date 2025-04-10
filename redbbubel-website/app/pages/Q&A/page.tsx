"use client"
import { FaqSection } from "@/components/faq";

const DEMO_FAQS = [
  {
    question: "What products do you offer?",
    answer: "Ophelia specializes in adorable cat and anime-themed products including soft T-shirts, cute stickers, and protective phone cases - all designed with kawaii aesthetics girls love!",
  },
  {
    question: "How long does shipping take?",
    answer: "Most orders ship within 3-5 business days. Delivery typically takes 7-10 days within the US and 10-20 days internationally. You'll receive tracking info once your order ships!",
  },
  {
    question: "What sizes are available for your T-shirts?",
    answer: "Our cute tees come in sizes XS to XL (girls' cuts). Each product page has a detailed size chart - we recommend checking measurements as sizes may vary slightly by design.",
  },
  {
    question: "Are your stickers waterproof?",
    answer: "Yes! Our high-quality vinyl stickers are water-resistant and perfect for laptops, water bottles, and more. They'll stay cute through everyday use (though we don't recommend submerging them).",
  },
  {
    question: "Do you offer refunds or exchanges?",
    answer: "We accept returns within 30 days for unused items with original packaging. Due to the print-on-demand nature of our products, we can only exchange items if they arrive damaged or defective.",
  },
  {
    question: "Can I request custom designs?",
    answer: "We occasionally take custom orders! For special requests, please DM us on Instagram @OpheliaDesigns with your idea. Note there may be additional fees for custom work.",
  },
];

export default function FaqSectionDemo() {
  return (
    <FaqSection
    title="Frequently Asked Questions"
    description="Everything you need to know about shopping with Ophelia"
    items={DEMO_FAQS}
    contactInfo={{
      title: "Ready to shop?",
      description: "Explore our cute and unique products now!",
      buttonText: "Shop Now",
      onContact: () => window.location.href = "/shop", // Redirect to the shop page
    }}
  />
  );
}