import React, { useState } from 'react';
import { Star, CheckCircle2, ShoppingBag, MessageCircle, Clock, MapPin, Heart, ChevronDown, Menu, X, Facebook, Instagram, ShieldCheck, Leaf, ChefHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const products = [
    { title: "Solo Piece", price: "₱35", desc: "Perfect for a quick merienda fix.", popular: false },
    { title: "Box of 6", price: "₱200", desc: "Great for sharing with friends.", popular: true },
    { title: "Box of 12", price: "₱380", desc: "The ultimate pasalubong size!", popular: false }
  ];

  const testimonials = [
    { text: "Lami kaayo! The best coconut bread I've tasted. Murag ensaymada nga mas lami pa!", author: "Maria S.", loc: "Cebu City" },
    { text: "Worth it! Humok kaayo ang pan ug creamy ang topping. Bag-o luto pirmi.", author: "Juan D.", loc: "Mandaue City" },
    { text: "Babalik-balikan! Perfect pasalubong para sa pamilya. Nahurot dayon!", author: "Elena R.", loc: "Lapu-Lapu City" }
  ];

  const features = [
    { title: "Bag-o luto pirmi", desc: "Freshly baked everyday. Walay bahaw!" },
    { title: "Homemade recipe ni Nanay", desc: "Authentic, luto ni Nanay with love." },
    { title: "Premium taste, affordable price", desc: "Pang-masa pero sosyal ang quality." },
    { title: "Perfect for merienda ug pasalubong", desc: "Lami i-pares sa kape." }
  ];

  const steps = [
    { step: "1", title: "Click Order Now", desc: "Or message us directly on our Facebook page." },
    { step: "2", title: "Choose Your Order", desc: "Select Solo, Box of 6, or Box of 12." },
    { step: "3", title: "Confirm Details", desc: "Send your delivery details and payment." },
    { step: "4", title: "Delivery or Pickup", desc: "Wait for your freshly baked bread!" }
  ];

  const faqs = [
    { q: "How to order?", a: "Click 'Order Now' or message us on Messenger." },
    { q: "What is the delivery time?", a: "We deliver from 10 AM to 5 PM daily." },
    { q: "What are your payment methods?", a: "We accept GCash, Maya, and COD for select areas." },
    { q: "What is the shelf life?", a: "Best consumed within 3 days. Keep refrigerated after 24 hours." }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A3320] font-sans selection:bg-yellow-200 pb-20 md:pb-0">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-yellow-500" />
            <span className="font-serif text-2xl font-bold text-[#4A3320] tracking-tight">Nanay's</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="font-medium hover:text-yellow-600 transition-colors">Menu</a>
            <a href="#story" className="font-medium hover:text-yellow-600 transition-colors">Story</a>
            <a href="#faq" className="font-medium hover:text-yellow-600 transition-colors">FAQ</a>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-[#4A3320] px-6 py-2.5 rounded-full font-bold shadow-sm transition-all flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Order Now
            </button>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden bg-[#FDFBF7] border-b border-yellow-100">
              <div className="px-4 py-4 space-y-4 flex flex-col">
                <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="font-medium">Menu</a>
                <a href="#story" onClick={() => setIsMobileMenuOpen(false)} className="font-medium">Story</a>
                <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="font-medium">FAQ</a>
                <button className="bg-yellow-400 text-[#4A3320] px-6 py-3 rounded-full font-bold flex justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" /> Order Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" /> Premium Ensaymada-Style
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Humok, buttery, ug creamy nga <span className="text-yellow-600">Coconut Bread</span>
            </h1>
            <p className="text-lg text-[#6B4C3A] mb-8">
              Murag ensaymada nga mas lami pa! Freshly baked everyday. Experience the melt-in-your-mouth goodness of our signature coconut topping. Luto ni Nanay, made with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-[#4A3320] px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:-translate-y-1 flex justify-center items-center gap-2">
                <ShoppingBag className="w-5 h-5" /> Order Now
              </button>
              <button className="bg-white border-2 border-yellow-200 text-[#4A3320] px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 flex justify-center items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#0084FF]" /> Message Us
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-[#6B4C3A]">
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-yellow-600"/> Fresh Daily</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-yellow-600"/> No Preservatives</span>
              <span className="flex items-center gap-2"><Heart className="w-5 h-5 text-yellow-600"/> Homemade with Love</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-yellow-200 rounded-full blur-3xl opacity-30 translate-x-10 translate-y-10"></div>
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000" alt="Coconut Bread" className="relative z-10 rounded-3xl shadow-2xl object-cover h-[500px] w-full border-8 border-white" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white border-y border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold mb-12">Trusted by hundreds of happy customers in Cebu!</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#FDFBF7] p-8 rounded-2xl border border-yellow-100 relative">
                <Star className="absolute top-6 right-6 w-8 h-8 text-yellow-200 fill-yellow-200 opacity-50" />
                <p className="italic mb-6 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center font-bold">{t.author[0]}</div>
                  <div><p className="font-bold">{t.author}</p><p className="text-xs text-[#6B4C3A]">{t.loc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Coconut Bread (Ensaymada Style)</h2>
            <p className="text-lg text-[#6B4C3A]">Soft & fluffy, buttery texture, creamy coconut topping. Freshly baked daily!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={i} className={`bg-white rounded-3xl p-8 border-2 relative ${p.popular ? 'border-yellow-400 shadow-xl' : 'border-yellow-100 shadow-md'}`}>
                {p.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 px-4 py-1 rounded-full text-sm font-bold uppercase">Best Seller</div>}
                <div className="h-48 bg-yellow-50 rounded-2xl mb-6 overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&q=80&w=600&sig=${i}`} alt={p.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-3xl font-serif font-bold text-yellow-600 mb-4">{p.price}</p>
                <p className="text-[#6B4C3A] mb-8">{p.desc}</p>
                <button className={`w-full py-3 rounded-full font-bold ${p.popular ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-yellow-100 hover:bg-yellow-200'}`}>Order Yours Today</button>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 font-bold text-red-600 animate-pulse">Limited Stocks Only!</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#4A3320] text-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                  <div><h4 className="text-xl font-bold text-white mb-1">{f.title}</h4><p className="text-yellow-100/80">{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800" alt="Baking" className="rounded-3xl shadow-2xl object-cover w-full h-[500px]" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold mb-8">The Story of Nanay</h2>
          <p className="text-xl text-[#6B4C3A] leading-relaxed mb-6">
            Nag sugod sa gamay nga kusina sa balay, ang passion ni Nanay sa pagluto maoy naghatag og kinabuhi aning original recipe. 
            Gipasa-pasa nga tradisyon para matilawan sa tanan ang tinuod nga lami sa gugma sa usa ka inahan.
          </p>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">How to Order</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl text-center shadow-sm border border-yellow-100">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">{s.step}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-[#6B4C3A]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-20 bg-white border-b border-yellow-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-8">Delivery & Location</h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-12 text-left">
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-yellow-100">
              <h3 className="font-bold text-lg mb-2">Areas Served</h3>
              <p className="text-[#6B4C3A]">Cebu City, Mandaue, Lapu-Lapu, Talisay</p>
            </div>
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-yellow-100">
              <h3 className="font-bold text-lg mb-2">Delivery Options</h3>
              <p className="text-[#6B4C3A]">Maxim/Lalamove (Buyer books) or Store Pickup.</p>
            </div>
          </div>
          <div className="inline-block bg-red-50 text-red-700 px-6 py-3 rounded-full font-bold animate-pulse">
            🔥 Limited batches daily – order early to secure!
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-yellow-400 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Tilawi na ang kalami sa Nanay's Coconut Bread — once you try it, mobalik gyud ka!
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#4A3320] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-transform flex justify-center items-center gap-2">
              <ShoppingBag className="w-5 h-5" /> Order Now
            </button>
            <button className="bg-[#0084FF] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-transform flex justify-center items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Chat on Messenger
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A3320] text-yellow-100/60 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[#6B4C3A]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="h-6 w-6 text-yellow-500" />
              <span className="font-serif text-xl font-bold text-white">Nanay's</span>
            </div>
            <p className="mb-4">Soft, buttery, creamy coconut bread.</p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <p>0912-345-6789</p>
            <p>hello@nanayscoconut.com</p>
            <p className="mt-2">Cebu City, Philippines</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Business Hours</h4>
            <p>Monday - Sunday</p>
            <p>8:00 AM - 5:00 PM</p>
          </div>
        </div>
        <div className="text-center text-sm">
          <p className="flex items-center justify-center gap-1 text-yellow-100">
            Made with love by Nanay <Heart className="w-4 h-4 text-red-500 fill-red-500 ml-1" />
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#FDFBF7]/90 backdrop-blur-md border-t border-yellow-100 z-50">
        <button className="w-full bg-yellow-400 text-[#4A3320] py-3.5 rounded-full font-bold shadow-lg flex justify-center items-center gap-2">
          <ShoppingBag className="w-5 h-5" /> Order Now
        </button>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-yellow-100 rounded-2xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-4 text-left flex justify-between items-center">
        <span className="font-bold">{q}</span>
        <ChevronDown className={`w-5 h-5 text-yellow-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
            <div className="px-6 pb-4 text-[#6B4C3A]">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

