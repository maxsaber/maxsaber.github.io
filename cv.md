---
layout: cv
title: CV
permalink: cv/
jsarr:
- js/scripts.js
---

<h1 id="cv-title"><a href="{{ site.url }}">Max Saber, MSHI, DHA</a></h1>

<p id="cv-subtitle"><i>Systems Engineer & Adjunct Professor of Healthcare Business</i></p>

***

<div class="cv-image-links-wrapper">
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 1 %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 2 %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
</div>

***

## Education

{::nomarkdown}
{% for degree in site.data.education %}
{% include cv/degree.html degree=degree %}
{% endfor %}
{:/}

## Academia

{% for experience in site.data.experiences %}
{% if experience.type == 'academic' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}

## Research

{% for experience in site.data.experiences %}
{% if experience.type == 'research' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}

## Industry

{% for experience in site.data.experiences %}
{% if experience.type == 'industry' %}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}

## Teaching

<div class="cv-service-subtitle"><i>Graduate</i></div>
{% for teach in site.data.teaching %}
{% if teach.level == 'graduate' %}
{% include cv/teaching.html teach=teach %}
{% endif %}
{% endfor %}

<div class="cv-service-subtitle"><i>Undergraduate</i></div>
{% for teach in site.data.teaching %}
{% if teach.level == 'undergraduate' %}
{% include cv/teaching.html teach=teach %}
{% endif %}
{% endfor %}

## Pedagogical Development

<div class="cv-service-title"><b>Full Course Design</b></div>
<div class="cv-description">Full course design entails developing all aspects of a new course including, but not limited to, syllabus design, course and unit objectives, instruction methods, course assignments, and assessment activities.</div>
<div class="cv-spacer-small"></div>
{% for development in site.data.development %}
{% if development.type == 'new' %}
{% include cv/development.html dev=dev %}
{% endif %}
{% endfor %}

<div class="cv-service-title"><b>Course Redesign</b></div>
<div class="cv-description">Course redesigns entails taking a course already developed by another instructor and updating course materials, assignments, and assessments to meet new or updated learning objectives.</div>
<div class="cv-spacer-small"></div>
{% for development in site.data.development %}
{% if development.type == 'redesign' %}
{% include cv/development.html dev=dev %}
{% endif %}
{% endfor %}

## Publications

{% assign selectedBoolForBibtex = true %}

{% assign selected = site.categories.papers | where: 'selected', true %}
{% for pub in selected %}
{% include cv/publication.html pub=pub %}
{% endfor %}

{% assign selectedBoolForBibtex = false %}

## Invited Presentations

{% assign talktitles = site.data.talks | group_by:"title" %}
{% for title in talktitles %}
{% include cv/talk.html talk=title %}
{% endfor %}

## Service

<div class="cv-service-title"><b>Institutional Service</b></div>
<!-- Uses institutional.yaml for data -->
{% assign services = site.data.institutional | group_by:"org" %}
{% for org in services %}
{% include cv/institutional.html org=org %}
{% endfor %}

<div class="cv-service-title"><b>Elected Board Positions</b></div>
<!--Uses boards.yaml for data-->
{% for boards in site.data.board %}
{% include cv/boards.html board=board %}
{% endfor %}

<div class="cv-service-title"><b>Professional Memberships</b></div>
<!-- Uses memberships.yaml for data -->
{% for member in site.data.memberships %}
{% include cv/member.html member=member %}
{% endfor %}

## Professional Certifications and Licensures

<div class="cv-service-title"><b>Professional Certifications</b></div>
<!-- Uses certifications.yaml for data -->
{% for certifications in site.data.certifications %}
{% include cv/certifications.html name=name %}
{% endfor %}

<div class="cv-service-title"><b>Licensure</b></div>
<!-- Uses licensure.yaml for data -->
{% for licensure in site.data.licensure %}
{% include cv/licensure.html name=name %}
{% endfor %}

## Honors and Awards

{% for award in site.data.awards %}
{% include cv/award.html award=award %}
{% endfor %}

## Press

{% for press in site.data.press %}
{% include cv/press.html press=press %}
{% endfor %}

## Outreach and Public Engagement

{% for outreach in site.data.outreach %}
{% include cv/outreach.html outreach=outreach %}
{% endfor %}

## Technology Skills

{% for skill in site.data.skills %}
{% include cv/skill.html skill=skill %}
{% endfor %}

## Research Interests

{% for research in site.data.research %}
{% include cv/research.html research=research %}
{% endfor %}

## Contact

Max Saber  
914 Lake Road  
Tiverton, RI 02878  
774.644.1542  
`max@maxsaber.com`<br>
<a href="https://maxsaber.com">https://maxsaber.com</a>

<hr class="l-middle home-hr">
<div id="everything-else" class="l-middle">
    <a href="{{ site.url }}/cv"><div>CV</div></a>
	<a href="{{ site.url }}/projects"><div>Projects</div></a>
	<a href="{{ site.url }}/bio"><div>Bio</div></a>
	<a href="{{ site.url }}/stuff"><div>Stuff I Use</div></a>
	<a href="{{ site.url }}/archive"><div>Archive</div></a>
</div>