Web site & Site generator
-------------------------

The website is generated in two stages: python scripts, which generate the content, and
hugo site generation. There are four python scripts which:

* Export the ini `metadata/metadata` file to JSON and author information to a data file. 11 seconds.
* Add older releases to the JSON files. 13 seconds.
* Add dependencies to the JSON files. 21 seconds
* Export statistics to a data file using the previous afpstats.py. 60 seconds.

Hugo then takes these files and generates ~1900 pages in the `web` folder which
takes 45 seconds.

The script can be invoked without any arguments:

```bash
./admin/sitegen
```

Or verbose output can be enabled by passing the `-v` flag, like `./admin/sitegen -v`

To change the static content pages, like the submission guidelines, edit the respective
markdown file in the `content` folder and run `hugo` in the `hugo` folder.

### Hugo site generation

Hugo is a static site generator written in Go, a statically typed, compiled programming
language from Google. Hugo seperates style and content, allowing for content files to be
very simple markdown files with front matter which stores information like the Title,
Author etc. The style of the page is defined in the `themes` folder and uses a syntax
similar to Jinja2. I recommend https://regisphilibert.com/blog/2017/04/hugo-cheat-sheet-go-template-translator/ as a good introduction to the syntax of hugo
templates.

As the entries of the AFP are key and value pairs, the `content/entries/` folder
contains markdown files that only have JSON frontmatter in them.