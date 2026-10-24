import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STORE = {
  name: 'Garhwal Hardware Store',
  phone: '+919682558068',
  whatsapp: '919682558068',
  email: 'taraknathsingh688@gmail.com',
  address: 'Ara - Sasaram Main Road, Udwantnagar, Ara (Bhojpur) - 802210, Bihar',
  mapSrc: 'https://maps.google.com/maps?cid=5774004426147478906&output=embed',
  hours: 'Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 4:00 PM'
};

// ==================== PRODUCT IMAGES MAP ====================
const CAT_IMAGES = {
  pvc: 'images/pvc.webp',
  tanks: 'images/tanks.webp',
  plumbing: 'images/plumbing.webp',
  sanitary: 'images/sanitary.webp',
  pumps: 'images/pumps.webp',
  electrical: 'images/electrical.webp',
  hardware: 'images/hardware.webp',
  tools: 'images/tools.webp',
  nerolac: 'images/nerolac.webp'
};

// Each product has its own real photograph: images/products/product_real_<id>.jpg (with SVG fallback).
const productImage = (product) => product.realImage || `images/products/product_real_${product.id}.jpg`;

// ==================== LANGUAGE SYSTEM ====================
let lang = (() => {
  try {
    const stored = localStorage.getItem('garhwal_lang');
    return stored === 'en' || stored === 'hi' ? stored : 'hi';
  } catch (e) {
    return 'hi';
  }
})();

const LANG = {
  en: {
    navHome: 'Home', navProducts: 'Products', navCategories: 'Categories', navAbout: 'About', navContact: 'Contact',
    call: 'Call', browseProducts: 'Browse Products', whatsappUs: 'WhatsApp Us', viewAllCategories: 'View All Categories →',
    ourCategories: 'Our Categories', whyChooseUs: 'Why Choose Us?',
    genuine: 'Genuine Products', genuineDesc: 'Only branded, quality-assured materials',
    wideInv: 'Wide Inventory', wideInvDesc: 'Everything in stock, ready for delivery',
    fastDel: 'Fast Delivery', fastDelDesc: 'Same-day delivery in Ara',
    bestPrice: 'Best Prices', bestPriceDesc: 'Factory-direct pricing, no middlemen',
    allProducts: 'All Products', products: 'Products', searchPlaceholder: 'Search products...',
    noProducts: 'No products found. Try a different search or category.',
    needPrice: 'Get Price',
    browseByCat: 'Browse by category to find exactly what you need.',
    aboutUs: 'About Us',
    aboutDesc1: 'We are a family-owned hardware and building materials store located on Ara-Sasaram Main Road in Udwantnagar, Ara (Bhojpur), Bihar. We supply quality construction materials, plumbing solutions, electrical items, and tools to homeowners, contractors, and businesses.',
    aboutDesc2: 'Our team ensures every product meets industry standards. Whether you are building a new home, renovating, or need emergency supplies, we have you covered with genuine products at the best prices.',
    ourValues: 'Our Values',
    trust: 'Trust', trustDesc: 'Years of honest service',
    quality: 'Quality', qualityDesc: 'Only genuine branded products',
    service: 'Service', serviceDesc: 'Expert advice for every project',
    community: 'Community', communityDesc: 'Building Bihar together',
    shopTiming: 'Shop Timing',
    contactUs: 'Contact Us',
    findUs: 'Find Us Here',
    sendMsg: 'Send a Message',
    yourName: 'Your Name',
    phoneNumber: 'Phone Number',
    yourMessage: 'Your Message',
    sendViaWA: 'Send via WhatsApp →',
    aboutTag: 'Serving Ara & beyond since 1998',
    aboutLogo: '🏪',
    heroTitle1: 'Your Trusted',
    heroTitle2: 'Hardware Partner',
    heroDesc: 'Quality building materials, expert advice & fastest delivery in Ara since 1998',
    productsCount: 'Products →',
    callPhone: 'Call Now',
    whatsappChat: 'WhatsApp',
    location: 'Location', hoursLabel: 'Hours',
    nerolacBadge: '🏆 Authorized Nerolac Dealer',
    nerolacTitle: 'Nerolac Paints',
    nerolacDesc: 'Premium quality paints, primers, putty & waterproofing from Nerolac.',
    nerolacInterior: 'Interior',
    nerolacExterior: 'Exterior',
    nerolacPrimer: 'Primer',
    nerolacPutty: 'Putty',
    nerolacEnamel: 'Enamel',
    nerolacWaterproofing: 'Waterproof',
    nerolacCta: 'Explore Nerolac Paints →',
    reviewsTitle: 'Find Us on Google',
    reviewsDesc: 'Search Garhwal Hardware Store on Google Maps for directions & reviews.',
    reviewsCta: 'Open on Google Maps →',
    deliveryTitle: 'Delivery Available',
    deliveryDesc: 'Delivery across these areas (confirm on call):',
    deliveryAra: 'Ara (Bhojpur)',
    deliveryUdwant: 'Udwantnagar',
    deliveryVillages: 'Nearby Villages',
    deliveryNote: 'Call or WhatsApp to confirm delivery timing & charges.',
    photosTitle: 'Real Products in Stock',
    photosDesc: 'Visit our store to see the full range.',
    photoPaints: 'Paints',
    photoPipes: 'Pipes & Fittings',
    photoTanks: 'Water Tanks',
    photoTools: 'Tools',
    photoStore: 'Our Store',
    photoElectrical: 'Electrical',
    heroBadge: 'Since 1998 • Serving Ara & nearby areas',
    statProducts: 'Products listed',
    statYears: 'Years',
    statCustomers: 'Local service',
    testimonialTitle: 'Why People Choose Us',
    why1Title: 'Always in touch',
    why1Text: 'Call or WhatsApp for stock, rates, and same-day advice — no app needed.',
    why2Title: 'Honest dealing',
    why2Text: 'Genuine branded materials with clear rates for retail and contractor bulk orders.',
    why3Title: 'On-ground support',
    why3Text: 'Helpful staff for plumbing, electrical, paint, and construction needs.',
    why4Title: 'Local delivery',
    why4Text: 'Delivery across Ara, Udwantnagar, and nearby villages — confirm timing on call.',
    marquee1: '✅ Genuine Products',
    marquee2: '🚚 Same-Day Delivery',
    marquee3: '💰 Best Prices',
    marquee4: '👷 Contractor Rates',
    marquee5: '🎨 Nerolac Dealer',
    marquee6: '📞 Call for Quotes',
    saved: 'Saved',
    askPrice: 'Ask for price',
    available: 'Available in store',
    specsTitle: 'Details',
    chatWhatsapp: 'Chat with us on WhatsApp',
    emailUs: 'Email Us',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    homeLabel: 'Home',
    allProductsLabel: 'All Products',
    savedItems: 'Saved Items',
    productsArrow: 'products →',
    fieldRequired: 'This field is required.',
    phoneInvalid: 'Enter a valid 10–15 digit phone number.',
    brandLabel: 'Popular brands',
    originLabel: 'Origin',
    warrantyLabel: 'Warranty',
    materialLabel: 'Material',
    standardLabel: 'Standard',
    layersLabel: 'Layers',
    powerLabel: 'Power',
    voltageLabel: 'Voltage',
    finishLabel: 'Finish',
    madeInIndia: 'Made in India',
    warrantyNA: 'As per brand',
    warrantyPump: '1 Year (typical manufacturer)',
    footerTag: 'Providing quality hardware & building materials to Ara and surrounding areas since 1998.',
    rightsReserved: 'All rights reserved.',
    madeInAra: 'Made in Ara, Bihar',
    monSatShort: 'Mon–Sat: 9AM–8PM',
    priceNote: 'Prices change with market rates — WhatsApp us for today’s quote.'
    ,visitStore: 'Visit our store'
    ,tradeQuotes: 'Trade & contractor quotes'
    ,localDelivery: 'Local delivery available'
  },
  hi: {
    navHome: 'होम', navProducts: 'उत्पाद', navCategories: 'श्रेणियाँ', navAbout: 'हमारे बारे में', navContact: 'संपर्क',
    call: 'कॉल करें', browseProducts: 'उत्पाद देखें', whatsappUs: 'व्हाट्सएप करें', viewAllCategories: 'सभी श्रेणियाँ देखें →',
    ourCategories: 'हमारी श्रेणियाँ', whyChooseUs: 'हमें क्यों चुनें?',
    genuine: 'असली उत्पाद', genuineDesc: 'केवल ब्रांडेड, गुणवत्ता वाली सामग्री',
    wideInv: 'विस्तृत इन्वेंट्री', wideInvDesc: 'सब कुछ स्टॉक में, डिलीवरी के लिए तैयार',
    fastDel: 'तेज़ डिलीवरी', fastDelDesc: 'आरा में उसी दिन डिलीवरी',
    bestPrice: 'सबसे अच्छी कीमत', bestPriceDesc: 'फैक्ट्री-डायरेक्ट प्राइसिंग, कोई बिचौलिया नहीं',
    allProducts: 'सभी उत्पाद', products: 'उत्पाद', searchPlaceholder: 'उत्पाद खोजें...',
    noProducts: 'कोई उत्पाद नहीं मिला। कृपया दूसरी श्रेणी या सर्च ट्राई करें।',
    needPrice: 'मूल्य जानें',
    browseByCat: 'अपनी ज़रूरत का उत्पाद खोजने के लिए श्रेणी के अनुसार ब्राउज़ करें।',
    aboutUs: 'हमारे बारे में',
    aboutDesc1: 'हम एक पारिवारिक हार्डवेयर और बिल्डिंग मटेरियल की दुकान हैं, जो आरा-सासाराम मेन रोड, उदवंतनगर, आरा (भोजपुर), बिहार में स्थित है। हम घर मालिकों, ठेकेदारों और व्यवसायों को गुणवत्ता वाली निर्माण सामग्री, प्लंबिंग सॉल्यूशन, इलेक्ट्रिकल आइटम और टूल्स सप्लाई करते हैं।',
    aboutDesc2: 'हमारी टीम सुनिश्चित करती है कि हर उत्पाद उद्योग मानकों को पूरा करता है। चाहे आप नया घर बना रहे हों, रेनोवेशन कर रहे हों, या आपातकालीन सप्लाई की ज़रूरत हो, हम आपको सबसे अच्छी कीमतों पर असली उत्पाद उपलब्ध कराते हैं।',
    ourValues: 'हमारी मान्यताएँ',
    trust: 'विश्वास', trustDesc: 'ईमानदार सेवा के वर्ष',
    quality: 'गुणवत्ता', qualityDesc: 'केवल असली ब्रांडेड उत्पाद',
    service: 'सेवा', serviceDesc: 'हर प्रोजेक्ट के लिए विशेषज्ञ सलाह',
    community: 'समुदाय', communityDesc: 'बिहार को मिलकर बनाना',
    shopTiming: 'दुकान का समय',
    contactUs: 'संपर्क करें',
    findUs: 'हमें यहाँ खोजें',
    sendMsg: 'संदेश भेजें',
    yourName: 'आपका नाम',
    phoneNumber: 'फ़ोन नंबर',
    yourMessage: 'आपका संदेश',
    sendViaWA: 'व्हाट्सएप के माध्यम से भेजें →',
    aboutTag: '1998 से आरा और आसपास सेवा',
    aboutLogo: '🏪',
    heroTitle1: 'आपका विश्वसनीय',
    heroTitle2: 'हार्डवेयर पार्टनर',
    heroDesc: '1998 से गुणवत्ता निर्माण सामग्री, विशेषज्ञ सलाह और आरा में सबसे तेज़ डिलीवरी',
    productsCount: 'उत्पाद →',
    callPhone: 'अभी कॉल करें',
    whatsappChat: 'व्हाट्सएप',
    location: 'पता', hoursLabel: 'समय',
    nerolacBadge: '🏆 अधिकृत नेरोलैक डीलर',
    nerolacTitle: 'नेरोलैक पेंट्स',
    nerolacDesc: 'नेरोलैक से प्रीमियम गुणवत्ता वाले पेंट, प्राइमर, पुट्टी और वॉटरप्रूफिंग।',
    nerolacInterior: 'इंटीरियर',
    nerolacExterior: 'एक्सटीरियर',
    nerolacPrimer: 'प्राइमर',
    nerolacPutty: 'पुट्टी',
    nerolacEnamel: 'इनेमल',
    nerolacWaterproofing: 'वॉटरप्रूफ',
    nerolacCta: 'नेरोलैक पेंट्स देखें →',
    reviewsTitle: 'गूगल पर खोजें',
    reviewsDesc: 'दिशा और समीक्षाओं के लिए गूगल मैप्स पर गढ़वाल हार्डवेयर स्टोर खोजें।',
    reviewsCta: 'गूगल मैप्स खोलें →',
    deliveryTitle: 'डिलीवरी उपलब्ध',
    deliveryDesc: 'इन क्षेत्रों में डिलीवरी (कॉल पर पुष्टि):',
    deliveryAra: 'आरा (भोजपुर)',
    deliveryUdwant: 'उदवंतनगर',
    deliveryVillages: 'आसपास के गाँव',
    deliveryNote: 'डिलीवरी समय और शुल्क की पुष्टि के लिए कॉल या व्हाट्सएप करें।',
    photosTitle: 'असली उत्पाद स्टॉक में',
    photosDesc: 'पूरी रेंज देखने के लिए हमारी दुकान पर आएं।',
    photoPaints: 'पेंट',
    photoPipes: 'पाइप और फिटिंग',
    photoTanks: 'पानी की टंकियाँ',
    photoTools: 'टूल्स',
    photoStore: 'हमारी दुकान',
    photoElectrical: 'इलेक्ट्रिकल',
    heroBadge: '1998 से • आरा और आसपास सेवा',
    statProducts: 'उत्पाद सूची',
    statYears: 'वर्ष',
    statCustomers: 'स्थानीय सेवा',
    testimonialTitle: 'लोग हमें क्यों चुनते हैं',
    why1Title: 'हमेशा संपर्क में',
    why1Text: 'स्टॉक, रेट और सलाह के लिए कॉल या व्हाट्सएप करें — ऐप की ज़रूरत नहीं।',
    why2Title: 'ईमानदार व्यवहार',
    why2Text: 'असली ब्रांडेड सामग्री, रिटेल और ठेकेदार थोक ऑर्डर के लिए साफ़ रेट।',
    why3Title: 'स्थानीय सहायता',
    why3Text: 'प्लंबिंग, इलेक्ट्रिकल, पेंट और निर्माण ज़रूरतों में मददगार स्टाफ।',
    why4Title: 'स्थानीय डिलीवरी',
    why4Text: 'आरा, उदवंतनगर और आसपास के गाँवों में डिलीवरी — समय कॉल पर पुष्टि करें।',
    marquee1: '✅ असली उत्पाद',
    marquee2: '🚚 उसी दिन डिलीवरी',
    marquee3: '💰 सबसे अच्छी कीमत',
    marquee4: '👷 ठेकेदार रेट',
    marquee5: '🎨 नेरोलैक डीलर',
    marquee6: '📞 कोटेशन के लिए कॉल करें',
    saved: 'सेव्ड',
    askPrice: 'कीमत पूछें',
    available: 'दुकान में उपलब्ध',
    specsTitle: 'विवरण',
    chatWhatsapp: 'व्हाट्सएप पर चैट करें',
    emailUs: 'ईमेल करें',
    quickLinks: 'त्वरित लिंक',
    contactInfo: 'संपर्क जानकारी',
    homeLabel: 'होम',
    allProductsLabel: 'सभी उत्पाद',
    savedItems: 'सेव्ड आइटम',
    productsArrow: 'उत्पाद →',
    fieldRequired: 'यह फ़ील्ड ज़रूरी है।',
    phoneInvalid: 'मान्य 10–15 अंकों का फ़ोन नंबर डालें।',
    brandLabel: 'लोकप्रिय ब्रांड',
    originLabel: 'उत्पत्ति',
    warrantyLabel: 'वारंटी',
    materialLabel: 'सामग्री',
    standardLabel: 'मानक',
    layersLabel: 'लेयर',
    powerLabel: 'पावर',
    voltageLabel: 'वोल्टेज',
    finishLabel: 'फिनिश',
    madeInIndia: 'मेड इन इंडिया',
    warrantyNA: 'ब्रांड के अनुसार',
    warrantyPump: '1 वर्ष (सामान्य निर्माता)',
    footerTag: '1998 से आरा और आसपास को गुणवत्ता हार्डवेयर और बिल्डिंग सामग्री प्रदान कर रहे हैं।',
    rightsReserved: 'सर्वाधिकार सुरक्षित।',
    madeInAra: 'आरा, बिहार में बनाया गया',
    monSatShort: 'सोम–शनि: 9–8 बजे',
    priceNote: 'बाज़ार के अनुसार कीमत बदलती है — आज का कोट व्हाट्सएप पर माँगें।'
    ,visitStore: 'दुकान पर आएँ'
    ,tradeQuotes: 'ठेकेदारों के लिए विशेष रेट'
    ,localDelivery: 'स्थानीय डिलीवरी उपलब्ध'
  }
};

