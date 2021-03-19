# Developing a new web interface for the Archive of Formal Proofs
> Fourth Year Undergraduate Project at the University of Edinburgh

---

## Locally hosting the site

1. [Download hugo_extended >=v0.81](https://gohugo.io/getting-started/installing/). 
 
Personally I download `hugo_extended_0.81.0_Linux-64bit.deb` from the [releases](https://github.com/gohugoio/hugo/releases) and install it with `sudo dpkg -i hugo_extended_0.81.0_Linux-64bit.deb`.

2. Clone the repository (note the depth flag to save space)

```
git clone --depth 1 https://github.com/carlinmack/afp.git
```

3. Change directory

```
cd afp/src/afp-devel/admin/hugo/
```

4. Start the Hugo server

```
hugo server
```

The site should now be available at [localhost:1313/](http://localhost:1313/)

## Updating the site

1. Ensure you are in the `afp/src/afp-devel/admin/` directory. 

2. Install requirements

```
python -m pip install -r requirements.txt
```

3. Update the site

```
python exportMetadata.py
```
