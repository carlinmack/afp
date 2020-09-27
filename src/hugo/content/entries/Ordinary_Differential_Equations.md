{
    "title": "Ordinary Differential Equations",
    "authors": [
        "Fabian Immler",
        "Johannes Hölzl"
    ],
    "topics": [
        "Mathematics/Analysis"
    ],
    "date": "2012-04-26",
    "abstract": "\n<p>Session Ordinary-Differential-Equations formalizes ordinary differential equations (ODEs) and initial value\nproblems. This work comprises proofs for local and global existence of unique solutions\n(Picard-Lindelöf theorem). Moreover, it contains a formalization of the (continuous or even\ndifferentiable) dependency of the flow on initial conditions as the <i>flow</i> of ODEs.</p>\n<p>\nNot in the generated document are the following sessions:\n<ul>\n<li> HOL-ODE-Numerics:\nRigorous numerical algorithms for computing enclosures of solutions based on Runge-Kutta methods\nand affine arithmetic. Reachability analysis with splitting and reduction at hyperplanes.</li>\n<li> HOL-ODE-Examples:\nApplications of the numerical algorithms to concrete systems of ODEs.</li>\n<li> Lorenz_C0, Lorenz_C1:\nVerified algorithms for checking C1-information according to Tucker's proof,\ncomputation of C0-information.</li>\n</ul>\n</p>",
    "extra": {
        "Change history": "[2014-02-13] added an implementation of the Euler method based on affine arithmetic<br>\n[2016-04-14] added flow and variational equation<br>\n[2016-08-03] numerical algorithms for reachability analysis (using second-order Runge-Kutta methods, splitting, and reduction) implemented using Lammich's framework for automatic refinement<br>\n[2017-09-20] added Poincare map and propagation of variational equation in\nreachability analysis, verified algorithms for C1-information and computations\nfor C0-information of the Lorenz attractor."
    },
    "notify": [
        "immler@in.tum.de",
        "hoelzl@in.tum.de"
    ],
    "licence": "BSD",
    "olderReleases": {
        "2012": "2012-05-24",
        "2013": "2013-02-16",
        "2013-1": "2013-11-17",
        "2013-2": "2013-12-11",
        "2014": "2014-08-28",
        "2015": "2015-05-27",
        "2016": "2016-02-22",
        "2016-1": "2016-12-17",
        "2017": "2017-10-10",
        "2018": "2018-08-16",
        "2019": "2019-06-11"
    },
    "dependencies": [
        "Triangle",
        "List-Index",
        "Affine_Arithmetic"
    ]
}