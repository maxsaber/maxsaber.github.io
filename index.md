---
layout: home
title: Home
---

<div id ="intro-wrapper" class="l-middle">
	<div id="intro-title-wrapper" class="intro-left">
		<h1 id="intro-title">Hi, I'm Max Saber</h1>
		<div id="intro-subtitle">
			I'm a Systems Engineer and Adjunct Professor of Healthcare Administration
		</div>
	</div>
	<div class="intro-left">
	<div class="intro-left">
		I'm a healthcare systems engineer with more than ten years’ experience with niche market electronic health record systems, system architecture, and clinical/technical project management. I specialize in bridging knowledge gaps between clinical, technical, and administrative teams and appropriately translating needs, requirements, and expectations between groups. I have been awarded the <i>Innovative Solutions Award</i> in 2019 for implementing new clinical EHR technology in an academic setting while managing a diverse project team of clinical and non-clinical staff and faculty.
	</div>
	<div style="height: 1rem"></div>
	<div class="intro-left">
		I received my Doctorate in Healthcare Administration with a concentration in Information Systems and Leadership from the Medical University of South Carolina where I worked with <a href="https://education.musc.edu/MUSCApps/FacultyDirectory/Simpson-Kit">Dr. Kit Simpson, DrPH</a>, <a href="https://education.musc.edu/MUSCApps/FacultyDirectory/Simpson-Annie">Dr. Annie Simpson, Ph.D.</a>, and <a href="https://education.musc.edu/MUSCApps/FacultyDirectory/Brinton-Daniel">Dr. Daniel Brinton, Ph.D.</a>. My <a href="/papers/beers">dissertation</a> on expected medical events of falls, fractures, confusion, and delirium for patients taking Beers' Criteria medications was completed and defended in November 2020.
	</div>
</div>

<div class="intro-right">
	<img id="intro-image" class="intro-right" src="/images/portrait.jpg">
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
		<!-- <div id="intro-cv"><a href="/cv">Here's my CV.</a></div> -->
	</div>
	</div>
</div>

<hr class="l-middle home-hr">
<div id="everything-else" class="l-middle">
    <a href="{{ site.url }}/cv"><div>CV</div></a>
	<a href="{{ site.url }}/projects"><div>Projects</div></a>
	<a href="{{ site.url }}/bio"><div>Bio</div></a>
	<a href="{{ site.url }}/stuff"><div>Stuff I Use</div></a>
	<a href="{{ site.url }}/archive"><div>Archive</div></a>
</div>

[cv]: {{ site.url }}/cv
