---
title: Help
menu: 
    main:
        name: "Help"
        weight: 4
---

This section focuses on the Archive of Formal Proofs. For help with Isabelle, see the [Isabelle Wiki](https://isabelle.in.tum.de/community/Main_Page) and [Documentation](https://isabelle.in.tum.de/documentation.html)

## Referring to AFP Entries in Isabelle/JEdit

Once you have downloaded the AFP, you can include its articles and theories in your own developments. If you would like to make your work available to others _without_ having to include the AFP articles you depend on, here is how to do it.

From Isabelle2021 on, the recommended method for making the whole AFP available to Isabelle is the `isabelle components -u` command.

#### Linux and Mac

Assuming you have downloaded and unzipped the afp to `/home/myself/afp`, run:

    isabelle components -u /home/myself/afp

#### Windows

If the AFP is in `C:\afp`, run the following command in a Cygwin terminal:

    isabelle components -u /cygdrive/c/afp

#### Use

You can now refer to article `ABC` from the AFP in another theory via:

    imports "ABC.Some_ABC_Theory"

This allows you to distribute your material separately from any AFP theories. Users of your distribution also need to install the AFP in the above manner.


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

## Syndication

The AFP provides many syndicated feeds which Isabelle users can subscribe to. All feeds described
below can be found on the home page (linked) as well as any author, topic or dependency page.

* RSS: append index.xml, [example](/index.xml)
* Atom: append index.atom, [example](/index.atom)
* ActivityPub: append ___, [example](/index.xml)

Atom is a successor to RSS which features a better defined grammar. <!-- ActivityPub is a W3C Recommendation standard for decentralised social networking. You can use ActivityPub links to follow the AFP on a social network such as Mastodon. -->

## Mailing Lists

* isabelle-users@cl.cam.ac.uk provides a forum for Isabelle users to discuss problems, exchange information, and make announcements. Users of official Isabelle releases should subscribe or see the archive.
    
* isabelle-dev@in.tum.de covers the Isabelle development process, including intermediate repository versions, and administrative issues concerning the website or testing infrastructure. Early adopters of development snapshots or repository versions should subscribe or see the archive (also available at mail-archive.com).
