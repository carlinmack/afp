section \<open>Szemerédi's Regularity Lemma\<close>

theory Szemeredi
  imports Complex_Main "HOL-Library.Disjoint_Sets" "Girth_Chromatic.Ugraphs"

begin

thm card_vimage_inj
lemma card_vimage_inj_on_le: 
  assumes "inj_on f D" "finite A"
  shows "card (f-`A \<inter> D) \<le> card A"
  by (meson assms card_inj_on_le image_subset_iff_subset_vimage inf_le1 inf_le2 inj_on_subset)


text\<open>We formalise Szemerédi's Regularity Lemma, which is a major result in the study of large graphs
(extremal graph theory).
We follow Yufei Zhao's notes ``Graph Theory and Additive Combinatorics'' (MIT)
\<^url>\<open>https://ocw.mit.edu/courses/mathematics/18-217-graph-theory-and-additive-combinatorics-fall-2019/lecture-notes/MIT18_217F19_ch3.pdf\<close>
and W.T. Gowers's notes ``Topics in Combinatorics'' (University of Cambridge, Lent 2004, Chapter 3)
\<^url>\<open>https://www.dpmms.cam.ac.uk/~par31/notes/tic.pdf\<close>.
We also refer to a third source, also by Zhao and also entitled 
``Graph Theory and Additive Combinatorics'': \<^url>\<open>https://yufeizhao.com/gtac/gtac17.pdf\<close>.\<close>


subsection \<open>Miscellaneous\<close>

text \<open>A technical lemma used below in @{text \<open>energy_graph_partition_half\<close>}\<close>
lemma sum_products_le:
  fixes a :: "'a \<Rightarrow> 'b::linordered_idom"
  assumes "\<And>i. i \<in> I \<Longrightarrow> a i \<ge> 0"
  shows "(\<Sum>i\<in>I. a i * b i)\<^sup>2 \<le> (\<Sum>i\<in>I. a i) * (\<Sum>i\<in>I. a i * (b i)\<^sup>2)"
  using assms
proof (induction I rule: infinite_finite_induct)
  case (insert j I)
  then have "(\<Sum>i\<in>insert j I. a i * b i)\<^sup>2
          \<le> (a j * b j)\<^sup>2 + 2 * a j * b j * (\<Sum>i\<in>I. a i * b i) + (\<Sum>i\<in>I. a i) * (\<Sum>i\<in>I. a i * (b i)\<^sup>2)"
    using insert by (simp add: algebra_simps power2_eq_square)
  also have "\<dots> \<le> a j * (a j * (b j)\<^sup>2) + (a j * (sum a I * (b j)\<^sup>2 + (\<Sum>i\<in>I. a i * (b i)\<^sup>2)) 
                 + sum a I * (\<Sum>i\<in>I. a i * (b i)\<^sup>2))"
  proof -
    have "0 \<le> (\<Sum>i\<in>I. a i * (b i - b j)\<^sup>2)"
      by (simp add: insert.prems sum_nonneg)
    then have "2 * b j * (\<Sum>i\<in>I. a i * b i) \<le> (sum a I * (b j)\<^sup>2) + (\<Sum>i\<in>I. a i * (b i)\<^sup>2)"
      by (simp add: power2_eq_square algebra_simps sum_subtractf sum.distrib sum_distrib_left)
    then show ?thesis
      by (simp add: insert.prems power2_eq_square mult.commute mult.left_commute mult_left_mono)
  qed
  finally show ?case 
    by (simp add: insert algebra_simps)
qed auto

subsubsection \<open>Partitions indexed by integers\<close>

definition finite_graph_partition :: "[uvert set, uvert set set, nat] \<Rightarrow> bool"
  where "finite_graph_partition V P n \<equiv> partition_on V P \<and> finite P \<and> card P = n"

lemma finite_graph_partition_0 [iff]:
  "finite_graph_partition V P 0 \<longleftrightarrow> V = {} \<and> P = {}"
  by (auto simp: finite_graph_partition_def partition_on_def)

lemma finite_graph_partition_empty [iff]:
  "finite_graph_partition {} P n \<longleftrightarrow> P = {} \<and> n = 0"
  by (auto simp: finite_graph_partition_def partition_on_def)

lemma finite_graph_partition_equals:
  "finite_graph_partition V P n \<Longrightarrow> (\<Union>P) = V"
  by (meson finite_graph_partition_def partition_on_def)

lemma finite_graph_partition_subset:
  "\<lbrakk>finite_graph_partition V P n; X \<in> P\<rbrakk> \<Longrightarrow> X \<subseteq> V"
  using finite_graph_partition_equals by blast

lemma trivial_graph_partition_exists:
  assumes "V \<noteq> {}"
  shows "finite_graph_partition V {V} (Suc 0)"
  by (simp add: assms finite_graph_partition_def partition_on_space)

lemma finite_graph_partition_finite:
  assumes "finite_graph_partition V P k" "finite V" "X \<in> P"
  shows "finite X"
  by (meson assms finite_graph_partition_subset infinite_super)

lemma finite_graph_partition_le:
  assumes "finite_graph_partition V P k" "finite V" "X \<in> P"
  shows "card X \<le> card V"
  by (meson assms card_mono finite_graph_partition_subset)

lemma finite_graph_partition_gt0:
  assumes "finite_graph_partition V P k" "finite V" "X \<in> P"
  shows "card X > 0"
  by (metis assms card_0_eq finite_graph_partition_def finite_graph_partition_finite gr_zeroI partition_on_def)

lemma card_finite_graph_partition:
  assumes "finite_graph_partition V P k" "finite V"
  shows "(\<Sum>X\<in>P. card X) = card V"
  by (metis assms finite_graph_partition_def finite_graph_partition_finite product_partition)

lemma finite_graph_partition_obtain:
  assumes "finite_graph_partition V P k" "x \<in> V"
  obtains X where "X \<in> P" and "x \<in> X"
  using assms finite_graph_partition_equals by force

subsubsection \<open>Tools to combine the refinements of the partition @{term "P i"} for each @{term i}\<close>

text \<open>These are needed to retain the ``intuitive'' idea of partitions as indexed by integers.\<close>

subsection \<open>Edges\<close>

text \<open>All edges between two sets of vertices, @{term X} and @{term Y}, in a graph, @{term G}\<close>

definition all_edges_between :: "nat set \<Rightarrow> nat set \<Rightarrow> nat set \<times> nat set set \<Rightarrow> (nat \<times> nat) set"
  where "all_edges_between X Y G \<equiv> {(x,y). x\<in>X \<and> y\<in>Y \<and> {x,y} \<in> uedges G}"

lemma all_edges_between_subset: "all_edges_between X Y G \<subseteq> X\<times>Y"
  by (auto simp: all_edges_between_def)

lemma max_all_edges_between: 
  assumes "finite X" "finite Y"
  shows "card (all_edges_between X Y G) \<le> card X * card Y"
  by (metis assms card_mono finite_SigmaI all_edges_between_subset card_cartesian_product)

lemma all_edges_between_empty [simp]:
  "all_edges_between {} Z G = {}" "all_edges_between Z {} G = {}"
  by (auto simp: all_edges_between_def)

lemma all_edges_between_disjnt1:
  assumes "disjnt X Y"
  shows "disjnt (all_edges_between X Z G) (all_edges_between Y Z G)"
  using assms by (auto simp: all_edges_between_def disjnt_iff)

lemma all_edges_between_disjnt2:
  assumes "disjnt Y Z"
  shows "disjnt (all_edges_between X Y G) (all_edges_between X Z G)"
  using assms by (auto simp: all_edges_between_def disjnt_iff)

lemma all_edges_between_Un1:
  "all_edges_between (X \<union> Y) Z G = all_edges_between X Z G \<union> all_edges_between Y Z G"
  by (auto simp: all_edges_between_def)

lemma all_edges_between_Un2:
  "all_edges_between X (Y \<union> Z) G = all_edges_between X Y G \<union> all_edges_between X Z G"
  by (auto simp: all_edges_between_def)

lemma finite_all_edges_between:
  assumes "finite X" "finite Y"
  shows "finite (all_edges_between X Y G)"
  by (meson all_edges_between_subset assms finite_cartesian_product finite_subset)

subsection \<open>Edge Density and Regular Pairs\<close>

text \<open>The edge density between two sets of vertices, @{term X} and @{term Y}, in @{term G}.
      Authors disagree on whether the sets are assumed to be disjoint!.
      Quite a few authors assume disjointness, e.g. Malliaris and Shelah \<^url>\<open>https://www.jstor.org/stable/23813167\<close>
      For the following definitions, see pages 49--50 in Zhao's notes.\<close>
definition "edge_density X Y G \<equiv> card(all_edges_between X Y G) / (card X * card Y)"

lemma edge_density_ge0: "edge_density X Y G \<ge> 0"
  by (auto simp: edge_density_def)

