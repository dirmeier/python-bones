#!/usr/bin/env python3

import sys
import os

sys.path.append( os.path.abspath('../../'))
extensions = ['sphinx.ext.todo', 'sphinx.ext.viewcode', 'sphinx.ext.autodoc']
source_suffix = '.rst'
#source_encoding = 'utf-8-sig'
master_doc = 'index'

project = '<%= projectID %>'
author = '<%= user %>'

version = '0.2'
release = '0.2'

language = None
exclude_patterns = []
pygments_style = 'sphinx'
todo_include_todos = False
html_theme = 'alabaster'

htmlhelp_basename = '<%= projectID %>doc'

latex_elements = {}
latex_documents = [
  (master_doc, '<%= projectID %>.tex', '<%= projectID %> Documentation',
   '<%= user %>', 'manual'),
]
man_pages = [
    (master_doc, '<%= projectID %>', '<%= projectID %> Documentation',
     [author], 1)
]
texinfo_documents = [
  (master_doc, '<%= projectID %>', '<%= projectID %> Documentation',
   author, '<%= projectID %>', 'One line description of project.',
   'Miscellaneous'),
]
