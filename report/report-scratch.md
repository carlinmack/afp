\documentclass[bsc,frontabs,oneside,singlespacing,parskip,deptreport,logo]{infthesis}
\usepackage{graphicx}
\usepackage{adjustbox}
\usepackage{tabularx}
\usepackage{ltablex}
\usepackage[svgnames,table]{xcolor}
\usepackage{multirow}

\usepackage{subcaption}

% \setlength {\marginparwidth }{2cm}
\usepackage{todonotes}
% \usepackage[disable]{todonotes}

\newcommand{\jtodo}[2][]{\todo[color=yellow!70,#1]{\footnotesize JF: #2}}
\newcommand{\ijtodo}[2][]{\todo[inline,color=yellow!70,#1]{\footnotesize JF: #2}}
\newcommand{\cit}{\jtodo{Citation needed.}}

\usepackage[normalem]{ulem}

\PassOptionsToPackage{hyphens}{url}\usepackage{hyperref}

\usepackage{changebar}
%\pagenumbering{arabic}
\newcommand{\toupdate}[1]{} % to hide toupdate notes

\usepackage{listings}
\usepackage{color}
\usepackage{enumitem}

\begin{document}
\begin{preliminary}

\title{Developing a New Web Application for the Archive of Formal Proofs}

\author{Carlin MacKenzie}

\course{Master of Informatics}
\project{{\bf MInf Project (Part 2) Report}}

\date{\today}

% it's an advertisement

\abstract{
}

\maketitle

\section*{Acknowledgements}


\tableofcontents
\end{preliminary}

\chapter{Introduction}

\todo[inline]{intro to the intro}

% https://www.cl.cam.ac.uk/~lp15/Pages/Scream.html

\section{Previous Work} \label{previous-work}

The first part of this project \cite{MacKenzie2021} principally involved the recreation of the Archive of Formal Proofs website using the static site generator Hugo. The resulting website was faster to generate, had a smaller file size and was more functional for the user. Improvements were made to search, navigation and code browsing. Both the current and redesigned AFP were validated by use of a survey, and the latter was additionally evaluated using a walk-through with the users. 

\section{Part Two}

The results described in Section~\ref{previous-work} provide a solid foundation for future improvements. This section outlines...

\paragraph*{Motivation}

The previous part of this project was constrained to keep the form as similar as possible to the current AFP. As such, the site lacks dynamic content, and therefore the functionality which is enabled by a server. 

\paragraph*{Objective}

In this part, we instead extend the AFP with comments and user profiles to make the site more engaging. 

% We aim to introduce dynamic content, including a server-side database, and leverage this to provide new experiences on the AFP. 

\paragraph*{Contribution}

\paragraph*{Organisation}

\chapter{Background} \label{background}

This chapter provides the context for the work that follows by describing other academic online communities.

\section{Online Communities}

The history and mathematical libraries of Mizar, Coq and Lean were described in the first part of this report. Here we discuss the community spaces that exist for each proof assistant.

\subsection{Mizar}

Mizar was one of the first proof assistants and relies on a mailing list for community discussion. This mailing list is called the ``Mizar Forum'' and in recent years is mainly used for advertisement (``Call for Papers'' and new tools). There also exists an email address which aims to respond to help queries within 48 hours.

There does exist the ``Association of Mizar Users'' (SUM, from the translation of it in Polish), however it has little online prescence. It seems that this community exists mainly offline at its host university, the University of Byalistok, as you can only join the society by being introduced by two current members. 

\subsection{Coq}

Coq uses many platforms for its online community. Each proof in its library is a GitHub repository and so has spaces for discussion and issues. 

Previously, Coq relied on IRC for synchronous chat, but has recently moved to Zulip.
\todo[inline]{GitHub issues, Discourse, zulip}

\subsection{Lean}

\subsection{arXiv}

arXiv\cite{} is an open-access e-print archive for scientific papers. While it does allow for users to create accounts to manage their submissions and authorship, there are limited social mechanics on the site. For example, authors do not have profiles and there are no discussion sections.

\subsection{Wikipedia}

Wikipedia \cite{} is the largest and most popular reference work on the internet \cite{} and has many social features. Of most importance is that every page has an associated talk page. This serves as a space to discuss the quality of the entry and ask questions of the people who are editing it. Users also have pages, which can be thought of as their profile. These pages also have associated talk pages, and serve as a space to leave messages for other members. Users also associate themselves into editing groups with Wikiprojects. These server to organise effort and highlight areas that need more attention. 

\section{Archive of Formal Proofs}

The structure and features of the Archive of Formal Proofs were described in detail in the first part of this report. It does not currently have any social elements, but the external social spaces are now described.

\subsection{Community}

The AFP currently communicates via two mailing lists. The first is isabelle-users\footnote{https://lists.cam.ac.uk/pipermail/cl-isabelle-users/index.html} and serves as a place for asynchronous discussion and question and answer style posts. This is the primary mode of communication. The second mailing list is isabelle-dev\footnote{https://mailmanbroy.informatik.tu-muenchen.de/pipermail/isabelle-dev/} and concerns itself with the development of Isabelle and the AFP.

There also exists some communities outside the mailing lists, that are linked from the Isabelle website. These are the Zulip and the Stack Overflow.

Zulip\cite{} is a synchronous chat client similar to Slack. It is free and open source and allows for MathJax and Markdown syntax. It can be preferable to discussion on a mailing list as it is immediate and lively threads can be muted by those not interested. The AFP does not host a Zulip server, and instead uses a free hosted instance provided by Zulip.

StackOverflow\cite{} is a question and answer forum which is largely popular with programmers\cite{}. 

\subsection{Development Philosophy}

Isabelle and the AFP both have both been intentionally designed with a DIY mentality --- almost everything has been created from scratch. This means that no third party services are depended upon and very few libraries are used. This has impacted how we approach this project, as we do not want to store data with third parties, or introduce many unknown points of failure. On top of this, common software engineering practises are subverted so that they can be done in an ``Isabelle'' way. For example, the project does not use the almost universal version control software git\cite{} but instead uses mercurial. 

\chapter{Design}
\section{System Features and Requirements}
\subsection{Functional Requirements}
\paragraph*{Authentication}
\begin{enumerate}
    \item As a user I want to be able to create an account using an email and password
    \item As a user I want to be able to log in and log out
    \item As a user I want to be able to opt in to persist being logged in
    \item As a user I want to be able to reset my password
\end{enumerate}
\paragraph*{Authorisation}
\begin{enumerate}[resume]
    \item As an administrator, I want my user account to be able to be given rights by a web-master
    \item As a maintainer I want to be able to claim an entry that I have submitted previously, using the email that was provided with the entry
    \item As a maintainer I want to be able to submit a request to claim an article which I do not have access to the email that was provided for the entry
\end{enumerate}
\paragraph*{Entry maintenance}
\begin{enumerate}[resume]
    \item As a maintainer I want to update the description and title of my entry
    \item ? As a maintainer I want to see the changes that have been made to my entry metadata
    \item ? As a maintainer I want to be able to submit a new version of my entry
    \item ? As a maintainer I want to see the changes that have been made to my entry
    \item As a maintainer I want to be able to unsubscribe from email notifications if there is another maintainer on the entry.
    \item As a maintainer I want to access the statistics for an entry.
    \item As a maintainer I want to see my overall statistics for my entries
\end{enumerate}
\paragraph*{User Account Maintenance}
\begin{enumerate}[resume]
    \item As a user I want to be able to change my log-in email address
    \item As a user I want to be able to change my contact email address
    \item As a user I want to be able to change my password
**Commenting**
    \item As a user of the system, I want to be able to comment on an entry using Markdown syntax
    \item As a user of the system, I want to be able to delete a comment
\end{enumerate}
\paragraph*{Submission}
\begin{enumerate}[resume]
    \item ? As a user I want to submit an article so that I can make my own Isabelle developments available to others
    \item As a maintainer I want to update/change my article(s) so that I can maintain my article against the latest development version of Isabelle
    \item As an administrator I want to access articles which have been changed/updated by maintainers so that I can referee the changes/updates before committing them to the archive
\end{enumerate}

\subsection{Non-functional Requirements}
\paragraph*{Security}
\begin{enumerate}
    \item Log in email addresses should be validated
    \item Users should be able to enable two-factor authentication
    \item Passwords should be stored in a cryptographically secure way
\end{enumerate}
\paragraph*{Performance}
\begin{enumerate}[resume]
    \item The rebuilding of the AFP should be kept to a minimum
\end{enumerate}
\paragraph*{User Experience}
\begin{enumerate}[resume]
    \item Error cases should be defined for all API calls
\end{enumerate}
% Scalability - The growth highlighted in section 2.2 motivates the need for a new implementation that is scalable.
% Accessibility, Capacity, current and forecast, Compliance, Documentation, Disaster recovery, Efficiency, Effectiveness, Extensibility, Fault tolerance, Interoperability, Maintainability, Privacy, Portability, Quality, Reliability, Resilience, Response time, Robustness, Scalability, Security, Stability, Supportability, Testability

\chapter{Implementation}

\chapter{Evaluation}

\chapter{Conclusion} \label{conclusion}

\bibliographystyle{plain}
\bibliography{afp}

\appendix \label{app:1}

\end{document}