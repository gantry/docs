---
title: Installation
taxonomy:
    category: docs
    tag: [gantry5]
---

You can install Gantry Prime by cloning the Gantry Playground project to your projects directory. The projects directory is the directory you use to store git projects, not necessarily one within your Web root.

    $ git clone https://github.com/gantry/gantry5.git
    $ cd gantry5
    $ cd src
    $ composer install
    $ cd ..

After this you need to go to your Web root and create a new directory:

    $ mkdir prime
    $ cd prime
    $ touch .prime

Now you just need to install prime to your Web root by running the following command while inside the Web root in terminal (pointing to your projects directory):

    $ ~/workspace/gantry5/bin/install.sh

And you're set up!
