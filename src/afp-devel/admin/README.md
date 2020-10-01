# Quick setup

Originally written for a clean Debian 10.6 install

> Install Python 3. 
```bash
sudo apt update
sudo apt install python3 -y
sudo apt install python3-distutils -y
```

> Install pip (from https://pip.pypa.io/en/stable/installing/)
```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py
```

> Install Hugo. 
```bash
sudo apt install hugo -y
hugo version
```
If the version is greater than 0.6 it should be good. Otherwise select a relevant version https://github.com/gohugoio/hugo/releases
```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.75.1/hugo_0.75.1_Linux-64bit.deb
sudo apt install ./hugo_0.75.1_Linux-64bit.deb
```
