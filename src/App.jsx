import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ExternalLink, Github, Linkedin, Mail, Award, Briefcase, 
  GraduationCap, Cpu, Zap, TrendingUp, Users, BookOpen, Menu, X, ChevronDown
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax background effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden relative selection:bg-cyan-500 selection:text-white">
      
      {/* Animated Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/5 shadow-lg shadow-cyan-900/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter cursor-pointer z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">HK</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            {['About', 'Experience', 'Impact', 'Education'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
             <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              href="https://www.linkedin.com/in/glint-hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all flex items-center gap-2 text-sm hover:border-cyan-500/30 group"
            >
              <Linkedin size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span>Connect</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-0 left-0 w-full bg-slate-950 border-b border-white/5 overflow-hidden pt-24 pb-6 md:hidden shadow-2xl"
            >
              <div className="flex flex-col px-6 space-y-4">
                {['About', 'Experience', 'Impact', 'Education'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-300 hover:text-cyan-400 text-xl font-medium border-b border-white/5 pb-2"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8 z-10"
          >
            

            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-colors cursor-default backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              MBA @ IIM Lucknow | B.Tech(CSE) @ NIT Andhra Pradesh
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Product Strategy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
                Meets Innovation
              </span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="space-y-2">
                <h2 className="text-xl md:text-2xl text-slate-300 font-light">
                    Hello, I'm <span className="font-semibold text-white">Hrishikesh Kumar</span>!
                </h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-lg leading-relaxed border-l-2 border-slate-800 pl-6">
              Bridging the gap between <b>$1M engineering efficiencies</b> and strategic business outcomes. Ex-Senior Engineer @ Carrier (ELP).
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a href="#experience" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2 group transform hover:-translate-y-1">
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:hrishikeshkumar16@gmail.com" className="px-8 py-4 rounded-full bg-slate-800 text-slate-200 font-semibold hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600 transform hover:-translate-y-1">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:flex justify-center items-center perspective-1000"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Spinning Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-slate-700 opacity-20"
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-blob" />
              
              {/* Floating Cards */}
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <StatCard 
                  icon={<TrendingUp className="text-green-400" />} 
                  value="$1M+" 
                  label="Revenue Impact" 
                  delay={0.2} 
                  subtext="Carrier Security"
                />
                <StatCard 
                  icon={<Users className="text-blue-400" />} 
                  value="550+" 
                  label="Developers Scaled" 
                  delay={0.4} 
                  subtext="AI Implementation"
                />
                <StatCard 
                  icon={<Zap className="text-yellow-400" />} 
                  value="2k+" 
                  label="Hours Saved" 
                  delay={0.6} 
                  subtext="Automation"
                />
                <StatCard 
                  icon={<Award className="text-purple-400" />} 
                  value="6 Awards" 
                  label="in 34 Months" 
                  delay={0.8} 
                  subtext="with Fast-Track Promotion"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 cursor-pointer hover:text-cyan-400 transition-colors"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
          <ChevronDown />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden bg-slate-950">
        <div className="container mx-auto px-6">
          <SectionHeader title="The Narrative" subtitle="From Code to Strategy" />
          
          <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-lg text-slate-400 leading-relaxed"
            >
              <p>
                My journey began in the trenches of <span className="text-white font-semibold">Carrier R&D</span>, where I was selected for the highly competitive Engineering Leadership Program (ELP).
              </p>
              <p>
                I discovered that my superpower wasn't just writing code—it was understanding the <span className="text-cyan-400 font-semibold italic">"Why"</span> behind it. I have a track record of transforming complex technical requirements into high-value outcomes, from scaling AI tools to <span className="text-white font-semibold">550+ developers</span> to leading high-stakes migrations for <span className="text-purple-400 font-semibold">$3T clients</span>.
              </p>
              <p>
                Now at IIM Lucknow, I am fusing this technical rigor with business strategy to build products that don't just work, but <span className="text-white font-semibold">win</span>.
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm shadow-xl"
            >
               <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                 <Cpu className="text-cyan-400" size={20} /> Core Competencies
               </h4>
               <div className="space-y-6">
                 <SkillBar skill="Product Strategy & Roadmapping" level={100} color="bg-cyan-500" />
                 <SkillBar skill="AI & Digital Transformation" level={100} color="bg-purple-500" />
                 <SkillBar skill="Stakeholder Management" level={100} color="bg-pink-500" />
                 <SkillBar skill="Data Analytics & IoT" level={100} color="bg-blue-500" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900/30 relative">
        <div className="container mx-auto px-6">
          <SectionHeader title="Career Trajectory" subtitle="Engineering Impact & Leadership" />
          
          <div className="mt-20 space-y-12 relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-900/50 to-transparent -translate-x-1/2" />
            
            <TimelineItem 
              date="Apr 2025 - Jun 2025"
              role="Senior Engineer"
              company="Carrier (ELP)"
              tags={["Leadership", "Migration", "$3T Client"]}
              description="Promoted to Senior Engineer (Top 4% of cohort) in record time."
              achievements={[
                "Led strategic migration of security system for a $3T client, enabling 25% faster transition.",
                "Recognized for leadership in product delivery and digital transformation."
              ]}
              icon={<Award />}
              align="right"
              delay={0}
            />
            
            <TimelineItem 
              date="Aug 2024 - Apr 2025"
              role="Engineer - AI & Product"
              company="Carrier"
              tags={["AI", "Scaling", "Internal Tools"]}
              description="Focused on scaling internal tools and AI integration."
              achievements={[
                "Scaled intelligent AI assistant to 550+ developers, reducing query resolution time by 40%.",
                "Created UI for LLM Q&A tools, directly impacting engineering velocity."
              ]}
              icon={<Cpu />}
              align="left"
              delay={0.2}
            />

            <TimelineItem 
              date="Aug 2022 - Jul 2024"
              role="Management Trainee (ELP)"
              company="Carrier"
              tags={["$1M Revenue", "GoI Project", "IoT"]}
              description="Selected for the prestigious Engineering Leadership Program."
              achievements={[
                "$1M Revenue Impact: Revamped legacy product to replace obsolete infrastructure.",
                "Engineered cloud automation saving 2,000+ hours annually.",
                "Designed IoT dashboard for GoI ULIP cold chain plan (15% savings)."
              ]}
              icon={<Zap />}
              align="right"
              delay={0.4}
            />

            <TimelineItem 
              date="Dec 2021 - Jan 2022"
              role="Intern"
              company="NITI Aayog"
              tags={["Public Sector", "Strategy", "AIM"]}
              description="Public sector strategy and innovation."
              achievements={[
                "Contributed to Atal Innovation Mission (AIM) AIC portal enhancements.",
                "Collaborated with senior leadership on user experience strategy."
              ]}
              icon={<Briefcase />}
              align="left"
              delay={0.6}
            />

          </div>
        </div>
      </section>

      {/* Featured Project / Publication */}
      <section id="impact" className="py-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6">
          <SectionHeader title="Research & Innovation" subtitle="Beyond Corporate Work" />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Cassava Leaf Disease Detection"
              category="AI Research (Springer)"
              description="First author of a research paper published in Springer (PCCDS). Developed an AI ensemble model achieving 90.75% accuracy."
              stats={['600+ Access', '15 Citations']}
              link="https://link.springer.com/chapter/10.1007/978-981-19-8742-7_15"
              icon={<BookOpen size={20} />}
            />
            <ProjectCard 
              title="Toastmasters Revival"
              category="Leadership"
              description="As Chartering President, relaunched a 5-year dormant club. Achieved 100% member retention and 95%+ satisfaction scores."
              stats={['25+ New Members', 'Contest Winner' ]}
              icon={<Users size={20} />}
            />
             <ProjectCard 
              title="GoI ULIP Dashboard"
              category="Product Design"
              description="Designed an end-to-end IoT dashboard for the Government of India's ULIP cold chain plan, enabling operational savings."
              stats={['15% Savings', 'IoT Integration']}
              icon={<TrendingUp size={20} />}
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <SectionHeader title="Education" subtitle="Academic Foundation" />
          
          <div className="mt-12 flex flex-col lg:flex-row gap-8 justify-center items-stretch">
            <EducationCard 
              school="IIM Lucknow"
              degree="Master of Business Administration (MBA)"
              year="2025 - 2027"
              details="Team SynapsE Executive Member (IT & Analytics). Focus on Product Strategy & Marketing."
              color="border-cyan-500/50"
            />
             <EducationCard 
              school="NIT Andhra Pradesh"
              degree="B.Tech, Computer Science"
              year="2018 - 2022"
              details="80.8%. Entrepreneurship Cell Executive. Google Cloud Certified Architect."
              color="border-slate-700"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Let's Build Something Extraordinary.
            </h2>
            <p className="text-slate-400 max-w-md mx-auto">
              Open to Product Management and Strategy opportunities.
            </p>
          </motion.div>
          
          <div className="flex gap-6 mb-12">
            <SocialLink href="https://www.linkedin.com/in/glint-hk/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:hrishikeshkumar16@gmail.com" icon={<Mail size={20} />} label="Email" />
            <SocialLink href="https://github.com/glint-hk" icon={<Github size={20} />} label="Github" />
          </div>
          
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Hrishikesh Kumar.
          </p>
        </div>
      </footer>
    </div>
  );
};

