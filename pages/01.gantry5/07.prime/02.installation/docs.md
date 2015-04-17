---
title: Installation
taxonomy:
    category: docs
    tag: [gantry5]
---

You can install Gantry Prime by cloning the Gantry Playground project to your projects directory:

    git clone git@github.com:gantry/gantry5.git
    cd gantry5
    git checkout develop
    cd src
    composer install
    cd ..

After this you need to go to your web root and create a new directory:

    mkdir prime
    cd prime
    touch .prime

Now you just need to install prime to your web root by running the following command (pointing to your projects directory):

    ~/MyProjects/gantry5/bin/install.sh

And you're set up!
