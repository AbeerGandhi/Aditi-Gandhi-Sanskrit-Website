import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Star, Quote, Image as ImageIcon, X } from 'lucide-react';

export default function Results() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const achievers = [
    {
      image: "/images/results-1.jpeg"
    },
    {
      image: "/images/results-2.jpeg"
    }
  ];

  const testimonials = [
    {
      name: "Aaditya Sharma",
      text: "I am truly grateful to Aditi ma'am for making my journey with Sanskrit so enriching and enjoyable. She instilled in me a deep love for the language, making even the most complex concepts feel simple and fascinating.",
      rating: 5
    },
    {
      name: "Prajakta Nimbalkar",
      text: "Aditi Ma'am gives personal attention to each and every student. Her friendly yet disciplined approach helped my son, Shivank Nimbalkar, score 100/100 in Sanskrit in class 10 CBSE.",
      rating: 5
    },
    {
      name: "Shourya",
      text: "When I joined Aditi Ma'am's class, I was unsure about Sanskrit. But she explains basics so clearly and keeps track of every student's progress. She never lets anyone feel left behind.",
      rating: 5
    },
    {
      name: "Tutorial Gamer",
      text: "Great experience with ma'am! I was in her sanskrit tuition for 10th grade. Improvement I had was magnificent! From 59/80 to 95+/80. She is very supportive.",
      rating: 5
    }
  ];

  return (
    <div className="pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-slate-50 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-slate-900 font-bold text-lg">4.9/5.0</span>
              <span className="text-slate-500 text-sm">(55+ Google Reviews)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 font-serif">Our Achievers</h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
            
            <motion.a
              href="https://www.google.com/search?client=opera&hs=9tX&sca_esv=78fb863f68fa48c7&sxsrf=ANbL-n5wQvO15uBuEMbyDeogoxOTaX_-xA:1773668701329&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOX0luv9MMF0VPZCO9JDkU0i4rcOqkY61tS6xH_cbrCCPhJ7IyGVMII0KmcsF2OfRadgOyG_0bRGaJc0Ho0BPifri6R1v5IKVe8i1NxJ2gYac-kmelQ%3D%3D&q=Aditi+Gandhi%27s+Sanskrit+Classes+Reviews&sa=X&ved=2ahUKEwie-5DnxqSTAxXS2TgGHa2LM2kQ0bkNegQIMhAF&biw=1534&bih=696&dpr=1.25&zx=1773668708116&no_sw_cr=1#lrd=0x3bd4c132b49fb1d7:0xa43aba0e46c83262,3,,,," // Placeholder placeid, user can update
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg border border-slate-200 hover:bg-slate-50 transition-all"
            >
              <Star className="text-amber-400" size={20} fill="currentColor" />
              Write a Google Review
            </motion.a>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Achievers Gallery */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <Award className="text-primary w-8 h-8" />
            <h2 className="text-3xl font-bold text-slate-900">Top Student Results</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {achievers.map((achiever, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedImage(achiever.image)}
                className="group relative overflow-hidden rounded-[2.5rem] shadow-lg bg-white cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img 
                    src={achiever.image} 
                    alt="Result Collage" 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ImageIcon className="text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Review Screenshots Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <ImageIcon className="text-primary w-8 h-8" />
            <h2 className="text-3xl font-bold text-slate-900">Google Review Highlights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img 
                  src={`/images/google-review-${i}.png`} 
                  alt={`Google Review ${i}`}
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reviews Gallery */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <Quote className="text-primary w-8 h-8" />
            <h2 className="text-3xl font-bold text-slate-900">What Our Students Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:shadow-2xl transition-all relative"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {testimonial.name[0]}
                  </div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section (Kept from previous version for "perfect" look) */}
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Quote size={200} className="absolute -top-10 -left-10 rotate-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative z-10">Consistent Excellence Year After Year</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              { label: "Students Taught", value: "500+" },
              { label: "Success Rate", value: "100%" },
              { label: "Top Scorers", value: "150+" },
              { label: "Distinctions", value: "300+" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Result Collage Full View"
              className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