/* --- SUB COMPONENTS --- */

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center space-y-3">
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-cyan-400 font-bold tracking-widest uppercase text-xs"
    >
      {subtitle}
    </motion.h2>
    <motion.h3 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-bold text-white tracking-tight"
    >
      {title}
    </motion.h3>
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4"
    />
  </div>
);

const StatCard = ({ icon, value, label, delay, subtext }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
    transition={{ delay, duration: 0.8, type: "spring" }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-xl hover:shadow-cyan-500/10 transition-all border-l-2 border-l-cyan-500"
  >
    <div className="mb-3 p-2 bg-white/5 rounded-lg inline-block">{icon}</div>
    <div className="text-3xl font-bold text-white tracking-tight">{value}</div>
    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">{label}</div>
    <div className="text-xs text-slate-500 mt-2 border-t border-white/5 pt-2">{subtext}</div>
  </motion.div>
);

const SkillBar = ({ skill, level, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-slate-300 font-medium">{skill}</span>
      <span className="text-slate-500 font-mono">{level}%</span>
    </div>
    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full ${color} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
      />
    </div>
  </div>
);

const TimelineItem = ({ date, role, company, description, achievements, icon, align, delay, tags }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`relative flex flex-col md:flex-row items-center justify-between mb-8 md:mb-0 group w-full ${align === 'left' ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Spacer for desktop layout to push content to one side */}
      <div className="hidden md:block w-5/12" />
      
      {/* Timeline Node - Centered */}
      <div className="absolute left-4 md:left-1/2 w-12 h-12 md:-ml-6 rounded-full border-4 border-slate-950 bg-slate-800 flex items-center justify-center text-cyan-400 z-10 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-lg shadow-black/50">
        {React.cloneElement(icon, { size: 20 })}
      </div>

      {/* Content Box */}
      <div className={`w-full pl-20 md:pl-0 md:w-5/12 ${align === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
        <div className="bg-slate-900 border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors relative overflow-hidden group/card">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
          
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2 block">{date}</span>
          <h4 className="text-2xl font-bold text-white mb-1">{role}</h4>
          <h5 className="text-slate-400 text-sm font-medium mb-4">{company}</h5>
          
          <div className={`flex flex-wrap gap-2 mb-4 ${align === 'left' ? 'md:justify-end' : ''}`}>
             {tags.map(tag => (
               <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">
                 {tag}
               </span>
             ))}
          </div>

          <p className="text-slate-400 text-sm mb-4 italic border-l-2 border-slate-700 pl-4 bg-white/5 py-2 rounded-r-md">
            {description}
          </p>
          <ul className={`space-y-3 text-sm text-slate-300 ${align === 'left' ? 'md:items-end' : 'items-start'} flex flex-col`}>
            {achievements.map((ach, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-cyan-500 mt-1 min-w-[6px]">•</span>
                <span className="leading-relaxed">{ach}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ title, category, description, stats, icon, link }) => (
  <motion.a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -10 }}
    className="bg-slate-900 border border-white/5 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group relative overflow-hidden flex flex-col h-full block cursor-pointer"
  >
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
    
    <div className="mb-6 flex justify-between items-start">
      <div className="p-3 bg-white/5 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <ExternalLink size={18} className="text-slate-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
    </div>

    <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{category}</div>
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{title}</h3>
    <p className="text-slate-400 mb-8 leading-relaxed text-sm flex-grow">{description}</p>
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {stats.map(stat => (
        <span key={stat} className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300 border border-white/5 font-medium">
          {stat}
        </span>
      ))}
    </div>
  </motion.a>
);

const EducationCard = ({ school, degree, year, details, color }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`bg-slate-900 p-8 rounded-2xl w-full max-w-lg border-l-4 ${color} shadow-lg relative overflow-hidden`}
  >
    <div className="absolute right-0 top-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    
    <div className="flex items-start gap-5 relative z-10">
      <div className="p-3 bg-white/5 rounded-xl text-white">
        <GraduationCap size={28} />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">{school}</h3>
        <p className="text-cyan-400 font-medium text-sm mt-1">{degree}</p>
        <div className="flex items-center gap-2 mt-2 mb-4">
           <span className="text-slate-500 text-xs px-2 py-1 bg-white/5 rounded">{year}</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{details}</p>
      </div>
    </div>
  </motion.div>
);

const SocialLink = ({ href, icon, label }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition-all shadow-lg"
    title={label}
  >
    {icon}
  </motion.a>
);

export default App;