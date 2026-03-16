import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Users, Award, BookOpen } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=2070" 
            alt="Sanskrit Script" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            <h1 className="text-5xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tight leading-tight font-serif">
              Unlock the Beauty of <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-primary italic"
              >
                Sanskrit
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Master the ancient language with personalized guidance from Aditi Gandhi in Nagpur. 
              Specialized coaching for students from Class V to X.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-2xl shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Enroll Now <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/courses"
                  className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:shadow-md"
                >
                  View Courses
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating elements for visual interest */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-20 left-10 hidden lg:block"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card p-4 rounded-2xl flex items-center gap-3 shadow-xl border border-white/50"
          >
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><CheckCircle2 size={20} /></div>
            <div>
              <p className="text-xs font-bold text-slate-900">100% Success Rate</p>
              <p className="text-[10px] text-slate-500">Board Examinations</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        >
         
          <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent"></div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Aditi Gandhi's Classes?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We combine traditional methods with modern pedagogical techniques to make Sanskrit accessible and enjoyable.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Expert Guidance",
                desc: "Learn from Aditi Gandhi, an experienced and passionate Sanskrit tutor dedicated to student success."
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Personalized Attention",
                desc: "Small batch sizes ensure every student gets the individual focus they need to excel."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Proven Results",
                desc: "Our students consistently achieve top scores in their school and board examinations."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group"
              >
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Teaching Philosophy</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Holistic Learning",
                    desc: "We connect Sanskrit to its rich cultural and historical context, going beyond textbook memorization."
                  },
                  {
                    title: "Interactive Sessions",
                    desc: "Engaging classes with active student participation, group discussions, and dedicated doubt-clearing."
                  },
                  {
                    title: "Exam-Oriented Strategy",
                    desc: "A structured curriculum focused on board patterns, with regular tests and performance analysis."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary h-fit">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=2070" 
                  alt="Sanskrit Culture" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">10+</p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Begin Your Sanskrit Journey?</h2>
          <p className="text-white/80 text-lg mb-12">Join our classes and discover the elegance of this timeless language. Limited seats available for the upcoming batch.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-xl hover:bg-slate-50 transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
