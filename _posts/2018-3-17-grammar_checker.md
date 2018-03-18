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

**Disclaimer:** as you may notice, the tagger is far from being perfect. Some errors are due to the fact that the demo uses a reduced vocabulary (lighter for the API). But not all. It is also very sensible to capital letters, which comes both from the architecture of the model and the training data. For more information about the demo, see [here](https://guillaumegenthial.github.io/serving.html).

## Introduction

I remember the first time I heard about the magic of Deep Learning for **Natural Language Processing (NLP)**. I was just starting a project with a young French startup [Riminder](https://www.riminder.net) and it was the first time I heard about word embeddings. There are moments in life when the confrontation with a new theory seems to make everything else irrelevant. Hearing about word vectors that encode similarity and meaning between words was one of these moments. I was baffled by the simplicity of the model as I started to play with these new concepts, building my first recurrent neural network for sentiment analysis. A few months later, as part of the master thesis of my master in the French university [Ecole polytechnique](https://www.polytechnique.edu) I was working on more advanced models for sequence tagging at [Proxem](https://www.proxem.com/en/).

{% include image.html url="https://nlp.stanford.edu/projects/glove/images/man_woman.jpg"
description="Linear Dependencies between word vectors - GloVe" %}



**Tensorflow vs Theano** At that time, Tensorflow had just been open sourced and Theano was the most widely used framework. For those who are not familiar with the two, Theano operates at the matrix level while Tensorflow comes with a lot of pre-coded layers and helpful training mechanisms. Using Theano was sometimes painful but forced me to pay attention to the tiny details hidden in the equations and have a global understanding of how a deep learning library works.

Fastforward a few months: I'm in Stanford and I'm using Tensorflow. One day, here I am, asking myself: "What if you tried to code one of the sequence tagging models in Tensorflow? How long would it take?". The answer is: no more than a few hours.

> This post's ambition is to provide an example of how to use Tensorflow to build a sate-of-the art model (similar to this [paper](https://arxiv.org/pdf/1603.01354.pdf)) for sequence tagging and share some exciting NLP knowledge!

Together with this post, I am releasing the [code](https://github.com/guillaumegenthial/sequence_tagging) and hope some will find it useful. You can use it to train your own sequence tagging model. I'll assume conceptual knowledge about Recurrent Neural Networks. By the way, at this point I have to share my admiration for [karpathy's blog](http://karpathy.github.io) (and this post in particular ["The Unreasonable Effectiveness of Recurrent Neural Networks"](http://karpathy.github.io/2015/05/21/rnn-effectiveness/)). For readers new to NLP, have a look at the amazing [Stanford NLP class](http://web.stanford.edu/class/cs224n/).

