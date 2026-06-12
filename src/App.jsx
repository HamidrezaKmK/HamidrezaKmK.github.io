import { useEffect, useMemo, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Home,
  Mail,
  MapPin,
  Menu,
  Moon,
  Newspaper,
  PenTool,
  Sun,
  X,
} from 'lucide-react';
import './App.css';
import './globals.css';
import siteProfile from './content/siteProfile.js';
import homeContent from './content/home.js';
import about from './content/about.js';
import news from './content/news.js';
import publications from './content/publications.js';
import blogPosts from './content/blogPosts.js';
import projects from './content/projects.js';
import videos from './content/videos.js';
import AdminApp from './AdminApp.jsx';
import { renderMarkdown } from './utils/markdown.js';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: PenTool },
  { id: 'projects', label: 'Projects', icon: BriefcaseBusiness },
  { id: 'blog', label: 'Blog', icon: Newspaper },
  { id: 'publications', label: 'Publications', icon: BookOpen },
];

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};

const openInSameTab = (href) => {
  if (!href) return;
  window.location.href = href;
};

const MarkdownBlock = ({ markdown, className = '' }) => (
  <div className={`html-content ${className}`} dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }} />
);

const SectionHeader = ({ eyebrow, title, children }) => (
  <div className="section-header">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h1>{title}</h1>
    {children && <p className="section-deck">{children}</p>}
  </div>
);

const ProfilePanel = () => (
  <aside className="profile-panel">
    <div className="profile-identity">
      <div className="profile-photo-wrap">
        <img src={siteProfile.photo} alt={siteProfile.name} className="profile-photo" />
      </div>
      <h2>{siteProfile.name}</h2>
      <p className="profile-title">{siteProfile.title}</p>
      <p className="profile-affiliation">{siteProfile.affiliation}</p>
    </div>
    <div className="profile-meta">
      <span><MapPin size={15} />{siteProfile.location}</span>
      <a href={`mailto:${siteProfile.email}`}><Mail size={15} />{siteProfile.email}</a>
    </div>
    <div className="tag-cloud">
      {siteProfile.highlights.map((item) => <span key={item}>{item}</span>)}
    </div>
    <div className="profile-actions">
      <a className="button primary" href={siteProfile.cv}>CV <FileText size={16} /></a>
      <a className="button" href="https://github.com/HamidrezaKmK">GitHub <Github size={16} /></a>
    </div>
    <div className="profile-links">
      {siteProfile.links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label}<ExternalLink size={14} />
        </a>
      ))}
    </div>
  </aside>
);

const DateBadge = ({ value }) => {
  const [month, ...rest] = value.split(' ');
  const year = rest.join(' ');

  return (
    <time className="date-badge" dateTime={value}>
      <span className="date-month">{month}</span>
      {year && <span className="date-year">{year}</span>}
    </time>
  );
};

const PaginationControls = ({ page, totalPages, onPageChange, itemLabel }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pager" aria-label={`${itemLabel} pagination`}>
      <button onClick={() => onPageChange(0)} disabled={page === 0}>Most recent</button>
      <button onClick={() => onPageChange(Math.max(0, page - 1))} disabled={page === 0}>
        <ChevronLeft size={15} /> Previous
      </button>
      <span>Page {page + 1} of {totalPages}</span>
      <button onClick={() => onPageChange(Math.min(totalPages - 1, page + 1))} disabled={page === totalPages - 1}>
        Next <ChevronRight size={15} />
      </button>
      <button onClick={() => onPageChange(totalPages - 1)} disabled={page === totalPages - 1}>Oldest</button>
    </div>
  );
};

const usePagination = (items, pageSize) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(page, totalPages - 1);
  const start = safePage * pageSize;

  return {
    page: safePage,
    totalPages,
    setPage,
    visibleItems: items.slice(start, start + pageSize),
  };
};

const NewsList = ({ limit, paginated = false, pageSize = 4 }) => {
  const sourceItems = limit ? news.slice(0, limit) : news;
  const pagination = usePagination(sourceItems, pageSize);
  const items = paginated ? pagination.visibleItems : sourceItems;

  return (
    <>
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-item" key={`${item.date}-${(item.markdown || item.html || '').slice(0, 16)}`}>
            <DateBadge value={item.date} />
            <MarkdownBlock markdown={item.markdown || item.html} />
          </article>
        ))}
      </div>
      {paginated && (
        <PaginationControls
          page={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={pagination.setPage}
          itemLabel="News"
        />
      )}
    </>
  );
};