lemma edge_density_le1:
  assumes "finite X" "finite Y"
  shows "edge_density X Y G \<le> 1"
  using of_nat_mono [OF max_all_edges_between [OF assms]]
  by (fastforce simp add: edge_density_def divide_simps)

lemma all_edges_between_swap:
  "all_edges_between X Y G = (\<lambda>(x,y). (y,x)) ` (all_edges_between Y X G)"
  unfolding all_edges_between_def
  by (auto simp add: insert_commute image_iff split: prod.split)

lemma card_all_edges_between_commute:
  "card (all_edges_between X Y G) = card (all_edges_between Y X G)"
proof -
  have "inj_on (\<lambda>(x, y). (y, x)) A" for A :: "(nat*nat)set"
    by (auto simp: inj_on_def)
  then show ?thesis
    by (simp add: all_edges_between_swap [of X Y] card_image)
qed

lemma edge_density_commute: "edge_density X Y G = edge_density Y X G"
  by (simp add: edge_density_def card_all_edges_between_commute mult.commute)


text \<open>$\epsilon$-regular pairs, for two sets of vertices. Again, authors disagree on whether the
sets need to be disjoint, though it seems that overlapping sets cause double-counting. Authors also
disagree about whether or not to use the strict subset relation here. The proofs below are easier if
it is strict but later proofs require the non-strict version. The two definitions can be proved to
be equivalent under fairly mild conditions, but even those conditions turn out to be onerous.\<close>

definition regular_pair::  "uvert set  \<Rightarrow> uvert set \<Rightarrow> ugraph \<Rightarrow> real \<Rightarrow> bool"
  where "regular_pair X Y G \<epsilon> \<equiv> 
    \<forall>A B. A \<subseteq> X \<and> B \<subseteq> Y \<and> (card A \<ge> \<epsilon> * card X) \<and> (card B \<ge> \<epsilon> * card Y) \<longrightarrow>
              \<bar>edge_density A B G - edge_density X Y G\<bar> \<le> \<epsilon>" for \<epsilon>::real

lemma regular_pair_commute: "regular_pair X Y G \<epsilon> \<longleftrightarrow> regular_pair Y X G \<epsilon>"
  by (metis edge_density_commute regular_pair_def)

abbreviation "irregular_pair X Y G \<epsilon> \<equiv> \<not> regular_pair X Y G \<epsilon>"

lemma irregular_pair_E:
  fixes \<epsilon>::real
  assumes "irregular_pair X Y G \<epsilon>" 
  obtains A B where "A \<subseteq> X \<and> B \<subseteq> Y \<and> (card A \<ge> \<epsilon> * card X) \<and> (card B \<ge> \<epsilon> * card Y)"
              "\<bar>edge_density A B G - edge_density X Y G\<bar> > \<epsilon>"
  using assms by (auto simp: not_le regular_pair_def)

lemma irregular_pair_I: 
  fixes \<epsilon>::real
  assumes "A \<subseteq> X" "B \<subseteq> Y" "(card A \<ge> \<epsilon> * card X)" "(card B \<ge> \<epsilon> * card Y)"
              "\<bar>edge_density A B G - edge_density X Y G\<bar> > \<epsilon>"
  shows "irregular_pair X Y G \<epsilon>"
  using assms  by (auto simp: not_le regular_pair_def)

lemma edge_density_Un:
  assumes "disjnt X1 X2" "finite X1" "finite X2" "finite Y"
  shows "edge_density (X1 \<union> X2) Y G = (edge_density X1 Y G * card X1 + edge_density X2 Y G * card X2) / (card X1 + card X2)"
  using assms unfolding edge_density_def
  by (simp add: all_edges_between_disjnt1 all_edges_between_Un1 finite_all_edges_between card_Un_disjnt divide_simps)

lemma edge_density_partition:
  assumes U: "finite U" "finite_graph_partition U P n" and "finite W"
  shows "edge_density U W G = (\<Sum>X\<in>P. edge_density X W G * card X) / card U"
proof -
  have "finite P"
    using assms finite_graph_partition_def by blast
  then show ?thesis
    using U 
  proof (induction P arbitrary: n U)
    case empty
    then show ?case
      by (simp add: edge_density_def finite_graph_partition_def partition_on_def)
  next
    case (insert X P)
    then have "n > 0"
      by (metis finite_graph_partition_0 gr_zeroI insert_not_empty)
    with insert.prems insert.hyps 
    have UX: "finite_graph_partition (U-X) P (n-1)"
      by (auto simp: finite_graph_partition_def partition_on_def disjnt_iff pairwise_insert)
    then have finU: "finite (\<Union>P)"
      using finite_graph_partition_equals insert by auto
    then have sumXP: "card U = card X + card (\<Union>P)"
      by (metis UX card_finite_graph_partition finite_graph_partition_equals insert.hyps insert.prems sum.insert)
    have FUX: "finite (U - X)"
      by (simp add: insert.prems)
    have XUP: "X \<union> (\<Union>P) = U"
      using finite_graph_partition_equals insert.prems(2) by auto
    then have "edge_density U W G = edge_density (X \<union> \<Union>P) W G"
      by auto
    also have "\<dots> = (edge_density X W G * card X + edge_density (\<Union>P) W G * card (\<Union>P)) 
                  / (card X + card (\<Union>P))"
    proof (rule edge_density_Un)
      show "disjnt X (\<Union>P)"
        using UX disjnt_iff finite_graph_partition_equals by auto
      show "finite X"
        using XUP \<open>finite U\<close> by blast
    qed (use \<open>finite W\<close> finU in auto)
    also have "\<dots> = (edge_density X W G * card X + edge_density (U-X) W G * card (\<Union>P)) 
                  / card U"
      using UX card_finite_graph_partition finite_graph_partition_equals insert.prems(1) insert.prems(2) sumXP by auto
    also have "\<dots> = (\<Sum>Y \<in> insert X P. edge_density Y W G * card Y) / card U"
      using UX insert.prems insert.hyps 
      apply (simp add: insert.IH [OF FUX UX] divide_simps algebra_simps finite_graph_partition_equals)
      by (metis (no_types, lifting) Diff_eq_empty_iff finite_graph_partition_empty sum.empty)
    finally show ?case .
  qed
qed


text\<open>Let @{term P}, @{term Q} be partitions of a set of vertices @{term V}. 
  Then @{term P} refines @{term Q} if for all @{term \<open>A \<in> P\<close>} there is @{term \<open>B \<in> Q\<close>} 
  such that @{term \<open>A \<subseteq> B\<close>}.\<close>

text \<open>For the sake of generality, and following Zhao's Online Lecture 
\<^url>\<open>https://www.youtube.com/watch?v=vcsxCFSLyP8&t=16s\<close>
we do not impose disjointness: we do not include @{term "i\<noteq>j"} below.\<close>

definition irregular_set:: "[real, ugraph, uvert set set] \<Rightarrow> (uvert set \<times> uvert set) set"
  where "irregular_set \<equiv> \<lambda>\<epsilon>::real. \<lambda>G P. {(R,S)|R S. R\<in>P \<and> S\<in>P \<and> irregular_pair R S G \<epsilon>}"

text\<open>A regular partition may contain a few irregular pairs as long as their total size is bounded as follows.\<close>
definition regular_partition:: "[real, ugraph, uvert set set] \<Rightarrow> bool"
  where
  "regular_partition \<equiv> \<lambda>\<epsilon>::real. \<lambda>G P . 
     partition_on (uverts G) P  \<and>
     (\<Sum>(R,S) \<in> irregular_set \<epsilon> G P. card R * card S) \<le> \<epsilon> * (card (uverts G))\<^sup>2"

lemma irregular_set_subset: "irregular_set \<epsilon> G P \<subseteq> P \<times> P"
  by (auto simp: irregular_set_def)

lemma irregular_set_swap: "(i,j) \<in> irregular_set \<epsilon> G P \<longleftrightarrow> (j,i) \<in> irregular_set \<epsilon> G P"
  by (auto simp add: irregular_set_def regular_pair_commute)

lemma finite_irregular_set [simp]: "finite P \<Longrightarrow> finite (irregular_set \<epsilon> G P)"
  by (metis finite_SigmaI finite_subset irregular_set_subset)

subsection \<open>Energy of a Graph\<close>

text \<open>Definition 3.7 (Energy), written @{term "q(\<U>,\<W>)"}\<close>
definition energy_graph_subsets:: "[uvert set, uvert set, ugraph] \<Rightarrow> real" where
  "energy_graph_subsets \<U> \<W> G \<equiv>
     card \<U> * card \<W> * (edge_density \<U> \<W> G)\<^sup>2 / (card (uverts G))\<^sup>2"

text \<open>Definition for partitions\<close>
definition energy_graph_partitions_subsets
  :: "[ugraph, uvert set set, uvert set set] \<Rightarrow> real"
  where "energy_graph_partitions_subsets G U W \<equiv> 
           \<Sum>R\<in>U.\<Sum>S\<in>W. energy_graph_subsets R S G"

