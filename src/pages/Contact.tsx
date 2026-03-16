import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">Contact Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: <MapPin size={20} />, title: "Our Location", content: "Nagpur, Maharashtra, India" },
                  { icon: <Phone size={20} />, title: "Phone Number", content: "+91 98765 43210" },
                  { icon: <Mail size={20} />, title: "Email Address", content: "info@aditigandhi.com" },
                  { 
                    icon: <Youtube size={20} />, 
                    title: "YouTube Channel", 
                    content: (
                      <a 
                        href="https://www.youtube.com/channel/UC65Wz2fN3lGvTmQmENS1plg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Visit Sanskrit Classes
                      </a>
                    )
                  },
                  { icon: <Clock size={20} />, title: "Working Hours", content: "Mon - Sat: 10:00 AM - 7:00 PM" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <div className="text-sm text-slate-600">{item.content}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about Class X Board Prep"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-xl flex items-center justify-center gap-3 active:scale-[0.98]">
                Send Message <Send size={20} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
