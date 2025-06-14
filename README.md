# Build a Modern Portfolio Website with React & TailwindCSS

![banner](/banner.png)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)

## 📋 Table of Contents

1. Introduction
2. Tech Stack
3. Features
4. Code Snippets

## 🚀 Introduction

In this tutorial, you'll learn how to build a modern portfolio website using React, TailwindCSS, Vite, and Lucide Icons. From responsive animations to deployable project showcases, this video walks you through every step—perfect for developers looking to level up their frontend skills or apply for jobs.

🎥 Watch the full tutorial: [Youtube](https://www.youtube.com)

## ⚙️ Tech Stack

- React: Component-based UI library.
- Vite: Fast and lean development build tool.
- TailwindCSS: Utility-first CSS framework.
- JavaScript (ES6+): Modern JavaScript features and best practices.
- GitHub Pages – Deployment

## ⚡️ Features

- 🌑 Light/Dark Mode Toggle Save theme preference in local storage with beautiful transitions
- 💫 Animated Backgrounds Stars, meteors, scroll effects, and glowing UI elements
- 📱 Responsive Navigation Desktop and mobile menus with glassmorphism
- 👨‍💻 Hero & About Sections Showcase who you are with smooth intro animations and buttons
- 📊 Skills Grid Filterable progress bars and categories with animated width
- 🖼️ Projects Showcase Display screenshots, tech stacks, and GitHub/demo links
- 📩 Contact Section Social icons + responsive contact form with toast notifications
- 🚀 One-Click Deployment Easily host your site with Vercel and GitHub

## 📝 Code Snippets

<details>
  <summary><code>src/index.css</code></summary>
  
  ```
  @import "tailwindcss";
  
  html,
  body {
      margin: 0;
      padding: 0;
      font-family: "Space Grotesk", sans-serif;
      background: #0a0a0a;
      color: #f3f4f6;
  }
  
  @layer utilities {
      @keyframes blink {
          0%,
          100% {
              opacity: 1;
          }
          50% {
              opacity: 0;
          }
      }
  
      .animate-blink {
          animation: blink 0.8s step-end infinite;
      }
  
      @keyframes loading {
          0% {
              transform: translateX(-100%);
          }
          100% {
              transform: translateX(250%);
          }
      }
  
      .animate-loading-bar {
          animation: loading 0.8s ease infinite;
      }
  }
  
  .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.7s ease, transform 0.7s ease;
  }
  
  .reveal.visible {
      opacity: 1;
      transform: translateY(0);
  }
  ```
</details>

<details>
  <summary><code>src/components/RevealOnScroll.jsx</code></summary>
  
  ```
  import { useEffect, useRef } from "react";
  
  export const RevealOnScroll = ({ children }) => {
      const ref = useRef(null);
  
      useEffect(() => {
          const observer = new IntersectionObserver(
              ([entry]) => {
                  if (entry.isIntersecting) {
                      ref.current.classList.add("visible");
                  }
              },
              { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
          );
  
          if (ref.current) observer.observe(ref.current);
  
          return () => observer.disconnect();
      });
  
      return (
          <div ref={ref} className="reveal">
              {children}
          </div>
      );
  };
  ```
</details>
