// ============================================
// SHELTER — Seed Data
// All static data for the user-facing app
// Seeded with the REAL Shelter menu
// ============================================

export const BRAND = {
  name: 'SHELTER',
  tagline: 'CAFÉ & GAMING ZONE',
  subtitle: 'Check the menu. Send a booking inquiry. See what\'s happening at Shelter.',
  whatsappNumber: '918320201800',
  whatsappLink: 'https://wa.me/918320201800',
  phone: '+91 8320 201 800',
  address: 'Ground Floor, Near City University, Main Road',
  hours: '10:00 AM — 12:00 AM',
  instagram: '#',
  email: 'hello@shelterzone.in',
};

export const LIVE_STATUS = {
  isOpen: true,
  vibe: 'Chill',
  cafeStatus: 'Open',
  gamingStatus: 'Active',
  activeGamers: 8,
  gamesAvailable: 6,
  currentOffer: 'Happy Hour — 20% off on shakes till 6 PM',
  eventToday: 'FIFA Tournament — 7 PM',
  tournamentRunning: false,
  lastUpdated: 'Just now',
};

export const LIVE_CARDS = [
  {
    id: 1,
    icon: '☕',
    title: 'Café Open',
    description: 'Serving hot & cold beverages',
    status: 'active',
    statusText: 'Open Now',
  },
  {
    id: 2,
    icon: '🎮',
    title: 'Gaming Active',
    description: '8 gamers playing right now',
    status: 'active',
    statusText: '8 Active',
  },
  {
    id: 3,
    icon: '😎',
    title: 'Chill Vibes',
    description: 'Relaxed crowd, plenty of space',
    status: 'chill',
    statusText: 'Chill',
  },
  {
    id: 4,
    icon: '🏷️',
    title: 'Offer Live',
    description: '20% off shakes till 6 PM',
    status: 'active',
    statusText: 'Running',
  },
  {
    id: 5,
    icon: '🏆',
    title: 'Event Today',
    description: 'FIFA Tournament at 7 PM',
    status: 'upcoming',
    statusText: '7 PM',
  },
  {
    id: 6,
    icon: '🍕',
    title: 'New Combo',
    description: 'Pizza + Shake + 1hr Gaming',
    status: 'active',
    statusText: 'Available',
  },
];

// ============================================
// MENU — Real Shelter Menu
// ============================================

export const MENU_CATEGORIES = [
  'All',
  'Frappe',
  'Hot Coffee',
  'Iced Coffee',
  'Shakes',
  'Mojito',
  'Iced Tea',
  'Hot Chocolate',
  'Pizza',
  'Burger',
  'Sandwich',
  'Frankie',
  'Fries',
  'Maggi',
  'Bread',
];

let _id = 0;
const item = (name, price, category, tag = null, desc = '') => ({
  id: ++_id,
  name,
  price,
  category,
  tag,
  description: desc,
});

