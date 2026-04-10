import { BrainCircuit, Lightbulb, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              About Compute Intelligence
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are a technology-driven company focused on applying Computational Intelligence (CI) to solve real-world problems, improve decision-making, and help organizations operate smarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are & Foundation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Who We Are</h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  Compute Intelligence is the trading name of <strong>Computational Intelligence Labs (Pty) Ltd</strong>, founded by Xolani Hlatshwayo.
                </p>
                <p>
                  We are a computational intelligence lab that researches, develops, and deploys intelligent digital solutions. We combine artificial intelligence, machine learning, and data-driven technologies to build systems that can learn, adapt, and deliver meaningful insights.
                </p>
                <p>
                  Our goal is to make advanced AI technologies practical, accessible, and valuable for businesses, institutions, and communities.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Vision & Mission</h3>
              
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Lightbulb size={20} />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">Our Vision</h4>
                </div>
                <p className="text-slate-600 pl-13">
                  To become a leading computational intelligence lab that empowers organizations and communities through intelligent technology.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <Target size={20} />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">Our Mission</h4>
                </div>
                <p className="text-slate-600 pl-13">
                  To design practical, innovative, and scalable computational intelligence solutions that improve efficiency, decision-making, and digital transformation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is CI */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Machine Learning and Predictive Analytics",
                  "Artificial Neural Networks",
                  "Natural Language Processing (NLP)",
                  "Intelligent Automation Systems",
                  "Data Analytics and Decision Support",
                  "AI-powered Chat and Agent Systems",
                  "Optimization and Smart Algorithms"
                ].map((tech, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50"
                  >
                    <BrainCircuit className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-6">What is Computational Intelligence?</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Computational Intelligence is a field of artificial intelligence that focuses on building systems that can learn from data, recognize patterns, and make intelligent decisions. 
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                These systems are designed to handle complex, uncertain, and dynamic environments where traditional programming alone is not enough. We work with a range of these technologies to build practical solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do & Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">What We Do</h2>
              <ul className="space-y-4">
                {[
                  "Design and develop AI-powered applications",
                  "Build intelligent automation tools for businesses",
                  "Create data-driven decision support systems",
                  "Develop AI agents and chat-based platforms",
                  "Conduct computational intelligence research and prototyping",
                  "Provide consulting on AI and digital transformation",
                  "Develop custom intelligent software solutions"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Our Approach</h2>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <p className="text-lg text-slate-700 mb-8 font-medium">
                  Compute Intelligence exists to bridge the gap between advanced artificial intelligence and everyday business needs — turning intelligent ideas into working solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Innovation-driven", desc: "Pushing boundaries with new tech." },
                    { title: "Practical solutions", desc: "Solving real-world problems." },
                    { title: "Scalable systems", desc: "Built to grow with your business." },
                    { title: "User-friendly", desc: "Accessible AI technologies." },
                    { title: "Continuous research", desc: "Always improving and learning." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-semibold text-slate-900">{item.title}</span>
                      <span className="text-sm text-slate-500">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