window.t = function(key) { return LANG[lang][key] || key; };
window.pn = function(product) { return product.name[lang]; };
window.pd = function(product) { return product.desc[lang]; };
window.cn = function(cat) { return cat.name[lang]; };
window.cd = function(cat) { return cat.desc[lang]; };

window.toggleLang = function() {
  lang = lang === 'hi' ? 'en' : 'hi';
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'hi' ? 'EN' : 'हिंदी';
  try { localStorage.setItem('garhwal_lang', lang); } catch (e) {}
  updateNavLabels();
  render();
};

function updateNavLabels() {
  document.querySelectorAll('[data-page="home"] span:not(.nav-icon)').forEach(el => el.textContent = window.t('navHome'));
  document.querySelectorAll('[data-page="products"] span:not(.nav-icon)').forEach(el => el.textContent = window.t('navProducts'));
  document.querySelectorAll('[data-page="categories"] span:not(.nav-icon)').forEach(el => el.textContent = window.t('navCategories'));
  document.querySelectorAll('[data-page="about"] span:not(.nav-icon)').forEach(el => el.textContent = window.t('navAbout'));
  document.querySelectorAll('[data-page="contact"] span:not(.nav-icon)').forEach(el => el.textContent = window.t('navContact'));
}

const TESTIMONIALS = [
  {
    name: { en: 'Rajesh Kumar', hi: 'राजेश कुमार' },
    role: { en: 'Contractor', hi: 'ठेकेदार' },
    text: { en: 'Best hardware store in Ara! Always have what I need in stock. Great prices for bulk orders.', hi: 'आरा का सबसे अच्छा हार्डवेयर स्टोर! हमेशा मेरी ज़रूरत का सामान स्टॉक में रहता है। थोक ऑर्डर के लिए बेहतरीन कीमत।' }
  },
  {
    name: { en: 'Sita Devi', hi: 'सीता देवी' },
    role: { en: 'Homeowner', hi: 'गृहस्वामी' },
    text: { en: 'We built our entire house with materials from Garhwal Hardware. Honest pricing and genuine products!', hi: 'हमने अपना पूरा घर गढ़वाल हार्डवेयर की सामग्री से बनाया। ईमानदार मूल्य और असली उत्पाद!' }
  },
  {
    name: { en: 'Amit Singh', hi: 'अमित सिंह' },
    role: { en: 'Plumber', hi: 'प्लंबर' },
    text: { en: 'Same-day delivery is a lifesaver for urgent jobs. The team is very helpful and knowledgeable.', hi: 'उसी दिन डिलीवरी ज़रूरी कामों के लिए बहुत मददगार है। टीम बहुत सहायक और जानकार है।' }
  },
  {
    name: { en: 'Priya Sharma', hi: 'प्रिया शर्मा' },
    role: { en: 'Interior Designer', hi: 'इंटीरियर डिज़ाइनर' },
    text: { en: 'Great range of Nerolac paints and finishes. Perfect for my design projects. Highly recommended!', hi: 'नेरोलैक पेंट और फिनिश की शानदार रेंज। मेरे डिज़ाइन प्रोजेक्ट के लिए परफेक्ट।' }
  }
];

function catProductCount(catId) {
  return PRODUCTS.filter(p => p.cat === catId).length;
}

function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchesFilter = currentFilter === 'all' ||
      (currentFilter === 'wishlist' ? window.isInWishlist(p.id) : p.cat === currentFilter);

    const cleanQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim();
    const q = cleanQuery.toLowerCase();
    const matchesSearch = cleanQuery === '' ||
      p.name.en.toLowerCase().includes(q) ||
      p.name.hi.toLowerCase().includes(q) ||
      p.desc.en.toLowerCase().includes(q) ||
      p.desc.hi.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });
}

