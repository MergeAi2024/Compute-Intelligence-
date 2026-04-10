import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, BrainCircuit, Lightbulb, Code2, Paintbrush } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const serviceCategories = [
    {
      id: "web-development",
      title: "1. Web Development",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      description: "Fast, secure, and interactive web experiences tailored to your needs.",
      services: [
        { name: "Static Sites", price: "R800", desc: "Ideal for portfolios, small businesses, or informational websites. Fast, secure, and cost-effective." },
        { name: "Dynamic Sites", price: "R1500", desc: "Perfect for blogs, e-commerce platforms, or interactive web applications." },
        { name: "Web Portals / Dashboards", price: "R1800", desc: "Custom-built platforms for managing data, users, and business operations." }
      ]
    },
    {
      id: "app-development",
      title: "2. App Development",
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      description: "Robust applications designed to streamline workflows and engage users.",
      services: [
        { name: "Web Apps", price: "From R2500", desc: "Custom web-based applications designed to streamline workflows and improve digital service delivery." },
        { name: "Mobile Apps", price: "From R4500", desc: "Native or cross-platform mobile applications for iOS and Android." },
        { name: "Desktop Apps", price: "From R7000", desc: "Robust applications for Windows, macOS, and Linux." }
      ]
    },
    {
      id: "ai-integration",
      title: "3. AI Integration & Automation",
      icon: <BrainCircuit className="w-8 h-8 text-red-500" />,
      description: "Intelligent systems that automate tasks and provide actionable insights.",
      services: [
        { name: "Chatbot Development", price: "From R1500", desc: "Intelligent chatbots for websites, apps, and business platforms to improve customer support." },
        { name: "AI Workflow Automation", price: "From R2500", desc: "Automation solutions that reduce manual work and improve efficiency." },
        { name: "AI Agent Integration", price: "From R3500", desc: "Advanced AI assistants that can support business operations and perform task-based workflows." },
        { name: "Document Intelligence", price: "From R2000", desc: "AI-powered tools that read, sort, and extract useful information from documents and forms." },
        { name: "Predictive Analytics", price: "From R3000", desc: "Data-driven solutions that help businesses identify trends and make better decisions." },
        { name: "Custom AI Solutions", price: "Custom Pricing", desc: "Including smart email response systems, AI assistant integration, and API integrations for AI tools." }
      ]
    },
    {
      id: "digital-consulting",
      title: "4. Digital Consulting",
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      description: "Expert guidance to navigate the digital landscape and adopt AI effectively.",
      services: [
        { name: "Technology Consulting", price: "From R1000", desc: "Guidance on choosing the right digital tools, platforms, and system architecture." },
        { name: "AI Strategy & Implementation", price: "From R2000", desc: "Planning and support for businesses that want to adopt AI in a practical, scalable way." },
        { name: "Software Planning & Prototyping", price: "From R1500", desc: "Early-stage product planning, wireframing, and prototype development." }
      ]
    },
    {
      id: "custom-software",
      title: "5. Custom Software Solutions",
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      description: "Tailor-made software for internal operations and seamless integrations.",
      services: [
        { name: "Business Systems", price: "Custom Pricing", desc: "Tailor-made software for internal operations, customer management, and service delivery." },
        { name: "API Integration", price: "From R1200", desc: "Connect your website, app, or system with third-party services, payment gateways, and CRMs." },
        { name: "Maintenance and Support", price: "From R500/month", desc: "Ongoing updates, bug fixes, content changes, and technical support." }
      ]
    },
    {
      id: "design-assets",
      title: "6. Design & Digital Assets",
      icon: <Paintbrush className="w-8 h-8 text-purple-500" />,
      description: "Clean, modern, and user-friendly designs for your digital presence.",
      services: [
        { name: "UI/UX Design", price: "From R1200", desc: "Clean, modern, and user-friendly interface design for websites, apps, and software platforms." },
        { name: "Branding Assets", price: "From R800", desc: "Logos, visual identity elements, and digital graphics for business or product branding." },
        { name: "Marketing Graphics", price: "From R500", desc: "Social media creatives, banners, promotional designs, and digital campaign assets." }
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50">
      {/* Header */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We build smart, reliable, and user-focused digital solutions for businesses, organizations, and individuals. Explore our comprehensive range of services below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceCategories.map((category, catIdx) => (
              <motion.div 
                key={category.id} 
                className="scroll-mt-24" 
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">{category.title}</h2>
                    <p className="text-slate-600 mt-1">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full"
                    >
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <h3 className="text-xl font-semibold text-slate-900 leading-tight">{service.name}</h3>
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 whitespace-nowrap">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                        {service.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Contact us today to discuss your requirements and get a detailed quote tailored to your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-medium text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5"
          >
            Let's Build Something Intelligent Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
