---
layout: page
title: Home
permalink: /
---

{% assign profile = site.data.profile %}
{% assign en = profile.en %}
{% assign cn = profile.cn %}

<section class="hero profile-hero">
  <figure class="profile-photo">
    <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Hongyi Zhang profile photo">
  </figure>

  <div class="profile-summary">
    {% if en.location or cn.location %}
      <p class="eyebrow">
        <span data-lang="en">{{ en.location }}</span>
        <span data-lang="cn" hidden>{{ cn.location }}</span>
      </p>
    {% endif %}
    <h1>
      <span data-lang="en">{{ en.name }}</span>
      <span data-lang="cn" hidden>{{ cn.name }}</span>
    </h1>
    <p class="lead">
      <span data-lang="en">{{ en.headline }}</span>
      <span data-lang="cn" hidden>{{ cn.headline }}</span>
    </p>

    <div class="profile-about">
      <h2>
        <span data-lang="en">{{ en.labels.about }}</span>
        <span data-lang="cn" hidden>{{ cn.labels.about }}</span>
      </h2>
      {% for paragraph in en.intro %}
        <p data-lang="en">{{ paragraph }}</p>
      {% endfor %}
      {% for paragraph in cn.intro %}
        <p data-lang="cn" hidden>{{ paragraph }}</p>
      {% endfor %}
    </div>

    <div class="social-row" aria-label="Social links">
      {% include social-link.html platform="google_scholar" label_en=en.labels.scholar label_cn=cn.labels.scholar url=profile.social.google_scholar %}
      {% include social-link.html platform="github" label_en=en.labels.github label_cn=cn.labels.github url=profile.social.github %}
    </div>
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <h2>
      <span data-lang="en">{{ en.labels.updates }}</span>
      <span data-lang="cn" hidden>{{ cn.labels.updates }}</span>
    </h2>
    <p>
      <span data-lang="en">{{ en.labels.updates_description }}</span>
      <span data-lang="cn" hidden>{{ cn.labels.updates_description }}</span>
    </p>
  </div>

  <div class="timeline">
    {% for update in en.updates %}
      {% assign index = forloop.index0 %}
      {% assign cn_update = cn.updates[index] %}
      <article class="timeline-item">
        <time>{{ update.date }}</time>
        <div>
          <h3>
            <span data-lang="en">{{ update.title }}</span>
            <span data-lang="cn" hidden>{{ cn_update.title }}</span>
          </h3>
          <p>
            <span data-lang="en">{{ update.description }}</span>
            <span data-lang="cn" hidden>{{ cn_update.description }}</span>
          </p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <h2>
      <span data-lang="en">{{ en.labels.projects }}</span>
      <span data-lang="cn" hidden>{{ cn.labels.projects }}</span>
    </h2>
    <p>
      <span data-lang="en">{{ en.labels.projects_description }}</span>
      <span data-lang="cn" hidden>{{ cn.labels.projects_description }}</span>
    </p>
  </div>

  <div class="project-grid">
    {% for project in en.projects %}
      {% assign index = forloop.index0 %}
      {% assign cn_project = cn.projects[index] %}
      <article class="card project-card">
        {% if project.image %}
          <figure class="project-figure">
            <img src="{{ project.image | relative_url }}" alt="{{ project.image_alt | default: project.title }}">
          </figure>
        {% endif %}

        <div class="project-header">
          <h3>
            {% if project.url %}
              <a href="{{ project.url }}" target="_blank" rel="noopener noreferrer">
                <span data-lang="en">{{ project.title }}</span>
                <span data-lang="cn" hidden>{{ cn_project.title }}</span>
              </a>
            {% else %}
              <span data-lang="en">{{ project.title }}</span>
              <span data-lang="cn" hidden>{{ cn_project.title }}</span>
            {% endif %}
          </h3>

          {% if project.authors or cn_project.authors %}
            <p class="project-authors">
              <span data-lang="en">{{ project.authors | join: ", " }}</span>
              <span data-lang="cn" hidden>{{ cn_project.authors | default: project.authors | join: ", " }}</span>
            </p>
          {% endif %}
        </div>

        {% if project.tags or project.venue or cn_project.venue %}
          <div class="project-meta">
            {% if project.tags %}
              <div class="tag-row">
                {% for tag in project.tags %}
                  {% assign tag_index = forloop.index0 %}
                  <span>
                    <span data-lang="en">{{ tag }}</span>
                    <span data-lang="cn" hidden>{{ cn_project.tags[tag_index] }}</span>
                  </span>
                {% endfor %}
              </div>
            {% endif %}

            {% if project.venue or cn_project.venue %}
              <p class="project-venue">
                <span data-lang="en">{{ project.venue }}</span>
                <span data-lang="cn" hidden>{{ cn_project.venue | default: project.venue }}</span>
              </p>
            {% endif %}
          </div>
        {% endif %}

        <div class="project-details">
          <p>
            <span data-lang="en">{{ project.description }}</span>
            <span data-lang="cn" hidden>{{ cn_project.description }}</span>
          </p>

          {% if project.links or project.url %}
            <div class="project-links" aria-label="Project links">
              {% if project.links %}
                {% for link in project.links %}
                  {% assign link_index = forloop.index0 %}
                  {% assign cn_link = cn_project.links[link_index] %}
                  <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
                    <span data-lang="en">{{ link.label }}</span>
                    <span data-lang="cn" hidden>{{ cn_link.label | default: link.label }}</span>
                  </a>
                {% endfor %}
              {% elsif project.url %}
                <a href="{{ project.url }}" target="_blank" rel="noopener noreferrer">
                  <span data-lang="en">Project</span>
                  <span data-lang="cn" hidden>项目</span>
                </a>
              {% endif %}
            </div>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>
