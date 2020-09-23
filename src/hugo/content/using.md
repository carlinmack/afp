---
title: Referring to AFP Entries
menu: 
    main:
        name: "Using Entries"
        weight: 5
---

Once you have downloaded the AFP, you can include its articles and theories in your own developments. If you would like to make your work available to others _without_ having to include the AFP articles you depend on, here is how to do it.

If you are using Isabelle2020, and have downloaded your AFP directory to `/home/myself/afp`, you should run the following command [\[1\]](#1) to make the AFP session ROOTS available to Isabelle:

    echo "/home/myself/afp/thys" >> ~/.isabelle/Isabelle2020/ROOTS

You can now refer to article `ABC` from the AFP in some theory of yours via

    imports "ABC.Some\_ABC\_Theory"

This allows you to distribute your material separately from any AFP theories. Users of your distribution also need to install the AFP in the above manner.

\[1\]: Tested for Linux and Mac installations ‐ it should be the same under cygwin on Windows.