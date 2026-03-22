type ImagePromptSkillDefinition = {
  name: string;
  description: string;
  category: "image";
  promptTemplateKey:
    | "site_logo"
    | "ui_icon"
    | "featured_blog_image"
    | "social_og_image"
    | "favicon_app_icon";
  variables: string[];
  outputType: "image_prompt";
  modelPreference: "gpt-4o";
  imageModel: "dall-e-3";
};

export const imageAndBrandSkillDefinitions: ImagePromptSkillDefinition[] = [
  {
    name: "Site Logo Generator",
    description: "Generate detailed prompts for SaaS logo concepts.",
    category: "image",
    promptTemplateKey: "site_logo",
    variables: [
      "brand_name",
      "niche",
      "style",
      "primary_color",
      "mood",
      "icon_concept",
      "neutral_color",
      "font_tone",
    ],
    outputType: "image_prompt",
    modelPreference: "gpt-4o",
    imageModel: "dall-e-3",
  },
  {
    name: "App Icon / UI Icon Generator",
    description: "Generate consistent icon prompts for product interfaces.",
    category: "image",
    promptTemplateKey: "ui_icon",
    variables: [
      "icon_name",
      "icon_purpose",
      "icon_style",
      "primary_color",
      "size_context",
      "stroke_weight",
      "corner_style",
    ],
    outputType: "image_prompt",
    modelPreference: "gpt-4o",
    imageModel: "dall-e-3",
  },
  {
    name: "Featured Blog Image Generator",
    description: "Generate editorial featured-image prompts for blog content.",
    category: "image",
    promptTemplateKey: "featured_blog_image",
    variables: [
      "article_title",
      "keywords",
      "primary_color",
      "image_style",
      "tone",
      "visual_metaphor",
      "focal_subject",
    ],
    outputType: "image_prompt",
    modelPreference: "gpt-4o",
    imageModel: "dall-e-3",
  },
  {
    name: "OG / Social Share Image Generator",
    description: "Generate Open Graph and Twitter card prompt assets.",
    category: "image",
    promptTemplateKey: "social_og_image",
    variables: [
      "brand_name",
      "page_title",
      "tagline",
      "primary_color",
      "bg_style",
      "domain_text",
      "logo_position",
    ],
    outputType: "image_prompt",
    modelPreference: "gpt-4o",
    imageModel: "dall-e-3",
  },
  {
    name: "Favicon / App Icon Generator",
    description: "Generate small-size-optimized favicon and PWA icon prompts.",
    category: "image",
    promptTemplateKey: "favicon_app_icon",
    variables: [
      "brand_symbol",
      "shape",
      "primary_color",
      "secondary_color",
      "border_style",
      "padding_ratio",
    ],
    outputType: "image_prompt",
    modelPreference: "gpt-4o",
    imageModel: "dall-e-3",
  },
];
