export default function Projects() {
 const projects = [
   {
     title: "Northern UNI Smart Campus",
     description:
       "A smart campus management platform designed to streamline university operations including visitor management, facility booking, student services, and campus administration.",
     tech: ["React", "Node.js", "Express.js", "MongoDB"],
     github: null,
     highlight: "Campus operations",
   },
   {
     title: "Smart Career Guidance System",
     description:
       "A MERN-based career guidance platform that helps students discover suitable degree programs and university pathways using academic performance analysis and eligibility prediction.",
     tech: ["React", "Node.js", "Express.js", "MongoDB"],
     github:
       "https://github.com/IT24102099/A-Web-Based-Career-Selection-and-Education-Guidance-System",
     highlight: "Student decision support",
   },
   {
     title: "Smart Campus Mobile App",
     description:
       "A cross-platform React Native application integrating campus services such as Lost & Found, visitor management, canteen services, authentication, and student operations.",
     tech: ["React Native", "Expo", "Node.js", "MongoDB", "JWT"],
     github: "https://github.com/mathuppriya-dev/Mobile",
     highlight: "Mobile experience",
   },
   {
     title: "Blood Donation Management System",
     description:
       "A full-stack web application connecting blood donors and recipients through donor registration, blood request tracking, and inventory management.",
     tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
     github: "https://github.com/mathuppriya-dev/Blood-Donation-System",
     highlight: "Community support",
   },
 ];

 return (
   <section id="projects" className="section">
     <div className="container px-6">
       <div className="mb-14 max-w-3xl">
         <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
           Featured work
         </p>
         <h2 className="font-[family:var(--font-playfair)] text-4xl font-bold md:text-5xl">
           Projects I&apos;m proud of
         </h2>
       </div>

       <div className="grid gap-8 lg:grid-cols-2">
         {projects.map((project) => (
           <article
             key={project.title}
             className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] shadow-[0_24px_55px_-42px_rgba(31,41,55,0.45)] backdrop-blur-xl"
           >
             <div className="border-b border-[var(--border)] bg-[linear-gradient(135deg,rgba(47,93,80,0.12),rgba(255,255,255,0.85))] p-8">
               <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                 {project.highlight}
               </p>
               <h3 className="mt-4 font-[family:var(--font-playfair)] text-3xl font-bold text-[var(--text-primary)]">
                 {project.title}
               </h3>
             </div>

             <div className="p-8">
               <p className="leading-8 text-[var(--text-secondary)]">
                 {project.description}
               </p>

               <div className="mt-8 flex flex-wrap gap-3">
                 {project.tech.map((tech) => (
                   <span
                     key={tech}
                     className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
                   >
                     {tech}
                   </span>
                 ))}
               </div>

               <div className="mt-8">
                 {project.github ? (
                   <a
                     href={project.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                   >
                     View code
                   </a>
                 ) : (
                   <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text-secondary)]">
                     Code available on request
                   </span>
                 )}
               </div>
             </div>
           </article>
         ))}
       </div>
     </div>
   </section>
 );
}