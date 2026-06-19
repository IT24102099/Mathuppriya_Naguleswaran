"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950">
      {/* Background blurs */}
      <div className="absolute bottom-0 right-[20%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Contact Me</h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details Sidebar (col-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">Let&apos;s talk about projects</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 text-justify">
              I am available for internship discussions, technical questions, collaborative builds, or simply sharing a game of chess. Drop me a line!
            </p>

            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40 glass flex items-center gap-4 hover:border-purple-500/20 transition-all">
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono uppercase">Direct Email</div>
                  <a href="mailto:mathuppriyan@gmail.com" className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                    mathuppriyan@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40 glass flex items-center gap-4 hover:border-purple-500/20 transition-all">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono uppercase">Phone Call</div>
                  <a href="tel:+94779178371" className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                    +94 779 178 371
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40 glass flex items-center gap-4 hover:border-purple-500/20 transition-all">
                <div className="p-2.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono uppercase">Location</div>
                  <span className="text-sm font-semibold text-white">Jaffna / Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area (col-7) */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-slate-900/30 glass">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-name" className="text-xs font-mono text-gray-400 uppercase">Your Name</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      disabled={status !== "idle"}
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-white/5 focus:border-purple-500/50 focus:outline-none text-white text-sm transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-email" className="text-xs font-mono text-gray-400 uppercase">Email Address</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      disabled={status !== "idle"}
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-white/5 focus:border-purple-500/50 focus:outline-none text-white text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-subject" className="text-xs font-mono text-gray-400 uppercase">Subject</label>
                  <input
                    id="form-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Internship discussion / Project request"
                    disabled={status !== "idle"}
                    className="px-4 py-3 rounded-xl bg-slate-950 border border-white/5 focus:border-purple-500/50 focus:outline-none text-white text-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-message" className="text-xs font-mono text-gray-400 uppercase">Message</label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hi Mathuppriya, I'd love to chat about..."
                    disabled={status !== "idle"}
                    className="px-4 py-3 rounded-xl bg-slate-950 border border-white/5 focus:border-purple-500/50 focus:outline-none text-white text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="group relative flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all hover:scale-[1.01] active:scale-[0.99] disabled:bg-slate-800 disabled:text-gray-500 disabled:scale-100 cursor-pointer overflow-hidden shadow-lg shadow-purple-500/10"
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </motion.div>
                    )}

                    {status === "sending" && (
                      <motion.div
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span>Transmitting Data</span>
                        <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                      </motion.div>
                    )}

                    {status === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-emerald-400 font-bold"
                      >
                        <span>Message Sent Successfully!</span>
                        <CheckCircle className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