export const MENU_ITEMS = [
  // ── FRAPPE ──
  item('Coffee Frappe', 100, 'Frappe', 'Popular', 'Classic blended iced coffee'),
  item('Choco Brownie Frappe', 119, 'Frappe', 'Bestseller', 'Rich chocolate brownie blend'),
  item('Almond Crunch Frappe', 119, 'Frappe', null, 'Crunchy almond blended frappe'),
  item('Cookie & Crumble', 119, 'Frappe', 'Popular', 'Cookie-loaded creamy frappe'),
  item('Mocha Frappe', 119, 'Frappe', null, 'Chocolate espresso blend'),
  item('Jawa Chips', 119, 'Frappe', null, 'Java chips blended frappe'),
  item('Salted Caramel Frappe', 119, 'Frappe', 'New', 'Sweet & salty caramel frappe'),
  item('Caramel Frappe', 119, 'Frappe', null, 'Smooth caramel blended frappe'),
  item('Irish Frappe', 119, 'Frappe', null, 'Irish cream flavored frappe'),
  item('Hazelnut Frappe', 119, 'Frappe', null, 'Nutty hazelnut blended frappe'),
  item('Biscoff Frappe', 149, 'Frappe', 'Bestseller', 'Biscoff cookie butter frappe'),
  item('Extra Coffee Shot', 30, 'Frappe', null, 'Add-on espresso shot'),

  // ── HOT COFFEE ──
  item('Cappuccino', 60, 'Hot Coffee', 'Popular', 'Classic foamy cappuccino'),
  item('Americano', 60, 'Hot Coffee', null, 'Bold espresso with hot water'),
  item('Affogato', 60, 'Hot Coffee', 'New', 'Espresso over vanilla ice cream'),
  item('Cafe Latte', 60, 'Hot Coffee', 'Popular', 'Smooth espresso with steamed milk'),
  item('Cafe Mocha', 70, 'Hot Coffee', 'Bestseller', 'Chocolate meets espresso'),
  item('French Vanilla Latte', 80, 'Hot Coffee', null, 'Vanilla-infused latte'),
  item('Caramel Latte', 80, 'Hot Coffee', null, 'Sweet caramel latte'),
  item('Hazelnut Latte', 80, 'Hot Coffee', null, 'Nutty hazelnut latte'),
  item('Irish Latte', 80, 'Hot Coffee', null, 'Irish cream flavored latte'),
  item('French Vanilla Cappuccino', 80, 'Hot Coffee', null, 'Vanilla-infused cappuccino'),
  item('Caramel Cappuccino', 80, 'Hot Coffee', null, 'Sweet caramel cappuccino'),
  item('Irish Cappuccino', 80, 'Hot Coffee', null, 'Irish cream cappuccino'),
  item('Hazelnut Cappuccino', 80, 'Hot Coffee', 'Popular', 'Nutty hazelnut cappuccino'),

  // ── ICED COFFEE ──
  item('Iced Mocha', 69, 'Iced Coffee', 'Popular', 'Chilled chocolate espresso'),
  item('Iced Latte', 69, 'Iced Coffee', null, 'Smooth iced espresso latte'),
  item('Iced Americano', 69, 'Iced Coffee', null, 'Bold iced black coffee'),

  // ── SHAKES ──
  item('Mudpie Shake', 110, 'Shakes', null, 'Rich mudpie thick shake'),
  item('Brownie Shake', 120, 'Shakes', 'Popular', 'Chocolate brownie shake'),
  item('Snicker Shake', 120, 'Shakes', null, 'Snickers-inspired thick shake'),
  item('Cookie & Crumble Shake', 120, 'Shakes', null, 'Cookie-loaded creamy shake'),
  item('Chocoblast Shake', 120, 'Shakes', 'Bestseller', 'Triple chocolate blast shake'),
  item('KitKat Shake', 120, 'Shakes', 'Popular', 'Crunchy KitKat thick shake'),
  item('Oreo Shake', 120, 'Shakes', 'Bestseller', 'Crushed Oreo thick shake'),
  item('Nutella Shake', 129, 'Shakes', 'Popular', 'Hazelnut Nutella shake'),
  item('Crunchy Nutella Shake', 149, 'Shakes', 'New', 'Nutella with crunchy bits'),

  // ── MOJITO ──
  item('Cranberry Mojito', 69, 'Mojito', null, 'Tangy cranberry fresh mojito'),
  item('Blue Ocean Mojito', 69, 'Mojito', 'Popular', 'Vibrant blue curacao mojito'),
  item('Green Apple Mojito', 69, 'Mojito', 'Bestseller', 'Crisp green apple mojito'),
  item('Sex on the Beach Mojito', 69, 'Mojito', null, 'Fruity tropical mojito'),
  item('Watermelon Mojito', 69, 'Mojito', 'New', 'Refreshing watermelon mojito'),
  item('Lemon Mint Mojito', 69, 'Mojito', null, 'Classic lemon mint cooler'),

  // ── ICED TEA ──
  item('Green Apple Iced Tea', 69, 'Iced Tea', null, 'Crisp green apple iced tea'),
  item('Peach Iced Tea', 69, 'Iced Tea', 'Popular', 'Sweet peach iced tea'),
  item('Lemon Iced Tea', 69, 'Iced Tea', null, 'Classic lemon iced tea'),

  // ── HOT CHOCOLATE ──
  item('Vanilla Served', 20, 'Hot Chocolate', null, 'Vanilla with hot chocolate sauce'),
  item('Chocolate Ice Cream', 40, 'Hot Chocolate', null, 'Rich chocolate ice cream scoop'),
  item('Brownie', 59, 'Hot Chocolate', 'Popular', 'Warm chocolate brownie'),
  item('Hot Chocolate', 59, 'Hot Chocolate', 'Bestseller', 'Classic hot chocolate drink'),
  item('Hot Brownie Served', 79, 'Hot Chocolate', 'New', 'Warm brownie with hot chocolate sauce'),

  // ── PIZZA (6 INCH) ──
  item('Onion Pizza', 99, 'Pizza', null, '6 inch — Classic onion pizza'),
  item('Golden Corn Pizza', 99, 'Pizza', null, '6 inch — Sweet corn loaded pizza'),
  item('Paneer & Capsicum Pizza', 109, 'Pizza', 'Popular', '6 inch — Paneer & capsicum pizza'),
  item('Cheesy Pizza', 109, 'Pizza', null, '6 inch — Extra cheesy pizza'),
  item('Veg Loaded Pizza', 149, 'Pizza', 'Bestseller', '6 inch — Fully loaded veg pizza'),
  item('Veg Loaded + Paneer & Capsicum', 209, 'Pizza', null, '6 inch — Combo deal'),
  item('Cheesy + Golden Corn + Onion', 259, 'Pizza', null, '6 inch — Combo deal'),

  // ── PIZZA (12 INCH) ──
  item('Margherita Pizza', 199, 'Pizza', 'Popular', '12 inch — Classic mozzarella & basil'),
  item('Veggie Hot Pizza', 219, 'Pizza', null, '12 inch — Spicy loaded veggie'),
  item('Cheese Fries Pizza', 219, 'Pizza', null, '12 inch — Cheese fries topped pizza'),
  item('Paneer Chipotle Pizza', 229, 'Pizza', 'New', '12 inch — Smoky chipotle paneer'),
  item('Peri Peri Pepper Paneer Pizza', 239, 'Pizza', 'Bestseller', '12 inch — Fiery peri peri paneer'),

  // ── BURGER ──
  item('Aloo Tikki Burger', 59, 'Burger', 'Popular', 'Classic crispy aloo tikki burger'),
  item('Aloo Tikki Cheese Burger', 69, 'Burger', null, 'Aloo tikki with melted cheese'),
  item('Tandoori Tikka Burger', 99, 'Burger', 'Bestseller', 'Spiced tandoori patty burger'),
  item('Chef Sep. Burger', 99, 'Burger', null, 'Chef\'s special recipe burger'),
  item('Cheesy Supreme Burger', 120, 'Burger', 'New', 'Ultimate cheesy loaded burger'),

  // ── SANDWICH ──
  item('Cheese Chutney Sandwich', 50, 'Sandwich', null, 'Classic cheese & chutney'),
  item('Masala Sandwich', 50, 'Sandwich', null, 'Spicy masala grilled sandwich'),
  item('Bombay Sandwich', 50, 'Sandwich', 'Popular', 'Mumbai-style layered sandwich'),
  item('Cheese Masala Sandwich', 60, 'Sandwich', null, 'Cheesy masala grilled sandwich'),
  item('Veg Cheese Sandwich', 70, 'Sandwich', null, 'Loaded veg cheese sandwich'),
  item('Indian Masala Sandwich', 120, 'Sandwich', null, 'Premium Indian spiced sandwich'),
  item('Veg Club Sandwich', 120, 'Sandwich', 'Bestseller', 'Triple-layered veg club sandwich'),
  item('Chowpatty Spicy Masala Loaded', 120, 'Sandwich', 'New', 'Mumbai chowpatty inspired'),
  item('Tandoori Paneer Sandwich', 150, 'Sandwich', 'Popular', 'Tandoori paneer grilled sandwich'),

  // ── FRANKIE ──
  item('Veg Frankie', 79, 'Frankie', null, 'Classic veg frankie roll'),
  item('Tandoori Paneer Frankie', 89, 'Frankie', 'Popular', 'Tandoori spiced paneer roll'),
  item('Peri Peri Paneer Frankie', 99, 'Frankie', null, 'Spicy peri peri paneer roll'),
  item('Paneer Cheese Frankie', 120, 'Frankie', 'Bestseller', 'Cheesy paneer loaded roll'),
  item('Veg Cheese Frankie', 110, 'Frankie', null, 'Veg roll with extra cheese'),
  item('Tandoori Paneer Cheese Frankie', 120, 'Frankie', 'New', 'Ultimate tandoori cheese roll'),

  // ── FRIES ──
  item('Salted Fries', 79, 'Fries', null, 'Classic salted crispy fries'),
  item('Peri Peri Fries', 99, 'Fries', 'Popular', 'Spicy peri peri seasoned fries'),
  item('Cheese Fries', 139, 'Fries', 'Bestseller', 'Loaded cheesy fries'),

  // ── MAGGI ──
  item('Plain Maggi', 50, 'Maggi', null, 'Classic plain Maggi noodles'),
  item('Butter Maggi', 60, 'Maggi', null, 'Buttery smooth Maggi'),
  item('Butter Tadka Maggi', 70, 'Maggi', null, 'Butter Maggi with tadka'),
  item('Butter Masala Maggi', 80, 'Maggi', 'Popular', 'Spiced butter masala Maggi'),
  item('Veg Masala Maggi', 80, 'Maggi', null, 'Loaded veg masala Maggi'),
  item('Cheese Maggi', 90, 'Maggi', 'Bestseller', 'Extra cheesy Maggi'),
  item('Extra Cheese', 25, 'Maggi', null, 'Add-on cheese topping'),

  // ── BREAD ──
  item('Garlic Bread', 60, 'Bread', null, 'Classic buttery garlic bread'),
  item('Garlic Cheese Bread', 80, 'Bread', 'Popular', 'Garlic bread with melted cheese'),
  item('Garlic Chilli Cheese Bread', 80, 'Bread', null, 'Spicy chilli cheese garlic bread'),
];

