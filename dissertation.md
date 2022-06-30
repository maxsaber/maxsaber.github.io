---
layout: page
title: Risk of medical events for falls, fractures, confusion, and delirium for patients with filled prescriptions for drugs listed on Beers Criteria compared to well-matched controls.
permalink: dissertation/
redirect_from: defense/
jsarr:
- js/scripts.js
---

<span class="dissertation-subtitle">
Using the 2013 edition of the Truven Marketscan® Administrative Claims database, this study looks to link the expected side effects of *Beers Criteria medications* to *logical hospital admissions*. This study sets to examine hospital admissions and emergency department visits for community-dwelling elderly individuals 65 years or older specifically for falls and fracture as well as confusion and delirium admissions.
<span>

These hospital admission types constitute a significant number of admissions the elderly experience due to the medication side effects which affect balance, gait, and cognition. Through the use of 2.6 million propensity-score matched patients, 1.297 million having been exposed to Beers Criteria medications and 1.297 million patients not exposed, this study was able to confirm the linkage between the expected side effects of the medication classes and their logical hospital admissions. Antipsychotics and benzodiazepines were the most frequent prescribed medications to both groups of admission and were also associated with the highest increase in risk of hospitalizations. Future research into medication specific research in regards to falls and fractures, and confusion and delirium in the elderly is warranted. This dissertation focuses on:

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