const VideoStrip = ({ paginated = false, pageSize = 2 }) => {
  const pagination = usePagination(videos, pageSize);
  const items = paginated ? pagination.visibleItems : videos;

  return (
    <>
      <div className="video-grid">
        {items.map((video) => (
          <article className="video-card" key={video.embedUrl}>
            <div className="video-frame">
              <iframe title={video.title} src={video.embedUrl} allowFullScreen />
            </div>
            <h3>{video.title}</h3>
            <p>{video.caption}</p>
          </article>
        ))}
      </div>
      {paginated && (
        <PaginationControls
          page={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={pagination.setPage}
          itemLabel="Videos"
        />
      )}
    </>
  );
};

const HomePage = ({ setPage }) => (
  <div className="page-stack">
    <section className="hero-panel">
      <div>
        <p className="eyebrow">{homeContent.eyebrow}</p>
        <h1>{homeContent.title}</h1>
        <MarkdownBlock markdown={about.markdown || about.html} className="hero-about" />
      </div>
      <div className="hero-actions">
        <button className="button primary" onClick={() => setPage('publications')}>Read publications</button>
        <button className="button" onClick={() => setPage('projects')}>See projects</button>
      </div>
    </section>
    <section className="content-band">
      <SectionHeader eyebrow="Recent" title="News" />
      <NewsList paginated pageSize={4} />
    </section>
    <section className="content-band">
      <SectionHeader eyebrow="Talks" title="Videos" />
      <VideoStrip paginated pageSize={2} />
    </section>
  </div>
);

const AboutPage = () => (
  <section className="content-band readable">
    <SectionHeader title="About Me" />
    <MarkdownBlock markdown={about.markdown || about.html} />
    <SectionHeader eyebrow="Updates" title="News" />
    <NewsList paginated pageSize={6} />
  </section>
);

const BlogPage = () => (
  <section className="content-band">
    <SectionHeader title="Blog">
      Notes, project, and thoughts I want to put out there!
    </SectionHeader>
    <div className="long-card-list">
      {blogPosts.map((post) => (
        <article className="media-card" key={post.title} onClick={() => openInSameTab(post.href)} tabIndex={0}>
          <img src={post.image} alt="" />
          <div>
            <div className="card-topline">
              <span>{post.date}</span>
              <ExternalLink size={15} />
            </div>
            <h2>{post.title}</h2>
            <MarkdownBlock markdown={post.tldr} />
            <div className="tag-cloud compact">
              {(post.tags || []).map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const ProjectsPage = () => (
  <section className="content-band">
    <SectionHeader eyebrow="Code" title="Projects">
      Fun projects that are outside the scope of my work and I'm excited to share!
    </SectionHeader>
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.title} onClick={() => openInSameTab(project.href)} tabIndex={0}>
          <img src={project.image} alt="" />
          <div className="project-card-body">
            <div className="card-topline">
              <span>{project.status}</span>
              <ExternalLink size={15} />
            </div>
            <h2>{project.title}</h2>
            <MarkdownBlock markdown={project.description} />
            <div className="tag-cloud compact">
              {(project.tags || []).map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const PublicationsPage = () => (
  <section className="content-band">
    <SectionHeader eyebrow="Research" title="Publications">
      Selected papers and preprints.
    </SectionHeader>
    <div className="publication-list">
      {publications.map((paper) => (
        <article className={`publication-card ${paper.image ? 'with-image' : ''}`} key={paper.title}>
          {paper.image && <img src={paper.image} alt="" className="publication-thumb" />}
          <div>
            <a href={paper.href} target="_blank" rel="noreferrer"><h2>{paper.title}</h2></a>
            <p className="authors">{paper.authors}</p>
            <p className="venue"><GraduationCap size={15} />{paper.venue}</p>
            <MarkdownBlock markdown={paper.tldr} />
          </div>
        </article>
      ))}
    </div>
  </section>
);

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useTheme();
  const isAdmin = useMemo(() => new URLSearchParams(window.location.search).has('admin'), []);

  useEffect(() => {
    const iconHref = siteProfile.favicon || siteProfile.photo || '/hamid.png';
    let icon = document.querySelector('link[rel="icon"]');
    if (!icon) {
      icon = document.createElement('link');
      icon.rel = 'icon';
      document.head.appendChild(icon);
    }
    icon.href = iconHref;
  }, []);

  if (isAdmin) return <AdminApp theme={theme} setTheme={setTheme} />;

  const ActivePage = {
    home: HomePage,
    about: AboutPage,
    projects: ProjectsPage,
    blog: BlogPage,
    publications: PublicationsPage,
  }[page];

  const selectPage = (nextPage) => {
    setPage(nextPage);
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="site-nav">
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <a className="brand" href="." aria-label="Home">
          <span className="brand-mark" aria-hidden="true" />
          <strong>Personal Profile</strong>
        </a>
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button key={id} className={page === id ? 'active' : ''} onClick={() => selectPage(id)}>
              <Icon size={16} />{label}
            </button>
          ))}
        </nav>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </header>
      <main className="layout">
        <ProfilePanel />
        <div className="main-panel">
          <ActivePage setPage={selectPage} />
        </div>
      </main>
      <footer className="site-footer">
        <span>© 2026 {siteProfile.name}</span>
        <span>Made with 💜 + 🤖 by HamidrezaKmK</span>
        <a href={`mailto:${siteProfile.email}`}>{siteProfile.email}</a>
      </footer>
    </div>
  );
}

export default App;
