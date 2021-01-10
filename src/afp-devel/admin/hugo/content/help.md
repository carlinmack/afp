---
title: Help
menu: 
    main:
        name: "Help"
        weight: 5
---

[Help with Isabelle](http://isabelle.in.tum.de/)

## Referring to AFP Entries in Isabelle

#### Linux and Mac

Once you have downloaded the AFP, you can include its articles and theories in your own developments. If you would like to make your work available to others _without_ having to include the AFP articles you depend on, here is how to do it.

If you are using Isabelle2020, and have downloaded your AFP directory to `/home/myself/afp`, you should run the following command to make the AFP session ROOTS available to Isabelle:

    echo "/home/myself/afp/thys" >> ~/.isabelle/Isabelle2020/ROOTS

You can now refer to article `ABC` from the AFP in some theory of yours via

    imports "ABC.Some\_ABC\_Theory"

This allows you to distribute your material separately from any AFP theories. Users of your distribution also need to install the AFP in the above manner.

#### Windows

The instructions should be the same under cygwin on Windows.

## Citing Entries

The following gives an example of the preferred way for citing entries in the AFP:

> M. Jaskelioff and S. Merz, Proving the Correctness of Disk Paxos. _Archive of Formal Proofs_, June 2005, [http://isa-afp.org/entries/DiskPaxos.html](http://isa-afp.org/entries/DiskPaxos.html), Formal proof development.

The bibtext entry for this would be:

```
@article{Jaskelioff-Merz-AFP05,
  author =   {Mauro Jaskelioff and Stephan Merz},
  title =    {Proving the Correctness of Disk Paxos},
  journal =  {Archive of Formal Proofs},
  month =    Jun,
  year =     2005,
  note =     {\\url{http://isa-afp.org/entries/DiskPaxos.html}, Formal proof development},
  ISSN =     {2150-914x}
}
```

## Mailing Lists

* isabelle-users@cl.cam.ac.uk provides a forum for Isabelle users to discuss problems, exchange information, and make announcements. Users of official Isabelle releases should subscribe or see the archive.
    
* isabelle-dev@in.tum.de covers the Isabelle development process, including intermediate repository versions, and administrative issues concerning the website or testing infrastructure. Early adopters of development snapshots or repository versions should subscribe or see the archive (also available at mail-archive.com).
