#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Eduardo A. Gomezca\xf1a'
SITENAME = u'Errata'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/Mexico_City'

DEFAULT_LANG = u'es'

#Theme generation

THEME = './themes/chunk'
DEFAULT_DATE_FORMAT = ('%b %d %Y')
SITESUBTITLE = 'Exploraciones de la locura'
#FOOTER_TEXT = 'Algo así'
DISPLAY_CATEGORIES_ON_MENU = False

#THEME = './themes/bootlex'
#ARTICLE_URL = ('{slug}/')
#ARTICLE_SAVE_AS = ('{slug}.html')
#PAGE_URL = ('{slug}/')
#PAGE_SAVE_AS = ('{slug}.html')
#AUTHOR_URL = ('author/{name}/')
#TAG_URL = ('tag/{name}/')



# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
#LINKS = (('Pelican', 'http://getpelican.com/'),
#         ('Python.org', 'http://python.org/'),)

# Social widget
#SOCIAL = (('You can add links in your config file', '#'),
#          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