lemma energy_graph_subsets_0 [simp]: 
     "energy_graph_subsets {} B G = 0" "energy_graph_subsets A {} G = 0"
  by (auto simp: energy_graph_subsets_def)

lemma energy_graph_subsets_ge0 [simp]:
  "energy_graph_subsets \<U> \<W> G \<ge> 0"
  by (auto simp: energy_graph_subsets_def)

lemma energy_graph_partitions_subsets_ge0 [simp]:
  "energy_graph_partitions_subsets G U W \<ge> 0"
  by (auto simp: sum_nonneg energy_graph_partitions_subsets_def)

lemma energy_graph_subsets_commute: 
  "energy_graph_subsets \<U> \<W> G = energy_graph_subsets \<W> \<U> G"
  by (simp add: energy_graph_subsets_def edge_density_commute)

lemma energy_graph_partitions_subsets_commute:
  "energy_graph_partitions_subsets G W U = energy_graph_partitions_subsets G U W"
  by (simp add: energy_graph_partitions_subsets_def energy_graph_subsets_commute sum.swap [where A=W])

text\<open>Definition 3.7 (Energy of a Partition), or following Gowers, mean square density:
 a version of energy for a single partition of the vertex set. \<close> 

abbreviation mean_square_density :: "[ugraph, uvert set set] \<Rightarrow> real"
  where "mean_square_density G U \<equiv> energy_graph_partitions_subsets G U U"

lemma mean_square_density: 
  "mean_square_density G U \<equiv> 
          (\<Sum>R\<in>U. \<Sum>S\<in>U. card R * card S * (edge_density R S G)\<^sup>2) / (card (uverts G))\<^sup>2"
  by (simp add: energy_graph_partitions_subsets_def energy_graph_subsets_def sum_divide_distrib)

text\<open>Observation: the energy is between 0 and 1 because the edge density is bounded above by 1.\<close>

lemma sum_partition_le:
  assumes "finite_graph_partition V P k" "finite V"
  shows "(\<Sum>R\<in>P. \<Sum>S\<in>P. real (card R * card S)) \<le> (real(card V))\<^sup>2"
proof -
  have "finite P"
    using assms finite_graph_partition_def by blast
  then show ?thesis
    using assms
  proof (induction P arbitrary: V k)
    case (insert X P)
    have [simp]: "finite Y" if "Y \<in> insert X P" for Y
      by (meson finite_graph_partition_finite insert.prems that)
    have C: "card Y \<le> card V" if"Y \<in> insert X P" for Y
      by (meson finite_graph_partition_le insert.prems that)
    have D [simp]: "(\<Sum>Y\<in>P. real (card Y)) = real (card V) - real (card X)"
      by (smt (verit) card_finite_graph_partition insert.hyps insert.prems of_nat_sum sum.cong sum.insert)
    have "disjnt X (\<Union>P)"
      using insert.prems insert.hyps
      by (auto simp add: finite_graph_partition_def disjnt_iff pairwise_insert partition_on_def)
    with insert have *: "(\<Sum>R\<in>P. \<Sum>S\<in>P. real (card R * card S)) \<le> (real (card (V - X)))\<^sup>2"
      unfolding finite_graph_partition_def
      by (simp add: lessThan_Suc partition_on_insert disjoint_family_on_insert sum.distrib)
    have [simp]: "V \<inter>X = X"
      using finite_graph_partition_equals insert.prems by blast 
    have "(\<Sum>R \<in> insert X P. \<Sum>S \<in> insert X P. real (card R * card S)) 
      = real (card X * card X) + 2 * (card V - card X) * card X
        + (\<Sum>R\<in>P. \<Sum>S\<in>P. real (card R * card S))"
      using \<open>X \<notin> P\<close> \<open>finite P\<close>
      by (simp add: C of_nat_diff sum.distrib algebra_simps flip: sum_distrib_right)
    also have "\<dots> \<le> real (card X * card X) + 2 * (card V - card X) * card X + (real (card (V - X)))\<^sup>2"
      using * by linarith
    also have "\<dots> \<le> (real (card V))\<^sup>2"
      by (simp add: of_nat_diff C card_Diff_subset_Int algebra_simps power2_eq_square)
    finally show ?case .
  qed auto
qed

lemma mean_square_density_bounded: 
  assumes "finite_graph_partition (uverts G) P k" "finite (uverts G)" 
  shows "mean_square_density G P \<le> 1"
proof-
  have \<section>: "edge_density R S G \<le> 1" for R S
    using assms of_nat_mono [OF max_all_edges_between]
    by (smt (verit) card.infinite divide_eq_0_iff edge_density_def edge_density_le1 mult_eq_0_iff of_nat_0)
  have "(\<Sum>R\<in>P. \<Sum>S\<in>P. real (card R * card S) * (edge_density R S G)\<^sup>2) 
     \<le> (\<Sum>R\<in>P. \<Sum>S\<in>P. real (card R * card S))"
    by (intro sum_mono mult_right_le_one_le) (auto simp: abs_square_le_1 edge_density_ge0 \<section>)
  also have "\<dots> \<le> (real(card (uverts G)))\<^sup>2"
    using sum_partition_le assms by blast 
  finally show ?thesis 
    by (simp add: mean_square_density divide_simps)
qed

subsection \<open>Partitioning and Energy\<close>

text\<open>Zhao's Lemma 3.8 and Gowers's remark after Lemma 11. 
 Further partitioning of subsets of the vertex set cannot make the energy decrease. 
 We follow Gowers's proof, which avoids the use of probability.\<close>

lemma energy_graph_partition_half:
  assumes fin: "finite \<U>" "finite \<W>" and U: "finite_graph_partition \<U> U n"
  shows "card \<U> * (edge_density \<U> \<W> G)\<^sup>2 \<le> (\<Sum>R\<in>U. card R * (edge_density R \<W> G)\<^sup>2)"
proof -
  have \<section>: "(\<Sum>R\<in>U. card R * edge_density R \<W> G)\<^sup>2 
         \<le> (sum card U) * (\<Sum>R\<in>U. card R * (edge_density R \<W> G)\<^sup>2)"
    by (simp add: sum_products_le)
  have "card \<U> * (edge_density \<U> \<W> G)\<^sup>2 = (\<Sum>R\<in>U. card R * (edge_density \<U> \<W> G)\<^sup>2)"
    by (metis \<open>finite \<U>\<close> U sum_distrib_right card_finite_graph_partition of_nat_sum)
  also have "\<dots> = edge_density \<U> \<W> G * (\<Sum>R\<in>U. edge_density \<U> \<W> G * card R)"
    by (simp add: sum_distrib_left power2_eq_square mult_ac)
  also have "\<dots> = (\<Sum>R\<in>U. edge_density R \<W> G * real (card R)) * edge_density \<U> \<W> G"
  proof -
    have "edge_density \<U> \<W> G * (\<Sum>R\<in>U. edge_density R \<W> G * card R) 
        = edge_density \<U> \<W> G * (edge_density \<U> \<W> G * (\<Sum>R\<in>U. card R))"
      using assms card_finite_graph_partition  by (auto simp: edge_density_partition [OF _ U])
    then show ?thesis
      by (simp add: mult.commute sum_distrib_left)
  qed
  also have "\<dots> = (\<Sum>R\<in>U. card R * edge_density R \<W> G) * edge_density \<U> \<W> G"
    by (simp add: sum_distrib_left mult_ac)
  also have "\<dots> = (\<Sum>R\<in>U. card R * edge_density R \<W> G)\<^sup>2 / card \<U>"
    using assms
    by (simp add: edge_density_partition [OF _ U] mult_ac flip: power2_eq_square)
  also have "\<dots> \<le> (\<Sum>R\<in>U. card R * (edge_density R \<W> G)\<^sup>2)"
    using \<section> U card_finite_graph_partition fin by (force simp add: mult_ac divide_simps simp flip: of_nat_sum)
  finally show ?thesis .
qed

proposition energy_graph_partition_increase:
  assumes fin: "finite \<U>" "finite \<W>" 
    and U: "finite_graph_partition \<U> U k" 
    and V: "finite_graph_partition \<W> W l"
  shows "energy_graph_partitions_subsets G U W \<ge> energy_graph_subsets \<U> \<W> G" 
