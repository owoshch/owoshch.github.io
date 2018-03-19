---
layout: post
title:  "English Determiners Correction with Tensorflow"
description: "GloVe, Window Classification and bi-LSTM for determiners correction"
excerpt: "GloVe, Window Classification and bi-LSTM for determiners correction"
date:   2018-03-17
mathjax: true
comments: true
tags: tensorflow NLP
github: https://github.com/owoshch/english_determiners_checker
---



Enter sentences like `I live in White House`, `London is a capital of Great Britain` or any other sentence you are doubting with and then hit the button.

{% include cs224n_demo.html
    placeholder="London is a capital of Great Britain."
    default_input="London is a capital of Great Britain."
    default_output="London is the capital of Great Britain ."
    header="Demo"
    url="https://grammar-checker.herokuapp.com/api"
%}

**tl;dr** bi-LSTM model for characters and words embedding overtakes the Window classification model and reaches 0.764 f1-score on dev and test sets. This system is trained on movie dialogs dataset. Hopefully, with a larger dataset we will be able to achieve better performance. System still fails with sequences like `I have a ball. The ball is red.`



# Table of Contents
1. [Challenge](#challenge)
2. [Data](#data)
3. [Baseline: Window Classification Model](#baseline)
4. [bi-LSTM for characters and words embeddings](#bi-lstm)

<a name="challenge"></a>
## Challenge 

Given a paragraph, place the determiners (a, an, the) correctly.

<a name="data"></a>
## Data

We used [Cornell Movie Dialogs Corpus](http://www.cs.cornell.edu/~cristian/Cornell_Movie-Dialogs_Corpus.html). We store each given utterance (no matter how sentences are there) in a text file with one word and its class per line. 

Example: `I have a ball. The ball is red.`

```
I O
have O
ball A
. O
ball THE
is O
red O
. O
```

## Train-Dev-Test split

We splitted data in a way to make dataset uniform is terms of sentences leghts. Train-dev-split can be found in [this repo folder](https://github.com/owoshch/english_determiners_checker/tree/master/data/det)



<a name="baseline"></a>
## Baseline: Window Classification Model 

[Github repo](https://github.com/owoshch/english_determiners_checker)

Determiners are strongly connected with the words around them. Thus, we decided to take a window classification model as a baseline. I took a model from the second assignment of [CS224d: Deep Learning for Natural Language Processing](http://cs224d.stanford.edu/), a precursor of [CS224n: Natural Language Processing with Deep Learning](http://web.stanford.edu/class/cs224n/syllabus.html)

A brief overview of window models you can find in [CS224n Lecture 4, slide 17](http://web.stanford.edu/class/cs224n/lectures/lecture4.pdf).

We used the following configuration:

* Embed a word and its neightboors using [GloVe](https://nlp.stanford.edu/projects/glove/) vectors. We made experiments for window sizes 3, 5 and 7 which corresponds to 1, 2 or 3 neighboor words for a given center word. 

* Apply a one-hidden-layer neural network to classify a given word. We introduces four classes with respect to particular determiners before a given word: O for a blank space, A, AN and THE.

### Results

We made 3 experiments with one-hidden-layer fully connected network with different window sizes and obtained the following results:

* Window size 3. F1-score: 0.69
* Window size 5. F1-score: t.b.d.
* Window size 7. F1-score: 0.692

F1-scores are computed on dev tests. Confusion matrix for the model with window size 3 looks as follows:

{% include image.html url="/images/window_3_confusion_matrix_normalized_dev.png"
description="Window size 3. F1-score: 0.684" %}


<a name="bi-lstm"></a>
## Final version 

As a more sophisticated model we took a bi-LSTM architecture. We ran the experiments based on [Guillaume Genthial's](https://github.com/guillaumegenthial) implementation of [bi-LSTM+CRF arhitecture for Named Entity Recognition](https://github.com/guillaumegenthial/sequence_tagging). Guillaume precisely explains his code in this [blogpost](https://guillaumegenthial.github.io/sequence-tagging-with-tensorflow.html)


While CRF was not that helpful in determiners correction task as on NER, the embeddings for characters and words obtained from bi-LSTM
helped to increase f1-score from 69% obtained by [Window classification model](https://github.com/owoshch/english_determiners_checker) to 75%. However, next step should be adding attention and an attempt to train this architecture on a larger dataset

* bi-LSTM+CRF
- DEV f1-score: 76.26 
- TEST f1-score: 76.40

* bi-LSTM+Softmax
- DEV f1-score: 75.08 
- TEST f1-score: 74.84

{% include image.html url="/images/confusion_matrix_normalized.png"
description="Confusion matrix for a bi-LSTM network archieving  f1-score 76.26% on dev and 76.40% on test " %}


