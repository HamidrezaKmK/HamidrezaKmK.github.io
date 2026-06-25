import { useMemo, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowUp, Eye, EyeOff, Moon, Plus, Save, Sun, Trash2, Upload } from 'lucide-react';
import siteProfileData from './content/siteProfile.js';
import homeData from './content/home.js';
import aboutData from './content/about.js';
import newsData from './content/news.js';
import publicationsData from './content/publications.js';
import blogPostsData from './content/blogPosts.js';
import projectsData from './content/projects.js';
import videosData from './content/videos.js';
import { renderMarkdown } from './utils/markdown.js';

const apiBase = import.meta.env.VITE_ADMIN_API_URL || 'http://localhost:5174';

const contentConfig = {
  home: { title: 'Home Hero', kind: 'object' },
  siteProfile: { title: 'Profile', kind: 'object' },
  about: { title: 'About Me', kind: 'object' },
  news: { title: 'News', kind: 'array' },
  publications: { title: 'Publications', kind: 'array' },
  blogPosts: { title: 'Blog Posts', kind: 'array' },
  projects: { title: 'Projects', kind: 'array' },
  videos: { title: 'Videos', kind: 'array' },
};

const clone = (value) => JSON.parse(JSON.stringify(value));

const starterItems = {
  news: { date: 'Month Year', markdown: 'New update with **bold text** and [a link](https://example.com).' },
  publications: { title: 'Paper title', authors: 'Author list', venue: 'Venue', href: 'https://example.com', image: '', tldr: 'One-sentence summary.' },
  blogPosts: { title: 'Post title', tldr: 'Short description shown on the card.', image: '/media/example.png', href: 'https://example.com', date: '2026', tags: ['tag'] },
  projects: { title: 'Repository name', description: 'Why this repository matters.', githubUrl: 'https://github.com/HamidrezaKmK', websiteUrl: '', image: '/projects.png', tags: ['tag'], status: 'Maintained' },
  videos: { title: 'Video title', embedUrl: 'https://www.youtube.com/embed/video-id', caption: 'Short caption.' },
};

const initialContent = {
  home: homeData,
  siteProfile: siteProfileData,
  about: aboutData,
  news: newsData,
  publications: publicationsData,
  blogPosts: blogPostsData,
  projects: projectsData,
  videos: videosData,
};

const imageCapableCollections = new Set(['publications', 'blogPosts', 'projects']);

const Field = ({ label, value, onChange, multiline = false, help }) => {
  const [mode, setMode] = useState('edit');

  return (
    <label className="admin-field">
      <span>{label}</span>
      {multiline && (
        <span className="editor-toggle">
          <button type="button" className={mode === 'edit' ? 'active' : ''} onClick={() => setMode('edit')}>Edit</button>
          <button type="button" className={mode === 'preview' ? 'active' : ''} onClick={() => setMode('preview')}>Preview</button>
        </span>
      )}
      {multiline && mode === 'preview' ? (
        <div className="admin-preview" dangerouslySetInnerHTML={{ __html: renderMarkdown(value || '') }} />
      ) : multiline ? (
        <textarea value={value || ''} onChange={(event) => onChange(event.target.value)} rows={5} />
      ) : (
        <input value={value || ''} onChange={(event) => onChange(event.target.value)} />
      )}
      {help && <small>{help}</small>}
    </label>
  );
};

const ArrayListField = ({ label, value, onChange, placeholder = 'New item' }) => {
  const items = value || [];

  return (
    <div className="admin-list-field">
      <span>{label}</span>
      {items.map((item, index) => (
        <div className="admin-row" key={`${label}-${index}`}>
          <input
            value={item}
            placeholder={placeholder}
            onChange={(event) => {
              const next = [...items];
              next[index] = event.target.value;
              onChange(next);
            }}
          />
          <button
            className="icon-button danger"
            onClick={() => onChange(items.filter((_, itemIndex) => itemIndex !== index))}
            aria-label={`Remove ${label} item`}
          >
            <Trash2 size={15} />
          </button>
        </div>
      ))}
      <button className="button" onClick={() => onChange([...items, ''])}><Plus size={15} />Add {label}</button>
    </div>
  );
};