proof -
  have "(card \<U> * card \<W>) * (edge_density \<U> \<W> G)\<^sup>2 = card \<W> * (card \<U> * (edge_density \<U> \<W> G)\<^sup>2)"
    using fin by (simp add: mult_ac)
  also have "\<dots> \<le> card \<W> * (\<Sum>R\<in>U. card R * (edge_density R \<W> G)\<^sup>2)"
    by (intro mult_left_mono energy_graph_partition_half fin) (use assms in auto)
  also have "\<dots> = (\<Sum>R\<in>U. card R * (card \<W> * (edge_density \<W> R G)\<^sup>2))"
    by (simp add: sum_distrib_left edge_density_commute mult_ac)
  also have "\<dots> \<le> (\<Sum>R\<in>U. card R * (\<Sum>S\<in>W. card S * (edge_density S R G)\<^sup>2))"
  proof (intro mult_left_mono energy_graph_partition_half sum_mono fin)
    show "finite R" if "R \<in> U" for R
      using that U fin finite_graph_partition_finite by blast
  qed (use assms in auto)
  also have "\<dots> \<le> (\<Sum>R\<in>U. \<Sum>S\<in>W. (card R * card S) * (edge_density R S G)\<^sup>2)"
    by (simp add: sum_distrib_left edge_density_commute mult_ac)
  finally
  have "(card \<U> * card \<W>) * (edge_density \<U> \<W> G)\<^sup>2 
    \<le> (\<Sum>R\<in>U. \<Sum>S\<in>W. (card R * card S) * (edge_density R S G)\<^sup>2)" .
  then show ?thesis
    unfolding energy_graph_partitions_subsets_def energy_graph_subsets_def
    by (simp add: divide_simps flip: sum_divide_distrib)
qed

text \<open>The following is the fully general version of Gowers's Lemma 11 and Zhao's Lemma 3.9. 
Further partitioning of subsets of the vertex set cannot make the energy decrease.
Note that @{term V} should be @{term "uverts G"} even though this more general version holds.\<close>

lemma energy_graph_partitions_subsets_increase_half:
  assumes ref: "refines V Y X" and "finite V" and part_VX: "partition_on V X"
    and U: "{} \<notin> U" "finite (\<Union>U)"
  shows "energy_graph_partitions_subsets G X U \<le> energy_graph_partitions_subsets G Y U" 
        (is "?lhs \<le> ?rhs")
proof -
  have "\<exists>F. partition_on R F \<and> F = {S\<in>Y. S \<subseteq> R}" if "R\<in>X" for R
    using ref refines_obtains_subset that by blast
  then obtain F where F: "\<And>R. R \<in> X \<Longrightarrow> partition_on R (F R) \<and> F R = {S\<in>Y. S \<subseteq> R}"
    by fastforce
  have injF: "inj_on F X"
    by (metis F inj_on_inverseI partition_on_def)
  have finite_X: "finite R" if "R \<in> X" for R
    by (metis Union_upper assms(2) part_VX finite_subset partition_on_def that)
  then have finite_F: "finite (F R)" if "R \<in> X" for R
    using that by (simp add: F)
  have dFX: "disjoint (F ` X)"
    using part_VX unfolding finite_graph_partition_def partition_def
    by (smt (verit, best) F Int_subset_iff Union_upper disjnt_iff disjointD pairwise_imageI partition_on_def subset_empty)
  have F_ne: "F R \<noteq> {}" if "R \<in> X" for R
    by (metis F Sup_empty part_VX partition_on_def that)
  have F_sums_Y: "(\<Sum>R\<in>X. \<Sum>U\<in>F R. f U) = (\<Sum>S\<in>Y. f S)" for f :: "nat set \<Rightarrow> real"
  proof -
    have Yn_eq: "Y = (\<Union>R \<in> X. F R)"
      using ref by (force simp add: refines_def dest: F)
    then have "(\<Sum>S\<in>Y. f S) = sum f (\<Union>R \<in> X. F R)"
      by blast
    also have "\<dots> = (sum \<circ> sum) f (F ` X)"
      by (smt (verit, best) dFX disjnt_def finite_F image_iff pairwiseD sum.Union_disjoint)
    also have "\<dots> = (\<Sum>R \<in> X. \<Sum>U\<in>F R. f U)"
      unfolding comp_apply by (metis injF sum.reindex_cong)
    finally show ?thesis
      by simp
  qed
  have "?lhs = (\<Sum>R \<in> X. \<Sum>T\<in>U. energy_graph_subsets R T G)"
    by (simp add: energy_graph_partitions_subsets_def)
  also have "\<dots> \<le> (\<Sum>R\<in>X. \<Sum>T\<in>U. energy_graph_partitions_subsets G (F R) {T})"
  proof -
    have "finite_graph_partition R (F R) (card (F R))"
      if "R \<in> X" for R
      by (meson F finite_F finite_graph_partition_def that) 
    moreover have "finite_graph_partition T {T} (Suc 0)"
      if "T \<in> U" for T
      using U by (metis that trivial_graph_partition_exists)
    moreover have "finite T" if "T \<in> U" for T
      using U by (meson Sup_upper infinite_super that)
    ultimately show ?thesis
      using finite_X  by (intro sum_mono energy_graph_partition_increase) auto
  qed
  also have "\<dots> = (\<Sum>R \<in> X. \<Sum>D \<in> F R. \<Sum>T\<in>U. energy_graph_subsets D T G)"
    by (simp add: energy_graph_partitions_subsets_def sum.swap [where B = "U"])
  also have "\<dots> = ?rhs"
    by (simp add: energy_graph_partitions_subsets_def F_sums_Y)
  finally show ?thesis .
qed

proposition energy_graph_partitions_subsets_increase:
  assumes refX: "refines V Y X" and refU: "refines V' W U" 
    and "finite V" "finite V'" 
  shows "energy_graph_partitions_subsets G X U \<le> energy_graph_partitions_subsets G Y W"
        (is "?lhs \<le> ?rhs")
proof -
  obtain U: "finite (\<Union>U)" "{} \<notin> U"
    using assms unfolding refines_def partition_on_def by presburger
  obtain Y: "finite (\<Union>Y)" "{} \<notin> Y"
    using assms unfolding refines_def partition_on_def by presburger
  have "?lhs \<le> energy_graph_partitions_subsets G Y U"
    using assms energy_graph_partitions_subsets_increase_half U assms
    using refines_def by blast
  also have "\<dots> = energy_graph_partitions_subsets G U Y"
    by (meson energy_graph_partitions_subsets_commute)
  also have "\<dots> \<le> energy_graph_partitions_subsets G W Y"
    using Y \<open>finite V'\<close> energy_graph_partitions_subsets_increase_half refU refines_def by blast
  also have "\<dots> = ?rhs"
    by (simp add: energy_graph_partitions_subsets_commute)
  finally show ?thesis .
qed

text \<open>The original version of Gowers's Lemma 11 and Zhao's Lemma 3.9 
      is not general enough to be used for anything.\<close>
corollary mean_square_density_increase:
  assumes "refines V Y X" "finite V"
  shows "mean_square_density G X \<le> mean_square_density G Y"
  using assms energy_graph_partitions_subsets_increase by presburger 


