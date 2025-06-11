# Personal Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring a clean design, command bar navigation, and multiple content sections.

## ✨ Features

- **Modern Design**: Clean and responsive UI with subtle animations and thoughtful interactions
- **Command Bar Navigation**: Press `⌘+K` to quickly navigate between different sections
- **Multiple Content Sections**:
  - Home/About page with professional summary
  - Projects showcase
  - Blog posts
  - Guestbook for visitors to leave comments
- **Performance Optimized**: Fast loading times with Next.js
- **Fully Responsive**: Looks great on all devices from mobile to desktop

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Comments System**: Giscus (GitHub Discussions-based)
- **Analytics**: Vercel Analytics
- **Command Palette**: kbar

## 📂 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable UI components
│   │   ├── about/          # About page components
│   │   ├── blog/           # Blog related components
│   │   ├── common/         # Shared components (Navbar, Footer, etc.)
│   │   └── projects/       # Project showcase components
│   ├── blog/               # Blog page
│   ├── guestbook/          # Guestbook page
│   ├── projects/           # Projects page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── data/                   # Data files for content
└── lib/                    # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/PriyanshuPz/pz.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔍 Navigation

- **Home**: `/` - Professional summary and introduction
- **Blog**: `/blog` - Technical articles and thoughts
- **Projects**: `/projects` - Showcase of personal and professional work
- **Guestbook**: `/guestbook` - Leave comments and feedback

## ⌨️ Keyboard Shortcuts

- `⌘+K` or `Ctrl+K`: Open command palette
- `B`: Navigate to blog
- `P`: Navigate to projects
- `G`: Navigate to guestbook
- `A`: Navigate to about/home

## 🔧 Customization

Content data is stored in separate files under the `data/` directory:

- `blogs.ts`: Blog post information
- `projects.ts`: Project details
- `skills.ts`: Technical skills
- `socialLinks.tsx`: Social media profiles
- `works.ts`: Work experience

## 📜 License

This project is open source and available under the MIT License.

## 👤 Author

**Priyanshu Verma**

- GitHub: [@PriyanshuPz](https://github.com/PriyanshuPz)
- Twitter: [@PriyanshuPz](https://twitter.com/PriyanshuPz)

---

Made with ❤️ by Priyanshu Verma
