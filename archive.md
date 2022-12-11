---
layout: page
title: Archive
permalink: archive/
---

<div>
{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
  <h2>{{ year.name }}</h2>
    <ul>
      {% for post in year.items %}
        <li><a href="{{ post.url }}">{{ post.title }}</a> <small style="color: #c0c0c0">
        {% for category in post.categories %}
          {% if forloop.last == false %}
            {{ category }},
          {% else if forloop.last == true %}
            {{ category }}
          {% endif %}
        {% endfor %}
        </small></li>
      {% endfor %}
    </ul>
{% endfor %}
</div>