text\<open>The Energy Boost Lemma (Lemma 3.10 in Zhao's notes) says that an 
irregular partition increases the energy substantially. We assume that @{term "\<U> \<subseteq> uverts G"} 
and @{term "\<W> \<subseteq> uverts G"} are not irregular, as witnessed by their subsets @{term"U1 \<subseteq> \<U>"} and @{term"W1 \<subseteq> \<W>"}.
The proof follows Lemma 12 of Gowers. \<close>

definition "P2 X Y \<equiv> if X \<subset> Y then {X,Y-X} else {Y}"

lemma card_P2: "card (P2 X Y) \<le> 2"
  by (simp add: P2_def card_insert_if)

lemma sum_P2: "\<lbrakk>X \<subseteq> Y; f{} = 0\<rbrakk> \<Longrightarrow> sum f (P2 X Y) = f X + f (Y-X)"
  by (force simp add: P2_def sum.insert_if)

lemma partition_P2:
  assumes "A \<subseteq> B" "A \<noteq> {}"
  shows "partition_on B (P2 A B)"
  using assms 
  by (auto simp add: partition_on_def P2_def disjnt_iff pairwise_insert)

proposition energy_boost:
  fixes \<epsilon>::real and \<U> \<W> G
  defines "alpha \<equiv> edge_density \<U> \<W> G"
  defines "u \<equiv> \<lambda>X Y. edge_density X Y G - alpha"
  assumes "finite \<U>" "finite \<W>"
    and "U1 \<subseteq> \<U>" "W1 \<subseteq> \<W>" "\<epsilon> > 0"
    and U1: "card U1 \<ge> \<epsilon> * card \<U>" and W1: "card W1 \<ge> \<epsilon> * card \<W>"
    and gt: "\<bar>u U1 W1\<bar> > \<epsilon>"
  shows "(\<Sum>A \<in> P2 U1 \<U>. \<Sum>B \<in> P2 W1 \<W>. energy_graph_subsets A B G)
         \<ge> energy_graph_subsets \<U> \<W> G + \<epsilon>^4 * (card \<U> * card \<W>) / (card (uverts G))\<^sup>2"
          (is "?lhs \<ge> ?rhs")
proof -
  define UF where "UF \<equiv> P2 U1 \<U>"
  define WF where "WF \<equiv> P2 W1 \<W>"
  obtain [simp]: "finite \<U>" "finite \<W>"
    using assms by (meson finite_subset)
  obtain 1: "card U1 > 0" "card W1 > 0"
    using gt \<open>\<epsilon> > 0\<close> U1 W1
    by (force simp: u_def alpha_def edge_density_def mult_le_0_iff zero_less_mult_iff)
  then obtain 0: "card \<U> > 0" "card \<W> > 0"
    using assms by fastforce
  then obtain 1: "card U1 > 0" "card W1 > 0"
    by (smt (verit) U1 W1 \<open>\<epsilon> > 0\<close> of_nat_0_less_iff zero_less_mult_iff)
  then obtain [simp]: "finite U1" "finite W1"
    by (meson card_ge_0_finite)
  obtain [simp]: "W1 \<noteq> \<W> - W1" "U1 \<noteq> \<U> - U1"
    by (metis DiffD2 1 all_not_in_conv card.empty less_irrefl)
  have 2 [simp]: "card x > 0" if "x \<in> UF" for x
    using "1"(1) assms that by (auto simp: UF_def P2_def split: if_split_asm)
  have 3 [simp]: "card x > 0" if "x \<in> WF" for x
    using "1"(2) assms that by (auto simp: WF_def P2_def split: if_split_asm)
  have cardUW: "card \<U> = card U1 + card(\<U> - U1)" "card \<W> = card W1 + card(\<W> - W1)"
    using 0 1 \<open>U1 \<subseteq> \<U>\<close> \<open>W1 \<subseteq> \<W>\<close>
    by (metis card_eq_0_iff card_Diff_subset card_mono le_add_diff_inverse less_le)+
  have "\<U> = (\<U> - U1) \<union> U1" "disjnt (\<U> - U1) U1"
    using \<open>U1 \<subseteq> \<U>\<close> by (force simp: disjnt_iff)+
  then have CU: "card (all_edges_between \<U> Z G) 
          = card (all_edges_between (\<U> - U1) Z G) + card (all_edges_between U1 Z G)" 
      if "finite Z" for Z 
    by (metis \<open>finite U1\<close> all_edges_between_Un1 all_edges_between_disjnt1 \<open>finite \<U>\<close> 
        card_Un_disjnt finite_Diff finite_all_edges_between that)

  have "\<W> = (\<W> - W1) \<union> W1" "disjnt (\<W> - W1) W1"
    using \<open>W1 \<subseteq> \<W>\<close> by (force simp: disjnt_iff)+
  then have CW: "card (all_edges_between Z \<W> G) 
          = card (all_edges_between Z (\<W> - W1) G) + card (all_edges_between Z W1 G)"
    if "finite Z" for Z
    by (metis \<open>finite W1\<close> all_edges_between_Un2 all_edges_between_disjnt2 \<open>finite \<W>\<close>
        card_Un_disjnt finite_Diff2 finite_all_edges_between that)
  have *: "(\<Sum>i\<in>UF. \<Sum>j\<in>WF. real (card (all_edges_between i j G))) 
         = card (all_edges_between \<U> \<W> G)"
    by (simp add: UF_def WF_def cardUW CU CW sum_P2 \<open>U1 \<subseteq> \<U>\<close> \<open>W1 \<subseteq> \<W>\<close>)

  have **: "real (card \<U>) * real (card \<W>) = (\<Sum>i\<in>UF. \<Sum>j\<in>WF. card i * card j)"
    by (simp add: UF_def WF_def cardUW sum_P2 \<open>U1 \<subseteq> \<U>\<close> \<open>W1 \<subseteq> \<W>\<close> algebra_simps)

  let ?S = "\<Sum>i\<in>UF. \<Sum>j\<in>WF. (card i * card j) / (card \<U> * card \<W>) * (edge_density i j G)\<^sup>2"
  have \<section>: "2 * (\<Sum>i\<in>UF. \<Sum>j\<in>WF.
                 (card i * card j) / (card \<U> * card \<W>) * (edge_density i j G)) 
         = alpha + alpha * (\<Sum>i\<in>UF. \<Sum>j\<in>WF. (card i * card j) / (card \<U> * card \<W>))"
    unfolding alpha_def 
    by (simp add: * ** edge_density_def divide_simps sum_P2 \<open>U1 \<subseteq> \<U>\<close> \<open>W1 \<subseteq> \<W>\<close> flip: sum_divide_distrib)
  have "\<epsilon> * \<epsilon> \<le> u U1 W1 * u U1 W1"
    by (metis abs_ge_zero abs_mult_self_eq \<open>\<epsilon> > 0\<close> gt less_le mult_mono)
  then have "(\<epsilon>*\<epsilon>)*(\<epsilon>*\<epsilon>) \<le> (card U1 * card W1) / (card \<U> * card \<W>) * (u U1 W1)\<^sup>2"
    using 0 mult_mono [OF U1 W1]  \<open>\<epsilon> > 0\<close>
    apply (simp add: divide_simps eval_nat_numeral)
    by (smt (verit, del_insts) mult.assoc mult.commute mult_mono' of_nat_0_le_iff zero_le_mult_iff)
  also have "\<dots> \<le> (\<Sum>i\<in>UF. \<Sum>j\<in>WF.  (card i * card j) / (card \<U> * card \<W>) * (u i j)\<^sup>2)"
    by (simp add: UF_def WF_def sum_P2 \<open>U1 \<subseteq> \<U>\<close> \<open>W1 \<subseteq> \<W>\<close>)
  also have "\<dots> = ?S - 2 * alpha * (\<Sum>i\<in>UF. \<Sum>j\<in>WF. 
                         (card i * card j) / (card \<U> * card \<W>) * edge_density i j G)
                 + alpha\<^sup>2 * (\<Sum>i\<in>UF. \<Sum>j\<in>WF. (card i * card j) / (card \<U> * card \<W>))"
    by (simp add: u_def power2_diff mult_ac ring_distribs divide_simps 
          sum_distrib_left sum_distrib_right sum_subtractf sum.distrib flip: sum_divide_distrib)
  also have "\<dots> = ?S - alpha\<^sup>2"
    using \<section> by (simp add: power2_eq_square algebra_simps)
  finally have 12: "alpha\<^sup>2 + \<epsilon>^4 \<le> ?S"
    by (simp add: eval_nat_numeral)
  have "?rhs = (alpha\<^sup>2 + \<epsilon>^4) * (card \<U> * card \<W> / (card (uverts G))\<^sup>2)"
    unfolding alpha_def energy_graph_subsets_def
    by (simp add: ring_distribs divide_simps power2_eq_square)
  also have "\<dots> \<le> ?S * (card \<U> * card \<W> / (card (uverts G))\<^sup>2)"
    by (rule mult_right_mono [OF 12]) auto
  also have "\<dots> = ?lhs"
    using 0 unfolding energy_graph_subsets_def UF_def WF_def
    by (auto simp add: algebra_simps sum_P2 \<open>U1 \<subseteq> \<U>\<close> \<open>W1 \<subseteq> \<W>\<close> )
  finally show ?thesis .
qed

subsection \<open>Towards Zhao's Lemma 3.11\<close>

text\<open>Lemma 3.11 says that we can always find a refinement
that increases the energy by a certain amount.\<close>

text \<open>A necessary lemma for the tower of exponentials in the result. Angeliki's proof\<close>
lemma le_tower_2: "k * (2 ^ Suc k) \<le> 2^(2^k)"
proof (induction k rule: less_induct)
  case (less k)
  show ?case 
  proof (cases "k \<le> Suc (Suc 0)")
    case False
    define j where "j = k - Suc 0"
    have kj: "k = Suc j"
      using False j_def by force
    have "(3::nat) \<le> 2 ^ j"
      by (metis kj False Suc_leI less_trans_Suc less_exp not_less numeral_3_eq_3)
    then have \<section>: "(2^j + 3) \<le> (2::nat) ^ k"
      by (simp add: kj)
    have "k * (2 ^ Suc k) \<le> 6 * j * 2^j"
      using False by (simp add: kj)
    also have "\<dots> \<le> 6 * 2^(2^j)"
      using kj less.IH by force
    also have "\<dots> < 8 * 2^(2^j)" by simp
    also have "\<dots> = 2^(2^j + 3)"
      by (simp add: power_add) 
    also have "\<dots> \<le> 2^2^k"
      using \<section> by (metis One_nat_def less_2_cases_iff power_increasing_iff)
    finally show ?thesis
      by simp      
  qed (auto simp: le_Suc_eq)
qed


