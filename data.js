const templates = [

  // =========================
  // Instagram Sales DM
  // =========================
  {
    id: 14,
    category: "Instagram Sales",
    title: "Warm Lead DM",
    content: "Hey 👋 I noticed you were interested in our product. Do you have any questions I can help with?"
  },
  {
    id: 15,
    category: "Instagram Sales",
    title: "Limited Offer DM",
    content: "We’re closing this offer tonight. I wanted to make sure you don’t miss it."
  },
  {
    id: 16,
    category: "Instagram Sales",
    title: "Reactivation Message",
    content: "Hi again! Just checking in to see if you’re still considering moving forward."
  },

  // =========================
  // High Ticket Sales
  // =========================
  {
    id: 17,
    category: "High Ticket Sales",
    title: "Authority Close",
    content: "Based on your goals, this premium solution is exactly what you need."
  },
  {
    id: 18,
    category: "High Ticket Sales",
    title: "Scarcity Close",
    content: "We only accept 5 new clients per month to maintain quality."
  },
  {
    id: 19,
    category: "High Ticket Sales",
    title: "Confidence Close",
    content: "If you’re serious about results, this is the right move."
  },

  // =========================
  // Freelancers
  // =========================
  {
    id: 20,
    category: "Freelancer Scripts",
    title: "Project Proposal",
    content: "Thank you for the opportunity. Here’s how I plan to execute your project successfully."
  },
  {
    id: 21,
    category: "Freelancer Scripts",
    title: "Price Justification",
    content: "My rate reflects the quality, experience, and guaranteed delivery."
  },
  {
    id: 22,
    category: "Freelancer Scripts",
    title: "Client Follow Up",
    content: "Just checking in regarding the project timeline."
  },

  // =========================
  // E-commerce
  // =========================
  {
    id: 23,
    category: "Ecommerce Replies",
    title: "Order Confirmation",
    content: "Your order has been successfully received and is being processed."
  },
  {
    id: 24,
    category: "Ecommerce Replies",
    title: "Shipping Update",
    content: "Your package is on the way! Tracking details have been sent."
  },
  {
    id: 25,
    category: "Ecommerce Replies",
    title: "Out of Stock Reply",
    content: "Unfortunately, this item is currently out of stock. Would you like to be notified when available?"
  },

  // =========================
  // Customer Support
  // =========================
  {
    id: 26,
    category: "Customer Support",
    title: "Complaint Response",
    content: "We sincerely apologize for the inconvenience. Let’s resolve this immediately."
  },
  {
    id: 27,
    category: "Customer Support",
    title: "Refund Response",
    content: "Your refund request has been approved and will be processed within 3 business days."
  },
  {
    id: 28,
    category: "Customer Support",
    title: "Technical Support",
    content: "Please try restarting the system. If the issue persists, let us know."
  },

  // =========================
  // Real Estate
  // =========================
  {
    id: 29,
    category: "Real Estate Scripts",
    title: "Property Offer",
    content: "This property matches exactly what you’re looking for."
  },
  {
    id: 30,
    category: "Real Estate Scripts",
    title: "Viewing Confirmation",
    content: "Your viewing appointment is confirmed for tomorrow at 4 PM."
  },
  {
    id: 31,
    category: "Real Estate Scripts",
    title: "Follow Up Buyer",
    content: "What did you think about the property? Any questions?"
  },

  // =========================
  // Marketing Hooks
  // =========================
  {
    id: 32,
    category: "Marketing Hooks",
    title: "Curiosity Hook",
    content: "What if I told you this one strategy can double your sales?"
  },
  {
    id: 33,
    category: "Marketing Hooks",
    title: "Problem Hook",
    content: "Struggling to close clients? Here’s the fix."
  },
  {
    id: 34,
    category: "Marketing Hooks",
    title: "Result Hook",
    content: "How we generated 10,000$ in 7 days."
  },

  // =========================
  // Call To Action
  // =========================
  {
    id: 35,
    category: "Call To Action",
    title: "Strong CTA",
    content: "Click the link below and secure your spot now."
  },
  {
    id: 36,
    category: "Call To Action",
    title: "Soft CTA",
    content: "Let me know if you’d like more details."
  },
  {
    id: 37,
    category: "Call To Action",
    title: "Urgent CTA",
    content: "Offer expires at midnight. Act now."
  },

  {
    id: 2001,
    category: "WhatsApp Sales",
    title: "Premium Product Introduction",
    content: "Hi! I’m reaching out to personally introduce our premium solution that has helped hundreds of businesses increase conversions and close more deals consistently. Would you like a quick overview?"
  },
  {
    id: 2002,
    category: "WhatsApp Sales",
    title: "Soft Follow Up",
    content: "Just wanted to gently follow up in case my previous message got buried. I’d love to help you move forward when you're ready."
  },
  {
    id: 2003,
    category: "WhatsApp Sales",
    title: "Limited Offer Push",
    content: "Quick heads up — we’re running a limited-time offer and I didn’t want you to miss it. Spots are filling fast. Would you like me to reserve one for you?"
  },
  {
    id: 2004,
    category: "Objection Handling",
    title: "Price Objection",
    content: "I completely understand wanting the best value for your money. Most of our clients felt the same before they saw the results. Would you like to see how it pays for itself?"
  },
  {
    id: 2005,
    category: "Objection Handling",
    title: "Need To Think",
    content: "That makes sense. Usually when someone says they need to think about it, there’s one main concern. May I ask what’s holding you back?"
  },
  {
    id: 2006,
    category: "Cold Email",
    title: "B2B Introduction",
    content: "Hi [Name], I came across your company and noticed you’re expanding in your market. We help businesses like yours increase lead flow and revenue predictably. Open to a quick 10-minute call?"
  },
  {
    id: 2007,
    category: "Cold Email",
    title: "Short Pitch Email",
    content: "Hi [Name], We help companies increase sales without increasing ad spend. If that sounds interesting, I’d love to share details."
  },
  {
    id: 2008,
    category: "Instagram DM",
    title: "Warm Engagement DM",
    content: "Hey! I’ve been following your content and love what you’re doing. Quick question — are you currently looking to improve your conversions?"
  },
  {
    id: 2009,
    category: "Instagram DM",
    title: "Lead Qualification",
    content: "Before I share more details, can I ask — are you currently running paid traffic or focusing on organic growth?"
  },
  {
    id: 2010,
    category: "Freelancer Proposal",
    title: "High Ticket Proposal",
    content: "Thank you for considering my services. Based on your project goals, I propose a complete strategy designed to deliver measurable growth and long-term results."
  },
  {
    id: 2011,
    category: "Client Retention",
    title: "Reactivation Message",
    content: "Hi! We haven’t worked together in a while and I wanted to reconnect. We’ve added new features that might significantly benefit you."
  },
  {
    id: 2012,
    category: "Appointment Setting",
    title: "Booking Confirmation",
    content: "Great! I’ve scheduled your session for [Date]. You’ll receive a reminder shortly. Looking forward to speaking with you."
  },
  {
    id: 2013,
    category: "Ecommerce",
    title: "Abandoned Cart Reminder",
    content: "You left something special in your cart 👀. Complete your order today and enjoy fast delivery."
  },
  {
    id: 2014,
    category: "Ecommerce",
    title: "Upsell Offer",
    content: "Since you purchased [Product], you might also love this complementary item at a special discount."
  },
  {
    id: 2015,
    category: "Digital Products",
    title: "Course Launch Message",
    content: "Enrollment is now open! This course walks you step-by-step through proven strategies used by top professionals."
  },
  {
    id: 2016,
    category: "Digital Products",
    title: "Scarcity Reminder",
    content: "Enrollment closes tonight. If you've been waiting for the right moment, this is it."
  },
  {
    id: 2017,
    category: "Customer Support",
    title: "Delay Apology",
    content: "We sincerely apologize for the delay. Our team is actively resolving the issue and we appreciate your patience."
  },
  {
    id: 2018,
    category: "Customer Support",
    title: "Refund Response",
    content: "We understand your concern. Please allow us to review your case and provide the best possible resolution."
  },
  {
    id: 2019,
    category: "Networking",
    title: "LinkedIn Introduction",
    content: "Hi [Name], I admire your work in the industry and would love to connect and exchange insights."
  },
  {
    id: 2020,
    category: "Networking",
    title: "Collaboration Pitch",
    content: "I believe there’s strong synergy between our audiences. Would you be open to exploring a collaboration opportunity?"
  },

  // =========================
  // WhatsApp Replies
  // =========================
  {
    id: 1,
    category: "WhatsApp Replies",
    title: "Professional Greeting",
    content: "Hello 👋 Thank you for contacting us. How can I assist you today?"
  },
  {
    id: 2,
    category: "WhatsApp Replies",
    title: "Follow Up Message",
    content: "Just following up regarding my previous message. Let me know if you had the chance to review it."
  },
  {
    id: 3,
    category: "WhatsApp Replies",
    title: "Polite Delay Reply",
    content: "Apologies for the delayed response. I truly appreciate your patience."
  },

  // =========================
  // Sales Scripts
  // =========================
  {
    id: 4,
    category: "Sales Scripts",
    title: "Soft Close Script",
    content: "Based on what you shared, this solution fits your needs perfectly. Shall we move forward?"
  },
  {
    id: 5,
    category: "Sales Scripts",
    title: "Urgency Close",
    content: "We only have limited spots available this week. I’d recommend securing yours today."
  },
  {
    id: 6,
    category: "Sales Scripts",
    title: "High Ticket Offer",
    content: "This is not for everyone. It’s designed for serious clients ready for real results."
  },

  // =========================
  // Objection Handling
  // =========================
  {
    id: 7,
    category: "Objection Handling",
    title: "Too Expensive",
    content: "I understand. Most of our clients felt the same before seeing the actual return on investment."
  },
  {
    id: 8,
    category: "Objection Handling",
    title: "Need To Think",
    content: "Of course. May I ask what specifically you’d like to think about so I can clarify?"
  },
  {
    id: 9,
    category: "Objection Handling",
    title: "Not Interested",
    content: "No worries at all. Can I ask what would make this more valuable for you?"
  },

  // =========================
  // DM Templates
  // =========================
  {
    id: 10,
    category: "DM Templates",
    title: "Collaboration DM",
    content: "Hi! I love your content and I believe we could create something powerful together."
  },
  {
    id: 11,
    category: "DM Templates",
    title: "Cold Outreach",
    content: "Hi, I came across your profile and I have an idea that could bring more clients to your business."
  },

  // =========================
  // Business Emails
  // =========================
  {
    id: 12,
    category: "Business Emails",
    title: "Formal Proposal Email",
    content: "Dear Sir/Madam, Please find attached our proposal for your review."
  },
  {
    id: 13,
    category: "Business Emails",
    title: "Partnership Email",
    content: "We are interested in exploring a potential partnership opportunity."
  }

];
