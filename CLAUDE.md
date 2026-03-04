# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Serve locally with live reload (port 5001)
bundle exec jekyll serve --livereload
# or
npm start

# Build static site to _site/
bundle exec jekyll build

# Install Ruby dependencies
bundle install
```

The port is explicitly set to `5001` in `_config.yml` to avoid conflicts with macOS AirPlay Receiver (which claims 5000). Do not change this without good reason.

The `jekyll-admin` plugin adds a CMS UI at `http://localhost:5001/admin` when serving locally.

## Architecture

This is a [Jekyll](https://jekyllrb.com) personal/academic website deployed to **Cloudflare Pages** (configured via `wrangler.toml`, output dir `_site`).

### Content Types

| Type | Location | Notes |
|------|----------|-------|
| Static pages | Root `.md` files (`index.md`, `bio.md`, `cv.md`, etc.) | |
| Blog posts | `_posts/blog/` | Permalink: `/blog/:categories/:year/:slug` |
| Papers | `_posts/papers/` | Same permalink scheme |
| Projects | `_posts/projects/` | Same permalink scheme |
| Courses | `_courses/` | Jekyll collection, permalink: `/courses/:slug`, layout: `course` |

### CV Data System

The CV (`cv.md` with `layout: cv`) is entirely **data-driven**. Each section reads from a corresponding YAML file in `_data/` and renders through a dedicated include in `_includes/cv/`:

- `_data/experiences.yaml` → `_includes/cv/experience.html` (type field: `industry`, `academic`, `research`)
- `_data/education.yaml` → `_includes/cv/degree.html`
- `_data/publications.yaml` → `_includes/cv/publication.html`
- `_data/talks.yaml`, `_data/teaching.yaml`, `_data/awards.yaml`, etc. follow the same pattern

To add or update a CV entry, edit the appropriate YAML file in `_data/`. The `experiences.yaml` entries use a `type` field to filter into different CV sections (`industry`, `academic`, `research`).

`_data/social-links.yaml` powers the icon links on the CV, grouped via `cv-group: 1|2|3`.

### Layout Hierarchy

- `_layouts/default.html` — base layout (header + main + footer)
- Most page layouts extend `default` via front matter `layout: default`
- `_layouts/cv.html` — standalone CV layout (no site header, just main content + footer buttons)
- `_layouts/post.html` — blog posts (extends `default`)
- `_layouts/course.html` — course pages (extends `default`)

Pages can inject JavaScript via the `jsarr` front matter array (filenames relative to `_includes/js/`).

### Styles

SCSS entry point is `styles.scss`, which imports partials from `_sass/`. Each partial maps to a specific feature (e.g., `_cv.scss`, `_dissertation.scss`, `_print.scss`). Jekyll compiles SCSS with `style: compressed`.

### Custom Plugins

- `_plugins/capitalizewords.rb` — adds a `capitalizewords` Liquid filter
- `_plugins/categories.rb` — generates category index pages

### Do Not Modify

- **Pedagogical Development section** — `_includes/cv/development.html` and its corresponding `cv.md` loop (`dev=dev`) are intentionally left as-is. Do not refactor or fix this section.

### Third-Party Integrations

- **Google Analytics** — tag configured in `_config.yml` (`google_analytics: G-JB5BFVF5QL`)
- **jekyll-admin** — local CMS at `/admin`
- **AnchorJS** — auto-generates `#` anchor links on `h2` headings in the CV layout
