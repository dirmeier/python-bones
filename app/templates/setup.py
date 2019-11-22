from setuptools import setup

def readme():
    with open('README.rst') as f:
        return f.read()

test_deps = [
    'coverage',
    'flake8',    
    'pytest>=3.6.2',
    'pytest-cov',
    'pytest-pep8',
    'yapf'
]

doc_deps = [
    'sphinx',
    'sphinx_fontawesome',
    'sphinxcontrib-fulltoc'
]

setup(
    name='<%= projectID %>',
    version='0.0.1',
    description='<%= desc %>',
    long_description=readme(),
    url='https://github.com/<%= githubuser %>/<%= projectID %>',
    download_url='https://github.com/<%= githubuser %>/<%= projectID %>/tarball/0.0.1',
    author='<%= user %>',
    author_email='<%= email %>',
    license='GPLv3',
    keywords=['?'],
    packages=['<%= projectID %>'],
    install_requires=[
         'numpy>=1.11.0',
         'scipy>=0.18.0',
         'pytest>=2.9.2',
         'nose==1.3.7',
         'sphinx>=1.4.5',
         'scikit-learn >=0.17.0'
    ],
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU General Public License v3 (GPLv3)',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.1',
        'Programming Language :: Python :: 3.2',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7'
    ]
)
