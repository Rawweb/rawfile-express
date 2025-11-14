// Import your service images
import seaImage from '@assets/quote.jpg';
import warehouseImage from '@assets/warehouse.jpg';
import airImage from '@assets/why-choose.jpg';
import roadImage from '@assets/expert-hero.jpg';
import projectImage from '@assets/gallery.jpg';
import customImage from '@assets/service-single.jpg';
import benefitImage1 from '@assets/service-single-2.jpg';
import benefitImage2 from '@assets/warehouse-1.jpg';
import benefitImage3 from '@assets/how-it-works.png';

export const servicesData = [
  {
    id: 'sea-transport',
    title: 'Sea Transport Services',
    icon: 'LuShip',
    mainImage: seaImage,
    benefitImage: benefitImage1,
    description: [
      `Our sea freight services ensure global shipping solutions that are secure, efficient, and competitively priced. We specialize in managing all types of cargo — from bulk shipments to containerized goods — while ensuring every stage of transportation is carefully planned and monitored. With strategic partnerships across major international ports, we guarantee reliable transit schedules, transparent communication, and full documentation support, making ocean shipping straightforward and stress-free.`,
      `We combine technology with logistics expertise to deliver cost-effective maritime operations that keep your business running smoothly. Whether you’re importing goods, exporting products, or managing distribution across continents, our team handles routing, customs, insurance, and delivery coordination with precision. We’re dedicated to offering scalable ocean freight services that move your business forward with confidence and global reach.`,
    ],
    description1: [
      'Providing dependable sea freight solutions that guarantee timely and secure international cargo delivery worldwide.',
    ],
    benefitText:
      'We deliver dependable and cost-effective sea freight solutions, ensuring timely shipments, full compliance, and global transport visibility.',
    benefits: [
      'Clearance and compliance support',
      'Reliable global shipping schedules',
      'Optimized freight cost management',
      'Real-time cargo visibility',
    ],
  },
  {
    id: 'warehousing',
    title: 'Warehousing Services',
    icon: 'PiWarehouseDuotone',
    mainImage: warehouseImage,
    benefitImage: benefitImage2,
    description: [
      `Our warehousing solutions are built to keep your supply chain organized, efficient, and scalable. We provide secure storage, inventory management, and seamless distribution services tailored to your business needs. Our facilities are equipped with advanced tracking systems that ensure full visibility and control of your goods at all times.`,
      `From short-term storage to complete fulfillment solutions, we help streamline your logistics operations and reduce handling times. Our professional staff manages packaging, labeling, and dispatch with precision, ensuring every order moves through the warehouse efficiently and reaches your customers on schedule.`,
    ],
    description1: [
      'Organized and secure storage facilities designed to optimize logistics, inventory management, and distribution efficiency.',
    ],
    benefitText:
      'We enhance your supply chain with organized, tech-driven storage, real-time tracking, and optimized order fulfillment.',
    benefits: [
      'Secure and organized storage',
      'Real-time inventory updates',
      'Streamlined order processing',
      'Scalable warehouse capacity',
    ],
  },
  {
    id: 'air-freight',
    title: 'Air Freight Services',
    icon: 'MdFlightTakeoff',
    mainImage: airImage,
    benefitImage: benefitImage3,
    description: [
      `When time is critical, our air freight solutions offer the speed and reliability your business needs. We handle domestic and international air shipments with streamlined coordination from pickup to delivery. Our partnerships with major airlines and cargo carriers allow us to secure competitive rates and ensure timely arrivals, even under tight deadlines. Every shipment is tracked and managed in real-time to maintain accuracy and peace of mind.`,
      `Our team understands that air logistics requires precision and flexibility. From high-value goods to time-sensitive cargo, we create customized solutions that minimize delays and maximize efficiency. Through advanced monitoring systems, careful documentation, and proactive communication, we guarantee your air freight moves safely, quickly, and in full compliance with global standards.`,
    ],
    description1: [
      'Fast and efficient air transport services for time-sensitive cargo, ensuring speed, reliability, and safety.',
    ],
    benefitText:
      'We deliver express global shipments with precision, reliability, and tracking that keeps you updated every step.',
    benefits: [
      'Fast and reliable delivery',
      'Real-time shipment tracking',
      'Priority handling services',
      'Global airline partnerships',
    ],
  },
  {
    id: 'road-transport',
    title: 'Road Transport Services',
    icon: 'FaCaravan',
    mainImage: roadImage,
    benefitImage: benefitImage2,
    description: [
      `Our road transport services provide dependable door-to-door delivery solutions designed for flexibility and speed. We operate a modern fleet of vehicles that handle everything from local distribution to interstate cargo movements with precision. Every journey is optimized for time, cost, and safety, ensuring your goods reach their destination in excellent condition and exactly when needed.`,
      `We integrate GPS tracking, route planning, and real-time updates into our operations to keep clients informed every step of the way. Whether you require scheduled deliveries, temperature-controlled transport, or express logistics, our road freight network provides nationwide coverage that combines performance with transparency and care.`,
    ],
    description1: [
      'Specialized logistics support for exhibitions, events, and heavy project cargo with precision handling.',
    ],
    benefitText:
      'We bring efficiency and dependability to every local delivery, ensuring quick turnaround and secure handling.',
    benefits: [
      'Door-to-door transport network',
      'Flexible delivery scheduling',
      'GPS-enabled cargo tracking',
      'Cost-efficient local logistics',
    ],
  },
  {
    id: 'project-exhibition',
    title: 'Project & Exhibition Logistics',
    icon: 'FaClipboardList',
    mainImage: projectImage,
    benefitImage: benefitImage3,
    description: [
      `Our Project and Exhibition Logistics service provides specialized handling for complex, high-value, and time-critical consignments across multiple industries. From trade fairs and art expos to industrial plant setups, we manage the entire logistics chain with precision, flexibility, and care. Our team ensures that every shipment — from massive exhibits to delicate showpieces — arrives on time and in pristine condition, no matter the location. Through our deep understanding of event timelines and industry regulations, we help clients overcome customs, transportation, and scheduling challenges seamlessly.`,
      ,
      `Whether you're organizing an international exhibition, corporate roadshow, or engineering project, we offer end-to-end coordination that covers transportation, storage, installation, and post-event return. We handle route surveys, cargo documentation, on-site supervision, and liaise with venue authorities to ensure complete operational efficiency. Every detail is meticulously managed to keep your materials moving safely and your event running smoothly, allowing you to focus on presentation and success — while we handle the logistics with confidence and reliability.`,
    ],
    description1: [
      'Trusted door-to-door logistics across local destinations with flexible transport scheduling and quick response.',
    ],
    benefitText:
      'We provide complete logistical coordination for exhibitions and heavy projects, ensuring timely delivery, professional setup, and safe post-event returns through well-structured planning and expert handling.',
    benefits: [
      'Dedicated project management for all shipments',
      'End-to-end coordination from pickup to setup',
      'On-site supervision and technical support',
      'Customs documentation and clearance handling',
    ],
  },
  {
    id: 'custom-clearance',
    title: 'Customer Clearance',
    icon: 'FaPeopleCarry',
    mainImage: customImage,
    benefitImage: benefitImage1,
    description: [
      `Navigating customs procedures can be complex — our customs clearance team ensures a smooth and compliant process every time. We handle all documentation, duties, and tax requirements to prevent delays and reduce unnecessary costs. Our experts maintain strong relationships with customs authorities to accelerate your cargo clearance and eliminate compliance risks.`,
      `We simplify import and export operations through proactive planning and transparent communication. From document verification to tariff classification and duty payment, we handle every step with care and efficiency. With our guidance, you can move your shipments across borders confidently and focus on growing your business.`,
    ],
    description1: [
      'Simplified customs clearance ensuring compliance, speed, and hassle-free cargo movement through every checkpoint.',
    ],
    benefitText:
      'We streamline customs processes to eliminate clearance delays and ensure all goods meet international trade regulations.',
    benefits: [
      'Fast customs documentation',
      'Regulatory compliance assurance',
      'Reduced border delays',
      'Transparent cost estimation',
    ],
  },
];
