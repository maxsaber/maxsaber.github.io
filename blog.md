---
layout: page
title: 
permalink: blog/
---

<h2>Welcome!</h2>
Welcome to my blog! You're under no obligation to read anything I post here, nor do I really expect anyone to, but I'm using this space to chronicle some of the fun things I do here and there. Each section will have my five newest posts for each category, head on over to the [Archive][archive]!

<h2>Travel</h2>
I think traveling is one of the <i>most</i> relaxing things in life, here are some of my favorite places I've been...

<div class="posts">
  {% for post in site.categories.travel limit:5 %}
  <article class="post">
    <h3 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h3>
    <time datetime="{{ post.date | date: "%B %-d, %Y" }}" class="post-date">{{ post.date | date: "%B %-d, %Y" }}</time>
    {{ post.excerpt }}
  </article>
  {% endfor %}
</div>

<h2>Technology</h2>
I mean, I do work in IT, right? It'd be a shame if there weren't some posts from my forever wondering mind about technology!

<div class="posts">
  {% for post in site.categories.tech limit:5 %}
  <article class="post">
    <h3 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h3>
    <time datetime="{{ post.date | date: "%B %-d, %Y" }}" class="post-date">{{ post.date | date: "%B %-d, %Y" }}</time>
    {{ post.excerpt }}
  </article>
  {% endfor %}
</div>

<h2>Personal Posts</h2>
<div class="posts">
  {% for post in site.categories.personal limit:5 %}
  <article class="post">
    <h3 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h3>
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

[Archive]: {{ site.baseurl }}/archive
