---
title: White Box Attach using PyTorch
author: Shrey Viradiya
date: 2021-03-06
excerpt: White Box adversarial attack on Neural Classifier
hero: images/wallpaper.jpg
---
This repository contains code for **White Box adversarial attack** on Neural Classifier trained on CIFAR-10 dataset and Intel Classification Competition Dataset. 

Here, *Fast Gradient Sign Method* is used. The idea is to take the image we want to misclassify and run it through the model as usual, which gives us an output tensor. Typically for predictions, we’d look to see which of the tensor’s values was the highest and use that as the index into our classes, using argmax(). But this time we’re going to pretend that we’re training the network again and backpropagate that result back through the model, giving us the gradient changes of the model with respect to the original input. 
[Link for Book Chapter](https://learning.oreilly.com/library/view/programming-pytorch-for/9781492045342/ch09.html)

## Instructions

1. Install required modules from requirements.txt
2. Run main.py

## Datasets used:

* Intel Classification Competition: [Link for Intel Classification Competition](https://www.kaggle.com/puneet6060/intel-image-classification/version/2)
* CIFAR 10 Dataset: [Link for CIFAR 10](https://www.cs.toronto.edu/~kriz/cifar.html)

## Output:

![Real Label: Glacier .... After Adversarial Attack: Buildings](images/output_glacier_buildings_13.png "Real Label: Glacier .... After Adversarial Attack: Buildings")