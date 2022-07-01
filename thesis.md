---
layout: page
title: Implementing a Simulated Electronic Medical Record System for Undergraduate and Graduate Interprofessional Healthcare Education.
permalink: thesis/
jsarr:
- js/scripts.js
---

<span class="dissertation-subtitle">
The traditional standard of educating healthcare professionals separate from one another is no longer conducive to the nature of healthcare delivery. Interprofessional healthcare education has emerged and is quickly gaining acceptance as the standard framework for educating healthcare professionals.
<span>

Studies show that the traditional structure of educating a healthcare student in “silos” can lead to the development of assumed perceptions of their colleagues in other health professions (Ateah et al., 2011). Interprofessional healthcare education fosters the communication skills necessary for the student’s success in their chosen career path. In addition to the development and implementation of an interprofessional healthcare education seminar, the addition of an electronic medical record system to this seminar will add a layer of realism to the experience. Through the seminar, students will utilize modules of the electronic medical record system to complete documentation and tasks responsible of their job role while developing therapeutic care plans for weekly patient cases. This project focuses on:

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