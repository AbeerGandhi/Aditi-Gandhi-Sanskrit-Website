import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">About Aditi Gandhi</h1>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974" 
                alt="Aditi Gandhi" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm opacity-80 uppercase tracking-widest">Years of Teaching</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Passion for Sanskrit</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              {[
                "Aditi Gandhi is a highly respected Sanskrit educator based in Nagpur, with over a decade of experience in teaching students across various age groups and academic boards.",
                "Her journey with Sanskrit began in her childhood, fueled by a deep appreciation for the language's mathematical precision and spiritual depth. She believes that Sanskrit is not just a language of the past, but a vital tool for cognitive development and cultural understanding in the modern world.",
                "Aditi's teaching methodology focuses on simplifying complex grammatical concepts, making them easy to grasp for students who might otherwise find the language daunting. Her classes are known for their warm, encouraging atmosphere where every student feels empowered to ask questions and explore.",
                "Beyond academic success, Aditi aims to instill a lifelong love for Sanskrit in her students, connecting them to the vast treasury of Indian literature, philosophy, and science."
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Mission</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto italic font-serif leading-relaxed">
            "To preserve and promote the beauty of Sanskrit by providing high-quality, personalized education that empowers students to achieve academic excellence and connect with their cultural heritage."
          </p>
        </div>
      </div>
    </div>
  );
}