// ============================================
// GAMES
// ============================================

export const GAMES = [
  { id: 1, name: 'FIFA 25', platform: 'PS5', availability: 'available', pricePerHour: 100, nextSlot: null, image: '⚽' },
  { id: 2, name: 'GTA V Online', platform: 'PC', availability: 'occupied', pricePerHour: 80, nextSlot: '5:30 PM', image: '🚗' },
  { id: 3, name: 'Call of Duty: Warzone', platform: 'PC', availability: 'available', pricePerHour: 80, nextSlot: null, image: '🔫' },
  { id: 4, name: 'Tekken 8', platform: 'PS5', availability: 'available', pricePerHour: 100, nextSlot: null, image: '🥊' },
  { id: 5, name: 'Mortal Kombat 1', platform: 'PS5', availability: 'occupied', pricePerHour: 100, nextSlot: '6:00 PM', image: '💀' },
  { id: 6, name: 'Fortnite', platform: 'PC', availability: 'available', pricePerHour: 80, nextSlot: null, image: '🏗️' },
  { id: 7, name: 'Minecraft', platform: 'PC', availability: 'occupied', pricePerHour: 60, nextSlot: '4:45 PM', image: '⛏️' },
  { id: 8, name: 'Valorant', platform: 'PC', availability: 'available', pricePerHour: 80, nextSlot: null, image: '🎯' },
  { id: 9, name: 'EA FC 25', platform: 'PS5', availability: 'available', pricePerHour: 100, nextSlot: null, image: '⚽' },
  { id: 10, name: 'Spider-Man 2', platform: 'PS5', availability: 'occupied', pricePerHour: 100, nextSlot: '7:00 PM', image: '🕷️' },
];

