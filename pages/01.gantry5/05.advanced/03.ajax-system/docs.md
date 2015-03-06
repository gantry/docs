---
title: Built-In Ajax System
taxonomy:
    category: docs
    tag: [gantry5]
---

The Gantry framework comes with a built-in Ajax system which acts as a bridge between the client and the framework. Every Ajax call is directed to an "Ajax Model" that receives the Ajax parameters, which after its operations, is able to return a response with what the original Ajax Call request is expecting. Below, you can see a schematic sum of the process.

The real power of the Gantry framework's built-in Ajax system is the models. Every developer can create their own custom Ajax Models and use the Ajax calls client-side to retrieve specific types of data.

There are 2 Ajax systems in the Gantry framework that work exactly the same way with one exception: restrictions. In fact, the first can be used for everything regarding the template while the second can only be used in the admin side. This restriction makes it so that even by error you cannot use the admin Ajax System on the front end.


The Ajax URL
------------



The Ajax Call Syntax
--------------------

