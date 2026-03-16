import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                संस्कृतम्
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering students with the timeless wisdom of Sanskrit. Personalized coaching for academic excellence and cultural enrichment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="https://www.youtube.com/channel/UC65Wz2fN3lGvTmQmENS1plg" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Our Courses</Link></li>
              <li><Link to="/results" className="hover:text-primary transition-colors">Past Results</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Courses</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/courses" className="hover:text-primary transition-colors">Class V - VIII Foundation</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Class IX Board Prep</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Class X Board Excellence</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Grammar Specialization</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Nagpur, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@aditigandhi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} Aditi Gandhi's Sanskrit Tuition Classes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
