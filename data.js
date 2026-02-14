const templates = [
  // =========================
  // Instagram Sales DM
  // =========================
  {
    id: 101,
    category: "Instagram Sales",
    title: "Warm Lead DM",
    content: "Hey 👋 I noticed you were interested in our product. Do you have any questions I can help with?"
  },
  {
    id: 102,
    category: "Instagram Sales",
    title: "Limited Offer DM",
    content: "We’re closing this offer tonight. I wanted to make sure you don’t miss it."
  },
  {
    id: 103,
    category: "Instagram Sales",
    title: "Reactivation Message",
    content: "Hi again! Just checking in to see if you’re still considering moving forward."
  },
  {
    id: 104,
    category: "Instagram Sales",
    title: "Warm Lead DM 1",
    content: "Hey 👋 I noticed you were interested in our product. Do you have any questions I can help with?"
  },
  {
    id: 105,
    category: "Instagram Sales",
    title: "Warm Lead DM 2",
    content: "Hi! Just wanted to check if you’re ready to get started with our service."
  },
  {
    id: 106,
    category: "Instagram Sales",
    title: "Warm Lead DM 3",
    content: "Hello 👋 We have an offer running this week. Would you like to know more?"
  },
  {
    id: 107,
    category: "Instagram Sales",
    title: "Warm Lead DM 4",
    content: "Hi! I can help you choose the right plan for your needs."
  },
  {
    id: 108,
    category: "Instagram Sales",
    title: "Warm Lead DM 5",
    content: "Hey there! Have you seen our latest product update?"
  },
  {
    id: 109,
    category: "Instagram Sales",
    title: "Warm Lead DM 6",
    content: "Hi! Just following up to see if you had a chance to review our proposal."
  },
  {
    id: 110,
    category: "Instagram Sales",
    title: "Warm Lead DM 7",
    content: "Hello! Quick question — what’s your biggest challenge right now?"
  },
  {
    id: 111,
    category: "Instagram Sales",
    title: "Warm Lead DM 8",
    content: "Hey! We just launched a new feature that might interest you."
  },
  {
    id: 112,
    category: "Instagram Sales",
    title: "Warm Lead DM 9",
    content: "Hi! Do you prefer a quick demo or a detailed walkthrough?"
  },
  {
    id: 113,
    category: "Instagram Sales",
    title: "Warm Lead DM 10",
    content: "Hello 👋 I can guide you step by step to get started today."
  },
  {
    id: 114,
    category: "Instagram Sales",
    title: "Warm Lead DM 11",
    content: "Hey! Limited spots are available for onboarding this week."
  },
  {
    id: 115,
    category: "Instagram Sales",
    title: "Warm Lead DM 12",
    content: "Hi! Many of our clients saw results within the first week."
  },
  {
    id: 116,
    category: "Instagram Sales",
    title: "Warm Lead DM 13",
    content: "Hello! Want me to share a quick tip to improve your workflow?"
  },
  {
    id: 117,
    category: "Instagram Sales",
    title: "Warm Lead DM 14",
    content: "Hey! We’ve helped businesses like yours increase conversions fast."
  },
  {
    id: 118,
    category: "Instagram Sales",
    title: "Warm Lead DM 15",
    content: "Hi! Are you looking for a simple or advanced solution?"
  },
  {
    id: 119,
    category: "Instagram Sales",
    title: "Warm Lead DM 16",
    content: "Hello! I can provide a tailored recommendation for your business."
  },
  {
    id: 120,
    category: "Instagram Sales",
    title: "Warm Lead DM 17",
    content: "Hey! Just checking if you received my last message."
  },
  {
    id: 121,
    category: "Instagram Sales",
    title: "Warm Lead DM 18",
    content: "Hi! Can I show you a quick demo of what we offer?"
  },
  {
    id: 122,
    category: "Instagram Sales",
    title: "Warm Lead DM 19",
    content: "Hello! This solution is perfect for your current challenge."
  },
  {
    id: 123,
    category: "Instagram Sales",
    title: "Warm Lead DM 20",
    content: "Hey! I can share a success story similar to your business."
  },
  {
    id: 124,
    category: "Instagram Sales",
    title: "Warm Lead DM 21",
    content: "Hi! Would you like a free consultation call?"
  },
  {
    id: 125,
    category: "Instagram Sales",
    title: "Warm Lead DM 22",
    content: "Hello! I can answer any questions about our product today."
  },
  {
    id: 126,
    category: "Instagram Sales",
    title: "Warm Lead DM 23",
    content: "Hey! Don’t miss out on our limited-time offer."
  },
  {
    id: 127,
    category: "Instagram Sales",
    title: "Warm Lead DM 24",
    content: "Hi! Have you considered how this could save you time?"
  },
  {
    id: 128,
    category: "Instagram Sales",
    title: "Warm Lead DM 25",
    content: "Hello! I can help you get results faster than competitors."
  },
  {
    id: 129,
    category: "Instagram Sales",
    title: "Warm Lead DM 26",
    content: "Hey! What’s your preferred way to get started — chat or call?"
  },
  {
    id: 130,
    category: "Instagram Sales",
    title: "Warm Lead DM 27",
    content: "Hi! Just a reminder, our spots for onboarding are limited."
  },
  {
    id: 131,
    category: "Instagram Sales",
    title: "Warm Lead DM 28",
    content: "Hello! Many clients achieved great ROI with our service."
  },
  {
    id: 132,
    category: "Instagram Sales",
    title: "Warm Lead DM 29",
    content: "Hey! I can send you a quick guide to understand our solution."
  },
  {
    id: 133,
    category: "Instagram Sales",
    title: "Warm Lead DM 30",
    content: "Hi! We have a special plan tailored for businesses like yours."
  },
  {
    id: 134,
    category: "Instagram Sales",
    title: "Warm Lead DM 31",
    content: "Hello! Want me to walk you through the setup process?"
  },
  {
    id: 135,
    category: "Instagram Sales",
    title: "Warm Lead DM 32",
    content: "Hey! Do you prefer a written guide or a video demo?"
  },
  {
    id: 136,
    category: "Instagram Sales",
    title: "Warm Lead DM 33",
    content: "Hi! Let’s schedule a short call to discuss your needs."
  },
  {
    id: 137,
    category: "Instagram Sales",
    title: "Warm Lead DM 34",
    content: "Hello! I can share tips that helped other clients double their results."
  },
  {
    id: 138,
    category: "Instagram Sales",
    title: "Warm Lead DM 35",
    content: "Hey! Our solution adapts to your exact workflow."
  },
  {
    id: 139,
    category: "Instagram Sales",
    title: "Warm Lead DM 36",
    content: "Hi! I can provide insights to optimize your process quickly."
  },
  {
    id: 140,
    category: "Instagram Sales",
    title: "Warm Lead DM 37",
    content: "Hello! Want a step-by-step plan to get started today?"
  },
  {
    id: 141,
    category: "Instagram Sales",
    title: "Warm Lead DM 38",
    content: "Hey! Quick question — what’s your main goal this month?"
  },
  {
    id: 142,
    category: "Instagram Sales",
    title: "Warm Lead DM 39",
    content: "Hi! I can help you overcome common obstacles easily."
  },
  {
    id: 143,
    category: "Instagram Sales",
    title: "Warm Lead DM 40",
    content: "Hello! Want a quick walkthrough to see if this fits your needs?"
  },
  {
    id: 144,
    category: "Instagram Sales",
    title: "Warm Lead DM 41",
    content: "Hey! We’ve recently improved features that might help you."
  },
  {
    id: 145,
    category: "Instagram Sales",
    title: "Warm Lead DM 42",
    content: "Hi! Just following up in case you missed my last message."
  },
  {
    id: 146,
    category: "Instagram Sales",
    title: "Warm Lead DM 43",
    content: "Hello! Want a free tip that could improve your conversions?"
  },
  {
    id: 147,
    category: "Instagram Sales",
    title: "Warm Lead DM 44",
    content: "Hey! Many clients doubled results within the first week."
  },
  {
    id: 148,
    category: "Instagram Sales",
    title: "Warm Lead DM 45",
    content: "Hi! I can send you an overview to help you decide faster."
  },
  {
    id: 149,
    category: "Instagram Sales",
    title: "Warm Lead DM 46",
    content: "Hello! Want a quick example of how it works?"
  },
  {
    id: 150,
    category: "Instagram Sales",
    title: "Warm Lead DM 47",
    content: "Hey! Do you prefer text instructions or video guidance?"
  },
  {
    id: 151,
    category: "Instagram Sales",
    title: "Warm Lead DM 48",
    content: "Hi! I can share a roadmap to get you started immediately."
  },
  {
    id: 152,
    category: "Instagram Sales",
    title: "Warm Lead DM 49",
    content: "Hello! Many of our clients saw success in under a week."
  },
  {
    id: 153,
    category: "Instagram Sales",
    title: "Warm Lead DM 50",
    content: "Hey! Want a free consultation to see how this fits your business?"
  },

  // =========================
  // High Ticket Sales
  // =========================
  {
    id: 201,
    category: "High Ticket Sales",
    title: "Authority Close",
    content: "Based on your goals, this premium solution is exactly what you need."
  },
  {
    id: 202,
    category: "High Ticket Sales",
    title: "Scarcity Close",
    content: "We only accept 5 new clients per month to maintain quality."
  },
  {
    id: 203,
    category: "High Ticket Sales",
    title: "Confidence Close",
    content: "If you’re serious about results, this is the right move."
  },
  {
    id: 204,
    category: "High Ticket Sales",
    title: "Authority Close 1",
    content: "Based on your goals, this premium solution is exactly what you need."
  },
  {
    id: 205,
    category: "High Ticket Sales",
    title: "Authority Close 2",
    content: "This program is tailored to help you achieve maximum results efficiently."
  },
  {
    id: 206,
    category: "High Ticket Sales",
    title: "Authority Close 3",
    content: "We’ve helped top clients like you exceed their targets quickly."
  },
  {
    id: 207,
    category: "High Ticket Sales",
    title: "Scarcity Close 1",
    content: "We only accept 5 new clients per month to maintain quality."
  },
  {
    id: 208,
    category: "High Ticket Sales",
    title: "Scarcity Close 2",
    content: "Enrollment is limited to ensure personalized attention."
  },
  {
    id: 209,
    category: "High Ticket Sales",
    title: "Scarcity Close 3",
    content: "Seats are filling fast. Secure your spot before it’s gone."
  },
  {
    id: 210,
    category: "High Ticket Sales",
    title: "Confidence Close 1",
    content: "If you’re serious about results, this is the right move."
  },
  {
    id: 211,
    category: "High Ticket Sales",
    title: "Confidence Close 2",
    content: "We guarantee measurable growth or your investment back."
  },
  {
    id: 212,
    category: "High Ticket Sales",
    title: "Confidence Close 3",
    content: "This solution has consistently outperformed alternatives in the market."
  },
  {
    id: 213,
    category: "High Ticket Sales",
    title: "High Ticket Offer 1",
    content: "Only clients ready to take massive action should join this program."
  },
  {
    id: 214,
    category: "High Ticket Sales",
    title: "High Ticket Offer 2",
    content: "We focus on results, not just promises — are you ready to commit?"
  },
  {
    id: 215,
    category: "High Ticket Sales",
    title: "High Ticket Offer 3",
    content: "Our approach is designed for serious clients who want extraordinary outcomes."
  },
  {
    id: 216,
    category: "High Ticket Sales",
    title: "Premium Solution 1",
    content: "This strategy is personalized for your business to maximize ROI."
  },
  {
    id: 217,
    category: "High Ticket Sales",
    title: "Premium Solution 2",
    content: "We implement advanced methods used by top performers in your industry."
  },
  {
    id: 218,
    category: "High Ticket Sales",
    title: "Premium Solution 3",
    content: "Clients who followed this approach doubled their revenue in months."
  },
  {
    id: 219,
    category: "High Ticket Sales",
    title: "Authority Close 4",
    content: "Our proven system removes guesswork and ensures consistent results."
  },
  {
    id: 220,
    category: "High Ticket Sales",
    title: "Scarcity Close 4",
    content: "Limited availability ensures you get the attention your business deserves."
  },
  {
    id: 221,
    category: "High Ticket Sales",
    title: "Confidence Close 4",
    content: "We stand behind our methods — your success is our priority."
  },
  {
    id: 222,
    category: "High Ticket Sales",
    title: "High Ticket Offer 4",
    content: "This is designed for clients ready to invest in significant growth."
  },
  {
    id: 223,
    category: "High Ticket Sales",
    title: "Premium Solution 4",
    content: "Our solution adapts to your unique challenges and opportunities."
  },
  {
    id: 224,
    category: "High Ticket Sales",
    title: "Authority Close 5",
    content: "Join a program that aligns with your ambitions and targets."
  },
  {
    id: 225,
    category: "High Ticket Sales",
    title: "Scarcity Close 5",
    content: "Few spots remain. Don’t wait until the next opening."
  },
  {
    id: 226,
    category: "High Ticket Sales",
    title: "Confidence Close 5",
    content: "Serious clients see the results they expect — and more."
  },
  {
    id: 227,
    category: "High Ticket Sales",
    title: "High Ticket Offer 5",
    content: "We only work with those committed to growth and action."
  },
  {
    id: 228,
    category: "High Ticket Sales",
    title: "Premium Solution 5",
    content: "Each client receives a tailored roadmap to reach their goals."
  },
  {
    id: 229,
    category: "High Ticket Sales",
    title: "Authority Close 6",
    content: "Our expert guidance eliminates trial-and-error in your strategy."
  },
  {
    id: 230,
    category: "High Ticket Sales",
    title: "Scarcity Close 6",
    content: "Availability is extremely limited. Act now to secure your spot."
  },
  {
    id: 231,
    category: "High Ticket Sales",
    title: "Confidence Close 6",
    content: "We provide results-focused solutions for ambitious clients."
  },
  {
    id: 232,
    category: "High Ticket Sales",
    title: "High Ticket Offer 6",
    content: "Designed for action-takers ready to achieve real impact."
  },
  {
    id: 233,
    category: "High Ticket Sales",
    title: "Premium Solution 6",
    content: "Our approach is structured for measurable, predictable outcomes."
  },
  {
    id: 234,
    category: "High Ticket Sales",
    title: "Authority Close 7",
    content: "This premium program is recognized for delivering industry-leading results."
  },
  {
    id: 235,
    category: "High Ticket Sales",
    title: "Scarcity Close 7",
    content: "Act quickly — only a few openings remain this month."
  },
  {
    id: 236,
    category: "High Ticket Sales",
    title: "Confidence Close 7",
    content: "We guarantee expert guidance and proven results for serious clients."
  },
  {
    id: 237,
    category: "High Ticket Sales",
    title: "High Ticket Offer 7",
    content: "Perfect for clients committed to achieving accelerated growth."
  },
  {
    id: 238,
    category: "High Ticket Sales",
    title: "Premium Solution 7",
    content: "Our strategies are crafted to fit your exact business needs."
  },
  {
    id: 239,
    category: "High Ticket Sales",
    title: "Authority Close 8",
    content: "Clients trust our approach because it delivers consistent success."
  },
  {
    id: 240,
    category: "High Ticket Sales",
    title: "Scarcity Close 8",
    content: "Limited slots ensure you get top-tier support and results."
  },
  {
    id: 241,
    category: "High Ticket Sales",
    title: "Confidence Close 8",
    content: "Our team is dedicated to helping you achieve measurable outcomes."
  },
  {
    id: 242,
    category: "High Ticket Sales",
    title: "High Ticket Offer 8",
    content: "This program is exclusively for clients ready to take massive action."
  },
  {
    id: 243,
    category: "High Ticket Sales",
    title: "Premium Solution 8",
    content: "We provide a step-by-step roadmap to maximize your growth potential."
  },
  {
    id: 244,
    category: "High Ticket Sales",
    title: "Authority Close 9",
    content: "Join a program built to accelerate ambitious businesses like yours."
  },
  {
    id: 245,
    category: "High Ticket Sales",
    title: "Scarcity Close 9",
    content: "Few spots left — secure your place to get full benefits."
  },
  {
    id: 246,
    category: "High Ticket Sales",
    title: "Confidence Close 9",
    content: "Our solutions are proven to deliver measurable results every time."
  },
  {
    id: 247,
    category: "High Ticket Sales",
    title: "High Ticket Offer 9",
    content: "Perfect for clients serious about taking their business to the next level."
  },
  {
    id: 248,
    category: "High Ticket Sales",
    title: "Premium Solution 9",
    content: "We design strategies that are tailored to your unique goals."
  },
  {
    id: 249,
    category: "High Ticket Sales",
    title: "Authority Close 10",
    content: "This program ensures maximum ROI through proven methods."
  },
  {
    id: 250,
    category: "High Ticket Sales",
    title: "Scarcity Close 10",
    content: "Availability is extremely limited — act now to secure your spot."
  },
  {
    id: 251,
    category: "High Ticket Sales",
    title: "Confidence Close 10",
    content: "We provide results-focused guidance to clients ready for action."
  },
  {
    id: 252,
    category: "High Ticket Sales",
    title: "High Ticket Offer 10",
    content: "Our offer is designed for serious clients seeking real business impact."
  },
  {
    id: 253,
    category: "High Ticket Sales",
    title: "Premium Solution 10",
    content: "Each client receives personalized strategies to achieve their goals."
  },

  // =========================
  // Freelancers
  // =========================
  {
    id: 301,
    category: "Freelancer Scripts",
    title: "Project Proposal",
    content: "Thank you for the opportunity. Here’s how I plan to execute your project successfully."
  },
  {
    id: 302,
    category: "Freelancer Scripts",
    title: "Price Justification",
    content: "My rate reflects the quality, experience, and guaranteed delivery."
  },
  {
    id: 303,
    category: "Freelancer Scripts",
    title: "Client Follow Up",
    content: "Just checking in regarding the project timeline."
  },
  {
    id: 304,
    category: "Freelancer Scripts",
    title: "Project Proposal 1",
    content: "Thank you for the opportunity. Here’s how I plan to execute your project successfully."
  },
  {
    id: 305,
    category: "Freelancer Scripts",
    title: "Project Proposal 2",
    content: "I’ve outlined a step-by-step plan to ensure timely and high-quality delivery."
  },
  {
    id: 306,
    category: "Freelancer Scripts",
    title: "Project Proposal 3",
    content: "This approach maximizes efficiency while keeping your objectives in focus."
  },
  {
    id: 307,
    category: "Freelancer Scripts",
    title: "Price Justification 1",
    content: "My rate reflects the quality, experience, and guaranteed delivery."
  },
  {
    id: 308,
    category: "Freelancer Scripts",
    title: "Price Justification 2",
    content: "Investing in quality now saves time and cost later."
  },
  {
    id: 309,
    category: "Freelancer Scripts",
    title: "Price Justification 3",
    content: "This pricing ensures premium results aligned with your goals."
  },
  {
    id: 310,
    category: "Freelancer Scripts",
    title: "Client Follow Up 1",
    content: "Just checking in regarding the project timeline."
  },
  {
    id: 311,
    category: "Freelancer Scripts",
    title: "Client Follow Up 2",
    content: "I wanted to ensure everything is progressing smoothly."
  },
  {
    id: 312,
    category: "Freelancer Scripts",
    title: "Client Follow Up 3",
    content: "Let me know if you need any adjustments or further clarification."
  },
  {
    id: 313,
    category: "Freelancer Scripts",
    title: "Proposal Enhancement 1",
    content: "I’ve added extra insights to optimize your project outcomes."
  },
  {
    id: 314,
    category: "Freelancer Scripts",
    title: "Proposal Enhancement 2",
    content: "Here’s an updated strategy to improve efficiency and impact."
  },
  {
    id: 315,
    category: "Freelancer Scripts",
    title: "Proposal Enhancement 3",
    content: "This addition ensures your project meets high standards."
  },
  {
    id: 316,
    category: "Freelancer Scripts",
    title: "Client Motivation 1",
    content: "Taking action now can lead to faster results and higher ROI."
  },
  {
    id: 317,
    category: "Freelancer Scripts",
    title: "Client Motivation 2",
    content: "Implementing this plan today will set your project ahead."
  },
  {
    id: 318,
    category: "Freelancer Scripts",
    title: "Client Motivation 3",
    content: "Starting immediately ensures optimal efficiency and success."
  },
  {
    id: 319,
    category: "Freelancer Scripts",
    title: "Project Update 1",
    content: "I’ve completed the initial stage; here’s a brief report."
  },
  {
    id: 320,
    category: "Freelancer Scripts",
    title: "Project Update 2",
    content: "The progress is on track and aligned with the set milestones."
  },
  {
    id: 321,
    category: "Freelancer Scripts",
    title: "Project Update 3",
    content: "All deliverables are being handled as per the timeline."
  },
  {
    id: 322,
    category: "Freelancer Scripts",
    title: "Feedback Request 1",
    content: "Could you share your thoughts on the latest draft?"
  },
  {
    id: 323,
    category: "Freelancer Scripts",
    title: "Feedback Request 2",
    content: "Your feedback will help refine the output to your preference."
  },
  {
    id: 324,
    category: "Freelancer Scripts",
    title: "Feedback Request 3",
    content: "Let me know if any adjustments are required."
  },
  {
    id: 325,
    category: "Freelancer Scripts",
    title: "Follow Up 4",
    content: "Just a quick reminder about the pending review."
  },
  {
    id: 326,
    category: "Freelancer Scripts",
    title: "Follow Up 5",
    content: "Please confirm if the last submission meets your expectations."
  },
  {
    id: 327,
    category: "Freelancer Scripts",
    title: "Follow Up 6",
    content: "Awaiting your feedback to move to the next stage."
  },
  {
    id: 328,
    category: "Freelancer Scripts",
    title: "Value Reminder 1",
    content: "This approach ensures long-term efficiency and quality."
  },
  {
    id: 329,
    category: "Freelancer Scripts",
    title: "Value Reminder 2",
    content: "Investing now guarantees superior outcomes later."
  },
  {
    id: 330,
    category: "Freelancer Scripts",
    title: "Value Reminder 3",
    content: "Our plan is designed to maximize return on your investment."
  },
  {
    id: 331,
    category: "Freelancer Scripts",
    title: "Proposal Check 1",
    content: "I’ve reviewed all aspects to ensure your objectives are met."
  },
  {
    id: 332,
    category: "Freelancer Scripts",
    title: "Proposal Check 2",
    content: "Every step is aligned with your project goals."
  },
  {
    id: 333,
    category: "Freelancer Scripts",
    title: "Proposal Check 3",
    content: "This plan provides clarity, structure, and measurable outcomes."
  },
  {
    id: 334,
    category: "Freelancer Scripts",
    title: "Client Assurance 1",
    content: "You can rely on consistent updates and transparency."
  },
  {
    id: 335,
    category: "Freelancer Scripts",
    title: "Client Assurance 2",
    content: "Your project will be handled with utmost professionalism."
  },
  {
    id: 336,
    category: "Freelancer Scripts",
    title: "Client Assurance 3",
    content: "We prioritize timely delivery and high-quality results."
  },
  {
    id: 337,
    category: "Freelancer Scripts",
    title: "Efficiency Tips 1",
    content: "Implementing this step saves time and reduces errors."
  },
  {
    id: 338,
    category: "Freelancer Scripts",
    title: "Efficiency Tips 2",
    content: "Following this method ensures smoother execution."
  },
  {
    id: 339,
    category: "Freelancer Scripts",
    title: "Efficiency Tips 3",
    content: "Optimizing these steps boosts productivity significantly."
  },
  {
    id: 340,
    category: "Freelancer Scripts",
    title: "Follow Up 7",
    content: "Checking in to ensure everything is progressing as planned."
  },
  {
    id: 341,
    category: "Freelancer Scripts",
    title: "Follow Up 8",
    content: "Let me know if there are any questions or concerns."
  },
  {
    id: 342,
    category: "Freelancer Scripts",
    title: "Follow Up 9",
    content: "We are ready to adjust as per your feedback."
  },
  {
    id: 343,
    category: "Freelancer Scripts",
    title: "Value Reminder 4",
    content: "This strategy ensures both speed and high quality."
  },
  {
    id: 344,
    category: "Freelancer Scripts",
    title: "Value Reminder 5",
    content: "Clients see a clear impact by following this approach."
  },
  {
    id: 345,
    category: "Freelancer Scripts",
    title: "Proposal Check 4",
    content: "Each detail has been carefully reviewed for optimal results."
  },
  {
    id: 346,
    category: "Freelancer Scripts",
    title: "Proposal Check 5",
    content: "This plan aligns with your priorities and expectations."
  },
  {
    id: 347,
    category: "Freelancer Scripts",
    title: "Client Assurance 4",
    content: "You can expect complete transparency throughout the process."
  },
  {
    id: 348,
    category: "Freelancer Scripts",
    title: "Client Assurance 5",
    content: "We focus on achieving the desired results without delays."
  },
  {
    id: 349,
    category: "Freelancer Scripts",
    title: "Efficiency Tips 4",
    content: "Applying these steps reduces mistakes and speeds up delivery."
  },
  {
    id: 350,
    category: "Freelancer Scripts",
    title: "Efficiency Tips 5",
    content: "Following this workflow guarantees smoother project execution."
  },
  {
    id: 351,
    category: "Freelancer Scripts",
    title: "Project Motivation 1",
    content: "Starting today will give you an edge over competitors."
  },
  {
    id: 352,
    category: "Freelancer Scripts",
    title: "Project Motivation 2",
    content: "Consistent steps now lead to faster results later."
  },
  {
    id: 353,
    category: "Freelancer Scripts",
    title: "Project Motivation 3",
    content: "Taking immediate action ensures the highest efficiency."
  },

  // =========================
  // E-commerce
  // =========================
  {
    id: 401,
    category: "Ecommerce Replies",
    title: "Order Confirmation",
    content: "Your order has been successfully received and is being processed."
  },
  {
    id: 402,
    category: "Ecommerce Replies",
    title: "Shipping Update",
    content: "Your package is on the way! Tracking details have been sent."
  },
  {
    id: 403,
    category: "Ecommerce Replies",
    title: "Out of Stock Reply",
    content: "Unfortunately, this item is currently out of stock. Would you like to be notified when available?"
  },
  {
    id: 404,
    category: "Ecommerce Replies",
    title: "Order Confirmation 1",
    content: "Your order has been successfully received and is being processed."
  },
  {
    id: 405,
    category: "Ecommerce Replies",
    title: "Order Confirmation 2",
    content: "Thank you for your purchase! We’re preparing your order for shipment."
  },
  {
    id: 406,
    category: "Ecommerce Replies",
    title: "Order Confirmation 3",
    content: "We’ve received your order and will notify you once it’s shipped."
  },
  {
    id: 407,
    category: "Ecommerce Replies",
    title: "Shipping Update 1",
    content: "Your package is on the way! Tracking details have been sent."
  },
  {
    id: 408,
    category: "Ecommerce Replies",
    title: "Shipping Update 2",
    content: "Good news! Your order has been shipped and is expected to arrive soon."
  },
  {
    id: 409,
    category: "Ecommerce Replies",
    title: "Shipping Update 3",
    content: "We’ve updated your shipment status. You can track it here."
  },
  {
    id: 410,
    category: "Ecommerce Replies",
    title: "Out of Stock Reply 1",
    content: "Unfortunately, this item is currently out of stock. Would you like to be notified when available?"
  },
  {
    id: 411,
    category: "Ecommerce Replies",
    title: "Out of Stock Reply 2",
    content: "This product is temporarily unavailable. Can we alert you when it’s back in stock?"
  },
  {
    id: 412,
    category: "Ecommerce Replies",
    title: "Out of Stock Reply 3",
    content: "We’re restocking soon! Would you like to reserve one now?"
  },
  {
    id: 413,
    category: "Ecommerce Replies",
    title: "Delivery Delay 1",
    content: "We apologize for the delay. Your order is on its way and should arrive shortly."
  },
  {
    id: 414,
    category: "Ecommerce Replies",
    title: "Delivery Delay 2",
    content: "Shipping has been delayed slightly. We appreciate your patience."
  },
  {
    id: 415,
    category: "Ecommerce Replies",
    title: "Delivery Delay 3",
    content: "Your package will arrive soon. Thank you for bearing with us."
  },
  {
    id: 416,
    category: "Ecommerce Replies",
    title: "Order Issue 1",
    content: "We noticed an issue with your order. Can we help you correct it quickly?"
  },
  {
    id: 417,
    category: "Ecommerce Replies",
    title: "Order Issue 2",
    content: "There was a problem processing your order. Please contact us to resolve it."
  },
  {
    id: 418,
    category: "Ecommerce Replies",
    title: "Order Issue 3",
    content: "We’re here to help if your order didn’t go through correctly."
  },
  {
    id: 419,
    category: "Ecommerce Replies",
    title: "Refund Request 1",
    content: "Your refund request has been received and is being processed."
  },
  {
    id: 420,
    category: "Ecommerce Replies",
    title: "Refund Request 2",
    content: "We’ve approved your refund. The amount will reflect shortly."
  },
  {
    id: 421,
    category: "Ecommerce Replies",
    title: "Refund Request 3",
    content: "Your refund is on its way. Thank you for your patience."
  },
  {
    id: 422,
    category: "Ecommerce Replies",
    title: "Product Inquiry 1",
    content: "Hi! Can I provide more details about this product for you?"
  },
  {
    id: 423,
    category: "Ecommerce Replies",
    title: "Product Inquiry 2",
    content: "Let me know if you’d like additional specifications or photos."
  },
  {
    id: 424,
    category: "Ecommerce Replies",
    title: "Product Inquiry 3",
    content: "I’m happy to answer any questions about this item."
  },
  {
    id: 425,
    category: "Ecommerce Replies",
    title: "Promotion Offer 1",
    content: "Limited-time discount! Grab your favorites before the deal ends."
  },
  {
    id: 426,
    category: "Ecommerce Replies",
    title: "Promotion Offer 2",
    content: "Special offer today only! Don’t miss the chance to save."
  },
  {
    id: 427,
    category: "Ecommerce Replies",
    title: "Promotion Offer 3",
    content: "Exclusive deal for our customers. Check it out now!"
  },
  {
    id: 428,
    category: "Ecommerce Replies",
    title: "Upsell 1",
    content: "Since you purchased [Product], you might also love this complementary item."
  },
  {
    id: 429,
    category: "Ecommerce Replies",
    title: "Upsell 2",
    content: "Customers who bought this also added [Product]. Consider adding it too!"
  },
  {
    id: 430,
    category: "Ecommerce Replies",
    title: "Upsell 3",
    content: "Enhance your order with this recommended item for better results."
  },
  {
    id: 431,
    category: "Ecommerce Replies",
    title: "Abandoned Cart 1",
    content: "You left something in your cart 👀 Complete your order today."
  },
  {
    id: 432,
    category: "Ecommerce Replies",
    title: "Abandoned Cart 2",
    content: "Reminder! Items in your cart are waiting for you. Don’t miss out."
  },
  {
    id: 433,
    category: "Ecommerce Replies",
    title: "Abandoned Cart 3",
    content: "Your cart misses you! Complete your purchase and enjoy fast delivery."
  },
  {
    id: 434,
    category: "Ecommerce Replies",
    title: "Thank You 1",
    content: "Thank you for your purchase! We appreciate your support."
  },
  {
    id: 435,
    category: "Ecommerce Replies",
    title: "Thank You 2",
    content: "We’re grateful for your order. Looking forward to serving you again."
  },
  {
    id: 436,
    category: "Ecommerce Replies",
    title: "Thank You 3",
    content: "Thanks for shopping with us! We hope you love your purchase."
  },
  {
    id: 437,
    category: "Ecommerce Replies",
    title: "Customer Feedback 1",
    content: "We’d love to hear your thoughts about your recent purchase."
  },
  {
    id: 438,
    category: "Ecommerce Replies",
    title: "Customer Feedback 2",
    content: "Your opinion matters! Please share your experience with us."
  },
  {
    id: 439,
    category: "Ecommerce Replies",
    title: "Customer Feedback 3",
    content: "Tell us what you think! Your feedback helps us improve."
  },
  {
    id: 440,
    category: "Ecommerce Replies",
    title: "Special Announcement 1",
    content: "New arrivals just in! Check out our latest collection."
  },
  {
    id: 441,
    category: "Ecommerce Replies",
    title: "Special Announcement 2",
    content: "Exciting news! We’ve added fresh products to our store."
  },
  {
    id: 442,
    category: "Ecommerce Replies",
    title: "Special Announcement 3",
    content: "Don’t miss our newest items — perfect for you!"
  },
  {
    id: 443,
    category: "Ecommerce Replies",
    title: "Limited Stock Alert 1",
    content: "Hurry! Only a few items left in stock."
  },
  {
    id: 444,
    category: "Ecommerce Replies",
    title: "Limited Stock Alert 2",
    content: "Almost gone! Grab yours before it sells out."
  },
  {
    id: 445,
    category: "Ecommerce Replies",
    title: "Limited Stock Alert 3",
    content: "Act fast! Inventory is running low on this item."
  },
  {
    id: 446,
    category: "Ecommerce Replies",
    title: "Gift Suggestion 1",
    content: "Looking for a gift? This item is highly recommended."
  },
  {
    id: 447,
    category: "Ecommerce Replies",
    title: "Gift Suggestion 2",
    content: "Perfect for gifting! Consider adding this to your order."
  },
  {
    id: 448,
    category: "Ecommerce Replies",
    title: "Gift Suggestion 3",
    content: "This item makes a thoughtful gift for any occasion."
  }
];
