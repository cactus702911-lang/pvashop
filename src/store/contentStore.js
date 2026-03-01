
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useContentStore = create(
  persist(
    (set) => ({
      notification: "🔥 Special Offer: Buy 100+ Gmail Accounts & Get 10% OFF! | 24/7 Support Available",
      header: {
        logoText: "RealShopUSA",
        ctaButton: "Order Now",
        categories: ["Facebook", "Google", "Instagram", "Email", "Reviews", "Bank", "Social Media"]
      },
      contact: {
        title: "Contact Us",
        subtitle: "Have questions about our accounts? Reach out to us anytime.",
        email: "support@realshopusa.com",
        phone: "+1 (781) 281-8745",
        address: "339 1st Ave, New York, NY 10003, USA",
        locationSubtitle: "Available 24/7"
      },
      footer: {
        description: "We are provide all kinds of PVA Account & Reviews Service. Buy Facebook, Google, Instagram, and other verified accounts.",
        copyright: "RealShopUSA. All rights reserved.",
        designedBy: "Trusted by 1000+ Clients"
      },
      home: {
        hero: {
          badge: "Best PVA Account Seller",
          title: "We provide all kinds of PVA Account & Reviews Service",
          subtitle: "\"Reviews\" typically refers to evaluations or assessments of products, services, or experiences. \"PVA accounts\" stands for \"Phone Verified Accounts.\"",
          ctaPrimary: "Order Now",
          ctaSecondary: "View Services",
          heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        stats: [
          { label: "Accounts Sold", value: "5000+" },
          { label: "Satisfaction", value: "100%" },
          { label: "Happy Clients", value: "1200+" }
        ],
        servicesTitle: "Our Feature Service",
        servicesSubtitle: "High quality verified accounts and reviews for your business growth.",
        services: [
          {
            title: "Buy Facebook Accounts",
            description: "Old and new verified Facebook accounts with marketplace access and ads manager enabled.",
            image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "/shop?category=Facebook"
          },
          {
            title: "Buy Google Reviews",
            description: "5-star permanent reviews from real devices to boost your GMB ranking.",
            image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "/shop?category=Reviews"
          },
          {
            title: "Buy Google Voice",
            description: "USA/UK verified Google Voice numbers for calling and texting.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "/shop?category=Google"
          }
        ],
        whyChoose: {
          title: "Why Choose RealShopUSA?",
          subtitle: "We prioritize transparency and efficiency, delivering verified accounts promptly to meet your immediate financial needs.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          points: [
            "100% Verified Accounts",
            "Instant Delivery",
            "Secure Payment Methods",
            "24/7 Customer Support",
            "Replacement Guarantee"
          ]
        },
        testimonialsTitle: "What Our Clients Say",
        testimonialsSubtitle: "We have thousands of satisfied customers who trust us for their account needs.",
        testimonials: [
          {
            quote: "I bought 10 Facebook accounts and they all worked perfectly. Great service!",
            author: "David Wilson",
            role: "Marketing Manager",
            image: "https://randomuser.me/api/portraits/men/44.jpg"
          },
          {
            quote: "The Google Voice numbers were delivered instantly. Highly recommended.",
            author: "Sarah Jenkins",
            role: "Business Owner",
            image: "https://randomuser.me/api/portraits/women/32.jpg"
          },
          {
            quote: "Best place to buy reviews. My GMB ranking improved significantly.",
            author: "Mike Brown",
            role: "Local Business",
            image: "https://randomuser.me/api/portraits/men/68.jpg"
          }
        ],
        ctaTitle: "Ready to Grow Your Business?",
        ctaSubtitle: "Order your verified accounts today and see the difference.",
        ctaButton: "Shop Now"
      },
      about: {
        name: "RealShopUSA Team",
        role: "Premium Account Provider",
        description1: "We are a dedicated team providing high-quality Phone Verified Accounts (PVA) and social media services.",
        description2: "Our mission is to help businesses grow by providing reliable, verified accounts for marketing and outreach. We ensure all accounts are created with unique IPs and real phone numbers.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        stats: [
            { label: "Accounts", value: "Premium Quality", subtext: "" },
            { label: "Delivery", value: "Instant", subtext: "" },
            { label: "Support", value: "24/7 Live", subtext: "" },
            { label: "Experience", value: "5+ Years", subtext: "" }
        ],
        experienceTitle: "Our Expertise",
        experience: [
          {
            role: "Social Media Accounts",
            company: "Facebook, Instagram, Twitter",
            period: "Always Available",
            description: "We provide aged and fresh accounts for all major social media platforms."
          },
          {
            role: "Email Accounts",
            company: "Gmail, Yahoo, Outlook",
            period: "In Stock",
            description: "Phone verified email accounts ready for use."
          },
          {
            role: "Payment Accounts",
            company: "PayPal, CashApp, Wise",
            period: "Verified",
            description: "Fully verified payment accounts for smooth transactions."
          }
        ],
        ctaTitle: "Need Custom Orders?",
        ctaSubtitle: "Contact us for bulk orders and special requirements.",
        ctaButton: "Contact Support"
      },
      servicesPage: {
        title: "All PVA Services",
        subtitle: "Explore our wide range of verified accounts and services.",
        customThemeTitle: "Social Media Accounts",
        customThemeItems: [
          { title: "Facebook Accounts", desc: "Old/New accounts, Marketplace enabled, Ads Manager ready." },
          { title: "Instagram Accounts", desc: "Phone verified, aged accounts with followers." },
          { title: "Twitter/X Accounts", desc: "Verified profiles, aged accounts available." },
          { title: "LinkedIn Accounts", desc: "Professional profiles with connections." }
        ],
        includedItems: [
          "Phone Verified",
          "Email Verified",
          "Unique IP Created",
          "Replacement Guarantee",
          "Instant Delivery",
          "24/7 Support",
          "Login Guide Included",
          "Secure Transfer"
        ],
        pluginTitle: "Email & Other Services",
        technicalExpertise: [
            { title: "Gmail Accounts", desc: "Old and fresh Gmails, PVA, forwarding enabled." },
            { title: "Google Voice", desc: "Personal and business numbers available." },
            { title: "Outlook/Hotmail", desc: "Verified Microsoft accounts for business use." }
        ],
        pluginDesc1: "We also provide verified accounts for various other platforms including payment gateways and review sites.",
        pluginDesc2: "All accounts are checked before delivery to ensure 100% validity.",
        pricingTitle: "Popular Packages",
        pricingSubtitle: "Choose the best package for your needs.",
        pricing: [
            {
                title: "Starter Pack",
                price: "$50",
                description: "Ideal for testing our services.",
                features: ["5 Facebook Accounts", "2 Gmail Accounts", "Basic Support", "24h Replacement"],
                cta: "Buy Now",
                highlight: false
            },
            {
                title: "Business Pack",
                price: "$150",
                description: "Perfect for small businesses.",
                features: ["20 Facebook Accounts", "10 Gmail Accounts", "5 Google Voice", "Priority Support"],
                cta: "Buy Now",
                highlight: true
            },
            {
                title: "Agency Pack",
                price: "$450",
                description: "For agencies and resellers.",
                features: ["50 Facebook Accounts", "30 Gmail Accounts", "15 Google Voice", "Dedicated Support"],
                cta: "Contact Sales",
                highlight: false
            }
        ]
      },
      productPage: {
        sidebarTitle: "Why Buy From Us?",
        sidebarPoints: [
          { icon: "CheckCircle", text: "100% Verified Accounts" },
          { icon: "Zap", text: "Instant Delivery" },
          { icon: "Headphones", text: "24/7 Live Support" }
        ],
        generalDescription: "We provide high-quality accounts verified with real phone numbers. Our accounts are created using unique IPs to ensure maximum safety and longevity.\n\n• 100% Phone Verified\n• Recovery Email Included\n• 24/7 Customer Support\n• Instant Delivery"
      },
      caseStudies: {
        title: "All Products",
        subtitle: "Browse our premium quality verified accounts.",
        categories: ['All', 'Facebook', 'Google', 'Instagram', 'Reviews', 'Bank', 'Email', 'Social Media'],
        studies: [
          {
            id: 1,
            title: "Facebook Accounts (New)",
            category: "Facebook",
            client: "Instant Delivery",
            image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Freshly created Facebook accounts. Phone verified. Comes with profile picture and cover photo. Good for general use.",
            specs: { age: "0-30 Days", ip: "USA/UK/Mix", format: "ID:Pass:2FA", warranty: "24 Hours" },
            reviews: [
                { id: 1, user: "Alex M.", rating: 5, comment: "Works perfectly. Instant delivery!", date: "2 days ago" },
                { id: 2, user: "John D.", rating: 4, comment: "Good quality accounts.", date: "1 week ago" }
            ],
            faqs: [
                { question: "Are these accounts phone verified?", answer: "Yes, all accounts are 100% phone verified with real SIM cards." },
                { question: "Do you provide replacement?", answer: "Yes, we provide 24-hour replacement guarantee for locked accounts." }
            ]
          },
          {
            id: 2,
            title: "Facebook Accounts (Aged 2010-2019)",
            category: "Facebook",
            client: "Instant Delivery",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Old Facebook accounts with high trust score. Marketplace and Ads Manager enabled. Perfect for advertising.",
            specs: { age: "2-10 Years", ip: "USA/EU", format: "ID:Pass:2FA:Cookie", warranty: "48 Hours" }
          },
          {
            id: 3,
            title: "Gmail Accounts (New)",
            category: "Email",
            client: "Instant Delivery",
            image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Fresh Gmail accounts, phone verified (PVA). Recovery email included. 100% unique IPs.",
            specs: { age: "New", ip: "Worldwide", format: "Email:Pass:Recovery", warranty: "24 Hours" }
          },
          {
            id: 4,
            title: "Gmail Accounts (Aged)",
            category: "Email",
            client: "Instant Delivery",
            image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Old Gmail accounts created 2+ years ago. Very stable and trusted by Google.",
            specs: { age: "2018-2022", ip: "USA/Mix", format: "Email:Pass:Recovery", warranty: "72 Hours" }
          },
          {
            id: 5,
            title: "Google Voice Numbers",
            category: "Google",
            client: "Instant Delivery",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "USA verified Google Voice numbers. Can send/receive SMS and calls. Works for verification on other sites.",
            specs: { age: "N/A", ip: "USA", format: "Email:Pass:Recovery:Phone", warranty: "30 Days" }
          },
           {
            id: 6,
            title: "Instagram Accounts (PVA)",
            category: "Instagram",
            client: "Instant Delivery",
            image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Phone verified Instagram accounts. Ready to use. Comes with profile picture.",
            specs: { age: "1-6 Months", ip: "Global", format: "User:Pass:Email", warranty: "24 Hours" }
          },
          {
            id: 7,
            title: "Google 5-Star Reviews",
            category: "Reviews",
            client: "24-48h Delivery",
            image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Permanent 5-star Google Maps reviews from real local accounts. Boost your GMB ranking.",
            specs: { age: "N/A", ip: "Local", format: "Link Delivery", warranty: "Non-Drop" }
          },
          {
            id: 8,
            title: "Trustpilot Reviews",
            category: "Reviews",
            client: "24-48h Delivery",
            image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Positive Trustpilot reviews to improve your business reputation. Non-drop guarantee.",
            specs: { age: "N/A", ip: "Worldwide", format: "Link Delivery", warranty: "Non-Drop" }
          },
          {
            id: 9,
            title: "Verified Wise Accounts",
            category: "Bank",
            client: "Instant Delivery",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Fully verified Wise (TransferWise) accounts. Documents submitted and approved. Ready for transactions.",
            specs: { age: "New", ip: "UK/EU/USA", format: "Full Access + Docs", warranty: "7 Days" }
          },
          {
            id: 10,
            title: "Verified PayPal Accounts",
            category: "Bank",
            client: "Instant Delivery",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Personal and Business PayPal accounts. Phone and ID verified. US/UK/EU available.",
            specs: { age: "New/Aged", ip: "USA/UK", format: "Full Access + Docs", warranty: "7 Days" }
          },
           {
            id: 11,
            title: "Twitter/X Accounts",
            category: "Social Media",
            client: "Instant Delivery",
            image: "https://images.unsplash.com/photo-1611605698335-8b15f7537f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Phone verified Twitter (X) accounts. Email included. Token login available.",
            specs: { age: "New", ip: "Global", format: "User:Pass:Email:Token", warranty: "24 Hours" }
          },
          {
            id: 12,
            title: "LinkedIn Accounts",
            category: "Social Media",
            client: "Instant Delivery",
            image: "https://images.unsplash.com/photo-1611944212129-29990970f63d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [],
            description: "Professional LinkedIn profiles with 50+ connections. Good for outreach and marketing.",
            specs: { age: "1-2 Years", ip: "USA/UK", format: "Email:Pass:Cookie", warranty: "48 Hours" }
          }
        ]
      },
      blog: {
        title: "Latest News",
        subtitle: "Updates and tips about PVA accounts and digital marketing.",
        posts: [
          {
            id: 1,
            title: "How to Keep Your Accounts Safe",
            excerpt: "Tips to prevent your purchased accounts from getting locked.",
            content: "Always use clean IPs and avoid logging in from multiple locations simultaneously...",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "March 1, 2024",
            author: "Admin",
            category: "Safety"
          }
        ]
      },
      seo: {
        siteTitle: "RealShopUSA | Buy Verified PVA Accounts",
        siteDescription: "Buy verified Facebook, Google, Instagram, and other PVA accounts at the best prices. 100% satisfaction guaranteed.",
        siteKeywords: "buy pva accounts, facebook accounts, google voice, gmail accounts, buy reviews",
        ogImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      social: {
        whatsapp: "+17812818745",
        telegram: "RealShopUSA",
        cvLink: "#",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      },
      
      updateHome: (section, data) => set((state) => ({
        home: { ...state.home, [section]: data }
      })),
      updateNestedHome: (section, index, field, value) => set((state) => {
        const currentSection = state.home[section];
        
        // Handle Why Choose Me Points
        if (section === 'whyChoose' && field === 'points' && index !== null && typeof currentSection === 'object' && 'points' in currentSection) {
             const points = [...currentSection.points];
             points[index] = value;
             return {
                 home: {
                     ...state.home,
                     whyChoose: {
                         ...state.home.whyChoose,
                         points: points
                     }
                 }
             };
        }

        // Handle array updates
        if (Array.isArray(currentSection) && index !== null) {
          const newArray = [...currentSection];
          if (typeof newArray[index] === 'object') {
            newArray[index] = { ...newArray[index], [field]: value };
          } else {
            newArray[index] = value;
          }
          return { home: { ...state.home, [section]: newArray } };
        }
        
        // Handle object updates
        if (typeof currentSection === 'object' && !Array.isArray(currentSection)) {
           return { 
             home: { 
               ...state.home, 
               [section]: { ...currentSection, [field]: value } 
             } 
           };
        }

        return state;
      }),
      updateHeader: (field, value) => set((state) => ({
        header: { ...state.header, [field]: value }
      })),
      updateContact: (field, value) => set((state) => ({
        contact: { ...state.contact, [field]: value }
      })),
      updateFooter: (field, value) => set((state) => ({
        footer: { ...state.footer, [field]: value }
      })),
      updateAbout: (field, value) => set((state) => ({
        about: { ...state.about, [field]: value }
      })),
      updateNestedAbout: (section, index, field, value) => set((state) => {
         if (section === 'stats') {
             const newStats = [...state.about.stats];
             newStats[index] = { ...newStats[index], [field]: value };
             return { about: { ...state.about, stats: newStats } };
         }
         if (section === 'experience') {
             const newExperience = [...state.about.experience];
             newExperience[index] = { ...newExperience[index], [field]: value };
             return { about: { ...state.about, experience: newExperience } };
         }
         return state;
      }),
      updateServicesPage: (field, value) => set((state) => ({
        servicesPage: { ...state.servicesPage, [field]: value }
      })),
      updateNestedServicesPage: (section, index, field, value) => set((state) => {
         if (section === 'customThemeItems') {
             const newItems = [...state.servicesPage.customThemeItems];
             newItems[index] = { ...newItems[index], [field]: value };
             return { servicesPage: { ...state.servicesPage, customThemeItems: newItems } };
         }
         if (section === 'includedItems') {
             const newItems = [...state.servicesPage.includedItems];
             newItems[index] = value;
             return { servicesPage: { ...state.servicesPage, includedItems: newItems } };
         }
         if (section === 'technicalExpertise') {
             const newItems = [...state.servicesPage.technicalExpertise];
             newItems[index] = { ...newItems[index], [field]: value };
             return { servicesPage: { ...state.servicesPage, technicalExpertise: newItems } };
         }
         if (section === 'pricing') {
             const newItems = [...state.servicesPage.pricing];
             if (field === 'features') {
                 newItems[index] = { ...newItems[index], [field]: value };
             } else {
                 newItems[index] = { ...newItems[index], [field]: value };
             }
             return { servicesPage: { ...state.servicesPage, pricing: newItems } };
         }
         return state;
      }),

      updateProductPage: (field, value) => set((state) => ({
        productPage: { ...state.productPage, [field]: value }
      })),
      updateNestedProductPage: (index, field, value) => set((state) => {
         const newPoints = [...state.productPage.sidebarPoints];
         newPoints[index] = { ...newPoints[index], [field]: value };
         return { productPage: { ...state.productPage, sidebarPoints: newPoints } };
      }),

      updateCaseStudies: (field, value) => set((state) => ({
        caseStudies: { ...state.caseStudies, [field]: value }
      })),
      updateNestedCaseStudies: (section, index, field, value) => set((state) => {
         if (section === 'studies') {
             const newStudies = [...state.caseStudies.studies];
             if (field === 'specs') {
                newStudies[index] = { ...newStudies[index], specs: { ...newStudies[index].specs, ...value } };
             } else if (field === 'reviews') {
                newStudies[index] = { ...newStudies[index], reviews: value };
             } else if (field === 'faqs') {
                newStudies[index] = { ...newStudies[index], faqs: value };
             } else {
                newStudies[index] = { ...newStudies[index], [field]: value };
             }
             return { caseStudies: { ...state.caseStudies, studies: newStudies } };
         }
         if (section === 'categories') {
             const newCategories = [...state.caseStudies.categories];
             newCategories[index] = value;
             return { caseStudies: { ...state.caseStudies, categories: newCategories } };
         }
         return state;
      }),
      
      addCaseStudy: () => set((state) => ({
        caseStudies: {
          ...state.caseStudies,
          studies: [
            ...state.caseStudies.studies,
            {
              id: Date.now(),
              title: "New Account Product",
              category: "Social Media",
              client: "Available",
              image: "",
              gallery: [],
              description: "Product description...",
              specs: { age: "New", ip: "Random", format: "Standard", warranty: "24h" }
            }
          ]
        }
      })),
      removeCaseStudy: (id) => set((state) => ({
        caseStudies: {
          ...state.caseStudies,
          studies: state.caseStudies.studies.filter(study => study.id !== id)
        }
      })),

      updateBlog: (field, value) => set((state) => ({
        blog: { ...state.blog, [field]: value }
      })),
      addBlogPost: () => set((state) => ({
        blog: {
          ...state.blog,
          posts: [
            ...state.blog.posts,
            {
              id: Date.now(),
              title: "New Post",
              excerpt: "Short excerpt...",
              content: "Full content...",
              image: "",
              date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
              author: "Admin",
              category: "Updates"
            }
          ]
        }
      })),
      removeBlogPost: (id) => set((state) => ({
        blog: {
          ...state.blog,
          posts: state.blog.posts.filter(post => post.id !== id)
        }
      })),
      updateBlogPost: (id, field, value) => set((state) => ({
        blog: {
          ...state.blog,
          posts: state.blog.posts.map(post => 
            post.id === id ? { ...post, [field]: value } : post
          )
        }
      })),

      updateSeo: (field, value) => set((state) => ({
        seo: { ...state.seo, [field]: value }
      })),
      updateSocial: (field, value) => set((state) => ({
        social: { ...state.social, [field]: value }
      })),
      updateNotification: (value) => set(() => ({
        notification: value
      }))
    }),
    {
      name: 'portfolio-content-storage',
    }
  )
);
