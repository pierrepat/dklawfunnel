import type { PrivacyPolicyBlock } from "./privacyPolicy";

export const TERMS_LAST_UPDATED = "July 6, 2026";

/** Terms of Service source, rendered on the public /terms page and in the modal. */
export const termsOfServiceBlocks: PrivacyPolicyBlock[] = [
  { type: "p", text: 'These Terms of Service ("Terms") govern your access to and use of dklaw.mvacompensation.com and the claim estimator tool (collectively, the "Site"), operated by GTM Partner LLC ("we," "our," or "us"). By accessing or using the Site, you agree to these Terms. If you do not agree, please do not use the Site.' },

  { type: "h2", text: "What We Do" },
  { type: "p", text: "GTM Partner LLC operates a marketing and intake service that helps individuals who may have a legal claim connect with participating, independent law firms and attorneys. We are not a law firm, we do not provide legal advice, and we do not represent you." },
  { type: "strong_p", text: "We are not a law firm and do not provide legal advice." },
  { type: "p", text: "Submitting information through the Site does not create an attorney-client relationship. An attorney-client relationship is formed only after you and a licensed attorney or law firm sign a written agreement. Any attorney who contacts you is solely responsible for their own advice, services, and representation." },

  { type: "h2", text: "Eligibility" },
  { type: "p", text: "You must be at least 18 years of age and able to form a legally binding contract to use the Site. By using the Site you represent that you meet these requirements and that the information you provide is truthful and accurate." },

  { type: "h2", text: "Consent to Be Contacted" },
  { type: "p", text: "By submitting your phone number, you authorize GTM Partner LLC and its service providers to contact you by phone call and text message (SMS), including via automated technology, at the number provided. Consent is not a condition of purchase or services. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe and HELP for help. These communications may occur even if your number is on a federal or state Do Not Call registry. For details on how we handle your information, see our Privacy Policy." },

  { type: "h2", text: "Acceptable Use" },
  { type: "p", text: "You agree not to use the Site to submit false, misleading, or fraudulent information; to submit information on behalf of another person without their consent; to interfere with or disrupt the Site; or to use the Site for any unlawful purpose." },

  { type: "h2", text: "Intellectual Property" },
  { type: "p", text: "All content on the Site, including text, graphics, logos, and software, is owned by GTM Partner LLC or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, or distribute Site content without our prior written permission." },

  { type: "h2", text: "Third-Party Links and Services" },
  { type: "p", text: "The Site may contain links to third-party websites or services, including participating law firms. We are not responsible for the content, policies, or practices of any third party. Your dealings with any attorney or law firm are solely between you and that party." },

  { type: "h2", text: "Disclaimers" },
  { type: "p", text: 'The Site is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not warrant that the Site will be uninterrupted, error-free, or secure. We make no guarantee regarding the outcome of any legal matter, and past results do not guarantee future outcomes.' },

  { type: "h2", text: "Limitation of Liability" },
  { type: "p", text: "To the fullest extent permitted by law, GTM Partner LLC and its officers, members, and service providers will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss arising out of your use of the Site or any interaction with a participating attorney or law firm." },

  { type: "h2", text: "Indemnification" },
  { type: "p", text: "You agree to indemnify and hold harmless GTM Partner LLC and its service providers from any claims, damages, or expenses arising out of your use of the Site or your violation of these Terms." },

  { type: "h2", text: "Governing Law" },
  { type: "p", text: "These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-law principles." },

  { type: "h2", text: "Changes to These Terms" },
  { type: "p", text: "We may update these Terms from time to time. Changes become effective when posted on this page. Your continued use of the Site after changes are posted constitutes acceptance of the revised Terms." },

  { type: "h2", text: "Contact Information" },
  { type: "p", text: "If you have questions about these Terms, please contact us at:" },
  { type: "address", strong: "GTM Partner LLC", lines: ["8 The Green", "Dover, DE 19901", "United States"] },
];
