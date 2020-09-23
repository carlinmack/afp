---
title: Submission Guidelines
---

Please send your submission [via this web page](https://ci.isabelle.systems/afp-submission/).

**The submission must follow the following Isabelle style rules.** For additional guidelines on Isabelle proofs, also see the this [guide](http://proofcraft.org/blog/isabelle-style.html) (feel free to follow all of these; only the below are mandatory). **Technical details about the submission process and the format of the submission are explained on the submission site.**

*   No use of the commands `sorry` or `back`.
*   Instantiations must not use Isabelle-generated names such as `xa` — use Isar, the `subgoal` command or `rename_tac` to avoid such names.
*   No use of the command `smt_oracle`.
*   If your theories contain calls to `nitpick`, `quickcheck`, or `nunchaku` those calls must include the `expect` parameter. Alternatively the `expect` parameter must be set globally via, e.g. `nitpick_params`.
*   `apply` scripts should be indented by subgoal as in the Isabelle distribution. If an `apply` command is applied to a state with `n+1` subgoals, it must be indented by `n` spaces relative to the first `apply` in the sequence.
*   Only named lemmas should carry attributes such as `[simp]`.
*   We prefer structured Isar proofs over apply style, but do not mandate them.
*   If there are proof steps that take significant time, i.e. longer than roughly 1 min, please add a short comment to that step, so maintainers will know what to expect.
*   The entry must contain a ROOT file with one session that has the name of the entry. We strongly encourage precisely one session per entry, but exceptions can be made. All sessions must be in group (AFP), and all theory files of the submission must be contained in at least one session. See also the example [ROOT](https://foss.heptapod.net/isa-afp/afp-2020/-/blob/branch/default/thys/Example-Submission/ROOT) file in the [Example submission](entries/Example-Submission.html).
*   The entry should cite all sources that the theories are based on, for example textbooks or research articles containing informal versions of the proofs.

Your submission must contain an abstract to be displayed on the web site – usually this will be the same as the abstract of your proof document in the root.tex file. You can use LaTeX formulae in this web site abstract, either inline formulae in the form $a+b$ or \\(a+b\\) or display formulae in the form $$a + b$$ or \\\[a + b\\\]. Other occurrences of these characters must be escaped (e.g. \\$ or \\\\(). Note that LaTeX in the title of an entry is _not_ allowed. Most basic LaTeX functionality should be supported. For details on what parts of LaTeX are supported, see the [MathJax documentation.](https://docs.mathjax.org/en/v2.7-latest/tex.html)

It is possible and encouraged to build on other archive entries in your submission. There is a standardised way to [refer to other AFP entries](using.html) in your theories.

Your submission will be refereed and you will receive notification as soon as possible. If accepted, you must agree to maintain your archive entry or nominate someone else to maintain it. The Isabelle development team will assist with maintenance, but it does not have the resources to fully maintain the complete archive.

If you have questions regarding your submission, please email [afp-submit@in.tum.de](mailto:afp-submit@in.tum.de). If you need help with Isabelle, please use the [isabelle-users@cl.cam.ac.uk](mailto:isabelle-users@cl.cam.ac.uk) mailing list. It is always a good idea to [subscribe](https://lists.cam.ac.uk/mailman/listinfo/cl-isabelle-users).