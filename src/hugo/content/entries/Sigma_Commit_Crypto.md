{
    "title": "Sigma Protocols and Commitment Schemes",
    "authors": [
        "David Butler",
        "Andreas Lochbihler"
    ],
    "topics": [
        "Computer science-Security-Cryptography"
    ],
    "date": "2019-10-07",
    "notify": "dbutler@turing.ac.uk",
    "abstract": "\nWe use CryptHOL to formalise commitment schemes and Sigma-protocols.\nBoth are widely used fundamental two party cryptographic primitives.\nSecurity for commitment schemes is considered using game-based\ndefinitions whereas the security of Sigma-protocols is considered\nusing both the game-based and simulation-based security paradigms. In\nthis work, we first define security for both primitives and then prove\nsecure multiple case studies: the Schnorr, Chaum-Pedersen and\nOkamoto Sigma-protocols as well as a construction that allows for\ncompound (AND and OR statements) Sigma-protocols and the Pedersen and\nRivest commitment schemes. We also prove that commitment schemes can\nbe constructed from Sigma-protocols. We formalise this proof at an\nabstract level, only assuming the existence of a Sigma-protocol;\nconsequently, the instantiations of this result for the concrete\nSigma-protocols we consider come for free.",
    "licence": "BSD",
    "olderReleases": {
        "2019": "2019-10-08"
    }
}