{
    "title": "Game-based cryptography in HOL",
    "authors": [
        "Andreas Lochbihler",
        "S. Reza Sefidgar",
        "Bhargav Bhatt"
    ],
    "topics": [
        "Computer science-Security-Cryptography"
    ],
    "date": "2017-05-05",
    "notify": "mail@andreas-lochbihler.de",
    "abstract": "\n<p>In this AFP entry, we show how to specify game-based cryptographic\nsecurity notions and formally prove secure several cryptographic\nconstructions from the literature using the CryptHOL framework. Among\nothers, we formalise the notions of a random oracle, a pseudo-random\nfunction, an unpredictable function, and of encryption schemes that are\nindistinguishable under chosen plaintext and/or ciphertext attacks. We\nprove the random-permutation/random-function switching lemma, security\nof the Elgamal and hashed Elgamal public-key encryption scheme and\ncorrectness and security of several constructions with pseudo-random\nfunctions.\n</p><p>Our proofs follow the game-hopping style advocated by\nShoup and Bellare and Rogaway, from which most of the examples have\nbeen taken. We generalise some of their results such that they can be\nreused in other proofs. Thanks to CryptHOL's integration with\nIsabelle's parametricity infrastructure, many simple hops are easily\njustified using the theory of representation independence.</p>",
    "extra-history": "\nChange history:\n[2018-09-28]:\nadded the CryptHOL tutorial for game-based cryptography\n(revision 489a395764ae)",
    "licence": "BSD",
    "olderReleases": {
        "2016-1": "2017-05-11",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    }
}