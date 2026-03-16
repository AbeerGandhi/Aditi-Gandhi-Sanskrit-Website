import { motion } from 'motion/react';
import { CheckCircle2, Clock, BookOpen, GraduationCap } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: "Class V - VIII Foundation",
      level: "Beginner",
      duration: "1 Academic Year",
      description: "Building a strong foundation in Sanskrit grammar, vocabulary, and basic conversational skills.",
      features: ["Basic Grammar", "Shloka Recitation", "Simple Sentence Construction", "Vocabulary Building"]
    },
    {
      title: "Class IX Board Prep",
      level: "Intermediate",
      duration: "1 Academic Year",
      description: "In-depth study of the school curriculum with a focus on advanced grammar and comprehension.",
      features: ["Advanced Sandhi & Samas", "Literature Analysis", "Translation Skills", "Regular Mock Tests"]
    },
    {
      title: "Class X Board Excellence",
      level: "Advanced",
      duration: "1 Academic Year",
      description: "Intensive coaching designed to help students achieve perfect scores in their board examinations.",
      features: ["Board Pattern Practice", "Previous Year Papers", "Time Management Skills", "Personalized Feedback"]
    },
    {
      title: "Grammar Specialization",
      level: "All Levels",
      duration: "3 Months",
      description: "A focused course for students who want to master the intricacies of Sanskrit grammar.",
      features: ["Deep Dive into Panini", "Complex Verb Forms", "Case Study Analysis", "Logical Rule Application"]
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">Our Courses</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Tailored programs designed to meet the specific needs of students at different stages of their Sanskrit journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <BookOpen size={24} />
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                  {course.level}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{course.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{course.description}</p>
              
              <div className="flex items-center gap-6 mb-8 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-primary" />
                  Certificate Included
                </div>
              </div>

              <div className="space-y-3">
                {course.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full mt-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-primary transition-colors active:scale-95">
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
