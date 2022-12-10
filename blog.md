---
layout: page
title: 
permalink: blog/
---

<h1>Welcome!</h1>
Welcome to my blog! You're under no obligation to read anything I post here, nor do I really expect anyone to, but I'm using this space to chronicle some of the fun things I do here and there. Each section will have my five newest posts for each category, head on over to the [Archive][archive]!

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

<h3>Travel</h3>
I think traveling is one of the <i>most</i> relaxing things in life, here are some of my favorite places I've been...

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

<hr />

<h3>Technology</h3>
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

<hr />

<h3>Personal Posts</h3>
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

<!--
<h1>Blog Archive</h1>
<div>
  {% for post in site.categories.blog %}
  <article class="post" style="margin-bottom:1.25em;">
    <h3 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h3>
    <time datetime="{{ post.date | date: "%B %-d, %Y" }}" class="post-date">
      {{ post.date | date: "%B %-d, %Y" }}
    </time>
  </article>
  {% endfor %}
</div>
-->

[archive]: {{ site.baseurl }}/archive
