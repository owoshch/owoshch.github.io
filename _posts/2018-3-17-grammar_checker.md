---
layout: post
title:  "English Determiners Correction with Tensorflow"
description: "GloVe, Window Classification and bi-LSTM for determiners correction"
excerpt: "GloVe, Window Classification and bi-LSTM for determiners correction"
date:   2018-03-17
mathjax: true
comments: true
tags: tensorflow NLP
github: https://github.com/owoshch
---




## Demo

Enter sentences like `I live in White`, `Obama was president of the United States`, `John went to New York to interview with Microsoft` and then hit the button.

{% include cs224n_demo.html
    placeholder="I live in White House"
    default_input="System will check whether you placed determiners correctly"
    default_output="System will check whether you placed THE determiners correctly"
    header="Demo"
    url="https://grammar-checker.herokuapp.com/api"
%}

**Disclaimer:** as you may notice, the tagger is far from being perfect. Some errors are due to the fact that the demo uses a reduced vocabulary (lighter for the API). But not all. It is also very sensible to capital letters, which comes both from the architecture of the model and the training data. 

## Introduction

I remember the first time I heard about the magic of Deep Learning for **Natural Language Processing (NLP)**. I was just starting a project with a young French startup [Riminder](https://www.riminder.net) and it was the first time I heard about word embeddings. There are moments in life when the confrontation with a new theory seems to make everything else irrelevant. Hearing about word vectors that encode similarity and meaning between words was one of these moments. I was baffled by the simplicity of the model as I started to play with these new concepts, building my first recurrent neural network for sentiment analysis. A few months later, as part of the master thesis of my master in the French university [Ecole polytechnique](https://www.polytechnique.edu) I was working on more advanced models for sequence tagging at [Proxem](https://www.proxem.com/en/).





