# How to translate documentation

Steps to follow to translate in french:

1. make gettext
2. sphinx-intl update --language fr
3. Translate the PO with Poedit
4. sphinx-intl build
5. make -e SPHINXOPTS="-D language='fr'" clean html

## Sphinx configuration for translation

https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-internationalization