// ============================================
// OFFERS & EVENTS
// ============================================

export const OFFERS = [
  {
    id: 1,
    title: 'Happy Hour',
    subtitle: '20% Off All Shakes',
    description: 'Every weekday from 3 PM to 6 PM. Grab your favourite shake at a discount!',
    type: 'offer',
    badge: 'Live Now',
    cta: 'Order Now',
  },
  {
    id: 2,
    title: 'FIFA Tournament',
    subtitle: 'Win ₹2000 Cash Prize',
    description: 'Every Saturday at 7 PM. Entry fee ₹100. Register at the counter or online.',
    type: 'event',
    badge: 'This Saturday',
    cta: 'Join Event',
  },
  {
    id: 3,
    title: 'Gamer Combo Deal',
    subtitle: 'Pizza + Shake + 1hr Gaming',
    description: 'The ultimate value combo for gamers. Save ₹150 on the bundle.',
    type: 'offer',
    badge: 'Best Value',
    cta: 'View Menu',
  },
  {
    id: 4,
    title: 'Friday Night Vibes',
    subtitle: 'Live Music + Special Menu',
    description: 'Every Friday from 8 PM. Acoustic sets, special snacks menu, and chill vibes.',
    type: 'event',
    badge: 'Every Friday',
    cta: 'Learn More',
  },
  {
    id: 5,
    title: 'Student Special',
    subtitle: 'Show ID, Get 15% Off',
    description: 'Valid college ID gets you 15% off on everything. Students deserve good food on a budget.',
    type: 'offer',
    badge: 'Students Only',
    cta: 'Visit Us',
  },
  {
    id: 6,
    title: 'Call of Duty Night',
    subtitle: 'Squad Tournament — 4v4',
    description: 'Monthly COD squad battles. Form your squad and compete for the champion title.',
    type: 'event',
    badge: 'Next Week',
    cta: 'Register',
  },
];

