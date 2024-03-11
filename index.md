---
layout: home
title: Home
---

<div id ="intro-wrapper" class="l-middle">
 <div id="intro-title-image">
  <img style="height: 100px; width: auto;" src="/images/emoji-header.png" alt="Max emoji logo" />
  </div>
 <div id="intro-title-name" class="intro-left">
  <h1 id="intro-title">Hi, I'm Max Saber</h1>
  <div id="intro-subtitle">
   I'm a Director of Enterprise Applications and an Adjunct Professor of Healthcare Administration and Business
  </div>
 </div>
 <div class="intro-left">
 <div class="intro-left">
  I'm a clinical informaticist and healthcare information system engineer with more than ten years of specialized experience with niche market electronic health record systems, system architecture, and clinical/technical project management. I'm typically best placed in a room to bridge knowledge gaps between clinical, technical, and administrative teams and translate needs, requirements, and expectations between the three groups. I have been awarded the <i>Innovative Solutions Award</i> in 2019 for implementing new clinical EHR technology in an academic setting while managing a diverse project team of clinical and non-clinical staff and faculty.
 </div>
 <div style="height: 1rem"></div>
 <div class="intro-left">
 Additionally, I also hold adjunct faculty appointments with both the School of Healthcare Business and Technology and the School of Pharmacy at MCPHS University. In these two departments, I teach graduate and undergraduate courses in data visualization, health informatics, human factor technology design, and statistical data analysis.
 </div>
 <div style="height: 1rem"></div>
 <div class="intro-left">
  I received my Doctorate in Healthcare Administration with a concentration in Information Systems and Leadership from the Medical University of South Carolina where I worked with <a href="https://education.musc.edu/MUSCApps/FacultyDirectory/Simpson-Kit">Dr. Kit Simpson, DrPH</a> <i>(chair)</i>, <a href="https://education.musc.edu/MUSCApps/FacultyDirectory/Simpson-Annie">Dr. Annie Simpson, Ph.D.</a>, and <a href="https://education.musc.edu/MUSCApps/FacultyDirectory/Brinton-Daniel">Dr. Daniel Brinton, Ph.D.</a>. My <a href="/papers/beers">dissertation</a> on expected medical events of falls, fractures, confusion, and delirium for patients taking Beers' Criteria medications was completed and successfully defended in November 2020.
 </div>
</div>

<div class="intro-right">
 <img id="intro-image" class="intro-right" src="/images/2023-Square.jpeg">
 <div style="height: 0.5rem"></div>
 <div id="intro-image-links" class="intro-right">
  {% for link in site.data.social-links %}
   {% if link.on-homepage == true %}
    {% include social-link.html link=link %}
   {% endif %}
  {% endfor %}
 </div>
 <div style="height: 0.5rem"></div>
 <div id="intro-cv-wrapper" class="intro-right">
  {% for link in site.data.social-links %}
   {% if link.id == "cv-web" %}
    {% include social-link.html link=link %}
   {% endif %}
  {% endfor %}
 </div>
  <div style="height: 0.5rem"></div>
 <div id="intro-id-wrapper" class="intro-right">
  {% for link in site.data.social-links %}
   {% if link.id == "bio" %}
    {% include social-link.html link=link %}
   {% endif %}
  {% endfor %}
 </div>
 <div style="height: 0.5rem"></div>
 <div id="intro-id-wrapper" class="intro-right">
  {% for link in site.data.social-links %}
   {% if link.id == "id-gist" %}
    {% include social-link.html link=link %}
   {% endif %}
  {% endfor %}
 </div>
  <div style="height: 0.5rem"></div>
 <div id="intro-id-wrapper" class="intro-right">
    {% for post in site.posts limit:1 %}
        <div class="cv-social-link" style="display: flex">
            <div class="cv-social-link-icon-wrapper">
                <a href="{{ site.baseurl }}{{ post.url }}"><i class="fas fa-blog" style="color:#515151"></i></a>
            </div>
            <div class="cv-social-link-text-wrapper">
                <a href="{{ site.baseurl }}{{ post.url }}">Check out my latest blog post</a>
            </div>
        </div>
    {% endfor %}
 </div>
</div>

</div>

{% include footer_buttons.html %}
