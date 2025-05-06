import React, { useState } from "react";

const links = [
  { emoji: "🔗", label: "LinkedIn", url: "https://www.linkedin.com/in/eugene-mcgrath-550b4897" },
  { emoji: "💻", label: "GitHub", url: "https://github.com/cplklegg" },
  { emoji: "🌐", label: "New World Cryptos", url: "https://NewWorldCryptos.mn.co" },
  { emoji: "🎯", label: "Patreon", url: "https://www.patreon.com/NewWorldCryptos" },
  { emoji: "🐦", label: "X/Twitter", url: "https://www.x.com/CryptoMachineG" },
];

const projects = [
  {
    title: "WeeklyWEB3Walkthru",
    description: "Weekly newsletter sharing insights, charts, and key Web3 trends.",
    url: "https://www.linkedin.com/newsletters/weeklyweb3walkthru",
  },
  {
    title: "Crypto Project Analysis",
    description: "Fundamental reviews of blockchain projects with token utility evaluations.",
    url: "#", // Replace with real link
  },
  {
    title: "Smart Contract DApp Demos",
    description: "Solidity smart contracts and frontends hosted on GitHub.",
    url: "https://github.com/cplklegg",
  },
];

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}>
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl w-full py-16 text-center font-sans">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-2">Eugene McGrath</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Blockchain Developer • Crypto Educator • Co-Founder @ New World Cryptos
          </p>

          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="mt-6 mb-12 px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded-full hover:shadow"
          >
            Toggle {dark ? "Light" : "Dark"} Mode
          </button>

          {/* Bio */}
          <section className="mb-10 px-4 text-left max-w-prose mx-auto">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p>
              U.S. Army Veteran and dedicated blockchain professional with a passion for decentralization,
              digital privacy, and financial sovereignty. I write, build, and educate through the lens of
              cryptographic empowerment and Web3 freedom.
            </p>
          </section>

          {/* Links */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Connect</h2>
            <ul className="space-y-3">
              {links.map(({ emoji, label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_self"
                    
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {emoji} {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Resume */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-3">Resume</h2>
            <a
              href="/resume.pdf" // Place your resume PDF in the public folder
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </section>

          {/* Projects */}
          <section className="mb-16 text-left px-4">
            <h2 className="text-xl font-semibold mb-4 text-center">Featured Projects</h2>
            <ul className="space-y-6">
              {projects.map(({ title, description, url }) => (
                <li key={title} className="border-l-4 border-blue-500 pl-4">
                  <a href={url} target="_self">
                    <h3 className="text-lg font-bold text-blue-600 hover:underline">{title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-400">{description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Footer */}
          <footer className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Eugene McGrath — New World Cryptos™
          </footer>
        </div>
      </main>
    </div>
  );
}
