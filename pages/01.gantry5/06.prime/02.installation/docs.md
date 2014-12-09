---
title: Installation
taxonomy:
    category: docs
---

You can install Gantry Prime by cloning the Gantry Playground project to your projects directory:

    git clone git@bitbucket.org:rockettheme/gantry-playground.git
    cd gantry-playground
    git checkout develop
    composer install

After this you need to go to your web root and create a new directory:

    mkdir prime
    cd prime
    touch .prime

Now you just need to install prime to your web root by running the following command (pointing to your projects directory):

    ~/MyProjects/gantry-playground/bin/install.sh

And you're set up!