// ==================== CATEGORIES ====================
const CATEGORIES = [
  { id: 'pvc', name: { en: 'PVC Pipes & Fittings', hi: 'पीवीसी पाइप और फिटिंग' }, icon: '🔧', desc: { en: 'High-quality PVC pipes, couplings, elbows, and joints for plumbing and irrigation.', hi: 'प्लंबिंग और सिंचाई के लिए उच्च गुणवत्ता वाले पीवीसी पाइप, कपलिंग, एल्बो और जॉइंट।' } },
  { id: 'tanks', name: { en: 'Water Tanks', hi: 'पानी की टंकियाँ' }, icon: '💧', desc: { en: 'Storage tanks from 100L to 5000L for home and commercial use.', hi: 'घर और व्यावसायिक उपयोग के लिए 100L से 5000L तक की स्टोरेज टंकियाँ।' } },
  { id: 'plumbing', name: { en: 'Plumbing Materials', hi: 'प्लंबिंग सामग्री' }, icon: '🔩', desc: { en: 'All plumbing essentials — pipes, valves, tapes, sealants, and more.', hi: 'सभी प्लंबिंग आवश्यकताएँ — पाइप, वाल्व, टेप, सीलेंट और अधिक।' } },
  { id: 'sanitary', name: { en: 'Sanitary Ware', hi: 'सैनिटरी वेयर' }, icon: '🚿', desc: { en: 'Taps, showers, bathroom fittings, basins, and flush systems.', hi: 'नल, शॉवर, बाथरूम फिटिंग, बेसिन और फ्लश सिस्टम।' } },
  { id: 'pumps', name: { en: 'Water Pumps & Motors', hi: 'पानी के पंप और मोटर' }, icon: '⚡', desc: { en: 'Centrifugal, submersible, and booster pumps for every need.', hi: 'हर ज़रूरत के लिए सेंट्रीफ्यूगल, सबमर्सिबल और बूस्टर पंप।' } },
  { id: 'electrical', name: { en: 'Electrical Items', hi: 'इलेक्ट्रिकल आइटम' }, icon: '💡', desc: { en: 'Wires, switches, MCBs, fans, lights, and electrical accessories.', hi: 'तार, स्विच, MCB, पंखे, लाइट और इलेक्ट्रिकल एक्सेसरीज़।' } },
  { id: 'hardware', name: { en: 'Construction Hardware', hi: 'कंस्ट्रक्शन हार्डवेयर' }, icon: '🏗️', desc: { en: 'Nails, cement, rods, bolts, hinges, and building materials.', hi: 'कील, सीमेंट, रॉड, बोल्ट, कब्ज़े और निर्माण सामग्री।' } },
  { id: 'tools', name: { en: 'Tools & Accessories', hi: 'उपकरण और एक्सेसरीज़' }, icon: '🛠️', desc: { en: 'Hand tools, power tools, measuring tapes, cutters, and more.', hi: 'हैंड टूल्स, पावर टूल्स, मापने वाले टेप, कटर और अधिक।' } },
  { id: 'nerolac', name: { en: 'Nerolac Paints', hi: 'नेरोलैक पेंट्स' }, icon: '🎨', desc: { en: 'Premium quality paints, primers, putty, and waterproofing from Nerolac.', hi: 'नेरोलैक से प्रीमियम गुणवत्ता वाले पेंट, प्राइमर, पुट्टी और वॉटरप्रूफिंग।' } }
];

