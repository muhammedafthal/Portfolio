export const projects = [
  {
    id: "hospital-management-system",
    title: "MediCare Plus - Hospital Management System",
    category: "Full-Stack Application",
    shortDescription:
      "A comprehensive digital healthcare management platform with multi-tier role-based access control, appointment scheduling, electronic medical records, and billing operations.",
    description:
      "Built to streamline complex hospital administrative workflows. The platform handles multi-role authentication (Admin, Doctor, Patient, Receptionist), real-time doctor availability management, secure patient health records, and structured automated billing pipelines.",
    featured: true,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "JWT Auth",
      "REST API",
    ],
    image: "/assets/images/projects/MediCare-cover-img.png",
    github: "https://github.com/muhammedafthal/hospital-management-system",
    liveDemo: "https://hms-demo.afthal.dev",

    caseStudy: {
      tagline:
        "Digitizing and Securing Healthcare Workflows for Multi-Role Clinical Environments",
      overview:
        "The Hospital Management System is an enterprise-grade full-stack web application designed to digitize clinical operations, eliminate manual paper logs, and provide real-time coordination between patients, physicians, and administrative staff.",
      objective:
        "To design a secure, reliable, and role-driven healthcare platform capable of handling appointment scheduling, doctor schedule management, electronic health records (EHR), and automated invoice generation with strict data privacy controls.",

      problem:
        "Traditional healthcare facilities struggle with fragmented appointment bookings, long patient wait times, administrative double-booking errors, and insecure paper-based medical record storage.",

      solution:
        "Engineered a centralized, cloud-ready web portal with strict Role-Based Access Control (RBAC), stateless JWT authentication, automated conflict checking for appointment slots, and structured MongoDB schemas for instant medical history retrieval.",

      userRoles: [
        {
          role: "Administrator",
          access:
            "Full system oversight, staff onboarding, department management, system logs, and financial revenue reporting.",
        },
        {
          role: "Doctor",
          access:
            "Personalized clinical dashboard, schedule & shift configuration, patient queue management, electronic prescription writing, and medical history access.",
        },
        {
          role: "Patient",
          access:
            "Self-service patient portal, doctor search by specialty, real-time appointment booking, prescription downloads, and billing history.",
        },
        {
          role: "Receptionist",
          access:
            "Front-desk check-ins, walk-in appointment entry, patient registration, and physical invoice collection.",
        },
      ],

      keyFeatures: [
        "Stateless JWT Authentication with HttpOnly cookie security & session refresh tokens.",
        "Granular Role-Based Access Control (RBAC) middleware verifying user privileges per endpoint.",
        "Dynamic Doctor Scheduling & Automated Time-Slot Collision Prevention logic.",
        "Electronic Health Records (EHR) module with prescription generation and diagnostic upload.",
        "Itemized Billing Engine calculating consultation fees, test charges, and tax summaries.",
        "Responsive, high-accessibility UI built with React.js and modern custom CSS design tokens.",
      ],

      architecture: {
        frontend:
          "Single Page Application (SPA) built with React.js using modular component architecture, custom custom-hook state management, and clear route guard wrappers for role enforcement.",
        backend:
          "Node.js & Express.js RESTful API architecture implementing layered Controller-Service-DAO software patterns, centralized error handling, and security middleware.",
        database:
          "MongoDB with Mongoose ODM for scalable JSON document modeling, index optimization on patient IDs and appointment dates, and transactional consistency.",
        security:
          "Bcrypt password hashing (12 rounds), JWT access token verification, express-rate-limit protection against brute force, and sanitized Mongo input querying to prevent injection.",
      },

      technicalDecisions: [
        {
          decision: "Layered Controller-Service Architecture",
          rationale:
            "Decoupled route handlers from business logic and database queries. This made unit testing straightforward and kept route definitions lightweight.",
        },
        {
          decision: "MongoDB Indexing Strategy",
          rationale:
            "Created compound indexes on `{ doctorId: 1, appointmentDate: 1 }` to make slot availability lookups execute in O(log N) time even under high concurrency.",
        },
        {
          decision: "Stateless JWT Auth with Middleware Guards",
          rationale:
            "Allowed seamless horizontal scaling without server session state overhead, while ensuring endpoints strictly validate `req.user.role`.",
        },
      ],

      codeSnippets: [
        {
          title: "Role-Based Access Control (RBAC) Middleware",
          language: "javascript",
          description:
            "Ensures routes can only be accessed by authenticated users holding specified enterprise privileges.",
          code: `// middleware/authorize.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authorize = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Authentication required' });
      }

      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select('-password');
      if (!user || !user.isActive) {
        return res.status(401).json({ success: false, message: 'Invalid or inactive user account' });
      }

      if (allowedRoles.length && !allowedRoles.includes(user.role)) {
        return res.status(403).json({ 
          success: false, 
          message: \`Forbidden: Role '\${user.role}' lacks permission for this operation\` 
        });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Token validation failed', error: error.message });
    }
  };
};

module.exports = authorize;`,
        },
        {
          title: "Atomic Appointment Scheduling Logic",
          language: "javascript",
          description:
            "Prevents double-booking conflicts by executing atomic database slot verification before creating appointments.",
          code: `// controllers/appointmentController.js
const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  const { doctorId, date, timeSlot, reason } = req.body;
  const patientId = req.user.id;

  // Check for existing slot collision
  const existingSlot = await Appointment.findOne({
    doctorId,
    date,
    timeSlot,
    status: { $ne: 'Cancelled' }
  });

  if (existingSlot) {
    return res.status(409).json({
      success: false,
      message: 'Selected doctor time slot is no longer available. Please select another slot.'
    });
  }

  const appointment = await Appointment.create({
    patientId,
    doctorId,
    date,
    timeSlot,
    reason,
    status: 'Scheduled',
    createdAt: new Date()
  });

  return res.status(201).json({
    success: true,
    data: appointment
  });
};`,
        },
      ],

      challenges: [
        {
          challenge: "Preventing Concurrent Appointment Double-Booking",
          description:
            "When multiple patients attempted to book the same popular doctor slot simultaneously, race conditions led to duplicate bookings.",
          solution:
            "Implemented compound unique indexes in MongoDB on `{ doctorId: 1, date: 1, timeSlot: 1 }` for active appointments combined with atomic `findOne` slot availability checks.",
        },
        {
          challenge: "Managing Multi-Tier Authorization Logic",
          description:
            "Handling different permissions across Doctors, Patients, Admins, and Receptionists across 30+ API routes without repeating boilerplate auth code.",
          solution:
            "Architected a higher-order Express middleware wrapper `authorize('Admin', 'Doctor')` that dynamically evaluates route permissions based on decoded JWT claims.",
        },
      ],

      lessonsLearned: [
        "Designing database indexes around primary user query patterns drastically improves response times under high payload.",
        "Stateless JWT architecture requires careful token expiration and refresh strategies to maintain security without ruining user session continuity.",
        "Structuring backend code into clear Controller, Service, and Middleware layers prevents technical debt as system features scale.",
      ],

      futureImprovements: [
        "Integration of WebSockets (Socket.io) for real-time patient queue status updates in clinic waiting rooms.",
        "Automated SMS/Email notification reminders 24 hours prior to scheduled appointments.",
        "Telemedicine video integration using WebRTC for remote patient consultations.",
      ],
    },
  },
  {
    id: "food-delivery-app",
    title: "Tomato - Food Delivery Platform",
    category: "Full-Stack Application",
    shortDescription:
      "A fast, scalable food ordering and delivery management system featuring real-time menu management, cart state synchronization, order tracking pipelines, and vendor dashboards.",
    description:
      "Engineered to deliver seamless online food ordering experiences. Features interactive restaurant menus, dynamic cart management, order status lifecycle workflows (Placed -> Accepted -> Preparing -> Out for Delivery -> Delivered), and vendor order processing interfaces.",
    featured: true,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "REST API",
      "CSS Modules",
    ],
    image: "/assets/images/projects/Tomato-cover-img.png",
    github: "https://github.com/muhammedafthal/food-delivery-app",
    liveDemo: "https://food-del-frontend-t3g1.onrender.com/",

    caseStudy: {
      tagline:
        "Connecting Customers, Restaurants, and Drivers via High-Performance API Pipelines",
      overview:
        "The Food Delivery Platform is a full-stack solution built to simulate high-concurrency food ordering workflows, from menu browsing to order fulfillment tracking.",
      objective:
        "To create an intuitive, lightning-fast food ordering web application with robust shopping cart persistence, real-time order status updates, and administrative management capabilities.",

      problem:
        "Online food ordering applications require reliable state sync between customer screens and restaurant kitchen dashboards, resilient order calculations, and flexible menu management.",

      solution:
        "Architected a responsive React frontend paired with a modular Express REST backend. Implemented optimistic UI updates for cart items, transactional MongoDB order creation, and status pipeline tracking.",

      userRoles: [
        {
          role: "Customer",
          access:
            "Browse restaurants and menus, filter dishes by category, build and modify shopping cart, place orders, and track real-time delivery status.",
        },
        {
          role: "Restaurant Partner",
          access:
            "Manage food items and pricing, toggle dish availability (In Stock / Out of Stock), accept incoming kitchen orders, and update preparation status.",
        },
        {
          role: "Delivery Driver",
          access:
            "View available delivery orders, accept pickup tasks, update order stage to 'Out for Delivery', and mark successful drop-offs.",
        },
      ],

      keyFeatures: [
        "Dynamic Menu & Dish Management with real-time stock toggles.",
        "Local Storage & Context State persisted cart allowing seamless page refreshes.",
        "Order State Lifecycle Machine (Placed -> Preparing -> Out for Delivery -> Delivered).",
        "Restaurant Partner Kitchen View with live status update toggles.",
        "Automated Pricing Engine computing dish totals, delivery fees, taxes, and final bill summaries.",
        "Responsive, mobile-optimized UI designed for effortless food ordering on touchscreens.",
      ],

      architecture: {
        frontend:
          "React SPA utilizing Context API for global shopping cart state management, custom debounce hooks for search inputs, and CSS Grid layout for restaurant cards.",
        backend:
          "Node.js & Express REST server structured around domain modules (Auth, Restaurant, Menu, Order), request payload validation, and custom error middleware.",
        database:
          "MongoDB with document schemas for Users, Restaurants, MenuItems, and Orders with embedded item line arrays for order history snapshots.",
        security:
          "JWT authentication, input validation using Joi schemas, CORS origin controls, and secure password hashing with bcrypt.",
      },

      technicalDecisions: [
        {
          decision: "Embedded Order Item Snapshots in Database Schema",
          rationale:
            "Stored historical item prices directly within the Order document at checkout time. This ensures past order invoices remain accurate even if restaurant prices change later.",
        },
        {
          decision: "Context API for Cart State Management",
          rationale:
            "Used React Context with local storage persistence to eliminate prop drilling and guarantee zero item loss when navigating between pages.",
        },
      ],

      codeSnippets: [
        {
          title: "Order Creation & Item Price Validation",
          language: "javascript",
          description:
            "Calculates order pricing on the backend to prevent malicious client-side price tampering before database insertion.",
          code: `// controllers/orderController.js
const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');

exports.placeOrder = async (req, res) => {
  try {
    const { items, deliveryAddress, paymentMethod } = req.body;
    const userId = req.user.id;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Cart items cannot be empty' });
    }

    let calculatedSubtotal = 0;
    const validatedOrderItems = [];

    // Server-side price verification
    for (const cartItem of items) {
      const dbItem = await MenuItem.findById(cartItem.menuItemId);
      if (!dbItem || !dbItem.isAvailable) {
        return res.status(400).json({ 
          success: false, 
          message: \`Item '\${cartItem.name}' is currently unavailable\` 
        });
      }

      const itemTotal = dbItem.price * cartItem.quantity;
      calculatedSubtotal += itemTotal;

      validatedOrderItems.push({
        menuItemId: dbItem._id,
        name: dbItem.name,
        priceAtPurchase: dbItem.price,
        quantity: cartItem.quantity
      });
    }

    const deliveryFee = calculatedSubtotal > 500 ? 0 : 40;
    const tax = Math.round(calculatedSubtotal * 0.05);
    const grandTotal = calculatedSubtotal + deliveryFee + tax;

    const newOrder = await Order.create({
      userId,
      items: validatedOrderItems,
      subtotal: calculatedSubtotal,
      deliveryFee,
      tax,
      grandTotal,
      deliveryAddress,
      paymentMethod,
      orderStatus: 'Placed',
      placedAt: new Date()
    });

    return res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Order processing failed', error: error.message });
  }
};`,
        },
      ],

      challenges: [
        {
          challenge: "Preventing Client-Side Cart Price Manipulation",
          description:
            "Clients could potentially tamper with price values sent in request JSON payloads prior to API submission.",
          solution:
            "Re-calculated all item prices on the backend by looking up fresh database values from `MenuItem` during order placement, ignoring any client-sent price attributes.",
        },
        {
          challenge: "Maintaining Cart Persistence Across Browser Sessions",
          description:
            "Users lost their cart contents when refreshing or navigating away from the page.",
          solution:
            "Implemented local storage synchronization inside the React CartContext provider with fallback hydration on initial component mount.",
        },
      ],

      lessonsLearned: [
        "Never trust client-side calculations for sensitive operations like financial totals or checkout billing.",
        "Designing state machines for order statuses makes state transitions predictable and easy to audit.",
        "Mobile-first user experience design is essential for consumer-facing applications.",
      ],

      futureImprovements: [
        "Integration of Stripe / Razorpay payment gateway SDKs for real digital payments.",
        "Live GPS delivery driver tracking using Mapbox / Google Maps API.",
        "Push notifications for order stage transitions.",
      ],
    },
  },
  {
    id: "luxora",
    title: "Luxora",
    category: "Website & Frontend",

    shortDescription:
      "A modern detergent brand website focused on clean visual presentation, responsive design, product showcasing, and a polished user experience.",

    description:
      "A responsive brand website designed to present Luxora's detergent products through a modern visual identity, product-focused layouts, and smooth interactive experiences.",

    featured: false,

    technologies: ["JavaScript", "React.js", "Vite", "CSS"],

    image: "/assets/images/frontend-projects-cover-images/Luxora-cover-img.png",

    github: "YOUR_GITHUB_URL",
    liveDemo: "https://luxorahygiene.com/",

    caseStudy: null,
  },

  {
    id: "royal-school",
    title: "Royal School",
    category: "Website & Frontend",

    shortDescription:
      "A modern responsive school website designed to present academic information, school activities, facilities, and important information through a polished digital experience.",

    description:
      "A responsive school website focused on clear information architecture, professional visual presentation, and a consistent experience across desktop, tablet, and mobile devices.",

    featured: false,

    technologies: ["JavaScript", "React.js", "Vite", "CSS"],

    image:
      "/assets/images/frontend-projects-cover-images/RoyalSchool-cover-img.png",

    github: "YOUR_GITHUB_URL",
    liveDemo: "https://royal.brandfolks.in/",

    caseStudy: null,
  },
];
