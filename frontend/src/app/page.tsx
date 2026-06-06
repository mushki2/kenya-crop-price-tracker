'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Smartphone, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 -z-10" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
              The Future of Agribusiness
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 mt-6 mb-8">
              Maximize Your <span className="text-emerald-600">Harvest Profit</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Kenya's premier crop price tracking platform. Real-time data, trend analysis, and smart insights for every farmer.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/dashboard" 
                className="bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full shadow-xl hover:bg-emerald-700 transition flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: 'Real-Time Data', desc: 'Instant access to market prices across all major Kenyan counties.', icon: <Zap className="text-emerald-600" /> },
            { title: 'Market Trends', desc: 'Track trends and decide when to sell for maximum profit.', icon: <BarChart3 className="text-emerald-600" /> },
            { title: 'PWA Enabled', desc: 'Access your data seamlessly, even without internet.', icon: <Smartphone className="text-emerald-600" /> },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
