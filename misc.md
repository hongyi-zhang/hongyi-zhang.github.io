---
layout: page
title: Misc
permalink: /misc/
---

{% assign profile = site.data.profile %}
{% assign en = profile.en %}
{% assign cn = profile.cn %}

<section class="page-hero">
  <p class="eyebrow">
    <span data-lang="en">{{ en.labels.misc_eyebrow }}</span>
    <span data-lang="cn" hidden>{{ cn.labels.misc_eyebrow }}</span>
  </p>
  <h1>
    <span data-lang="en">{{ en.labels.misc_title }}</span>
    <span data-lang="cn" hidden>{{ cn.labels.misc_title }}</span>
  </h1>
  <p class="lead">
    <span data-lang="en">{{ en.labels.misc_description }}</span>
    <span data-lang="cn" hidden>{{ cn.labels.misc_description }}</span>
  </p>
</section>

<section class="section">
  <div class="section-heading">
    <h2>
      <span data-lang="en">{{ en.labels.blog }}</span>
      <span data-lang="cn" hidden>{{ cn.labels.blog }}</span>
    </h2>
    <p>
      <span data-lang="en">{{ en.labels.blog_description }}</span>
      <span data-lang="cn" hidden>{{ cn.labels.blog_description }}</span>
    </p>
  </div>

  {% if site.posts.size > 0 %}
    <div class="post-list">
      {% for post in site.posts %}
        <article class="post-preview">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
          <h3>
            <a href="{{ post.url | relative_url }}">
              <span data-lang="en">{{ post.title }}</span>
              <span data-lang="cn" hidden>{{ post.title_cn | default: post.title }}</span>
            </a>
          </h3>
          {% if post.excerpt %}
            <p>
              <span data-lang="en">{{ post.excerpt | strip_html | truncatewords: 28 }}</span>
              <span data-lang="cn" hidden>{{ post.excerpt_cn | default: post.excerpt | strip_html | truncatewords: 28 }}</span>
            </p>
          {% endif %}
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p>
      <span data-lang="en">{{ en.labels.no_posts }}</span>
      <span data-lang="cn" hidden>{{ cn.labels.no_posts }}</span>
    </p>
  {% endif %}
</section>

<section class="section">
  <div class="section-heading">
    <h2>
      <span data-lang="en">{{ en.labels.links }}</span>
      <span data-lang="cn" hidden>{{ cn.labels.links }}</span>
    </h2>
    <p>
      <span data-lang="en">{{ en.labels.links_description }}</span>
      <span data-lang="cn" hidden>{{ cn.labels.links_description }}</span>
    </p>
  </div>

  <div class="link-list">
    {% for link in en.misc_links %}
      {% assign index = forloop.index0 %}
      {% assign cn_link = cn.misc_links[index] %}
      <a class="link-card" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
        <span>
          <strong>
            <span data-lang="en">{{ link.title }}</span>
            <span data-lang="cn" hidden>{{ cn_link.title }}</span>
          </strong>
          <small>
            <span data-lang="en">{{ link.description }}</span>
            <span data-lang="cn" hidden>{{ cn_link.description }}</span>
          </small>
        </span>
        <span aria-hidden="true">-&gt;</span>
      </a>
    {% endfor %}
  </div>
</section>