// ==================== PRODUCTS ====================
const PRODUCTS = [
  // PVC Pipes & Fittings
  { id: 1, cat: 'pvc', name: { en: 'PVC Pressure Pipe 2 Inch', hi: 'पीवीसी प्रेशर पाइप 2 इंच' }, desc: { en: 'Schedule 40 PVC pipe for water supply and plumbing. 10 ft length.', hi: 'पानी की सप्लाई और प्लंबिंग के लिए शेड्यूल 40 पीवीसी पाइप। 10 फीट लंबाई।' }, realImage: 'images/products/product_real_1.jpg' },
  { id: 2, cat: 'pvc', name: { en: 'PVC Pressure Pipe 4 Inch', hi: 'पीवीसी प्रेशर पाइप 4 इंच' }, desc: { en: 'Heavy-duty Schedule 80 PVC pipe. Ideal for mainline plumbing.', hi: 'हैवी-ड्यूटी शेड्यूल 80 पीवीसी पाइप। मेनलाइन प्लंबिंग के लिए आदर्श।' }, realImage: 'images/products/product_real_2.jpg' },
  { id: 3, cat: 'pvc', name: { en: 'PVC Coupling 2 Inch', hi: 'पीवीसी कपलिंग 2 इंच' }, desc: { en: 'Standard PVC coupling for joining two pipes.', hi: 'दो पाइपों को जोड़ने के लिए स्टैंडर्ड पीवीसी कपलिंग।' }, realImage: 'images/products/product_real_3.jpg' },
  { id: 4, cat: 'pvc', name: { en: 'PVC Elbow 45° 2 Inch', hi: 'पीवीसी एल्बो 45° 2 इंच' }, desc: { en: 'PVC elbow fitting for directional changes.', hi: 'दिशा बदलने के लिए पीवीसी एल्बो फिटिंग।' }, realImage: 'images/products/product_real_4.jpg' },
  { id: 5, cat: 'pvc', name: { en: 'PVC Tee Joint 2 Inch', hi: 'पीवीसी टी जॉइंट 2 इंच' }, desc: { en: 'Three-way PVC connector for branching pipelines.', hi: 'पाइपलाइन शाखा के लिए तीन-तरफ़ा पीवीसी कनेक्टर।' }, realImage: 'images/products/product_real_5.jpg' },
  { id: 6, cat: 'pvc', name: { en: 'PVC Ball Valve 2 Inch', hi: 'पीवीसी बॉल वाल्व 2 इंच' }, desc: { en: 'Heavy-duty PVC ball valve with quick-turn handle.', hi: 'क्विक-टर्न हैंडल के साथ हैवी-ड्यूटी पीवीसी बॉल वाल्व।' }, realImage: 'images/products/product_real_6.jpg' },

  // Water Tanks
  { id: 7, cat: 'tanks', name: { en: 'Plastic Water Tank 500L', hi: 'प्लास्टिक पानी की टंकी 500L' }, desc: { en: 'Multi-layer water storage tank. UV-stabilized. 3-layer.', hi: 'मल्टी-लेयर पानी स्टोरेज टंकी। UV-स्टेबलाइज़्ड। 3-लेयर।' }, realImage: 'images/products/product_real_7.jpg' },
  { id: 8, cat: 'tanks', name: { en: 'Plastic Water Tank 1000L', hi: 'प्लास्टिक पानी की टंकी 1000L' }, desc: { en: 'Large capacity tank for home backup storage.', hi: 'घर के बैकअप स्टोरेज के लिए बड़ी क्षमता की टंकी।' }, realImage: 'images/products/product_real_8.jpg' },
  { id: 9, cat: 'tanks', name: { en: 'Plastic Water Tank 2000L', hi: 'प्लास्टिक पानी की टंकी 2000L' }, desc: { en: 'Commercial grade tank with reinforced walls.', hi: 'मज़बूत दीवारों के साथ कमर्शियल ग्रेड टंकी।' }, realImage: 'images/products/product_real_9.jpg' },
  { id: 10, cat: 'tanks', name: { en: 'Loft Tank 100L', hi: 'लॉफ्ट टंकी 100L' }, desc: { en: 'Compact loft/attic tank for overhead storage.', hi: 'ऊपरी स्टोरेज के लिए कॉम्पैक्ट लॉफ्ट टंकी।' }, realImage: 'images/products/product_real_10.jpg' },
  { id: 11, cat: 'tanks', name: { en: 'Tank Stand (Mild Steel)', hi: 'टंकी स्टैंड (माइल्ड स्टील)' }, desc: { en: 'Powder-coated MS stand for 500L–1000L tank.', hi: '500L–1000L टंकी के लिए पाउडर-कोटेड MS स्टैंड।' }, realImage: 'images/products/product_real_11.jpg' },

  // Plumbing Materials
{ id: 12, cat: 'plumbing', name: { en: 'GI Pipe 1 Inch', hi: 'GI पाइप 1 इंच' }, desc: { en: 'Galvanized iron pipe for water and gas lines.', hi: 'पानी और गैस लाइनों के लिए गैल्वनाइज़्ड आयरन पाइप।' }, realImage: 'images/products/product_real_12.jpg' },
  { id: 13, cat: 'plumbing', name: { en: 'Flexible Tap Connector', hi: 'फ्लेक्सिबल टैप कनेक्टर' }, desc: { en: 'Braided stainless steel connector. 60 cm length.', hi: 'ब्रेडेड स्टेनलेस स्टील कनेक्टर। 60 सेमी लंबाई।' }, realImage: 'images/products/product_real_13.jpg' },
  { id: 14, cat: 'plumbing', name: { en: 'Thread Seal Tape (PTFE)', hi: 'थ्रेड सील टेप (PTFE)' }, desc: { en: 'Standard 12mm PTFE tape for leak-proof joints.', hi: 'लीक-प्रूफ जोड़ों के लिए स्टैंडर्ड 12mm PTFE टेप।' }, realImage: 'images/products/product_real_14.jpg' },
  { id: 15, cat: 'plumbing', name: { en: 'Brass Gate Valve 1 Inch', hi: 'ब्रास गेट वाल्व 1 inch' }, desc: { en: 'Full-bore brass gate valve for water lines.', hi: 'पानी की लाइनों के लिए फुल-बोर ब्रास गेट वाल्व।' }, realImage: 'images/products/product_real_15.jpg' },
  { id: 16, cat: 'plumbing', name: { en: 'PVC Solvent Cement 100ml', hi: 'पीवीसी सॉल्वेंट सीमेंट 100ml' }, desc: { en: 'Quick-setting PVC jointing solution.', hi: 'जल्दी सूखने वाला पीवीसी जॉइंटिंग सॉल्यूशन।' }, realImage: 'images/products/product_real_16.jpg' },
  { id: 17, cat: 'plumbing', name: { en: 'Pipe Clamp 2 Inch', hi: 'पाइप क्लैंप 2 इंच' }, desc: { en: 'Galvanized pipe clamp with rubber lining.', hi: 'रबर लाइनिंग के साथ गैल्वनाइज़्ड पाइप क्लैंप।' }, realImage: 'images/products/product_real_17.jpg' },

  // Sanitary Ware
  { id: 18, cat: 'sanitary', name: { en: 'Wall-Mounted Basin Mixer', hi: 'वॉल-माउंटेड बेसिन मिक्सर' }, desc: { en: 'Chrome-plated brass basin mixer tap.', hi: 'क्रोम-प्लेटेड ब्रास बेसिन मिक्सर नल।' }, realImage: 'images/products/product_real_18.jpg' },
  { id: 19, cat: 'sanitary', name: { en: 'Exposed Shower Set', hi: 'एक्सपोज़्ड शॉवर सेट' }, desc: { en: 'Complete shower set with hand shower, hose, and holder.', hi: 'हैंड शॉवर, होज़ और होल्डर के साथ पूरा शॉवर सेट।' }, realImage: 'images/products/product_real_19.jpg' },
  { id: 20, cat: 'sanitary', name: { en: 'Angle Valve 1/2 Inch', hi: 'एंगल वाल्व 1/2 इंच' }, desc: { en: 'Brass angle valve for wash basin and toilet connections.', hi: 'वॉश बेसिन और टॉयलेट कनेक्शन के लिए ब्रास एंगल वाल्व।' }, realImage: 'images/products/product_real_20.jpg' },
  { id: 21, cat: 'sanitary', name: { en: 'Flush Tank (Cistern)', hi: 'फ्लश टैंक (सिस्टर्न)' }, desc: { en: 'Dual-flush PVC cistern with all fittings.', hi: 'सभी फिटिंग के साथ डुअल-फ्लश पीवीसी सिस्टर्न।' }, realImage: 'images/products/product_real_21.jpg' },
  { id: 22, cat: 'sanitary', name: { en: 'Bathroom Sink (Ceramic)', hi: 'बाथरूम सिंक (सिरेमिक)' }, desc: { en: 'Vitreous china wall-hung washbasin. 60×45 cm.', hi: 'विट्रियस चाइना वॉल-हंग वॉशबेसिन। 60×45 सेमी।' }, realImage: 'images/products/product_real_22.jpg' },
  { id: 23, cat: 'sanitary', name: { en: 'Towel Rail (Chrome)', hi: 'तौलिया रेल (क्रोम)' }, desc: { en: 'Stainless steel heated towel rail. 60 cm.', hi: 'स्टेनलेस स्टील हीटेड तौलिया रेल। 60 सेमी।' }, realImage: 'images/products/product_real_23.jpg' },

  // Water Pumps & Motors
{ id: 24, cat: 'pumps', name: { en: 'Centrifugal Pump 1 HP', hi: 'सेंट्रीफ्यूगल पंप 1 HP' }, desc: { en: 'Single-phase centrifugal pump for domestic water supply.', hi: 'घरेलू पानी की सप्लाई के लिए सिंगल-फेज़ सेंट्रीफ्यूगल पंप।' }, realImage: 'images/products/product_real_24.jpg' },
  { id: 25, cat: 'pumps', name: { en: 'Submersible Pump 1 HP', hi: 'सबमर्सिबल पंप 1 HP' }, desc: { en: 'Stainless steel submersible borewell pump.', hi: 'स्टेनलेस स्टील सबमर्सिबल बोरवेल पंप।' }, realImage: 'images/products/product_real_25.jpg' },
  { id: 26, cat: 'pumps', name: { en: 'Booster Pump 0.5 HP', hi: 'बूस्टर पंप 0.5 HP' }, desc: { en: 'Compact inline booster for low water pressure.', hi: 'कम पानी के दबाव के लिए कॉम्पैक्ट इनलाइन बूस्टर।' }, realImage: 'images/products/product_real_26.jpg' },
  { id: 28, cat: 'pumps', name: { en: 'Water Motor Starter', hi: 'वॉटर मोटर स्टार्टर' }, desc: { en: 'Single-phase capacitor start motor starter.', hi: 'सिंगल-फेज़ कैपेसिटर स्टार्ट मोटर स्टार्टर।' }, realImage: 'images/products/product_real_27.jpg' },

  // Electrical Items
  { id: 29, cat: 'electrical', name: { en: 'PVC Insulated Copper Wire 1.5mm', hi: 'पीवीसी इंसुलेटेड कॉपर वायर 1.5mm' }, desc: { en: 'FR PVC house wire. 90m roll. (Red/Black)', hi: 'FR PVC हाउस वायर। 90m रोल। (लाल/काला)' }, realImage: 'images/products/product_real_28.jpg' },
  { id: 30, cat: 'electrical', name: { en: 'MCB 16A Single Pole', hi: 'MCB 16A सिंगल पोल' }, desc: { en: 'Compact miniature circuit breaker with trip indicator.', hi: 'ट्रिप इंडिकेटर के साथ कॉम्पैक्ट मिनिएचर सर्किट ब्रेकर।' }, realImage: 'images/products/product_real_29.jpg' },
  { id: 31, cat: 'electrical', name: { en: 'Modular Switch 6A', hi: 'मॉड्यूलर स्विच 6A' }, desc: { en: 'Flush-fit modular switch. White. (1-way)', hi: 'फ्लश-फिट मॉड्यूलर स्विच। सफ़ेद। (1-वे)' }, realImage: 'images/products/product_real_30.jpg' },
  { id: 32, cat: 'electrical', name: { en: 'LED Bulb 12W', hi: 'LED बल्ब 12W' }, desc: { en: 'Energy-saving LED bulb. B22 base. 6500K.', hi: 'एनर्जी-सेविंग LED बल्ब। B22 बेस। 6500K।' }, realImage: 'images/products/product_real_31.jpg' },
  { id: 33, cat: 'electrical', name: { en: 'Ceiling Fan 1200mm', hi: 'सीलिंग फैन 1200mm' }, desc: { en: 'High-speed ceiling fan with copper winding.', hi: 'कॉपर वाइंडिंग के साथ हाई-स्पीड सीलिंग फैन।' }, realImage: 'images/products/product_real_32.jpg' },
  { id: 34, cat: 'electrical', name: { en: 'Extension Board 6-Socket', hi: 'एक्सटेंशन बोर्ड 6-सॉकेट' }, desc: { en: '6-way extension board with surge protection.', hi: 'सर्ज प्रोटेक्शन के साथ 6-वे एक्सटेंशन बोर्ड।' }, realImage: 'images/products/product_real_33.jpg' },

  // Construction Hardware
  { id: 35, cat: 'hardware', name: { en: 'Mild Steel TMT Bar 12mm', hi: 'माइल्ड स्टील TMT बार 12mm' }, desc: { en: 'Fe-500 grade TMT bar for reinforcement. 12m length.', hi: 'रीइन्फोर्समेंट के लिए Fe-500 ग्रेड TMT बार। 12m लंबाई।' }, realImage: 'images/products/product_real_34.jpg' },
  { id: 36, cat: 'hardware', name: { en: 'Cement (OPC 53 Grade)', hi: 'सीमेंट (OPC 53 ग्रेड)' }, desc: { en: '50 kg bag. Ordinary Portland Cement.', hi: '50 kg बैग। ऑर्डिनरी पोर्टलैंड सीमेंट।' }, realImage: 'images/products/product_real_35.jpg' },
  { id: 37, cat: 'hardware', name: { en: 'GI Binding Wire 1kg', hi: 'GI बाइंडिंग वायर 1kg' }, desc: { en: 'Annealed galvanized binding wire for construction.', hi: 'निर्माण के लिए एनील्ड गैल्वनाइज़्ड बाइंडिंग वायर।' }, realImage: 'images/products/product_real_36.jpg' },
  { id: 38, cat: 'hardware', name: { en: 'Tower Bolt 8 Inch', hi: 'टावर बोल्ट 8 इंच' }, desc: { en: 'Zinc-plated tower bolt for doors and gates.', hi: 'दरवाज़ों और गेटों के लिए जिंक-प्लेटेड टावर बोल्ट।' }, realImage: 'images/products/product_real_37.jpg' },
  { id: 39, cat: 'hardware', name: { en: 'MS Angle 40×40×5mm', hi: 'MS एंगल 40×40×5mm' }, desc: { en: 'Mild steel angle bar. 6m length.', hi: 'माइल्ड स्टील एंगल बार। 6m लंबाई।' }, realImage: 'images/products/product_real_38.jpg' },
  { id: 40, cat: 'hardware', name: { en: 'Nails 2 Inch (1kg Box)', hi: 'कील 2 इंच (1kg बॉक्स)' }, desc: { en: 'Bright steel wire nails. Assorted sizes available.', hi: 'ब्राइट स्टील वायर कील। विभिन्न साइज़ उपलब्ध।' }, realImage: 'images/products/product_real_39.jpg' },

  // Tools & Accessories
  { id: 41, cat: 'tools', name: { en: 'Heavy-Duty Hammer 500g', hi: 'हैवी-ड्यूटी हथौड़ा 500g' }, desc: { en: 'Forged steel claw hammer with rubber grip.', hi: 'रबर ग्रिप के साथ फोर्ज्ड स्टील क्लॉ हैमर।' }, realImage: 'images/products/product_real_41.jpg' },
  { id: 42, cat: 'tools', name: { en: 'Measuring Tape 5m', hi: 'मापने वाला टेप 5m' }, desc: { en: 'Fiberglass measuring tape. Lockable. Double-sided.', hi: 'फाइबरग्लास मापने वाला टेप। लॉक करने योग्य। डबल-साइडेड।' }, realImage: 'images/products/product_real_42.jpg' },
  { id: 43, cat: 'tools', name: { en: 'Plumber Wrench 10 Inch', hi: 'प्लंबर रिंच 10 इंच' }, desc: { en: 'Cast iron adjustable plumber wrench.', hi: 'कास्ट आयरन एडजस्टेबल प्लंबर रिंच।' }, realImage: 'images/products/product_real_43.jpg' },
  { id: 44, cat: 'tools', name: { en: 'PVC Pipe Cutter', hi: 'पीवीसी पाइप कटर' }, desc: { en: 'Ratchet pipe cutter for up to 2 inch pipes.', hi: '2 इंच तक के पाइपों के लिए रैचेट पाइप कटर।' }, realImage: 'images/products/product_real_44.jpg' },
  { id: 45, cat: 'tools', name: { en: 'Spirit Level 24 Inch', hi: 'स्पिरिट लेवल 24 इंच' }, desc: { en: 'Aluminum spirit level with 3 vials.', hi: '3 वायल के साथ एल्युमिनियम स्पिरिट लेवल।' }, realImage: 'images/products/product_real_45.jpg' },
  { id: 46, cat: 'tools', name: { en: 'Tool Kit (21 Pieces)', hi: 'टूल किट (21 पीस)' }, desc: { en: 'Home tool kit with hammer, pliers, screwdrivers, and more.', hi: 'हथौड़ा, प्लायर, स्क्रूड्राइवर और अधिक के साथ होम टूल किट।' }, realImage: 'images/products/product_real_46.jpg' },

  // Nerolac Paints
  { id: 47, cat: 'nerolac', name: { en: 'Nerolac Interior Paint (10L)', hi: 'नेरोलैक इंटीरियर पेंट (10L)' }, desc: { en: 'Smooth finish, washable, low-VOC interior emulsion paint.', hi: 'चिकनी फिनिश, धोने योग्य, लो-VOC इंटीरियर इमल्शन पेंट।' }, realImage: 'images/products/product_real_47.jpg' },
  { id: 48, cat: 'nerolac', name: { en: 'Nerolac Exterior Paint (10L)', hi: 'नेरोलैक एक्सटीरियर पेंट (10L)' }, desc: { en: 'Weather-resistant, UV-protected exterior emulsion paint.', hi: 'मौसम-प्रतिरोधी, UV-संरक्षित एक्सटीरियर इमल्शन पेंट।' }, realImage: 'images/products/product_real_48.jpg' },
  { id: 49, cat: 'nerolac', name: { en: 'Nerolac Primer (4L)', hi: 'नेरोलैक प्राइमर (4L)' }, desc: { en: 'Water-based primer for better paint adhesion and finish.', hi: 'बेहतर पेंट आसंजन और फिनिश के लिए वॉटर-बेस्ड प्राइमर।' }, realImage: 'images/products/product_real_49.jpg' },
  { id: 50, cat: 'nerolac', name: { en: 'Wall Putty (20kg)', hi: 'वॉल पुट्टी (20kg)' }, desc: { en: 'Cement-based wall putty for smooth wall surface.', hi: 'चिकनी दीवार की सतह के लिए सीमेंट-बेस्ड वॉल पुट्टी।' }, realImage: 'images/products/product_real_50.jpg' },
  { id: 51, cat: 'nerolac', name: { en: 'Nerolac Enamel Paint (1L)', hi: 'नेरोलैक इनेमल पेंट (1L)' }, desc: { en: 'Glossy, durable enamel paint for wood and metal surfaces.', hi: 'लकड़ी और धातु की सतहों के लिए चमकदार, टिकाऊ इनेमल पेंट।' }, realImage: 'images/products/product_real_51.jpg' },
  { id: 52, cat: 'nerolac', name: { en: 'Waterproofing Coating (5L)', hi: 'वॉटरप्रूफिंग कोटिंग (5L)' }, desc: { en: 'Elastomeric waterproofing for terrace and exterior walls.', hi: 'छत और बाहरी दीवारों के लिए इलास्टोमेरिक वॉटरप्रूफिंग।' }, realImage: 'images/products/product_real_52.jpg' }
];

