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



Enter sentences like `I live in White House`, `London is a capital of Great Britain` or whatever incorrect sentence and then hit the button.

{% include cs224n_demo.html
    placeholder="London is a capital of Great Britain."
    default_input="London is a capital of Great Britain."
    default_output="London is the capital of Great Britain ."
    header="Demo"
    url="https://grammar-checker.herokuapp.com/api"
%}

**Disclaimer:** This system is trained on movie dialogs dataset. Hopefully, with a larger dataset we will be able to achieve better performance. System still fails with sequences like `I have a ball. The ball is red.`


# Table of Contents
# Table of Contents
1. [Challenge](#challenge)
2. [Data](#data)
3. [Baseline: Window Classification Model](#baseline)
4. [bi-LSTM for characters and words embeddings](#bi-lstm)

## Challenge <a name="challenge"></a>

I suck in placing determiners correctly.

## Data <a name="data"></a>

1. Preprocessing

We used [Cornell Movie Dialogs Corpus](http://www.cs.cornell.edu/~cristian/Cornell_Movie-Dialogs_Corpus.html). We store each given utterance (no matter how sentences are there) in a text file with one word and its class per line. 

Example: `I have a ball. The ball is red.`

```
I O
have O
ball A
. O
Ball THE
is O
red O
. O
```

2. Train-Dev-Test split

Liza will write it down.


## Baseline: Window Classification Model <a name="baseline"></a>

Determiners are strongly connected with the words around them. Thus, we decided to take a window classification model as a baseline. I took a model from the second assignment of [CS224d: Deep Learning for Natural Language Processing](http://cs224d.stanford.edu/), a precursor of [CS224n: Natural Language Processing with Deep Learning](http://web.stanford.edu/class/cs224n/syllabus.html)

A brief overview of window models you can find in [CS224n Lecture 4, slide 17](http://web.stanford.edu/class/cs224n/lectures/lecture4.pdf).

We used the following configuration:

* Embed a word and its neightboors using [GloVe](https://nlp.stanford.edu/projects/glove/) vectors. We made experiments for window sizes 3, 5 and 7 which corresponds to 1, 2 or 3 neighboor words for a given center word. 

* Apply a one-hidden-layer neural network to classify a given word. We introduces four classes with respect to particular determiners before a given word: O for a blank space, A, AN and THE.



## Final version <a name="bi-lstm"></a>

bi-LSTM for characters. bi-LSTM for words. Ну и всякие остальные красивости. Завтра допишу.


