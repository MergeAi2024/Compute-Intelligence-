import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cpu, Layout, Smartphone, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-50">
      {/* Hero Section - Modern Tech Company Style */}
      <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-slate-950 text-white">
        {/* Glowing background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-8 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Intelligent Digital Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
            >
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400">intelligent</span> future of your business.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Compute Intelligence focuses on computational intelligence, web development, app development, AI integration, and automation to solve real-world problems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-slate-900 transition-all hover:bg-slate-100 hover:scale-105"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/20 backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-slate-50 relative -mt-12 rounded-t-[3rem] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Core Capabilities
            </h2>
            <p className="text-lg text-slate-600">
              We build smart, reliable, and user-focused digital solutions combining design, development, automation, and AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Bento Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200 overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-8">
                  <Cpu className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">AI & Automation</h3>
                <p className="text-lg text-slate-600 max-w-md">
                  Intelligent chatbots, workflow automation, and predictive analytics that transform how your business operates. We deploy cutting-edge computational intelligence to solve complex problems.
                </p>
              </div>
            </motion.div>

            {/* Small Bento Box 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 text-white rounded-3xl p-8 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Layout className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-slate-400">
                  From fast static sites to complex dynamic portals and interactive dashboards.
                </p>
              </div>
            </motion.div>

            {/* Small Bento Box 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Software</h3>
              <p className="text-slate-600">
                Tailor-made business systems and seamless API integrations for your unique needs.
              </p>
            </motion.div>

            {/* Large Bento Box 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center gap-8 group"
            >
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">App Development</h3>
                <p className="text-slate-600">
                  Custom web, native mobile, and robust desktop applications built for performance and scale.
                </p>
              </div>
              <div className="w-full sm:w-1/3 aspect-square rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden relative">
                {/* Abstract UI representation */}
                <div className="absolute inset-4 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col p-3 gap-2">
                  <div className="w-full h-4 bg-slate-100 rounded-md"></div>
                  <div className="w-3/4 h-4 bg-slate-100 rounded-md"></div>
                  <div className="mt-auto w-full h-12 bg-blue-50 rounded-lg"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Animated List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-1"
            >
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Why Choose Compute Intelligence
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We combine creativity, technology, and intelligence to deliver solutions that are practical and results-driven. Whether you need a simple website, a powerful app, or an AI-powered business tool, we help bring your ideas to life.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn more about our vision
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <div className="order-2 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Zap className="h-6 w-6 text-orange-500" />, title: "Results-Driven", desc: "Practical solutions that deliver measurable business value." },
                { icon: <Shield className="h-6 w-6 text-blue-600" />, title: "Reliable", desc: "Robust architectures built for security, scale, and performance." },
                { icon: <Cpu className="h-6 w-6 text-purple-600" />, title: "Innovative", desc: "Leveraging the latest in AI and computational intelligence." },
                { icon: <Users className="h-6 w-6 text-red-500" />, title: "User-Focused", desc: "Clean, intuitive interfaces designed for real human needs." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Ready to build something intelligent?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 mb-10"
          >
            Let's discuss how computational intelligence can transform your business operations and digital presence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-medium text-slate-900 transition-all hover:bg-slate-100 hover:scale-105"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