// Honest category-level brand hints only (not fake per-product ratings/stock)
const CATEGORY_BRANDS = {
  pvc: 'Supreme, Astral, Ashirvad, Finolex',
  tanks: 'Sintex, Plasto, Supreme, Vectus',
  plumbing: 'Zoloto, Leader, Ashirvad, Supreme',
  sanitary: 'Jaquar, Cera, Hindware, Parryware',
  pumps: 'Kirloskar, Crompton, Havells, Texmo',
  electrical: 'Havells, Polycab, Anchor, Finolex',
  hardware: 'Tata, Godrej & quality local brands',
  tools: 'Taparia, Bosch, Stanley',
  nerolac: 'Nerolac Paints'
};

function buildProductSpecs(p) {
  const specs = {};
  if (CATEGORY_BRANDS[p.cat]) {
    specs.brand = CATEGORY_BRANDS[p.cat];
  }
  specs.origin = 'madeInIndia';
  specs.warranty = p.cat === 'pumps' ? 'warrantyPump' : 'warrantyNA';
  if (p.cat === 'pvc') {
    specs.material = 'PVC (Unplasticized)';
    specs.standard = 'IS 4985';
  } else if (p.cat === 'tanks') {
    specs.material = 'HDPE Food Grade';
    specs.layers = '3-Layer UV Protect';
  } else if (p.cat === 'pumps') {
    specs.power = p.id === 26 ? '0.5 HP' : '1.0 HP';
    specs.voltage = '220V Single Phase';
  } else if (p.cat === 'nerolac') {
    specs.brand = 'Nerolac Paints';
    specs.finish = p.id === 51 ? 'High Gloss Enamel' : 'Smooth Emulsion';
  }
  return specs;
}

PRODUCTS.forEach(p => {
  p.specs = buildProductSpecs(p);
});

function formatSpecLabel(key) {
  const map = {
    brand: 'brandLabel',
    origin: 'originLabel',
    warranty: 'warrantyLabel',
    material: 'materialLabel',
    standard: 'standardLabel',
    layers: 'layersLabel',
    power: 'powerLabel',
    voltage: 'voltageLabel',
    finish: 'finishLabel'
  };
  return map[key] ? window.t(map[key]) : key;
}

function formatSpecValue(key, val) {
  if (key === 'origin' || key === 'warranty') return window.t(val);
  return val;
}

// ==================== STATE ====================
let currentPage = 'home';
let currentFilter = 'all';
let searchQuery = '';
let isRendering = false;
let skipHashUpdate = false;

// ==================== NAVIGATION (hash routing) ====================
function pageHash(page, filter) {
  if (page === 'products' && filter && filter !== 'all') {
    return `#/products/${filter}`;
  }
  return page === 'home' ? '#/' : `#/${page}`;
}

function parseHash() {
  const raw = (location.hash || '#/').replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean);
  if (!parts.length) return { page: 'home', filter: 'all' };
  const page = parts[0];
  const valid = ['home', 'products', 'categories', 'about', 'contact'];
  if (!valid.includes(page)) return { page: 'home', filter: 'all' };
  if (page === 'products' && parts[1]) {
    const f = parts[1];
    if (f === 'wishlist' || CATEGORIES.some(c => c.id === f)) {
      return { page: 'products', filter: f };
    }
  }
  return { page, filter: 'all' };
}

function syncHash() {
  if (skipHashUpdate) return;
  const next = pageHash(currentPage, currentFilter);
  if (location.hash !== next) {
    history.replaceState(null, '', next);
  }
}

window.navigate = function(page) {
  currentPage = page;
  if (page !== 'products') {
    currentFilter = 'all';
    searchQuery = '';
  }
  syncHash();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.filterByCategory = function(catId) {
  currentPage = 'products';
  currentFilter = catId;
  searchQuery = '';
  syncHash();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function renderPageContent(app) {
  switch (currentPage) {
    case 'home': renderHome(app); break;
    case 'products': renderProducts(app); break;
    case 'categories': renderCategories(app); break;
    case 'about': renderAbout(app); break;
    case 'contact': renderContact(app); break;
    default: renderHome(app);
  }
  updateActiveNav();
  updateMetaAndTitle();
  initCardGlows();
  initGSAPScrollAnimations();
  initMagneticEffect();
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
}

function render() {
  const app = document.getElementById('app');
  if (!app || isRendering) return;
  isRendering = true;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !window.gsap) {
    renderPageContent(app);
    app.style.opacity = '1';
    isRendering = false;
    return;
  }

  gsap.to(app, {
    opacity: 0,
    y: 12,
    duration: 0.2,
    ease: 'power2.inOut',
    onComplete: () => {
      renderPageContent(app);
      gsap.fromTo(app,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power3.out',
          onComplete: () => { isRendering = false; }
        }
      );
    }
  });
}

function updateActiveNav() {
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.dataset.page === currentPage);
  });
}

function updateMetaAndTitle() {
  const titles = {
    home: lang === 'hi' 
      ? 'गढ़वाल हार्डवेयर स्टोर | प्रीमियम हार्डवेयर और बिल्डिंग मैटेरियल्स - आरा, बिहार'
      : 'Garhwal Hardware Store | Premium Hardware & Building Materials - Ara, Bihar',
    products: lang === 'hi'
      ? 'हार्डवेयर उत्पाद | गढ़वाल हार्डवेयर स्टोर'
      : 'Hardware Products | Garhwal Hardware Store',
    categories: lang === 'hi'
      ? 'उत्पाद श्रेणियाँ | गढ़वाल हार्डवेयर स्टोर'
      : 'Product Categories | Garhwal Hardware Store',
    about: lang === 'hi'
      ? 'हमारे बारे में | गढ़वाल हार्डवेयर स्टोर'
      : 'About Us | Garhwal Hardware Store',
    contact: lang === 'hi'
      ? 'संपर्क करें | गढ़वाल हार्डवेयर स्टोर'
      : 'Contact Us | Garhwal Hardware Store'
  };
  
  let newTitle = titles[currentPage] || titles.home;
  if (currentPage === 'products' && currentFilter !== 'all') {
    if (currentFilter === 'wishlist') {
      newTitle = lang === 'hi' ? 'पसंदीदा उत्पाद | गढ़वाल हार्डवेयर स्टोर' : 'Saved Items | Garhwal Hardware Store';
    } else {
      const cat = CATEGORIES.find(c => c.id === currentFilter);
      if (cat) {
        newTitle = `${cat.name[lang]} | Garhwal Hardware`;
      }
    }
  }
  document.title = newTitle;
}