// ============================================
// GALLERY
// ============================================

export const GALLERY_IMAGES = [
  { id: 1, emoji: '☕', label: 'Café Vibes', color: '#F8E8D0' },
  { id: 2, emoji: '🎮', label: 'Gaming Setup', color: '#E8E0F0' },
  { id: 3, emoji: '🍕', label: 'Fresh Pizza', color: '#FCE4D0' },
  { id: 4, emoji: '👥', label: 'Squad Goals', color: '#D0E8F0' },
  { id: 5, emoji: '🏆', label: 'Tournament Day', color: '#FDE8EA' },
  { id: 6, emoji: '🍔', label: 'Burger & Fries', color: '#E8F0D8' },
  { id: 7, emoji: '🎧', label: 'Chill Corner', color: '#F0E8F8' },
  { id: 8, emoji: '🎉', label: 'Friday Night', color: '#FCF0D0' },
];

// ============================================
// BOOKING
// ============================================

export const GAME_INTERESTS = [
  'FIFA 25', 'GTA V Online', 'Call of Duty: Warzone', 'Tekken 8',
  'Mortal Kombat 1', 'Fortnite', 'Minecraft', 'Valorant',
  'EA FC 25', 'Spider-Man 2', 'Any Available Game',
];

// ============================================
// NAVIGATION
// ============================================

export const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/menu', label: 'Menu', icon: '📋' },
  { path: '/live', label: 'Live', icon: '📡' },
  { path: '/games', label: 'Games', icon: '🎮' },
  { path: '/offers', label: 'Offers', icon: '🏷️' },
  { path: '/gallery', label: 'Gallery', icon: '📸' },
];
