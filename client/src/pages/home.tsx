import { ModernHero } from "@/components/modern-hero";
import { ModernMenu } from "@/components/modern-menu";
import { ModernAbout } from "@/components/modern-about";
import { ModernPartners } from "@/components/modern-partners";
import { ModernAmbassadors } from "@/components/modern-ambassadors";
import { ModernTeam } from "@/components/modern-team";
import { MateSearch } from "@/components/mate-search";
import { OurWorks } from "@/components/our-works";
import { ModernContact } from "@/components/modern-contact";
import { ModernFooter } from "@/components/modern-footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { SlidingSections } from "@/components/sliding-sections";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-screen"
      >
        <ThemeToggle />
        <ModernMenu />

        <SlidingSections>
          <ModernHero />
          <div id="for-artists">
            <ModernAbout />
          </div>
          <ModernPartners />
          <ModernAmbassadors />
          <ModernTeam />
          <MateSearch />
          <OurWorks />
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              <ModernContact />
            </div>
            <ModernFooter />
          </div>
        </SlidingSections>
      </motion.div>
    </AnimatePresence>
  );
}
