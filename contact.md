---
layout: page-notitle
title: Contacting Max
permalink: contact/
---

***

<div class="contact-image-links-wrapper">
 <div class="contact-image-links">
  {% for link in site.data.social-links %}
   {% if link.contact-group == 1 %}
    {% include social-link.html link=link %}
   {% endif %}
  {% endfor %}
 </div>
 <div class="contact-image-links">
  {% for link in site.data.social-links %}
   {% if link.contact-group == 2 %}
    {% include social-link.html link=link %}
   {% endif %}
  {% endfor %}
 </div>
</div>

***

<div data-tf-widget="joBudRJs" data-tf-opacity="0" data-tf-hide-headers
    data-tf-iframe-props="title=Contact Form (copy)" data-tf-medium="snippet" style="width:100%;height:750px;"></div>
<script src="//embed.typeform.com/next/embed.js"></script>
