---
layout: page
title: 
permalink: blog/
---

<h1>Welcome!</h1>
Welcome to my blog! You're under no obligation to read anything I post here, nor do I really expect anyone to, but I'm using this space to chronicle some of the fun things I do here and there. Each section will have a few of my newest posts for each category, head on over to the <a href="{{ site.baseurl }}/archive">post archive</a> for the rest!

I'm currently working on transferring all of my old posts from my previous site, so if you're looking for something specific and it's not here, check back soon! I'm moving them over in no particular order :smile:

<h2>Latest Post</h2>
<div class="posts">
  {% for post in site.posts limit:1 %}
  <article class="post">
    <h3 class="post-title blog">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h3>
    <time datetime="{{ post.date | date: "%B %Y" }}" class="post-date">{{ post.date | date: "%B %-d, %Y" }}</time>
    {{ post.excerpt }}
  </article>
  {% endfor %}

<hr />

<h2>Travel</h2>
<p>I think traveling is one of the <i>most</i> relaxing things in life, here are some of my favorite places I've been...</p>

<div class="posts">
  {% for post in site.categories.travel limit:3 %}
  <article class="post">
    <h4 class="post-title blog">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h4>
    <time datetime="{{ post.date | date: "%B %Y" }}" class="post-date">{{ post.date | date: "%B %Y" }}</time>
    {{ post.excerpt }}
  </article>
  {% endfor %}
</div>
<div align="right"><a href="{{ site.baseurl }}/categories/travel">More travel posts →</a></div>

<hr />

<h2>Technology</h2>
I mean, I do work in IT, right? It'd be a shame if there weren't some posts from my forever wondering mind about technology!

<div class="posts">
  {% for post in site.categories.tech limit:3 %}
  <article class="post">
    <h4 class="post-title blog">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h4>
    <time datetime="{{ post.date | date: "%B %-d, %Y" }}" class="post-date">{{ post.date | date: "%B %-d, %Y" }}</time>
    {{ post.excerpt }}
  </article>
  {% endfor %}
</div>
<div align="right"><a href="{{ site.baseurl }}/categories/tech">More tech posts →</a></div>

<hr />

<h2>Personal Posts</h2>
<div class="posts">
  {% for post in site.categories.personal limit:3 %}
  <article class="post">
    <h4 class="post-title blog">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h4>
    <time datetime="{{ post.date | date: "%B %Y" }}" class="post-date">{{ post.date | date: "%B %-d, %Y" }}</time>
    {{ post.excerpt }}
  </article>
  {% endfor %}
</div>
<div align="right"><a href="{{ site.baseurl }}/categories/personal">More personal posts →</a></div>

<hr />

  <div id="blog-author-wrapper">
    <div class="blog-author col1">
      {% include person-image.html person='Max Saber' %}
      {% include person.html person='Max Saber' %}
    </div>
    <div class="blog-author col2">
      Max Saber is a healthcare information systems engineer at MCPHS University with a passion for new and developing healthcare technology. Posts made on this blog are his own personal opinions, and do not reflect the opinions of MCPHS University, or any other organization he is affiliated with.
    </div>
  </div>

<hr />
