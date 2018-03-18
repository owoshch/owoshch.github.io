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

Enter sentences like `I live in White House`, `London is a capital of Great Britain` or whatever incorrect sentence and then hit the button.

{% include cs224n_demo.html
    placeholder="London is a capital of Great Britain."
    default_input="London is a capital of Great Britain."
    default_output="London is the capital of Great Britain ."
    header="Demo"
    url="https://grammar-checker.herokuapp.com/api"
%}

**Disclaimer:** This system for trained on movie dialogs dataset. Hopefully, with a larger dataset we will be able to achieve better performance. System still fails in sequences like `I have a ball. The ball is red.`

## Baseline


Window classification model. Window size 5. Softmax regression. Все дела. Ричард, разреши мне прийти на постер сессию, пожалуйста.



