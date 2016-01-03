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
STATIC_PATHS = ['images']

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
#LINKS = (('Pelican', 'http://getpelican.com/'),
#         ('Python.org', 'http://python.org/'),)

# Social widget
SOCIAL = (('Mi github', 'http://github.com/egomezcana'),)

DEFAULT_PAGINATION = False

MD_EXTENSIONS = {'math':{}}

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
