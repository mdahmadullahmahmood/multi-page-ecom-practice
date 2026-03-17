// ============================================================
// VOLTEX — Shared Data & Cart State (included in every page)
// ============================================================

const PRODUCTS = [
  {id:1,name:'DJI Mini 4 Pro Drone',cat:'tech',price:74999,oldPrice:89999,img:'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&q=80',badge:'sale',stars:5,rating:248,desc:'4K/60fps camera, omnidirectional obstacle sensing, 34-minute flight time. The ultimate aerial photography companion.',specs:['4K/60fps HDR Video','34-Minute Battery Life','Omnidirectional Obstacle Sensing','10km O3+ Transmission Range','249g Ultralight Design'],brand:'DJI',inStock:true},
  {id:2,name:'Sony WH-1000XM5',cat:'audio',price:24999,oldPrice:34999,img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',badge:'sale',stars:5,rating:512,desc:'Industry-leading noise cancellation with 8 microphones, 30-hour battery, and multipoint connection for two devices simultaneously.',specs:['Industry-Best ANC (8 Mics)','30-Hour Battery','LDAC Hi-Res Audio','Multipoint Connection','Speak-to-Chat Auto Pause'],brand:'Sony',inStock:true},
  {id:3,name:'Apple MacBook Pro M4',cat:'tech',price:199900,oldPrice:null,img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',badge:'new',stars:5,rating:189,desc:'M4 chip with up to 22 hours battery life, Liquid Retina XDR display, and next-generation performance for pro workflows.',specs:['Apple M4 Pro Chip','16GB Unified Memory','512GB SSD Storage','Liquid Retina XDR Display','22-Hour Battery Life'],brand:'Apple',inStock:true},
  {id:4,name:'Garmin Fenix 8 Watch',cat:'fitness',price:89999,oldPrice:99999,img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',badge:'sale',stars:4,rating:94,desc:'The ultimate multisport GPS watch with solar charging, AMOLED display, advanced health metrics and 29-day battery.',specs:['AMOLED + Solar Charging','Multi-Sport GPS Tracking','Heart Rate & SpO2 Sensor','29 Days Battery Life','Topographic Maps'],brand:'Garmin',inStock:true},
  {id:5,name:'PlayStation 5 Pro',cat:'gaming',price:59999,oldPrice:null,img:'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&q=80',badge:'new',stars:5,rating:437,desc:'Next-gen gaming with 8K capability, PlayStation Spectral Super Resolution, 3D Tempest Audio and ultra-high speed SSD.',specs:['8K Gaming Capable','Ultra-High Speed SSD (2TB)','3D Tempest Audio Engine','120fps Gameplay Support','PlayStation Spectral SR'],brand:'Sony',inStock:true},
  {id:6,name:'Nivia Pro Football',cat:'sports',price:1299,oldPrice:1999,img:'https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=800&q=80',badge:'sale',stars:4,rating:63,desc:'FIFA-quality thermally bonded match ball. Superior durability and all-weather performance for competitive play.',specs:['FIFA Pro Certified','Thermal Bonded Panels','All-Weather Butyl Bladder','Size 5 Match Ball','32-Panel Design'],brand:'Nivia',inStock:true},
  {id:7,name:'JBL Charge 6 Speaker',cat:'audio',price:14999,oldPrice:18999,img:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',badge:'hot',stars:5,rating:302,desc:'Powerful portable speaker delivering 30W output, 24-hour playtime, IP67 waterproof rating and JBL Auracast connectivity.',specs:['30W Sound Output','24-Hour Playtime','IP67 Waterproof','JBL Auracast BT','USB-C Pass-Through Charging'],brand:'JBL',inStock:true},
  {id:8,name:'Xiaomi Smart Band 9 Pro',cat:'fitness',price:4999,oldPrice:6499,img:'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',badge:'sale',stars:4,rating:178,desc:'Advanced fitness tracking with AMOLED display, comprehensive health monitoring, and 10-day battery life.',specs:['1.74" AMOLED Display','Blood Oxygen & HRV','10-Day Battery Life','150+ Sport Modes','5ATM Water Resistance'],brand:'Xiaomi',inStock:true},
  {id:9,name:'Logitech G Pro X Superlight 2',cat:'gaming',price:12999,oldPrice:15999,img:'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80',badge:'sale',stars:5,rating:221,desc:'The world\'s most advanced wireless gaming mouse. Just 60g with HERO 2 sensor delivering 32,000 DPI precision.',specs:['HERO 2 Sensor — 32K DPI','Ultralight 60g Design','Lightspeed Wireless','100-Hour Battery','Zero-Additive PTFE Feet'],brand:'Logitech',inStock:true},
  {id:10,name:'Decathlon Hybrid Bicycle',cat:'sports',price:18999,oldPrice:24999,img:'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80',badge:'sale',stars:4,rating:87,desc:'Alloy frame hybrid bicycle with Shimano 21-speed gearing. Perfect for city commutes and weekend trail riding.',specs:['Shimano 21-Speed Gearing','6061 Alloy Frame','Front Suspension Fork','700C x 35C Tyres','Hydraulic Disc Brakes'],brand:'Decathlon',inStock:true},
  {id:11,name:'iPad Pro M4 13"',cat:'tech',price:109900,oldPrice:null,img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',badge:'new',stars:5,rating:163,desc:'The thinnest Apple product ever made. M4 chip, Ultra Retina XDR tandem OLED, and Apple Pencil Pro support.',specs:['Apple M4 Chip','Ultra Retina XDR OLED','Apple Pencil Pro Ready','Wi-Fi 6E + Bluetooth 5.3','5.1mm Ultra-Thin Design'],brand:'Apple',inStock:true},
  {id:12,name:'Yonex Astrox 99 Racket',cat:'sports',price:8999,oldPrice:11999,img:'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',badge:'sale',stars:4,rating:54,desc:'Professional carbon fiber badminton racket with rotational generator system for powerful smashing and aggressive play.',specs:['Namd Graphite Shaft','Rotational Generator System','4U / G5 Grip Size','28-30 lbs String Tension','Includes Cover'],brand:'Yonex',inStock:true},
  {id:13,name:'Samsung 65" QLED 4K TV',cat:'tech',price:129900,oldPrice:159900,img:'https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=800&q=80',badge:'sale',stars:5,rating:312,desc:'Quantum HDR+ display with Neural Quantum Processor 4K, Object Tracking Sound+, and 144Hz gaming mode.',specs:['Quantum HDR+ 2000 nits','Neural Quantum Processor 4K','Object Tracking Sound+','144Hz Game Mode','Tizen Smart OS'],brand:'Samsung',inStock:true},
  {id:14,name:'ASUS ROG Gaming Chair',cat:'gaming',price:34999,oldPrice:44999,img:'https://images.unsplash.com/photo-1598550487031-0898b4852123?w=800&q=80',badge:'sale',stars:4,rating:76,desc:'Ergonomic gaming chair with adjustable lumbar support, 4D armrests, magnetic memory foam headrest and recline to 155°.',specs:['4D Armrest Adjustment','Magnetic Memory Foam Headrest','Adjustable Lumbar Support','155° Recline','PU Leather + Fabric Hybrid'],brand:'ASUS ROG',inStock:true},
  {id:15,name:'Apple AirPods Pro 2',cat:'audio',price:24900,oldPrice:29900,img:'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80',badge:'sale',stars:5,rating:428,desc:'Active Noise Cancellation with Transparency mode, Adaptive Audio, and Personalized Spatial Audio with head tracking.',specs:['Active Noise Cancellation','Adaptive Transparency','Personalized Spatial Audio','30-Hour Total Battery','IP54 Water Resistant'],brand:'Apple',inStock:true},
  {id:16,name:'Adidas Running Shoes',cat:'fitness',price:8999,oldPrice:12999,img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',badge:'sale',stars:4,rating:194,desc:'ULTRABOOST 23 with responsive Boost midsole, Primeknit+ upper, and Continental rubber outsole for any terrain.',specs:['BOOST Midsole Cushioning','Primeknit+ Upper','Continental Rubber Outsole','LEP 2.0 Torsion System','Available Sizes: 6–12'],brand:'Adidas',inStock:true},
];

// ─── CART (localStorage based) ───
const Cart = {
  get() { try { return JSON.parse(localStorage.getItem('voltex_cart') || '[]'); } catch { return []; } },
  save(cart) { localStorage.setItem('voltex_cart', JSON.stringify(cart)); },
  add(id, qty=1) {
    const cart = this.get();
    const ex = cart.find(x => x.id === id);
    if (ex) ex.qty += qty; else { const p = PRODUCTS.find(x=>x.id===id); if(p) cart.push({id, qty}); }
    this.save(cart);
    this.updateBadge();
  },
  remove(id) { const c = this.get().filter(x=>x.id!==id); this.save(c); this.updateBadge(); },
  changeQty(id, delta) {
    const cart = this.get();
    const item = cart.find(x=>x.id===id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { this.remove(id); return; }
    this.save(cart); this.updateBadge();
  },
  count() { return this.get().reduce((s,i)=>s+i.qty,0); },
  total() { return this.get().reduce((s,i)=>{ const p=PRODUCTS.find(x=>x.id===i.id); return s+(p?p.price*i.qty:0); },0); },
  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.count();
    badges.forEach(b => { b.textContent = count; b.style.display = count > 0 ? 'flex' : 'none'; });
  },
  clear() { this.save([]); this.updateBadge(); }
};

// ─── WISHLIST ───
const Wishlist = {
  get() { try { return JSON.parse(localStorage.getItem('voltex_wish') || '[]'); } catch { return []; } },
  toggle(id) {
    let w = this.get();
    if (w.includes(id)) w = w.filter(x=>x!==id); else w.push(id);
    localStorage.setItem('voltex_wish', JSON.stringify(w));
    return w.includes(id);
  },
  has(id) { return this.get().includes(id); },
  count() { return this.get().length; }
};

// ─── TOAST ───
function showToast(msg, type='success') {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ─── SHARED NAV RENDER ───
function renderNav(activePage='') {
  Cart.updateBadge();
}

// ─── STARS HTML ───
function starsHTML(n) {
  return Array.from({length:5},(_,i)=>`<span class="star ${i<n?'on':''}">${i<n?'★':'☆'}</span>`).join('');
}

// ─── FORMAT PRICE ───
function fmt(n) { return '₹' + n.toLocaleString('en-IN'); }
