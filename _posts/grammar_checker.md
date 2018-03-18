---
layout: post
title:  "English Determiners Correction with Tensorflow"
description: "GloVe, Window Classification and bi-LSTM for determiners correction"
excerpt: "GloVe, Window Classification and bi-LSTM for determiners correction"
date:   2018-03-17
mathjax: true
comments: true
tags: tensorflow NLP
github: 
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



## Introduction

I suck in placing the determiners correctly. 
