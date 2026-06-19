"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, Users, FolderDot, ArrowUpRight, Loader2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
  updated_at: string;
}

interface GithubProfile {
  public_repos: number;
  followers: number;
  public_gists: number;
}

export default function GitHubActivity() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(false);

        // Fetch profile
        const profileRes = await fetch("https://api.github.com/users/mathuppriya-dev");
        if (!profileRes.ok) throw new Error("Rate limit or not found");
        const profileData = await profileRes.json();
        
        // Fetch repos sorted by updated date
        const reposRes = await fetch(
          "https://api.github.com/users/mathuppriya-dev/repos?sort=updated&per_page=10"
        );
        if (!reposRes.ok) throw new Error("Rate limit or not found");
        const reposData: GithubRepo[] = await reposRes.json();

        // Filter out fork repositories and pick the top 4
        const sourceRepos = reposData
          .filter((repo) => !repo.name.startsWith("fork-")) // example filter
          .slice(0, 4);

        setProfile({
          public_repos: profileData.public_repos,
          followers: profileData.followers,
          public_gists: profileData.public_gists,
        });
        setRepos(sourceRepos);
      } catch (err) {
        console.error("Error fetching GitHub data, loading fallback stats: ", err);
        setError(true);
        // Fallback to high quality offline resume data
        setProfile({
          public_repos: 14,
          followers: 12,
          public_gists: 2,
        });
        setRepos([
          {
            name: "Mobile",
            description: "Smart Campus Mobile Application built using React Native (Expo) and Node.js.",
            html_url: "https://github.com/mathuppriya-dev/Mobile",
            stargazers_count: 2,
            language: "TypeScript",
            forks_count: 0,
            updated_at: new Date().toISOString()
          },
          {
            name: "Blood-Donation-System",
            description: "A MERN stack web application matching emergency blood donors with local recipients.",
            html_url: "https://github.com/mathuppriya-dev/Blood-Donation-System",
            stargazers_count: 1,
            language: "JavaScript",
            forks_count: 0,
            updated_at: new Date().toISOString()
          },
          {
            name: "A-Web-Based-Career-Selection-and-Education-Guidance-System",
            description: "A comprehensive university selection portal with a logical matching eligibility analyzer module.",
            html_url: "https://github.com/IT24102099/A-Web-Based-Career-Selection-and-Education-Guidance-System",
            stargazers_count: 3,
            language: "JavaScript",
            forks_count: 1,
            updated_at: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const languageColors: Record<string, string> = {
    JavaScript: "bg-amber-400",
    TypeScript: "bg-blue-400",
    Java: "bg-red-400",
    HTML: "bg-orange-500",
    CSS: "bg-teal-500",
  };

  return (
    <section className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3 block">Live Dashboard</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
            <GithubIcon className="w-8 h-8 text-purple-500" />
            <span>GitHub Activity & Statistics</span>
          </h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            <span className="text-sm font-mono text-gray-500">Querying api.github.com...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Stats Overview Sidebar (col-4) */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/50 glass flex items-center gap-4 hover:border-purple-500/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <FolderDot className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">{profile?.public_repos}</div>
                  <div className="text-xs text-gray-400 font-medium">Public Repositories</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/50 glass flex items-center gap-4 hover:border-purple-500/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">{profile?.followers}</div>
                  <div className="text-xs text-gray-400 font-medium">Profile Followers</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/50 glass flex items-center gap-4 hover:border-purple-500/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                  <GitBranch className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">{profile?.public_gists}</div>
                  <div className="text-xs text-gray-400 font-medium">Public Gists</div>
                </div>
              </div>
            </div>

            {/* Recent Repositories Grid (col-8) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2 text-xs font-mono text-gray-500">
                <span>Recent active repositories</span>
                {error && <span className="text-purple-400">Offline cached mode</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl border border-white/5 bg-slate-900/40 hover:border-purple-500/20 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between h-[180px] glass group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className="font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors text-sm break-all">
                          {repo.name}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                        {repo.description || "No description provided."}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] || "bg-gray-400"}`} />
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-gray-400">
                        <Star className="w-3.5 h-3.5 fill-current text-yellow-500/80" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
