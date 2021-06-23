# Archive of Formal Proofs Redesign
> Masters Project at the University of Edinburgh

---

This project is a reimplementation of the Archive of Formal Proofs using Hugo. The resulting website has many advantages over the previous version.

👉 View website - [afp.theoremproving.com](http://afp.theoremproving.org)

👉 View project report - [Developing a New Web Application for the Archive of Formal Proofs: Part One](report/Final_UG4_AFP_Thesis.pdf)

> If there is a feature you'd like, or a roadblock to you using this, please [create an issue!](https://github.com/carlinmack/afp/issues/new)

## Contents

* [Current Status](#Current-Status)
* [Requirements and installation](#Requirements-and-installation)
* [Locally hosting the site](#Locally-hosting-the-site)
   * [Updating the site](#Updating-the-site)
* [Contributions](#Contributions)


#### Current Status

This project is a redesign which feature complete with the AFP, plus the following features:

* Client-side search:
    * Responsive to user input plus autocomplete suggestions. The search was then 
    * Integration with FindFacts which provides additional results from the code of the
AFP.
* Improved navigation:
    * Addition of author, topic and dependency pages which allow navigation to all entries by an author, in a topic, or depend on the same entry.
    * Related entries are generated and added to entries where appropriate.
* Script browsing:
    * All scripts from an entry are visible on one page.
    * Links to lemmas similar to SideKick
* Machine Readable Format:
    * A JSON release of the metadata.

**Performance** 

Version |Time (sec)| # Pages | Pages/sec | Size (MB)| MB/sec
---------------- |-----------|---------| --------- |----------|------------
Current AFP      | 48–79     | 602     | 8–13      | 4        | 0.05–0.09
Redesigned AFP   | 44–53     | 2,506   | 47–57     | 951      | 17.9–26.1
*without theories* | 20–22     | 1,913   | 80–96     | 26       | 1.2–1.3


## Requirements and installation

For development, you will need the ability to run bash scripts. So if you are on Windows you will need to install [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

You will also need Python >= v3.3 and pip. Once these are installed, please change directory to `src/afp-devel/admin` and run `python -m pip install -r requirements.txt`.

Additionally, you need to [download hugo_extended >= v0.81](https://gohugo.io/getting-started/installing/). Personally I download `hugo_extended_0.81.0_Linux-64bit.deb` from the [releases](https://github.com/gohugoio/hugo/releases) and install it with `sudo dpkg -i hugo_extended_0.81.0_Linux-64bit.deb`.

If the site is only to be locally hosted, only installation of Hugo is needed.

## Locally hosting the site

1. Clone the repository (note the depth flag to save space)

```
git clone --depth 1 https://github.com/carlinmack/afp.git
```

2. Change directory

```
cd afp/src/afp-devel/admin/hugo/
```

3. Start the Hugo server

```
hugo server
```

The site should now be available at [localhost:1313/](http://localhost:1313/)

#### Updating the site

1. Ensure you are in the `afp/src/afp-devel/admin/` directory. 

2. Update the site

```
python exportMetadata.py
```

3. Regenerate the site by changing to the `afp/src/afp-devel/admin/hugo/` directory

```
hugo --minify
```

## Contributions

I gladly accept contributions via GitHub pull requests! Please create an issue first so 
I can advise you on the best approach :)

---