function renderHome(container) {
  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero" id="heroSection">
      <div class="hero-bg">
        <img src="images/hero.webp" alt="" class="hero-bg-image" loading="eager" fetchpriority="high" decoding="async" width="1254" height="1254">
        <div class="hero-bg-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          ${window.t('heroBadge')}
        </div>
        <h1>
          ${window.t('heroTitle1')} <br><span class="highlight">${window.t('heroTitle2')}</span>
        </h1>
        <p>${window.t('heroDesc')}</p>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-value counter" data-target="52">52</span>
            <span class="hero-stat-label">${window.t('statProducts')}</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value counter" data-target="27">27</span>
            <span class="hero-stat-label">${window.t('statYears')}</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value counter" data-target="5000" data-suffix="+">5000+</span>
            <span class="hero-stat-label">${window.t('statCustomers')}</span>
          </div>
        </div>
        <div class="hero-btns">
          <a class="btn btn-primary magnetic" href="#" onclick="event.preventDefault();navigate('products')">
            <span>📦</span> ${window.t('browseProducts')}
          </a>
          <a class="btn btn-glass magnetic" href="https://wa.me/${STORE.whatsapp}" target="_blank" rel="noopener">
            <span>📱</span> ${window.t('whatsappUs')}
          </a>
        </div>
      </div>
    </section>

    <section class="store-promise-bar" aria-label="${window.t('whyChooseUs')}">
      <a class="store-promise" href="https://maps.google.com/maps?cid=5774004426147478906" target="_blank" rel="noopener">
        <span class="store-promise-icon">📍</span>
        <span><strong>${window.t('visitStore')}</strong><small>Ara–Sasaram Main Road</small></span>
        <span class="store-promise-arrow">↗</span>
      </a>
      <a class="store-promise" href="https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent('Hello, I need a contractor / bulk quote.')}" target="_blank" rel="noopener">
        <span class="store-promise-icon">👷</span>
        <span><strong>${window.t('tradeQuotes')}</strong><small>Clear rates for every project</small></span>
        <span class="store-promise-arrow">↗</span>
      </a>
      <a class="store-promise" href="tel:${STORE.phone}">
        <span class="store-promise-icon">🚚</span>
        <span><strong>${window.t('localDelivery')}</strong><small>Call to confirm timing & charges</small></span>
        <span class="store-promise-arrow">↗</span>
      </a>
    </section>


    <!-- Why Choose Us -->
    <section class="section features-section">
      <h2 class="section-title">${window.t('whyChooseUs')}</h2>
      <div class="features-grid tilt-card-wrap">
        <div class="feature-card">
          <span class="feature-icon">✅</span>
          <h3>${window.t('genuine')}</h3>
          <p>${window.t('genuineDesc')}</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">📦</span>
          <h3>${window.t('wideInv')}</h3>
          <p>${window.t('wideInvDesc')}</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🚚</span>
          <h3>${window.t('fastDel')}</h3>
          <p>${window.t('fastDelDesc')}</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">💰</span>
          <h3>${window.t('bestPrice')}</h3>
          <p>${window.t('bestPriceDesc')}</p>
        </div>
      </div>
    </section>

    <hr class="section-divider">

    <!-- Nerolac Section -->
    <section class="section nerolac-section">
      <div class="nerolac-badge">${window.t('nerolacBadge')}</div>
      <h2 class="section-title" style="justify-content:center"><span class="title-emoji">🎨</span> ${window.t('nerolacTitle')}</h2>
      <p class="nerolac-desc">${window.t('nerolacDesc')}</p>
      <div class="nerolac-grid tilt-card-wrap">
        <div class="nerolac-item" onclick="filterByCategory('nerolac')">
          <span class="nerolac-icon">🖌️</span>
          <span>${window.t('nerolacInterior')}</span>
        </div>
        <div class="nerolac-item" onclick="filterByCategory('nerolac')">
          <span class="nerolac-icon">🏠</span>
          <span>${window.t('nerolacExterior')}</span>
        </div>
        <div class="nerolac-item" onclick="filterByCategory('nerolac')">
          <span class="nerolac-icon">🧴</span>
          <span>${window.t('nerolacPrimer')}</span>
        </div>
        <div class="nerolac-item" onclick="filterByCategory('nerolac')">
          <span class="nerolac-icon">🧱</span>
          <span>${window.t('nerolacPutty')}</span>
        </div>
        <div class="nerolac-item" onclick="filterByCategory('nerolac')">
          <span class="nerolac-icon">✨</span>
          <span>${window.t('nerolacEnamel')}</span>
        </div>
        <div class="nerolac-item" onclick="filterByCategory('nerolac')">
          <span class="nerolac-icon">🌧️</span>
          <span>${window.t('nerolacWaterproofing')}</span>
        </div>
      </div>
      <div style="text-align:center;margin-top:28px">
        <a class="btn btn-primary magnetic" href="#" onclick="event.preventDefault();filterByCategory('nerolac')">${window.t('nerolacCta')}</a>
      </div>
    </section>

    <!-- Categories -->
    <section class="section">
      <h2 class="section-title">${window.t('ourCategories')}</h2>
      <div class="cat-grid tilt-card-wrap">
        ${CATEGORIES.slice(0, 6).map(c => `
          <div class="cat-card" onclick="filterByCategory('${c.id}')">
            <img src="${CAT_IMAGES[c.id]}" alt="${window.cn(c)}" class="cat-card-image" loading="lazy" onerror="this.style.display='none'">
            <span class="cat-icon">${c.icon}</span>
            <h3>${window.cn(c)}</h3>
          </div>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:28px">
        <a href="#" class="btn btn-outline magnetic" onclick="event.preventDefault();navigate('categories')">${window.t('viewAllCategories')}</a>
      </div>
    </section>

    <hr class="section-divider">

    <!-- Photos Section -->
    <section class="section">
      <h2 class="section-title"><span class="title-emoji">📸</span>${window.t('photosTitle')}</h2>
      <p class="section-subtitle">${window.t('photosDesc')}</p>
      <div class="photos-grid tilt-card-wrap">
        <div class="photo-card" onclick="filterByCategory('nerolac')" role="button" tabindex="0" aria-label="${window.t('photoPaints')}">
          <img src="images/paint_buckets.webp" alt="${window.t('photoPaints')}" loading="lazy" decoding="async" width="800" height="800" onerror="this.parentElement.innerHTML='<div class=\\'photo-placeholder\\'>🪣</div>'">
          <div class="photo-label">${window.t('photoPaints')}</div>
        </div>
        <div class="photo-card" onclick="filterByCategory('pvc')" role="button" tabindex="0" aria-label="${window.t('photoPipes')}">
          <img src="images/pvc.webp" alt="${window.t('photoPipes')}" loading="lazy" decoding="async" width="800" height="800" onerror="this.parentElement.innerHTML='<div class=\\'photo-placeholder\\'>🔧</div>'">
          <div class="photo-label">${window.t('photoPipes')}</div>
        </div>
        <div class="photo-card" onclick="filterByCategory('tanks')" role="button" tabindex="0" aria-label="${window.t('photoTanks')}">
          <img src="images/tanks.webp" alt="${window.t('photoTanks')}" loading="lazy" decoding="async" width="800" height="800" onerror="this.parentElement.innerHTML='<div class=\\'photo-placeholder\\'>💧</div>'">
          <div class="photo-label">${window.t('photoTanks')}</div>
        </div>
        <div class="photo-card" onclick="filterByCategory('tools')" role="button" tabindex="0" aria-label="${window.t('photoTools')}">
          <img src="images/tools.webp" alt="${window.t('photoTools')}" loading="lazy" decoding="async" width="800" height="800" onerror="this.parentElement.innerHTML='<div class=\\'photo-placeholder\\'>🛠️</div>'">
          <div class="photo-label">${window.t('photoTools')}</div>
        </div>
        <div class="photo-card" onclick="navigate('about')" role="button" tabindex="0" aria-label="${window.t('photoStore')}">
          <img src="images/store.webp" alt="${window.t('photoStore')}" loading="lazy" decoding="async" width="800" height="800" onerror="this.parentElement.innerHTML='<div class=\\'photo-placeholder\\'>🏪</div>'">
          <div class="photo-label">${window.t('photoStore')}</div>
        </div>
        <div class="photo-card" onclick="filterByCategory('electrical')" role="button" tabindex="0" aria-label="${window.t('photoElectrical')}">
          <img src="images/electrical.webp" alt="${window.t('photoElectrical')}" loading="lazy" decoding="async" width="800" height="800" onerror="this.parentElement.innerHTML='<div class=\\'photo-placeholder\\'>💡</div>'">
          <div class="photo-label">${window.t('photoElectrical')}</div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section">
      <h2 class="section-title"><span class="title-emoji">💪</span>${window.t('testimonialTitle')}</h2>
      <div class="testimonial-slider">
        ${TESTIMONIALS.map(te => `
          <div class="testimonial-card">
            <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p class="testimonial-text">"${te.text[lang]}"</p>
            <div class="testimonial-author">${te.name[lang]}</div>
            <div class="testimonial-role">${te.role[lang]}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <hr class="section-divider">

    <!-- Reviews -->
    <section class="section">
      <h2 class="section-title"><span class="title-emoji">📍</span>${window.t('reviewsTitle')}</h2>
      <div class="reviews-card">
        <div class="reviews-stars">★★★★★</div>
        <div class="reviews-text">4.9 / 5 Stars on Google</div>
        <p class="reviews-sub">${window.t('reviewsDesc')}</p>
        <a class="btn btn-primary magnetic" href="https://maps.google.com/search?q=Garhwal+Hardware+Store+Ara+Bihar" target="_blank" rel="noopener">${window.t('reviewsCta')}</a>
      </div>
    </section>

    <!-- Delivery -->
    <section class="section section-blue">
      <h2 class="section-title"><span class="title-emoji">🚚</span>${window.t('deliveryTitle')}</h2>
      <p class="section-subtitle">${window.t('deliveryDesc')}</p>
      <div class="delivery-grid">
        <div class="delivery-item">
          <span class="delivery-icon">📍</span>
          <span>${window.t('deliveryAra')}</span>
        </div>
        <div class="delivery-item">
          <span class="delivery-icon">🏘️</span>
          <span>${window.t('deliveryUdwant')}</span>
        </div>
        <div class="delivery-item">
          <span class="delivery-icon">🌾</span>
          <span>${window.t('deliveryVillages')}</span>
        </div>
      </div>
      <p style="text-align:center;font-size:0.8rem;opacity:0.7">${window.t('deliveryNote')}</p>
    </section>

    ${renderFooter()}
  `;

  // Start counters animation
  initCounters();
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="footer-logo-emoji">🏪</span>
              Garhwal Hardware Store
            </div>
            <p class="footer-tagline">${lang === 'hi' ? '1998 से आरा और आसपास को गुणवत्ता हार्डवेयर और बिल्डिंग सामग्री प्रदान कर रहे हैं।' : 'Providing quality hardware & building materials to Ara and surrounding areas since 1998.'}</p>
            <div class="footer-socials">
              <a class="footer-social-link magnetic" href="tel:${STORE.phone}" aria-label="Call">📞</a>
              <a class="footer-social-link magnetic" href="https://wa.me/${STORE.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>
              <a class="footer-social-link magnetic" href="mailto:${STORE.email}" aria-label="Email">✉️</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>${lang === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}</h4>
            <a href="#" onclick="event.preventDefault();navigate('home')">${window.t('navHome')}</a>
            <a href="#" onclick="event.preventDefault();navigate('products')">${window.t('navProducts')}</a>
            <a href="#" onclick="event.preventDefault();navigate('categories')">${window.t('navCategories')}</a>
            <a href="#" onclick="event.preventDefault();navigate('about')">${window.t('navAbout')}</a>
            <a href="#" onclick="event.preventDefault();navigate('contact')">${window.t('navContact')}</a>
          </div>
          <div class="footer-col">
            <h4>${lang === 'hi' ? 'संपर्क जानकारी' : 'Contact Info'}</h4>
            <a href="tel:${STORE.phone}">📞 ${STORE.phone}</a>
            <a href="mailto:${STORE.email}">✉️ Email Us</a>
            <a href="#">📍 ${lang === 'hi' ? 'आरा (भोजपुर), बिहार' : 'Ara (Bhojpur), Bihar'}</a>
            <a href="#">🕒 ${lang === 'hi' ? 'सोम-शनि: 9-8 बजे' : 'Mon-Sat: 9AM-8PM'}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="footer-copy">© ${new Date().getFullYear()} Garhwal Hardware Store. ${lang === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}</span>
          <span class="footer-copy" style="color: var(--neon-cyan);">❤️ ${lang === 'hi' ? 'आरा, बिहार में बनाया गया' : 'Made in Ara, Bihar'}</span>
        </div>
      </div>
    </footer>
  `;
}

const WISHLIST_KEY = 'garhwal_wishlist';

window.getWishlist = function() {
  try {
    const stored = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
    return Array.isArray(stored) ? stored : [];
  } catch (e) {
    return [];
  }
};

window.isInWishlist = function(id) {
  return window.getWishlist().includes(id);
};

window.toggleWishlist = function(event, id) {
  if (event) event.stopPropagation();
  let wishlist = window.getWishlist();
  const index = wishlist.indexOf(id);
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(id);
  }
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  } catch (e) {
    return;
  }
  render();
};