text \<open>Zhao's actual Lemma 3.11. However, the bound $m \le k 2 ^{k+1}$  
comes from a different source by Zhao: ``Graph Theory and Additive Combinatorics'', \<^url>\<open>https://yufeizhao.com/gtac/gtac17.pdf\<close>.
Zhao's original version, and Gowers', both have incorrect bounds.\<close>
proposition exists_refinement:
  assumes fgp: "finite_graph_partition (uverts G) P k" and "finite (uverts G)" 
    and irreg: "\<not> regular_partition \<epsilon> G P" and "\<epsilon> > 0"
  obtains Q where "refines (uverts G) Q P"                     
                    "mean_square_density G Q \<ge> mean_square_density G P + \<epsilon>^5" 
                    "\<And>R. R\<in>P \<Longrightarrow> card {S\<in>Q. S \<subseteq> R} \<le> 2 ^ Suc k"
                    "card Q \<le> k * 2 ^ Suc k"
proof -
  define sum_pp where "sum_pp \<equiv> (\<Sum>(R,S) \<in> irregular_set \<epsilon> G P. card R * card S)"
  have cardP: "card P = k"
    using fgp finite_graph_partition_def by force
  then have "k \<noteq> 0"
    using assms unfolding regular_partition_def irregular_set_def finite_graph_partition_def by fastforce
  with assms have G_nonempty: "0 < card (uverts G)"
    by (metis card_gt_0_iff finite_graph_partition_empty)
  have part_GP: "partition_on (uverts G) P"
    using fgp finite_graph_partition_def by blast 
  then have finP: "finite R" "R \<noteq> {}" if "R\<in>P" for R
    using assms that partition_onD3 finite_graph_partition_finite by blast+
  have spp: "sum_pp > \<epsilon> * (card (uverts G))\<^sup>2"
    by (metis irreg not_le part_GP regular_partition_def sum_pp_def)
  then have sum_irreg_pos: "sum_pp > 0"
    using \<open>\<epsilon> > 0\<close> G_nonempty less_asym by fastforce
  have "\<exists>X\<subseteq>R. \<exists>Y\<subseteq>S. \<epsilon> * card R \<le> card X \<and> \<epsilon> * card S \<le> card Y \<and>
                     \<bar>edge_density X Y G - edge_density R S G\<bar> > \<epsilon>"
    if "(R,S) \<in> irregular_set \<epsilon> G P" for R S
    using that fgp finite_graph_partition_subset by (simp add: irregular_set_def regular_pair_def not_le) 
  then obtain X0 Y0 
    where XY0_psub_P: "\<And>R S. \<lbrakk>(R,S) \<in> irregular_set \<epsilon> G P\<rbrakk> \<Longrightarrow> X0 R S \<subseteq> R \<and> Y0 R S \<subseteq> S"
    and XY0_eps:
    "\<And>R S. (R,S) \<in> irregular_set \<epsilon> G P
        \<Longrightarrow> \<epsilon> * card R \<le> card (X0 R S) \<and> \<epsilon> * card S \<le> card (Y0 R S) \<and>
            \<bar>edge_density (X0 R S) (Y0 R S) G - edge_density R S G\<bar> > \<epsilon>"
    by metis
  obtain iP where iP: "bij_betw iP P {..<k}"
    by (metis fgp finite_graph_partition_def to_nat_on_finite cardP)
  define X where "X \<equiv> \<lambda>R S. if iP R < iP S then Y0 S R else X0 R S"
  define Y where "Y \<equiv> \<lambda>R S. if iP R < iP S then X0 S R else Y0 R S"
  have XY_psub_P: "\<And>R S. \<lbrakk>(R,S) \<in> irregular_set \<epsilon> G P\<rbrakk> \<Longrightarrow> X R S \<subseteq> R \<and> Y R S \<subseteq> S"
    using XY0_psub_P by (force simp: X_def Y_def irregular_set_swap)
  have XY_eps:
    "\<And>R S. (R,S) \<in> irregular_set \<epsilon> G P
        \<Longrightarrow> \<epsilon> * card R \<le> card (X R S) \<and> \<epsilon> * card S \<le> card (Y R S) \<and>
            \<bar>edge_density (X R S) (Y R S) G - edge_density R S G\<bar> > \<epsilon>"
    using XY0_eps by (force simp: X_def Y_def edge_density_commute irregular_set_swap)
  have card_elem_P: "card R > 0" if "R\<in>P" for R
    by (metis card_eq_0_iff finP neq0_conv that)
  have XY_nonempty: "X R S \<noteq> {}" "Y R S \<noteq> {}" if "(R,S) \<in> irregular_set \<epsilon> G P" for R S
    using XY_eps [OF that] that \<open>\<epsilon> > 0\<close> card_elem_P [of R] card_elem_P [of S]
    by (auto simp: irregular_set_def mult_le_0_iff)

  text\<open>By the assumption that our partition is irregular, there are many irregular pairs.
       For each irregular pair, find pairs of subsets that witness irregularity.\<close>
  define XP where "XP R \<equiv> ((\<lambda>S. P2 (X R S) R) ` {S. (R,S) \<in> irregular_set \<epsilon> G P})" for R
  define YP where "YP S \<equiv> ((\<lambda>R. P2 (Y R S) S) ` {R. (R,S) \<in> irregular_set \<epsilon> G P})" for S

  text \<open>include degenerate partition to ensure it works whether or not there's an irregular pair\<close>
  define PP where "PP \<equiv> \<lambda>R. insert {R} (XP R \<union> YP R)"
  define QS where "QS R \<equiv> common_refinement (PP R)" for R
  define r where "r R \<equiv> card (QS R)" for R
  have "finite P"
    using fgp finite_graph_partition_def by blast
  then have finPP: "finite (PP R)" for R
    by (simp add: PP_def XP_def YP_def irregular_set_def)
  have inPP_fin: "P \<in> PP R \<Longrightarrow> finite P" for P R
    by (auto simp: PP_def XP_def YP_def P2_def)
  have finite_QS: "finite (QS R)" for R
    by (simp add: QS_def finPP finite_common_refinement inPP_fin)

  have part_QS: "partition_on R (QS R)" if "R \<in> P" for R
    unfolding QS_def
  proof (intro partition_on_common_refinement partition_onI)
    show "\<And>\<A>. \<A> \<in> PP R \<Longrightarrow> {} \<notin> \<A>"
      using that XY_nonempty XY_psub_P finP(2) 
      by (fastforce simp add: PP_def XP_def YP_def P2_def)
  qed (auto simp: disjnt_iff PP_def XP_def YP_def P2_def dest: XY_psub_P)

  have part_P_QS: "finite_graph_partition R (QS R) (r R)" if "R\<in>P" for R
    by (simp add: finite_QS finite_graph_partition_def part_QS r_def that)
  then have fin_SQ [simp]: "finite (QS R)" if "R\<in>P" for R
    using QS_def finite_QS by force
  have QS_ne: "{} \<notin> QS R" if "R\<in>P" for R
    using QS_def part_QS partition_onD3 that by blast 
  have QS_subset_P: "q \<in> QS R \<Longrightarrow> q \<subseteq> R" if "R\<in>P" for R q
    by (meson finite_graph_partition_subset part_P_QS that)
  then have QS_inject: "R = R'" 
    if "R\<in>P" "R'\<in>P" "q \<in> QS R" "q \<in> QS R'" for R R' q
    by (metis UnionI disjnt_iff equals0I pairwiseD part_GP part_QS partition_on_def that)
  define Q where "Q \<equiv> (\<Union>R\<in>P. QS R)"
  define m where "m \<equiv> \<Sum>R\<in>P. r R"
  show thesis
  proof
    show ref_QP: "refines (uverts G) Q P"
      unfolding refines_def
    proof (intro conjI strip part_GP)
      fix X
      assume "X \<in> Q"
      then show "\<exists>Y\<in>P. X \<subseteq> Y"
        by (metis QS_subset_P Q_def UN_iff)
    next
      show "partition_on (uverts G) Q"
      proof (intro conjI partition_onI)
        show "\<Union>Q = uverts G"
        proof
          show "\<Union>Q \<subseteq> uverts G"
            using QS_subset_P Q_def fgp finite_graph_partition_equals by fastforce
          show "uverts G \<subseteq> \<Union>Q"
            by (metis Q_def Sup_least UN_upper Union_mono part_GP part_QS partition_onD1)
        qed
        show "disjnt p q" if "p \<in> Q" and "q \<in> Q" and "p \<noteq> q" for p q
        proof -
          from that 
          obtain R S where "R\<in>P" "S\<in>P" 
            and *: "p \<in> QS R" "q \<in> QS S"
            by (auto simp: Q_def QS_def)
          show ?thesis
          proof (cases "R=S")
            case True
            then show ?thesis
              using part_QS [of R]
              by (metis \<open>R \<in> P\<close> * pairwiseD partition_on_def \<open>p \<noteq> q\<close>)
          next
            case False
            then show ?thesis
              by (metis Union_upper \<open>R \<in> P\<close> \<open>S \<in> P\<close> disjnt_iff * in_mono pairwiseD part_GP part_QS partition_onD1 partition_onD2)
          qed
        qed
        show "{} \<notin> Q"
          using QS_ne Q_def by blast
      qed
    qed 
    have disj_QSP: "disjoint_family_on QS P"
      unfolding disjoint_family_on_def by (metis Int_emptyI QS_inject)
    let ?PP = "P \<times> P"
    let ?REG = "?PP - irregular_set \<epsilon> G P"
    define sum_eps where "sum_eps \<equiv> (\<Sum>(R,S) \<in> irregular_set \<epsilon> G P. \<epsilon>^4 * (card R * card S) / (card (uverts G))\<^sup>2)"
    have A: "energy_graph_subsets R S G + \<epsilon>^4 * (card R * card S) / (card (uverts G))\<^sup>2
          \<le> energy_graph_partitions_subsets G (P2 (X R S) R) (P2 (Y R S) S)"
          (is "?L \<le> ?R")
          if *: "(R,S) \<in> irregular_set \<epsilon> G P" for R S
    proof -
      have "R\<in>P" "S\<in>P"
        using * by (auto simp: irregular_set_def)
      have "?L \<le> (\<Sum>A \<in> P2 (X R S) R. \<Sum>B \<in> P2 (Y R S) S. energy_graph_subsets A B G)"
        using XY_psub_P [OF *] XY_eps [OF *] assms
        by (intro energy_boost \<open>R \<in> P\<close> \<open>S \<in> P\<close> finP \<open>\<epsilon>>0\<close>) auto
      also have "\<dots> \<le> ?R"
        by (simp add: energy_graph_partitions_subsets_def)
      finally show ?thesis .
    qed
    have B: "energy_graph_partitions_subsets G (P2 (X R S) R) (P2 (Y R S) S)
          \<le> energy_graph_partitions_subsets G (QS R) (QS S)"
      if "(R,S) \<in> irregular_set \<epsilon> G P" for R S
    proof -
      have "R\<in>P" "S\<in>P" using that by (auto simp: irregular_set_def)
      have [simp]: "\<not> X R S \<subset> R \<longleftrightarrow> X R S = R" "\<not> Y R S \<subset> S \<longleftrightarrow> Y R S = S"
        using XY_psub_P that by blast+
      have XPX: "P2 (X R S) R \<in> PP R"
        using that by (simp add: PP_def XP_def)
      have I: "partition_on R (QS R)"
        using QS_def \<open>R \<in> P\<close> part_QS by force
      moreover have "\<forall>q \<in> QS R. \<exists>b \<in> P2 (X R S) R. q \<subseteq> b"
        using common_refinement_exists [OF _ XPX] by (simp add: QS_def)
      ultimately have ref_XP: "refines R (QS R) (P2 (X R S) R)"
        by (simp add: refines_def XY_nonempty XY_psub_P that partition_P2)
      have YPY: "P2 (Y R S) S \<in> PP S"
        using that by (simp add: PP_def YP_def)
      have J: "partition_on S (QS S)"
        using QS_def \<open>S \<in> P\<close> part_QS by force
      moreover have "\<forall>q \<in> QS S. \<exists>b \<in> P2 (Y R S) S. q \<subseteq> b"
        using common_refinement_exists [OF _ YPY] by (simp add: QS_def)
      ultimately have ref_YP: "refines S (QS S) (P2 (Y R S) S)"
        by (simp add: XY_nonempty XY_psub_P that partition_P2 refines_def)
      show ?thesis
        using \<open>R \<in> P\<close> \<open>S \<in> P\<close>
        by (simp add: finP energy_graph_partitions_subsets_increase [OF ref_XP ref_YP])
    qed
    have "mean_square_density G P + \<epsilon>^5 \<le> mean_square_density G P + sum_eps"
    proof -
      have "\<epsilon>^5 = (\<epsilon> * (card (uverts G))\<^sup>2) * (\<epsilon>^4 / (card (uverts G))\<^sup>2)"
        using G_nonempty by (simp add: field_simps eval_nat_numeral)
      also have "\<dots> \<le> sum_pp * (sum_eps / sum_pp)"
      proof (rule mult_mono)
        show "\<epsilon>^4 / real ((card (uverts G))\<^sup>2) \<le> sum_eps / sum_pp"
          using sum_irreg_pos sum_eps_def sum_pp_def
          by (auto simp add: case_prod_unfold sum.neutral simp flip: sum_distrib_left sum_divide_distrib of_nat_sum of_nat_mult)
      qed (use spp sum_nonneg in auto)
      also have "\<dots> \<le> sum_eps"
        by (simp add: sum_irreg_pos)
      finally show ?thesis by simp
    qed
    also have "\<dots> = (\<Sum>(i,j)\<in>?REG. energy_graph_subsets i j G) 
                   + (\<Sum>(i,j)\<in>irregular_set \<epsilon> G P. energy_graph_subsets i j G) + sum_eps"
      by (simp add: \<open>finite P\<close> energy_graph_partitions_subsets_def sum.cartesian_product irregular_set_subset sum.subset_diff)
    also have "\<dots> \<le> (\<Sum>(i,j) \<in> ?REG. energy_graph_subsets i j G)
                   + (\<Sum>(i,j) \<in> irregular_set \<epsilon> G P. energy_graph_partitions_subsets G (P2 (X i j) i) (P2 (Y i j) j))"
      using A unfolding sum_eps_def case_prod_unfold
      by (force intro: sum_mono simp flip: sum.distrib)
    also have "\<dots> \<le> (\<Sum>(i,j) \<in> ?REG. energy_graph_partitions_subsets G (QS i) (QS j))
                   + (\<Sum>(i,j) \<in> irregular_set \<epsilon> G P. energy_graph_partitions_subsets G (P2 (X i j) i) (P2 (Y i j) j))"
      by (auto simp: finP intro!: part_P_QS sum_mono energy_graph_partition_increase)
    also have "\<dots> \<le> (\<Sum>(i,j) \<in> ?REG. energy_graph_partitions_subsets G (QS i) (QS j)) 
                  + (\<Sum>(i,j) \<in> irregular_set \<epsilon> G P. energy_graph_partitions_subsets G (QS i) (QS j))"
      using B
    proof (intro sum_mono add_mono ordered_comm_monoid_add_class.sum_mono2)
    qed (auto split: prod.split)
    also have "\<dots> = (\<Sum>(i,j) \<in> ?PP. energy_graph_partitions_subsets G (QS i) (QS j))"
      by (metis (no_types, lifting) \<open>finite P\<close> finite_SigmaI irregular_set_subset sum.subset_diff)
    also have "\<dots> = (\<Sum>i\<in>P. \<Sum>j\<in>P. energy_graph_partitions_subsets G (QS i) (QS j))"
      by (simp flip: sum.cartesian_product)
    also have "\<dots> = (\<Sum>A \<in> Q. \<Sum>B \<in> Q. energy_graph_subsets A B G)"
      unfolding energy_graph_partitions_subsets_def Q_def
      by (simp add: disj_QSP \<open>finite P\<close> sum.UNION_disjoint_family sum.swap [of _ "P" "QS _"])
    also have "\<dots> = mean_square_density G Q"
      by (simp add: mean_square_density energy_graph_subsets_def sum_divide_distrib)
    finally show "mean_square_density G P + \<epsilon> ^ 5 \<le> mean_square_density G Q" .

    define QinP where "QinP \<equiv> \<lambda>i. {j\<in>Q. j \<subseteq> i}"
    show card_QP: "card (QinP i) \<le> 2 ^ Suc k"
      if "i \<in> P" for i 
    proof -
      have less_cardP: "iP i < k"
        using iP bij_betwE that by blast
      have card_cr: "card (QS i) \<le> 2 ^ Suc k"
      proof -
        have "card (QS i) \<le> prod card (PP i)"
          by (simp add: QS_def card_common_refinement finPP inPP_fin) 
        also have "\<dots> = prod card (XP i \<union> YP i)"
          using finPP by (simp add: PP_def prod.insert_if)
        also have "\<dots> \<le> 2 ^ Suc k" 
        proof (rule prod_le_power)
          define XS where "XS \<equiv> (\<Union>R \<in> {R\<in>P. iP R \<le> iP i}. {P2 (X0 i R) i})"
          define YS where "YS \<equiv> (\<Union>R \<in> {R\<in>P. iP R \<ge> iP i}. {P2 (Y0 R i) i})"
          have 1: "{R \<in> P. iP R \<le> iP i} \<subseteq> iP -` {..iP i} \<inter> P"
            by auto
          have "card XS \<le> card {R \<in> P. iP R \<le> iP i}"
            by (force simp add: XS_def \<open>finite P\<close> intro: order_trans [OF card_UN_le])
          also have "\<dots> \<le> card (iP -` {..iP i} \<inter> P)"
            using 1 by (simp add: \<open>finite P\<close> card_mono)
          also have "\<dots> \<le> Suc (iP i)"
            by (metis card_vimage_inj_on_le bij_betw_def card_atMost finite_atMost iP)
          finally have cXS: "card XS \<le> Suc (iP i)" .
          have 2: "{R \<in> P. iP R \<ge> iP i} \<subseteq> iP -` {iP i..<k} \<inter> P"
            by clarsimp (meson bij_betw_apply iP lessThan_iff nat_less_le)
          have "card YS \<le> card {R \<in> P. iP R \<ge> iP i}"
            by (force simp add: YS_def \<open>finite P\<close> intro: order_trans [OF card_UN_le])
          also have "\<dots> \<le> card (iP -` {iP i..<k} \<inter> P)"
            using 2 by (simp add: \<open>finite P\<close> card_mono)
          also have "\<dots> \<le> card {iP i..<k}"
            by (meson bij_betw_def card_vimage_inj_on_le finite_atLeastLessThan iP)
          finally have "card YS \<le> k - iP i" 
            by simp
          with less_cardP cXS have k': "card XS + card YS \<le> Suc k"
            by linarith
          have finXYS: "finite (XS \<union> YS)"
            unfolding XS_def YS_def using \<open>finite P\<close> by (auto intro: finite_vimageI) 
          have "XP i \<union> YP i \<subseteq> XS \<union> YS"
            apply (simp add: XP_def X_def YP_def Y_def XS_def YS_def irregular_set_def image_def subset_iff)
            by (metis insert_iff linear not_le)
          then have "card (XP i \<union> YP i) \<le> card XS + card YS"
            by (meson card_Un_le card_mono finXYS order_trans)
          then show "card (XP i \<union> YP i) \<le> Suc k"
            using k' le_trans by blast
          fix x
          assume "x \<in> XP i \<union> YP i"
          then show "0 \<le> card x \<and> card x \<le> 2"
            using XP_def YP_def card_P2 by force
        qed auto
        finally show ?thesis .
      qed
      have "i' = i" if "q \<subseteq> i" "i'\<in>P" "q \<in> QS i'" for i' q
        by (metis QS_ne QS_subset_P \<open>i \<in> P\<close> disjnt_iff equals0I pairwiseD part_GP partition_on_def subset_eq that)
      then have "QinP i \<subseteq> QS i"
        by (auto simp: QinP_def Q_def)
      then have "card (QinP i) \<le> card (QS i)"
        by (simp add: card_mono that)
      also have "\<dots> \<le> 2 ^ Suc k"
        using QS_def card_cr by presburger
      finally show ?thesis .
    qed
    have "card Q = card (\<Union> (QS ` P))"
      unfolding Q_def ..
    also have "\<dots> \<le> card (\<Union>i\<in>P. QinP i)"
    proof (rule card_mono)
      show "(\<Union> (QS ` P)) \<subseteq> (\<Union>i\<in>P. QinP i)"
        using ref_QP QS_subset_P Q_def QinP_def by blast
      show "finite (\<Union>i\<in>P. QinP i)"
        by (simp add: Q_def QinP_def \<open>finite P\<close>)
    qed 
    also have "\<dots> \<le> (\<Sum>i\<in>P. card (QinP i))"
      using card_UN_le \<open>finite P\<close> by blast
    also have "\<dots> \<le> (\<Sum>i\<in>P. 2 ^ Suc k)"
      using card_QP sum_mono by force
    finally show "card Q \<le> k * 2 ^ Suc k" 
      by (simp add: cardP)
  qed
