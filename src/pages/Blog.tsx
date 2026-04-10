import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/blog';

export default function Blog() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-800 mb-6">
              Insights & Perspectives
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              The Compute Intelligence Blog
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Deep dives into artificial intelligence, machine learning, and the future of digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <Link to={`/blog/${post.id}`} className="block">
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                      <User className="w-4 h-4" />
                    </div>
                    {post.author}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