window.handleImgError = function(img, cat) {
  let svgContent = '';
  
  switch(cat) {
    case 'pvc':
      svgContent = `
        <g stroke="%2306b6d4" stroke-width="3" fill="none" stroke-linecap="round">
          <rect x="15" y="35" width="70" height="12" rx="3" />
          <rect x="25" y="55" width="55" height="12" rx="3" />
          <path d="M70,35 L70,47 M65,55 L65,67" stroke-width="2" opacity="0.6"/>
        </g>
      `;
      break;
    case 'tanks':
      svgContent = `
        <g stroke="%23eab308" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round">
          <rect x="25" y="20" width="50" height="60" rx="8" />
          <line x1="25" y1="35" x2="75" y2="35" />
          <line x1="25" y1="50" x2="75" y2="50" />
          <line x1="25" y1="65" x2="75" y2="65" />
          <path d="M50,15 L50,20 M45,15 L55,15" stroke-width="2"/>
        </g>
      `;
      break;
    case 'plumbing':
      svgContent = `
        <g stroke="%23f97316" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="50" cy="25" r="12" />
          <line x1="50" y1="37" x2="50" y2="60" />
          <path d="M30,60 L70,60 L50,48 Z" fill="rgba(249,115,22,0.1)"/>
          <line x1="25" y1="60" x2="75" y2="60" />
        </g>
      `;
      break;
    case 'sanitary':
      svgContent = `
        <g stroke="%233b82f6" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M30,70 L40,70 L40,40 Q40,25 55,25 L65,25 Q70,25 70,30 L70,35" />
          <circle cx="70" cy="52" r="4" fill="%233b82f6"/>
          <path d="M68,62 Q70,60 72,62 L74,66 Q74,70 70,70 Q66,70 66,66 Z" fill="%233b82f6" stroke="none"/>
        </g>
      `;
      break;
    case 'pumps':
      svgContent = `
        <g stroke="%2310b981" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <rect x="25" y="30" width="35" height="40" rx="4" />
          <circle cx="68" cy="50" r="15" />
          <line x1="60" y1="50" x2="68" y2="50" />
          <line x1="20" y1="35" x2="25" y2="35" />
          <line x1="20" y1="65" x2="25" y2="65" />
        </g>
      `;
      break;
    case 'electrical':
      svgContent = `
        <g stroke="%23a855f7" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <rect x="35" y="20" width="30" height="60" rx="6" />
          <path d="M50,40 L50,55 L40,55" stroke-width="4"/>
          <circle cx="50" cy="70" r="3" fill="%23a855f7"/>
        </g>
      `;
      break;
    case 'hardware':
      svgContent = `
        <g stroke="%2364748b" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M30,30 L70,70 M70,30 L30,70" />
          <rect x="44" y="20" width="12" height="8" rx="1" fill="%2364748b" />
          <rect x="44" y="72" width="12" height="8" rx="1" fill="%2364748b" />
        </g>
      `;
      break;
    case 'tools':
      svgContent = `
        <g stroke="%23ec4899" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M25,75 L65,35" />
          <path d="M75,75 L35,35" />
          <path d="M60,30 L70,25 L75,35 L65,40 Z" fill="rgba(236,72,153,0.1)"/>
          <circle cx="30" cy="30" r="6" />
        </g>
      `;
      break;
    case 'nerolac':
      svgContent = `
        <g stroke="%23ef4444" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M30,35 L70,35 L65,75 L35,75 Z" fill="rgba(239,68,68,0.1)"/>
          <path d="M25,35 Q50,15 75,35" />
          <line x1="30" y1="45" x2="70" y2="45" />
        </g>
      `;
      break;
    default:
      svgContent = `
        <g stroke="%236b7280" stroke-width="3" fill="none" stroke-linecap="round">
          <circle cx="50" cy="50" r="25" />
          <text x="50" y="58" font-family="sans-serif" font-size="24" fill="%236b7280" text-anchor="middle">🏪</text>
        </g>
      `;
  }

  const finalSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
    <defs>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="5" stdDeviation="3" flood-color="%23020617" flood-opacity="0.3" />
      </filter>
    </defs>
    <g filter="url(%23shadow)">
      ${svgContent}
    </g>
  </svg>`;

  img.src = finalSvg;
  img.onerror = null;
};


// ========== QUICK VIEW MODAL LOGIC ==========
window.openQuickView = function(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!p) return;

  const modal = document.getElementById('quickViewModal');
  const body = document.getElementById('modalBody');
  if (!modal || !body) return;
  modal._previouslyFocused = document.activeElement;

  const cat = CATEGORIES.find(c => c.id === p.cat);
  const image = CAT_IMAGES[p.cat] || 'images/hardware.webp';
  const name = window.pn(p);
  const desc = window.pd(p);

  const specsHTML = Object.entries(p.specs || {}).map(([key, val]) => `
    <div class="modal-spec-row">
      <span class="modal-spec-label">${formatSpecLabel(key)}</span>
      <span class="modal-spec-val">${formatSpecValue(key, val)}</span>
    </div>
  `).join('');

  const waMsg = encodeURIComponent(`Hello Garhwal Hardware, I would like to get a price quote for:\n- Product: ${p.name.en}\n- Category: ${cat ? cat.name.en : ''}\n- Details: ${p.desc.en}`);
  const waUrl = `https://wa.me/${STORE.whatsapp}?text=${waMsg}`;

  body.innerHTML = `
    <div class="modal-body-split">
      <div class="modal-img-wrapper">
                  <img src="${productImage(p)}" alt="${name}" onerror="window.handleImgError(this, '${p.cat}')" loading="lazy" decoding="async">
      </div>
      <div class="modal-details">
        <h3 class="modal-title" id="quickViewTitle">${name}</h3>
        <p class="modal-desc">${desc}</p>
        
        <div class="modal-specs">
          <span class="modal-specs-title">${window.t('specsTitle')}</span>
          ${specsHTML}
        </div>
        
        <div class="modal-actions">
          <a class="btn btn-primary magnetic" href="${waUrl}" target="_blank" rel="noopener" style="text-align: center; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
            <span>📱</span> ${window.t('needPrice')}
          </a>
        </div>
      </div>
    </div>
  `;

  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close-btn')?.focus();
  
  if (window.initMagneticEffect) {
    window.initMagneticEffect();
  }
};

window.closeQuickView = function() {
  const modal = document.getElementById('quickViewModal');
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('visible');
  document.body.style.overflow = '';
  if (modal._previouslyFocused && typeof modal._previouslyFocused.focus === 'function') {
    modal._previouslyFocused.focus();
  }
};

