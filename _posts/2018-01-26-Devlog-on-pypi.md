---
layout: post
title: "Devlog on pypi"
author: "Kacha Mukabe"
tags: [python, development]
image:
  feature:
  teaser: 
---

Due to my frustration of not being able to keep up with this 100 days of code challenge on twitter I decided to try and make a small tool that I think would better serve me.

I’ve always liked reading game developers devlogs so I thought I’d try and do something like that. After a little searching I found something by [Brett Uglow](https://medium.com/indie-game-devlogs/devlog-4e8ed3a40e58) on medium. He had made something that seemed to be what i wanted but it was for npm. I work with python so I needed something I could install with pip and thus got to work making a similar tool in python.

### Making Devlog

Devlog is just a simple script that will record short devlogs to a markdown file that is stored in your documents folder. To install it simply:

> pip install devlog


![Alt text](/assets/img/devlog3.png)


### Publishing to Pypi

This was the hardest part, I have never published a package to pypi so it was a great learning experience.

First I had to create the following folder structure:

```devlog
   /devlog
        devlog.py
    setup.py
    setup.cfg
    README.md
    LICENSE.txt
```
The code in the setup.py:

```python
from setuptools import setup, find_packages
from codecs import open
from os import path


here = path.abspath(path.dirname(__file__))

with open(path.join(here, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()


setup(
    name='devlog',
    version='1.0.1',
    description='A simple command line developer log',
    long_description=long_description,
    author='Kacha Mukabe',
    author_email='kmukabe@gmail.com',
    url='https://www.github.com/kachamukabe/devlog',
    license='MIT',
    # download_url='https://github.com/kachaMukabe/devlog/archive/v1.0.tar.gz',
    packages=find_packages(exclude=['contrib', 'docs', 'tests']),
    keywords='development blogging',
    python_requires='>=3',
    classifiers=[
    ],
    entry_points={
        'console_scripts':[
            'devlog=devlog:main',
        ],
    },
)
```

And in the setup.cfg

```
[bdist_wheel]

universal=1
```

Then simply follow the steps on pypi to upload your package.

You can find all the code on my github page [here](htttps://github.com/kachamukabe/devlog).
