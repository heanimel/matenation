import { motion } from "framer-motion";
import { ModernCard } from "./modern-card";
import { Zap, Globe, Users, Music, Video, ListMusic } from "lucide-react";

export function ModernAbout() {
  const features = [
    {
      icon: Music,
      title: "Mix & Mastering",
      description: "Professional mixing and mastering services for pristine sound quality"
    },
    {
      icon: Zap,
      title: "Distribution in 48 hrs",
      description: "Fast-track distribution to all major streaming platforms within 48 hours"
    },
    {
      icon: Users,
      title: "Promotion with 30+ Promoters",
      description: "Partnership with over 30 reputed promoters for maximum reach"
    }
  ];

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">About Mate Nation</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
            Our key features for artists
          </p>
          
          {/* Label info visible only on tablet and desktop */}
          <p className="hidden md:block text-gray-400 text-base max-w-4xl mx-auto leading-relaxed">
            Mate Nations is a forward-thinking record label dedicated to empowering artists across all genres. We provide comprehensive support from production to promotion, combining cutting-edge technology with industry expertise to help musicians reach their full potential. Our commitment to artistic freedom and transparent partnerships sets us apart in the music industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ModernCard key={index} delay={index * 0.1} gradient="bg-gradient-to-br from-pink-600/30 to-purple-800/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/30 rounded-2xl mb-4 border border-pink-400/30">
                  <feature.icon className="w-8 h-8 text-pink-300" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </section>
  );
}