// Escape key closes modal
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('quickViewModal');
  if (!modal || !modal.classList.contains('visible')) return;

  if (e.key === 'Escape') {
      window.closeQuickView();
      return;
  }

  if (e.key === 'Tab') {
    const focusable = modal.querySelectorAll('button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

function renderProducts(container) {
  const filtered = PRODUCTS.filter(p => {
    const matchesFilter = currentFilter === 'all' || 
      (currentFilter === 'wishlist' ? window.isInWishlist(p.id) : p.cat === currentFilter);
    
    const cleanQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim();
    
    const matchesSearch = cleanQuery === '' || 
      p.name.en.toLowerCase().includes(cleanQuery.toLowerCase()) ||
      p.name.hi.toLowerCase().includes(cleanQuery.toLowerCase()) ||
      p.desc.en.toLowerCase().includes(cleanQuery.toLowerCase()) ||
      p.desc.hi.toLowerCase().includes(cleanQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filterChipsHTML = `
    <div class="filter-chips">
      <button class="chip ${currentFilter === 'all' ? 'active' : ''}" onclick="filterProducts('all')">${window.t('allProducts')}</button>
      <button class="chip filter-btn wishlist-btn ${currentFilter === 'wishlist' ? 'active' : ''}" onclick="filterProducts('wishlist')">❤️ ${window.t('saved')}</button>
      ${CATEGORIES.map(c => `
        <button class="chip ${currentFilter === c.id ? 'active' : ''}" onclick="filterProducts('${c.id}')">${window.cn(c)}</button>
      `).join('')}
    </div>
  `;

  const searchBarHTML = `
    <div class="search-bar">
      <span class="search-icon">🔍</span>
      <input type="text" id="productSearchInput" placeholder="${window.t('searchPlaceholder')}" value="${searchQuery}">
      ${searchQuery ? `<button class="search-clear" onclick="clearSearch()">✕</button>` : ''}
    </div>
  `;

  const breadcrumbHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><a href="#" onclick="event.preventDefault(); navigate('home')">${window.t('homeLabel')}</a></li>
        <li><a href="#" onclick="event.preventDefault(); navigate('products')">${window.t('navProducts')}</a></li>
        <li aria-current="page">${currentFilter === 'all' ? window.t('allProductsLabel') : (currentFilter === 'wishlist' ? window.t('savedItems') : (CATEGORIES.find(c => c.id === currentFilter)?.name[lang] || ''))}</li>
      </ol>
    </nav>
  `;

  let gridContent = '';
  if (filtered.length === 0) {
    gridContent = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <p>${window.t('noProducts')}</p>
      </div>
    `;
  } else {
    gridContent = `
      <div class="product-grid tilt-card-wrap">
        ${filtered.map(p => {
          const cat = CATEGORIES.find(c => c.id === p.cat);
          const name = window.pn(p);
          const desc = window.pd(p);
          const catName = cat ? window.cn(cat) : '';
          const image = CAT_IMAGES[p.cat] || 'images/hardware.webp';

          const waMsg = encodeURIComponent(`Hello Garhwal Hardware, I would like to get a price quote for:\n- Product: ${p.name.en} (${p.name.hi})\n- Category: ${cat ? cat.name.en : ''}`);
          const waUrl = `https://wa.me/${STORE.whatsapp}?text=${waMsg}`;

          return `
            <div class="product-card">
              <button class="wishlist-toggle ${window.isInWishlist(p.id) ? 'active' : ''}" onclick="window.toggleWishlist(event, ${p.id})" aria-label="Toggle Wishlist">
                ${window.isInWishlist(p.id) ? '❤️' : '🤍'}
              </button>
              <div class="product-card-inner" onclick="window.openQuickView(${p.id})" style="cursor: pointer;">
                <div class="product-image-wrapper">
                  <img class="product-image" src="${productImage(p)}" alt="${name}" loading="lazy" decoding="async" onerror="window.handleImgError(this, '${p.cat}')" width="90" height="90">
                </div>
                <div class="product-info">
                  <div class="product-cat-tag">${catName}</div>
                  <h3 class="product-name">${name}</h3>
                  <p class="product-desc">${desc}</p>
                </div>
              </div>
              <div class="product-footer">
                <a class="btn-whatsapp-sm magnetic" href="${waUrl}" target="_blank" rel="noopener">
                  <span>📱</span> ${window.t('needPrice')}
                </a>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  container.innerHTML = `
    <section class="section">
      ${breadcrumbHTML}
      <h2 class="section-title">${window.t('products')} <span class="count-badge">${filtered.length}</span></h2>
      <p class="section-subtitle">${window.t('browseByCat')}</p>
      ${searchBarHTML}
      ${filterChipsHTML}
      ${gridContent}
    </section>
    ${renderFooter()}
  `;

  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      triggerSearchRender();
    });
  }
}

let searchTimeout;
function triggerSearchRender() {
  const searchBar = document.querySelector('.search-bar');
  if (searchBar) {
    searchBar.classList.add('searching');
  }
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    render();
    const newSearchBar = document.querySelector('.search-bar');
    if (newSearchBar) newSearchBar.classList.remove('searching');
  }, 300);
}

window.filterProducts = function(catId) {
  currentFilter = catId;
  syncHash();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.clearSearch = function() {
  searchQuery = '';
  render();
};

function renderCategories(container) {
  container.innerHTML = `
    <section class="section">
      <h2 class="section-title">${window.t('ourCategories')}</h2>
      <p class="section-subtitle">${window.t('browseByCat')}</p>
      <div class="cat-grid-vertical tilt-card-wrap" style="display:flex; flex-direction:column; gap:16px;">
        ${CATEGORIES.map(c => `
          <div class="cat-card-full" onclick="filterByCategory('${c.id}')">
            <div class="cat-card-header">
              <span class="cat-icon-lg">${c.icon}</span>
              <div>
                <h3>${window.cn(c)}</h3>
              </div>
            </div>
            <p>${window.cd(c)}</p>
            <span class="cat-count">${window.t('productsCount')}</span>
          </div>
        `).join('')}
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderAbout(container) {
  container.innerHTML = `
    <section class="section">
      <h2 class="section-title">${window.t('aboutUs')}</h2>
      <div class="about-card">
        <div style="text-align:center">
          <span class="about-logo">${window.t('aboutLogo')}</span>
          <div class="about-tagline">${window.t('aboutTag')}</div>
        </div>
        <p style="margin-top:20px;line-height:1.7">${window.t('aboutDesc1')}</p>
        <p style="margin-top:16px;line-height:1.7">${window.t('aboutDesc2')}</p>
      </div>
    </section>

    <section class="section section-blue">
      <h2 class="section-title">${window.t('ourValues')}</h2>
      <div class="features-grid tilt-card-wrap">
        <div class="feature-card">
          <span class="feature-icon">🤝</span>
          <h3>${window.t('trust')}</h3>
          <p>${window.t('trustDesc')}</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">✨</span>
          <h3>${window.t('quality')}</h3>
          <p>${window.t('qualityDesc')}</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🛠️</span>
          <h3>${window.t('service')}</h3>
          <p>${window.t('serviceDesc')}</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🏗️</span>
          <h3>${window.t('community')}</h3>
          <p>${window.t('communityDesc')}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">${window.t('shopTiming')}</h2>
      <div class="timing-card">
        <span class="timing-icon">🕒</span>
        <p>${STORE.hours}</p>
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderContact(container) {
  const phonePattern = /^(?=(?:\D*\d){10,15}\D*$)[0-9+\-\s()]+$/;

  // Real-time validation helper
  const validateField = (input, rules) => {
    const value = input.value.trim();
    let isValid = true;
    let errorMsg = '';

    if (rules.required && value === '') {
      isValid = false;
      errorMsg = window.t('fieldRequired');
    } else if (rules.pattern && !rules.pattern.test(value)) {
      isValid = false;
      errorMsg = rules.message || window.t('phoneInvalid');
    }

    input.classList.toggle('error', !isValid);

    let msgEl = input.nextElementSibling;
    if (!msgEl || !msgEl.classList.contains('validation-msg')) {
      msgEl = document.createElement('span');
      msgEl.className = 'validation-msg';
      input.parentNode.insertBefore(msgEl, input.nextSibling);
    }
    msgEl.textContent = isValid ? '' : errorMsg;
    msgEl.style.display = isValid ? 'none' : 'block';

    return isValid;
  };

  // WhatsApp Message submission
  window.submitContactWA = function(e) {
    e.preventDefault();
    const nameEl = document.getElementById('contactName');
    const phoneEl = document.getElementById('contactPhone');
    const messageEl = document.getElementById('contactMessage');

    if (!nameEl || !phoneEl || !messageEl) return;

    const nameValid = validateField(nameEl, { required: true });
    const phoneValid = validateField(phoneEl, { 
      required: true, 
      pattern: phonePattern, 
      message: window.t('phoneInvalid') 
    });
    const messageValid = validateField(messageEl, { required: true });

    if (!nameValid || !phoneValid || !messageValid) {
      if (!nameValid) nameEl.focus();
      else if (!phoneValid) phoneEl.focus();
      else if (!messageValid) messageEl.focus();
      return;
    }

    const waMsg = encodeURIComponent(`Name: ${nameEl.value}\nPhone: ${phoneEl.value}\nMessage: ${messageEl.value}`);
    const url = `https://wa.me/${STORE.whatsapp}?text=${waMsg}`;
    window.open(url, '_blank');
  };

  // Attach real-time input validation listeners
  setTimeout(() => {
    const nameEl = document.getElementById('contactName');
    const phoneEl = document.getElementById('contactPhone');
    const messageEl = document.getElementById('contactMessage');

    if (nameEl) {
      nameEl.addEventListener('input', () => validateField(nameEl, { required: true }));
    }
    if (phoneEl) {
      phoneEl.addEventListener('input', () => validateField(phoneEl, { 
        required: true, 
        pattern: phonePattern, 
        message: window.t('phoneInvalid') 
      }));
    }
    if (messageEl) {
      messageEl.addEventListener('input', () => validateField(messageEl, { required: true }));
    }
  }, 0);

  container.innerHTML = `
    <section class="section">
      <h2 class="section-title">${window.t('contactUs')}</h2>
      
      <div class="contact-actions">
        <a class="contact-action-card call-card magnetic" href="tel:${STORE.phone}">
          <span class="contact-action-icon">📞</span>
          <div>
            <strong>${window.t('callPhone')}</strong>
            <p>${STORE.phone}</p>
          </div>
        </a>
        
        <a class="contact-action-card whatsapp-card magnetic" href="https://wa.me/${STORE.whatsapp}" target="_blank" rel="noopener">
          <span class="contact-action-icon">💬</span>
          <div>
            <strong>${window.t('whatsappChat')}</strong>
            <p>${window.t('chatWhatsapp')}</p>
          </div>
        </a>
      </div>

      <div class="about-card" style="margin-top:24px">
        <h3 style="font-size:1.15rem;margin-bottom:16px">✉️ ${window.t('sendMsg')}</h3>
        <form class="contact-form" onsubmit="submitContactWA(event)">
          <input type="text" id="contactName" placeholder="${window.t('yourName')}" required>
          <input type="tel" id="contactPhone" placeholder="${window.t('phoneNumber')}" required>
          <textarea id="contactMessage" rows="5" placeholder="${window.t('yourMessage')}" required></textarea>
          <button type="submit" class="btn btn-primary magnetic" style="align-self: flex-start;">
            ${window.t('sendViaWA')}
          </button>
        </form>
      </div>

      <div class="location-section" style="margin-top:32px">
        <h3 style="font-size:1.15rem;margin-bottom:16px;display:flex;align-items:center;gap:8px">📍 ${window.t('location')}</h3>
        <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:16px">${STORE.address}</p>
        <div class="map-container">
          <iframe 
            src="${STORE.mapSrc}" 
            width="100%" 
            height="320" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

// ==================== STAT COUNTERS ANIMATION ====================
function initCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';

    gsap.to(counter, {
      innerText: target,
      duration: 2.0,
      delay: 0.5,
      ease: 'power3.out',
      snap: { innerText: 1 },
      onUpdate: function() {
        counter.textContent = Math.round(counter.innerText).toLocaleString() + suffix;
      }
    });
  });
}



// ==================== MAGNETIC Snap EFFECT ====================
function initMagneticEffect() {
  const magnetics = document.querySelectorAll('.magnetic');

  magnetics.forEach(el => {
    // Remove old listeners by cloning (prevents stacking on re-renders)
    if (el._magneticMM) el.removeEventListener('mousemove', el._magneticMM);
    if (el._magneticML) el.removeEventListener('mouseleave', el._magneticML);

    el._magneticMM = (e) => {
      // Throttle via RAF to avoid forced-reflow on every mousemove tick
      if (el._magneticRaf) return;
      el._magneticRaf = requestAnimationFrame(() => {
        el._magneticRaf = null;
        const rect = el.getBoundingClientRect();
        const deltaX = e.clientX - (rect.left + rect.width / 2);
        const deltaY = e.clientY - (rect.top + rect.height / 2);
        const power = 0.35;
        gsap.to(el, {
          x: deltaX * power,
          y: deltaY * power,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    };

    el._magneticML = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)'
      });
    };

    el.addEventListener('mousemove', el._magneticMM);
    el.addEventListener('mouseleave', el._magneticML);
  });
}

// ==================== FLAT CARD HOVER GLOWS ====================
function initCardGlows() {
  const cards = document.querySelectorAll('.cat-card, .cat-card-full, .product-card, .feature-card, .nerolac-item, .photo-card');

  cards.forEach(card => {
    // Prevent listener stacking on re-renders
    if (card._glowMM) card.removeEventListener('mousemove', card._glowMM);
    // Use offsetX/offsetY — these are relative to the element itself and
    // do NOT trigger a forced reflow (unlike getBoundingClientRect).
    card._glowMM = (e) => {
      card.style.setProperty('--mouse-x', `${e.offsetX}px`);
      card.style.setProperty('--mouse-y', `${e.offsetY}px`);
    };
    card.addEventListener('mousemove', card._glowMM);
  });
}

function initGSAPScrollAnimations() {
  // Kill stale ScrollTriggers to prevent memory leaks on re-renders
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.getAll().forEach(st => st.kill());

  // Only animate hero elements when on home page
  if (currentPage === 'home') {
    gsap.fromTo('.hero-content h1', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo('.hero-content p', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.35 }
    );
    gsap.fromTo('.hero-stats', 
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo('.hero-btns', 
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
    );
  }

  // Card reveal animations. Cards are left VISIBLE by default and only
  // animated when the user is not on a reduced-motion preference. A
  // fallback timer guarantees nothing is ever stuck at opacity: 0.
  const cardSelector = '.cat-card, .product-card, .feature-card, .nerolac-item, .photo-card, .delivery-item';
  const cards = document.querySelectorAll(cardSelector);
  if (!cards.length || typeof ScrollTrigger === 'undefined') return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.set(cards, { opacity: 0, y: 30 });

  ScrollTrigger.batch(cardSelector, {
    onEnter: batch =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power3.out',
        overwrite: true
      }),
    start: 'top 92%',
    once: true
  });

  // Safety net: after 1.2s, force-reveal any cards still hidden.
  setTimeout(() => {
    cards.forEach(c => {
      const st = window.getComputedStyle(c);
      if (parseFloat(st.opacity) < 1) {
        gsap.to(c, { opacity: 1, y: 0, duration: 0.4, overwrite: true });
      }
    });
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  }, 1200);
}

// ==================== HEADER GLASS SCROLL & SCROLL-TOP BIND ====================
function initScrollHandlers() {
  const header = document.getElementById('mainHeader');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    // Header opacity adaptation and smart autohide
    if (header) {
      header.classList.toggle('scrolled', scroll > 50);
      
      const isMobileDrawerActive = mobileDrawer && mobileDrawer.classList.contains('active');
      if (!isMobileDrawerActive) {
        if (scroll > lastScrollY && scroll > 150) {
          header.classList.add('nav-up');
        } else {
          header.classList.remove('nav-up');
        }
      }
    }

    lastScrollY = scroll;

    // Scroll to Top float visibility
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', scroll > 400);
    }
  }, { passive: true });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  const initialLanguageToggle = document.getElementById('langToggle');
  if (initialLanguageToggle) {
    initialLanguageToggle.textContent = lang === 'hi' ? 'EN' : 'हिंदी';
  }

  // Update nav labels
  updateNavLabels();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  
  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('active');
    });

    // Close mobile drawer on outside click
    document.addEventListener('click', (e) => {
      if (
        mobileDrawer.classList.contains('active') &&
        !mobileDrawer.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        menuToggle.classList.remove('active');
        mobileDrawer.classList.remove('active');
      }
    });

    // Keyboard support for clickable cards (Enter / Space)
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.photo-card[role="button"]')) {
        e.preventDefault();
        e.target.click();
      }
    });
  }

  // Navigation bindings
  document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.navigate(el.dataset.page);
      
      // Close mobile drawer if open
      if (menuToggle && mobileDrawer) {
        menuToggle.classList.remove('active');
        mobileDrawer.classList.remove('active');
      }
    });
  });

  // Initial render — use current URL hash for routing
  const initialRoute = parseHash();
  currentPage = initialRoute.page;
  currentFilter = initialRoute.filter;
  render();

  // React to back/forward and manual hash changes
  window.addEventListener('hashchange', () => {
    const route = parseHash();
    currentPage = route.page;
    currentFilter = route.filter;
    searchQuery = '';
    render();
    window.scrollTo({ top: 0 });
  });

  // Hide loading screen as soon as first paint is ready
  const hideLoader = () => {
    const loader = document.getElementById('loadingScreen');
    if (!loader || loader.dataset.hidden === '1') return;
    loader.dataset.hidden = '1';
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 400);
  };

  // Prefer next frame after render so UI is visible, with a short safety cap
  requestAnimationFrame(() => requestAnimationFrame(hideLoader));
  setTimeout(hideLoader, 250);

  // Defer non-critical polish so first paint stays fast
  const deferIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  deferIdle(() => {
    initMagneticEffect();
    initScrollHandlers();
  });

  // Register Service Worker for PWA support (offline + caching)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New SW ready
              console.log('New version available!');
              if (confirm('New version available. Reload to update?')) {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
              }
            }
          });
        });
      })
      .catch((error) => {
        console.warn('Service Worker registration failed:', error);
      });
  }
});
