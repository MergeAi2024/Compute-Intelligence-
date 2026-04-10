import { motion } from 'motion/react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/blog';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Article Header */}
      <section className="pt-20 pb-12 lg:pt-32 lg:pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Link>
            
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

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 text-base font-medium text-slate-900">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div>{post.author}</div>
                <div className="text-sm text-slate-500 font-normal">Compute Intelligence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-500"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-slate-900 text-white text-center mt-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Want to discuss these ideas?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Let's talk about how we can apply these concepts to your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-medium text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
