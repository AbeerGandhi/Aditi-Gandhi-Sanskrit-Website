import { motion } from 'motion/react';
import { Award, Star, Quote, Image as ImageIcon } from 'lucide-react';

export default function Results() {
  const achievers = [
    {
      name: "Shivank Nimbalkar",
      caption: "Class 10 CBSE (100/100)",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1974"
    },
    {
      name: "Rohan Sharma",
      caption: "Class 10 (2025)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974"
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
              href="https://search.google.com/local/writereview?placeid=ChIJ-3_8_8_8_8_8_8_8_8_8_8_8" // Placeholder placeid, user can update
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
              <motion.figure
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] shadow-lg bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={achiever.image} 
                    alt={achiever.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <figcaption className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">{achiever.caption}</p>
                  <h3 className="text-2xl font-bold">{achiever.name}</h3>
                </figcaption>
              </motion.figure>
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
                  src={`/images/google review ${i}.png`} 
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
    </div>
  );
}