const FileUpload = ({ onUploaded, accept = 'image/png,image/jpeg,image/webp', label = 'Upload image' }) => {
  const [busy, setBusy] = useState(false);

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setBusy(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const response = await fetch(`${apiBase}/api/media`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: file.name, dataUrl: reader.result }),
        });
        if (!response.ok) throw new Error(await response.text());
        const payload = await response.json();
        onUploaded(payload.path);
      } catch (error) {
        alert(`Upload failed: ${error.message}`);
      } finally {
        setBusy(false);
        event.target.value = '';
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <label className="upload-button">
      <Upload size={15} />{busy ? 'Uploading...' : label}
      <input type="file" accept={accept} onChange={handleFile} />
    </label>
  );
};

function AdminApp({ theme, setTheme }) {
  const [active, setActive] = useState('siteProfile');
  const [content, setContent] = useState(() => clone(initialContent));
  const [status, setStatus] = useState('Ready');

  const activeValue = content[active];
  const isArray = Array.isArray(activeValue);
  const previewUrl = useMemo(() => `${window.location.origin}${window.location.pathname}`, []);

  const save = async (key = active) => {
    setStatus(`Saving ${contentConfig[key].title}...`);
    try {
      const response = await fetch(`${apiBase}/api/content/${key}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content[key]),
      });
      if (!response.ok) throw new Error(await response.text());
      setStatus(`Saved ${contentConfig[key].title}. Refresh public preview to see bundled imports update.`);
    } catch (error) {
      setStatus(`Save failed: ${error.message}`);
    }
  };

  const updateObjectField = (field, value) => {
    setContent((current) => ({ ...current, [active]: { ...current[active], [field]: value } }));
  };

  const updateArrayItem = (index, field, value) => {
    setContent((current) => ({
      ...current,
      [active]: current[active].map((item, itemIndex) => (itemIndex === index ? { ...item, [field]: value } : item)),
    }));
  };

  const addItem = () => {
    setContent((current) => ({ ...current, [active]: [clone(starterItems[active]), ...current[active]] }));
  };

  const removeItem = (index) => {
    setContent((current) => ({ ...current, [active]: current[active].filter((_, itemIndex) => itemIndex !== index) }));
  };

  const moveItem = (index, direction) => {
    const target = index + direction;
    setContent((current) => {
      const list = current[active];
      if (target < 0 || target >= list.length) return current;
      const next = [...list];
      [next[index], next[target]] = [next[target], next[index]];
      return { ...current, [active]: next };
    });
  };

  const toggleHidden = (index) => {
    setContent((current) => ({
      ...current,
      [active]: current[active].map((item, itemIndex) => (
        itemIndex === index ? { ...item, hidden: !item.hidden } : item
      )),
    }));
  };

  const updateProfileLink = (index, field, value) => {
    const links = [...activeValue.links];
    links[index] = { ...links[index], [field]: value };
    updateObjectField('links', links);
  };

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <a className="button" href={previewUrl}><ArrowLeft size={16} />Public site</a>
        <div>
          <p className="eyebrow">Local editor</p>
          <h1>Website Admin Mode</h1>
        </div>
        <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </header>
      <main className="admin-layout">
        <aside className="admin-tabs">
          {Object.entries(contentConfig).map(([key, config]) => (
            <button key={key} className={active === key ? 'active' : ''} onClick={() => setActive(key)}>
              {config.title}
            </button>
          ))}
        </aside>
        <section className="admin-editor">
          <div className="admin-editor-head">
            <div>
              <p className="eyebrow">Editing</p>
              <h2>{contentConfig[active].title}</h2>
            </div>
            <button className="button primary" onClick={() => save()}><Save size={16} />Save</button>
          </div>

          {active === 'home' && (
            <div className="admin-card">
              <Field label="Hero eyebrow" value={activeValue.eyebrow} onChange={(value) => updateObjectField('eyebrow', value)} />
              <Field label="Hero title" value={activeValue.title} onChange={(value) => updateObjectField('title', value)} multiline />
            </div>
          )}

          {active === 'siteProfile' && (
            <div className="admin-card">
              <Field label="Name" value={activeValue.name} onChange={(value) => updateObjectField('name', value)} />
              <Field label="Short nav name" value={activeValue.shortName} onChange={(value) => updateObjectField('shortName', value)} />
              <Field label="Title" value={activeValue.title} onChange={(value) => updateObjectField('title', value)} />
              <Field label="Affiliation" value={activeValue.affiliation} onChange={(value) => updateObjectField('affiliation', value)} />
              <Field label="Location" value={activeValue.location} onChange={(value) => updateObjectField('location', value)} />
              <Field label="Email" value={activeValue.email} onChange={(value) => updateObjectField('email', value)} />
              <Field label="Photo path" value={activeValue.photo} onChange={(value) => updateObjectField('photo', value)} />
              <FileUpload label="Upload image" onUploaded={(path) => updateObjectField('photo', path)} />
              <Field label="Browser tab icon path" value={activeValue.favicon || ''} onChange={(value) => updateObjectField('favicon', value)} />
              <FileUpload label="Upload browser tab icon" onUploaded={(path) => updateObjectField('favicon', path)} />
              <Field label="CV path" value={activeValue.cv} onChange={(value) => updateObjectField('cv', value)} />
              <FileUpload
                label="Upload PDF"
                accept=".pdf,application/pdf"
                onUploaded={(path) => updateObjectField('cv', path)}
              />
              <ArrayListField label="Highlights" value={activeValue.highlights} onChange={(value) => updateObjectField('highlights', value)} />
              <div className="admin-card-head">
                <h3>Links</h3>
                <button
                  className="button"
                  onClick={() => updateObjectField('links', [...activeValue.links, { label: 'New link', href: 'https://example.com' }])}
                >
                  <Plus size={15} />Add link
                </button>
              </div>
              {activeValue.links.map((link, index) => (
                <div className="admin-inline" key={`${link.label}-${index}`}>
                  <Field label="Label" value={link.label} onChange={(value) => updateProfileLink(index, 'label', value)} />
                  <Field label="URL" value={link.href} onChange={(value) => updateProfileLink(index, 'href', value)} />
                  <button
                    className="icon-button danger"
                    onClick={() => updateObjectField('links', activeValue.links.filter((_, linkIndex) => linkIndex !== index))}
                    aria-label={`Remove ${link.label}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {active === 'about' && (
            <div className="admin-card">
              <Field
                label="About Me Markdown"
                value={activeValue.markdown}
                onChange={(value) => updateObjectField('markdown', value)}
                multiline
                help="Use Markdown such as **bold text** and [links](https://example.com)."
              />
            </div>
          )}

          {isArray && (
            <div className="admin-list">
              <button className="button" onClick={addItem}><Plus size={16} />Add {contentConfig[active].title.slice(0, -1)}</button>
              {activeValue.map((item, index) => (
                <article className={`admin-card ${item.hidden ? 'is-hidden' : ''}`} key={index}>
                  <div className="admin-card-head">
                    <h3>
                      {item.title || item.date || `Item ${index + 1}`}
                      {item.hidden && <span className="hidden-tag">Hidden</span>}
                    </h3>
                    <div className="admin-card-actions">
                      <button className="icon-button" onClick={() => moveItem(index, -1)} disabled={index === 0} aria-label="Move up" title="Move up">
                        <ArrowUp size={16} />
                      </button>
                      <button className="icon-button" onClick={() => moveItem(index, 1)} disabled={index === activeValue.length - 1} aria-label="Move down" title="Move down">
                        <ArrowDown size={16} />
                      </button>
                      <button className="icon-button" onClick={() => toggleHidden(index)} aria-label={item.hidden ? 'Unhide item' : 'Hide item'} title={item.hidden ? 'Unhide' : 'Hide'}>
                        {item.hidden ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                      <button className="icon-button danger" onClick={() => removeItem(index)} aria-label="Delete item" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  {Object.entries(item).map(([field, value]) => {
                    if (field === 'hidden') return null;
                    if (imageCapableCollections.has(active) && field === 'image') return null;
                    if (Array.isArray(value)) {
                      return <ArrayListField key={field} label={field} value={value} onChange={(next) => updateArrayItem(index, field, next)} />;
                    }
                    const multiline = ['markdown', 'html', 'tldr', 'description', 'caption', 'authors', 'venue'].includes(field);
                    return <Field key={field} label={field} value={value} multiline={multiline} onChange={(next) => updateArrayItem(index, field, next)} />;
                  })}
                  {imageCapableCollections.has(active) && (
                    <div className="admin-media-field">
                      <Field label="Image path" value={item.image || ''} onChange={(next) => updateArrayItem(index, 'image', next)} />
                      <div className="admin-media-actions">
                        <FileUpload label="Upload card image" onUploaded={(path) => updateArrayItem(index, 'image', path)} />
                        <button
                          className="button danger"
                          onClick={() => updateArrayItem(index, 'image', '')}
                          disabled={!item.image}
                        >
                          <Trash2 size={15} />Remove image
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
          <p className="admin-status">{status}</p>
        </section>
      </main>
    </div>
  );
}

export default AdminApp;
