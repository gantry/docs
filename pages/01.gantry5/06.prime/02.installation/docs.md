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
    $ composer install --no-dev
    $ cd ..

After this you need to go to your Web root and create a new directory:

    $ mkdir prime
    $ cd prime
    $ touch .prime

Now you just need to install prime to your Web root by running the following command while inside the Web root in terminal (pointing to your projects directory):

    $ ~/workspace/gantry5/bin/install.sh

Alternatively you can use `hebe` which is a RocketTheme Tool that helps symbolically link projects very easily. You can find all the details to get hebe installed at [rockettheme/hebe](https://github.com/rockettheme/hebe).

Once you have hebe the first step is to register Gantry 5, to do so go in the Gantry 5 project you cloned and run hebe from there.

    $ cd /location/where/you/cloned/gantry5
    $ hebe register .

You should get a successful notice that says Gantry 5 has been registered. Now all you have to do is link it:

    $ hebe link gantry5 /your/webroot/prime

And you're set up!

!! This process has not been thoroughly tested with Windows.
