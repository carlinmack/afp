---
title: Updating Entries
menu: 
    main:
        name: "Updating Entries"
        weight: 4
---

## Change

The Archive of Formal Proofs is an online resource and therefore more dynamic than a normal scientific journal. Existing entries can and do evolve and can also be updated significantly by their authors.

This conflicts with the purpose of archiving and preserving entries as they have been submitted and with the purpose of providing a clear and simple interface to readers.

The AFP deals with this by synchronizing such updates with Isabelle releases:

*   The entries released and visible on the main site are always working with the most recent stable Isabelle version and do not change.
*   In the background, the archive maintainers evolve all entries to be up to date with the current Isabelle development version. Authors can contribute changes to this version which is available as a [Heptapod mercurial repository](https://foss.heptapod.net/isa-afp/afp-devel/) or as tar.gz package on the [download page](download.html).
*   When a new Isabelle version is released, the above mentioned development version of AFP is frozen and turns into the main version displayed on the front page. Older versions (including the original submission) of all entries are archived and remain accessible.

Significant changes of an entry should be recorded in the metadata of the entry using the keyword "extra-history". The resulting web page should look [something like this](https://www.isa-afp.org/entries/JinjaThreads.html).

## Monotonicity

Updating an entry should be mostly monotone: you add new material, but you do not modify existing material in a major way. Ideally, entries (by other people) that build on yours should not be affected. Otherwise you have to liaise with them first. If you intend to carry out major non-monotone changes, you will need to submit a completely new entry (with a description of how it relates to the old one). This should be required only very rarely: AFP entries should be mature enough not to require major changes to their interface (i.e. the main functions and theorems provided).

Major monotone changes, e.g. adding a new concept rather than more results on existing concepts, may also call for a new entry, but one that builds on the existing one. This depends on how you would like to organize your entries.

## If you are an author

The above means that if you are an author and would like to provide a new, better version of your AFP entry, you can do so.

To achieve this, you should base your changes on the [mercurial development version](https:/foss.heptapod.net/isa-afp/afp-devel/) of your AFP entry and test it against the current [Isabelle development version](http://isabelle.in.tum.de/devel/).

If you would like to get write access to your entry in the mercurial repository or if you need assistance, please contact the [editors](about.html#editors).