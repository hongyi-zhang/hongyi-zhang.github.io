# Personal Website

This is a GitHub Pages native Jekyll site for a personal academic/project website.

## Edit Your Context

Most home page content lives in `_data/profile.yml`. The site has an EN/CN switch, so edit the English copy under `en:` and the Chinese copy under `cn:`:

```yaml
email: your.email@example.com

social:
  google_scholar: "https://scholar.google.com/citations?user=YOUR_ID"
  github: "https://github.com/YOUR_USERNAME"

en:
  name: Your Name
  headline: One-sentence description of your work.
  location: City, State or City, Country
  intro:
    - Short paragraph about who you are.
  updates:
    - date: 2026-05
      title: Recent milestone
      description: Short update text.
  projects:
    - title: Project title
      authors: [Your Name, Coauthor Name]
      description: One or two sentences about the project.
      image: /assets/images/project-title.jpg
      image_alt: Short description of the project figure.
      tags: [research, systems]
      venue: Conference or Journal 2026
      url: "https://example.com"
      links:
        - label: Paper
          url: "https://example.com/paper"
        - label: Code
          url: "https://github.com/YOUR_USERNAME/project"
  misc_links:
    - title: Link title
      description: Why this link belongs here.
      url: "https://example.com"

cn:
  name: 你的中文名
  headline: 一句话介绍你的研究或工作。
  location: 城市，国家或地区
  intro:
    - 一段中文简介。
  updates:
    - date: 2026-05
      title: 近期进展
      description: 简短动态。
  projects:
    - title: 项目标题
      authors: [你的名字, 合作者名字]
      description: 用一两句话介绍项目。
      image: /assets/images/project-title.jpg
      image_alt: 项目图片说明。
      tags: [研究, 系统]
      venue: 会议或期刊 2026
      url: "https://example.com"
      links:
        - label: 论文
          url: "https://example.com/paper"
        - label: 代码
          url: "https://github.com/YOUR_USERNAME/project"
  misc_links:
    - title: 链接标题
      description: 说明这个链接的用途。
      url: "https://example.com"
```

Project fields are optional. Use `image` when you want a figure to appear left of the project text. Use `authors` for a compact author list. Use `venue` for the publication venue shown below the tags. Use `links` for labeled hyperlinks such as `Paper`, `Code`, `Demo`, `Project`, or `Slides`. Author names and descriptions can include HTML links if you wrap the YAML string in quotes. Keep English and Chinese project arrays in the same order so the language switch can pair each entry.

YAML treats an unquoted colon followed by a space as syntax, so text like `Method: Results` must be quoted or written as a block:

```yaml
description: "Method: a short summary with a colon."
```

For longer text with links or HTML, prefer a folded block:

```yaml
description: >-
  Method: a short summary with a colon.
  This can include <a href="https://example.com">links</a> and other inline HTML.
```

For blog posts, add optional Chinese front matter fields:

```yaml
title_cn: "中文标题"
excerpt_cn: "一句中文摘要。"
```

## Site Structure

- `index.md`: Home page with self-introduction, social icons, updates, and project highlights.
- `misc.md`: Misc page with blog posts and curated links.
- `_posts/`: Blog posts for the Misc page. Name files `YYYY-MM-DD-title.md`.
- `_layouts/` and `_includes/`: Shared Jekyll HTML templates.
- `assets/css/style.scss`: Custom minimalist styling.
- `_config.yml`: Site title, URL, plugins, and Jekyll settings.

## Run Locally

Install Ruby 3.2 or newer and Bundler if needed, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`.

If your machine uses the macOS system Ruby and Bundler reports that Ruby `2.6.x` is too old, install a newer Ruby with a version manager such as `rbenv`, `asdf`, or `mise`, then rerun the commands above.

## Publish On GitHub Pages

1. Push this repository to `hongyi-zhang.github.io` on GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Set the source to deploy from the default branch, usually `main`, and the root folder.
4. After the first build, the site should be available at `https://hongyi-zhang.github.io`.
5. If you use a custom domain, update `url` in `_config.yml` to `https://yourdomain.com`.

## Connect A Squarespace Domain

In GitHub Pages:

1. Go to `Settings` -> `Pages`.
2. Add your custom domain, for example `yourdomain.com` or `www.yourdomain.com`.
3. GitHub will create or ask for a `CNAME` file. If you add it manually, create a file named `CNAME` at the repository root containing only your domain:

```text
yourdomain.com
```

In Squarespace DNS settings:

1. For an apex domain like `yourdomain.com`, add GitHub Pages A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. For `www.yourdomain.com`, add a CNAME record pointing `www` to `hongyi-zhang.github.io`.
3. Remove conflicting default records if Squarespace warns about duplicates.
4. Wait for DNS to propagate, then return to GitHub Pages and enable `Enforce HTTPS`.

If you want `www.yourdomain.com` to redirect to `yourdomain.com`, or the reverse, set the preferred domain in GitHub Pages and keep both DNS records configured.
