---
layout: post
title: "YouTube playlist url scraping"
author: "Kacha Mukabe"
tags: [python, web scraping]
---

Over the past week I've been making a twitter bot. I wanted this bot to post a url to a random video from one of my favourite youtube show, the Idea Channel.
I decided that to do this i would simply write a script that would scrape the urls to every video under the idea channel playlist.

### Bumps along the way

Youtube has changed it's layout for playlists and so when you load one the page only has links to the first 200 videos. 
This was a problem for me as I wanted all 252 videos with one request.
I finally managed to fix this by making two requests to youtube.

### The Code

For this scraping i used the BeautifulSoup library and pythons requests library.

```python
import requests
from bs4 import BeautifulSoup
```

I created a file called nFile that i would write the urls to and made two requests to the playlist.
The first request gets the last 200 videos and the second request gets the first 200 videos.
Each html variable holds the text or content part of the request i.e the html code of the page on youtube.

```python
nFile = open('idea.txt', 'w')
html_doc = requests.get('https://www.youtube.com/watch?v=kmRjhCyC3Yo&index=252&list=PL69BD06CC757E1D61').text
html_doc_two = requests.get('https://www.youtube.com/watch?v=sQ0pny1TA6U&list=PL69BD06CC757E1D61&index=1').text
```

I then parsed the two html_doc variables through beautiful soup and searched through them for all links with the class "playlist-video" and put all these links in 2 seperate lists.

```python
soup = BeautifulSoup(html_doc, 'html.parser')
soup_two = BeautifulSoup(html_doc_two, 'html.parser')
rawList = soup("a", class_="playlist-video")
rawList_two = soup_two("a", class_="playlist-video")
lst1 = []
lst2 = []
for link in rawList:
    lst1.append(link['href']

for link in rawList_two:
        lst2.append(link['href'])
```

Then I combined the two lists using the list and set functions. This ensures that all duplicates from the two lists are removed when forming the new one.
Then using the merged list I wrote all 252 urls to the text file nFile.

```python
urlList = list(set(lst1+lst2))
for link in urlList:
    nFile.write('https://www.youtube.com'+link+"\n")
nFile.close()
```