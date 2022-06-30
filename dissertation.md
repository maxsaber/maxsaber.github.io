---
layout: page
title: Interactive Scalable Interfaces for Machine Learning Interpretability
permalink: dissertation/
redirect_from: defense/
jsarr:
- js/scripts.js
---

<span class="dissertation-subtitle">
Data-driven paradigms now solve the world's hardest problems by automatically learning from data. Unfortunately, what is learned is often unknown to both the people who train the models and the people they impact. This has led to a rallying cry for *machine learning interpretability*. But how do we enable interpretability? How do we scale up explanations for modern, complex models? And how can we best communicate them to people?
<span>

Since machine learning now impacts people's daily lives, we answer these questions taking a *human-centered perspective* by designing and developing interactive interfaces that can enable interpretability at scale and for everyone. This thesis focuses on:

##### 1. Enabling Machine Learning Interpretability

User research with practitioners guides the creation of our novel operationalization for interpretability, which helps tool builders design interactive systems for model and prediction explanations. We develop two such visualization systems, <a href="{{ site.url }}/papers/gamut" class="sc">Gamut</a> and <a href="{{ site.url }}/papers/telegam" class="sc">TeleGam</a>, which we deploy at Microsoft Research as a design probe to investigate the emerging practice of interpreting models. 

##### 2. Scaling Deep Learning Interpretability

Our first-of-its-kind <a href="{{ site.url }}/papers/deepvis" class="sc">Interrogative Survey</a> reveals critical yet understudied areas of deep learning interpretability research, such as the lack of higher-level explanations for neural networks. Through <a href="{{ site.url }}/papers/summit" class="sc">Summit</a>, an interactive visualization system, we present the first scalable graph representation that summarizes and visualizes what features deep learning models learn and how those features interact to make predictions (e.g., InceptionNet trained on ImageNet with 1.2M+ images).

##### 3. Communicating Interpretability with Interactive Articles

We use <a href="{{ site.url }}/papers/interactive-articles" class="sc">Interactive Articles</a>, a new medium on the web, to teach people about machine learning's capabilities and limitations, while developing a new interactive publishing initiative called the <a href="{{ site.url }}/papers/parametric" class="sc">Parametric Press</a>. From our success publishing interactive content at scale, we generalize and detail the affordances of interactive articles by connecting techniques used in practice and the theories and empirical evaluations put forth by diverse disciplines of research.

<!-- <img src="../images/iii.png" class="iii">
<figcaption>An overview of my interdisciplinary research where I design and develop interactive interfaces to enable machine learning interpretability at scale and for everyone.</figcaption> -->

***

This thesis contributes to *information visualization*, *machine learning*, and more importantly *their intersection*, including open-source interactive interfaces, scalable algorithms, and new, accessible communication paradigms. Our work is making significant impact in industry and society: our visualizations have been deployed and demoed at Microsoft and built into widely-used interpretability toolkits, our interactive articles have been read by 250,000+ people, and our interpretability research is supported by NASA.

{% include dissertation/document.html %}

## SIGCHI Dissertation Award Talk

After motivating and summarizing my dissertation, I reflect back upon my work and highlight bits of my research experience thus far, including the challenges and opportunities of pursuing interdisciplinary work within machine learning and human-computer interaction.
<!-- ACM link? -->

**Date:** Monday, May 2, 2022  
**Time:** 4:45pm - 5:00pm CT  
**Location:** New Orelans

{% for talk in site.data.dissertation.talks %}
{% if talk.key == "award" %}
{% include dissertation/talk.html talk=talk %}
{% endif %}
{% endfor %}

<!-- **Materials**   
* [Research Statement][statement]  
* [Slides, low quality][talk-low-db] (50MB)  
* [Slides, high quality][talk-high-db] (200MB)  
* [Slide export animations + demo videos][talk-export]-->

[talk-low]: {{ site.url }}/talk-low-quality.pdf
[talk-high]: {{ site.url }}/talk-high-quality.pdf
[talk-export]: https://youtu.be/k8fzkxxxyr8
[talk-low-db]: https://www.dropbox.com/s/b4aqsp6ota3zani/defense-low-quality.pdf?dl=0
[talk-high-db]: https://www.dropbox.com/s/97q8gcinczfnfvu/defense-high-quality.pdf?dl=0
[cv]: https://fredhohman.com/cv
[cv-pdf]: https://fredhohman.com/cv.pdf
[statement]: {{ site.url }}/research-statement.pdf

[gamut]: {{ site.url }}/papers/gamut
[telegam]: {{ site.url }}/papers/telegam
[deepvis]: {{ site.url }}/papers/deepvis
[summit]: {{ site.url }}/papers/summit
[parametric]: {{ site.url }}/papers/parametric
[interactive-articles]: {{ site.url }}/papers/interactive-articles