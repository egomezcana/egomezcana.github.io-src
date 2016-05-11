#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Eduardo A. Gomezcaña'
SITENAME = 'ad ignorantiam'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/Mexico_City'

DEFAULT_LANG = u'es'

#Theme generation

THEME = './theme'
USER_LOGO_URL = SITEURL + '/images/logo2.png'
TAGLINE = 'Matemático, término medio.'

# Paths with static content
STATIC_PATHS = ['images','acatlan']

#To deal with html without process
READERS = {'html': None}

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
DEFAULT_DATE = 'fs'
IGNORE_FILES = ['content/tex/*']
LOAD_CONTENT_CACHE = False
MD_EXTENSIONS = ['math(enable_dollar_delimiter=True)']

# Blogroll
#LINKS = (('Pelican', 'http://getpelican.com/'),
#         ('Python.org', 'http://python.org/'),)

# Social widget
SOCIAL = (('GitHub', 'http://github.com/egomezcana'),
        ('LinkedIn','http://mx.linkedin.com/in/egomezcana/es'),
        ('MathStack', 'http://math.stackexchange.com/users/63203/egomezcana'),
        ('+','https://plus.google.com/106680188837746636627'))

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