qed

subsection \<open>The Regularity Proof Itself\<close>

text\<open>Szemerédi's Regularity Lemma is Theorem 3.5 in Zhao's notes.\<close>

text\<open>We start with a trivial partition (one part). If it is already $\epsilon$-regular, we are done. If
not, we refine it by applying lemma @{thm[source]"exists_refinement"} above, which increases the
energy. We can repeat this step, but it cannot increase forever: by @{thm [source]
mean_square_density_bounded} it cannot exceed~1. This defines an algorithm that must stop
after at most $\epsilon^{-5}$ steps, resulting in an $\epsilon$-regular partition.\<close>
theorem Szemeredi_Regularity_Lemma:
  assumes "\<epsilon> > 0"
  obtains M where "\<And>G. card (uverts G) > 0 \<Longrightarrow> \<exists>P. regular_partition \<epsilon> G P \<and> card P \<le> M"
proof 
  fix G
  assume "card (uverts G) > 0"
  then obtain finG: "finite (uverts G)" and nonempty: "uverts G \<noteq> {}"
    by (simp add: card_gt_0_iff) 
  define \<Phi> where "\<Phi> \<equiv> \<lambda>Q P. refines (uverts G) Q P \<and> 
                                 mean_square_density G Q \<ge> mean_square_density G P + \<epsilon>^5 \<and> 
                                 card Q \<le> card P * 2 ^ Suc (card P)"
  define nxt where "nxt \<equiv> \<lambda>P. if regular_partition \<epsilon> G P then P else SOME Q. \<Phi> Q P"
  define iter where "iter \<equiv> \<lambda>i. (nxt ^^ i) {uverts G}"
  define last where "last \<equiv> Suc (nat\<lceil>1 / \<epsilon> ^ 5\<rceil>)"
  have iter_Suc [simp]: "iter (Suc i) = nxt (iter i)" for i
    by (simp add: iter_def)
  have \<Phi>: "\<Phi> (nxt P) P"
    if Pk: "partition_on (uverts G) P" and irreg: "\<not> regular_partition \<epsilon> G P" for P
  proof -
    have "finite_graph_partition (uverts G) P (card P)"
      by (meson Pk finG finite_elements finite_graph_partition_def)
    then show ?thesis
      using that exists_refinement [OF _ finG irreg assms] irreg Pk
      apply (simp only: nxt_def if_False)
      by (metis (no_types, lifting) \<Phi>_def someI)
  qed
  have partition_on: "partition_on (uverts G) (iter i)" for i
  proof (induction i)
    case 0
    then show ?case
      by (simp add: iter_def nonempty trivial_graph_partition_exists partition_on_space)
  next
    case (Suc i)
    with \<Phi> show ?case
      by (metis \<Phi>_def iter_Suc nxt_def refines_def)
  qed
  have False if irreg: "\<And>i. i\<le>last \<Longrightarrow> \<not> regular_partition \<epsilon> G (iter i)"
  proof -
    have \<Phi>_loop: "\<Phi> (nxt (iter i)) (iter i)" if "i\<le>last" for i
      using \<Phi> irreg partition_on that by blast
    have iter_grow: "mean_square_density G (iter i) \<ge> i * \<epsilon>^5" if "i\<le>last" for i
      using that
    proof (induction i)
      case (Suc i)
      then show ?case
        by (clarsimp simp: algebra_simps) (smt (verit, best) Suc_leD \<Phi>_def \<Phi>_loop)
    qed (auto simp: iter_def)
    have "last * \<epsilon>^5 \<le> mean_square_density G (iter last)"
      by (simp add: iter_grow)
    also have "\<dots> \<le> 1"
      by (meson finG finite_elements finite_graph_partition_def mean_square_density_bounded partition_on)
    finally have "real last * \<epsilon> ^ 5 \<le> 1" .
    with assms show False
      unfolding last_def by (meson lessI natceiling_lessD not_less pos_divide_less_eq zero_less_power)
  qed
  then obtain i where "i \<le> last" and "regular_partition \<epsilon> G (iter i)"
    by force
  then have reglar: "regular_partition \<epsilon> G (iter (i + d))" for d
    by (induction d) (auto simp add: nxt_def)
  define tower where "tower \<equiv> \<lambda>k. (power(2::nat) ^^ k) 2"
  have [simp]: "tower (Suc k) = 2 ^ tower k" for k
    by (simp add: tower_def)
  have iter_tower: "card (iter i) \<le> tower (2*i)" for i
  proof (induction i)
    case (Suc i)
    then have Qm: "card (iter i) \<le> tower (2 * i)"
      by simp
    then have *: "card (nxt (iter i)) \<le> card (iter i) * 2 ^ Suc (card (iter i))"
      using \<Phi> by (simp add: \<Phi>_def nxt_def partition_on)
    also have "\<dots> \<le> 2 ^ 2 ^ tower (2 * i)"
      by (metis One_nat_def Suc.IH le_tower_2 lessI numeral_2_eq_2 order.trans power_increasing_iff)
    finally show ?case
      by (simp add: Qm)
  qed (auto simp: iter_def tower_def)
  then show "\<exists>P. regular_partition \<epsilon> G P \<and> card P \<le> tower(2 * last)"
    by (metis \<open>i \<le> last\<close> nat_le_iff_add reglar)
qed 

text \<open>The actual value of the bound is visible above: a tower of exponentials of height $2(1 + \epsilon^{-5})$.\<close>

end
