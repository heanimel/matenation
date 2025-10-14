import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function OurWorks() {
  const videos = [
    { 
      id: "U4UEiR0mcvI",
      title: "Latest Music Video"
    },
    { 
      id: "hzkbtHorOMw",
      title: "Recent Release"
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Play className="w-8 h-8 text-pink-400" />
            <h2 className="text-4xl md:text-5xl font-light text-white">Our Works</h2>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Check out our latest music videos and releases
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-500/20 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-400/20 shadow-xl hover:shadow-2xl transition-all hover:border-pink-400/30">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium text-center">{video.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://www.youtube.com/@mateexclusives"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium transition-all shadow-2xl hover:shadow-pink-500/50"
          >
            View All on YouTube
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
