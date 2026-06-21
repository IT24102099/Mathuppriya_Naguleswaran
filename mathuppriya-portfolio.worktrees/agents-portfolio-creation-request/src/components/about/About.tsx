const highlights = [
 {
   title: "What I do",
   text: "I design and build full stack web apps, from responsive interfaces to backend APIs and deployment.",
 },
 {
   title: "Current focus",
   text: "I am sharpening React, Node.js, database design, and production-ready UI patterns.",
 },
 {
   title: "Working style",
   text: "I like simple layouts, reliable interactions, and code that stays easy to maintain.",
 },
];

export default function About() {
 return (
   <section id="about" className="px-4 py-20 md:px-6">
     <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_0.9fr]">
       <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-8 shadow-[var(--shadow)] backdrop-blur-xl md:p-10">
         <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
           About me
         </p>
         <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold md:text-5xl">
           Building thoughtful web experiences.
         </h2>
         <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
           I&apos;m Mathuppriya, a software engineering undergraduate with a
           full stack mindset. I enjoy turning ideas into working web
           applications with clear structure, polished UI, and functionality
           that feels dependable on every screen.
         </p>

         <div className="mt-8 grid gap-4 md:grid-cols-3">
           <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4">
             <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
               Location
             </p>
             <p className="mt-2 font-medium">Sri Lanka</p>
           </div>
           <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4">
             <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
               Education
             </p>
             <p className="mt-2 font-medium">Software Engineering</p>
           </div>
           <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4">
             <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
               Email
             </p>
             <p className="mt-2 font-medium">mathuppriyan@gmail.com</p>
           </div>
         </div>
       </div>

       <div className="grid gap-4">
         {highlights.map((item) => (
           <div
             key={item.title}
             className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-6 shadow-[var(--shadow)] backdrop-blur-xl"
           >
             <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
               {item.title}
             </p>
             <p className="mt-3 leading-7 text-[color:var(--muted)]">
               {item.text}
             </p>
           </div>
         ))}
       </div>
     </div>
   </section>
 );
}