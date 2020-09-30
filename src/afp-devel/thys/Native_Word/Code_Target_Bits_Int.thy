(*  Title:      Code_Target_Bits_Int.thy
    Author:     Andreas Lochbihler, ETH Zurich
*)

chapter \<open>Implementation of bit operations on int by target language operations\<close>

theory Code_Target_Bits_Int
imports
  Bits_Integer
  "HOL-Library.Code_Target_Int"
begin

declare [[code drop:
  "(AND) :: int \<Rightarrow> _" "(OR) :: int \<Rightarrow> _" "(XOR) :: int \<Rightarrow> _" "(NOT) :: int \<Rightarrow> _"
  "lsb :: int \<Rightarrow> _" "set_bit :: int \<Rightarrow> _" "test_bit :: int \<Rightarrow> _"
  "shiftl :: int \<Rightarrow> _" "shiftr :: int \<Rightarrow> _"
  int_of_integer_symbolic
  ]]

context
includes integer.lifting
begin

lemma bitAND_int_code [code]:
  "int_of_integer i AND int_of_integer j = int_of_integer (i AND j)"
by transfer simp

lemma bitOR_int_code [code]:
  "int_of_integer i OR int_of_integer j = int_of_integer (i OR j)"
by transfer simp

lemma bitXOR_int_code [code]:
  "int_of_integer i XOR int_of_integer j = int_of_integer (i XOR j)"
by transfer simp

lemma bitNOT_int_code [code]:
  "NOT (int_of_integer i) = int_of_integer (NOT i)"
by transfer simp

context
begin

qualified definition even :: \<open>int \<Rightarrow> bool\<close>
  where [code_abbrev]: \<open>even = Parity.even\<close>

end

lemma [code]:
  \<open>Code_Target_Bits_Int.even i \<longleftrightarrow> i AND 1 = 0\<close>
  by (simp add: Code_Target_Bits_Int.even_def even_iff_mod_2_eq_zero and_one_eq)

lemma bin_rest_code:
  "bin_rest (int_of_integer i) = int_of_integer (bin_rest_integer i)"
  by transfer simp

declare bitval_bin_last [code_unfold]

declare bin_nth_conv_AND [code_unfold]

lemma test_bit_int_code [code]: "int_of_integer x !! n = x !! n"
by transfer simp

lemma lsb_int_code [code]: "lsb (int_of_integer x) = lsb x"
by transfer simp

lemma set_bit_int_code [code]: "set_bit (int_of_integer x) n b = int_of_integer (set_bit x n b)"
by transfer simp

lemma shiftl_int_code [code]: "int_of_integer x << n = int_of_integer (x << n)"
by transfer simp

lemma shiftr_int_code [code]: "int_of_integer x >> n = int_of_integer (x >> n)"
by transfer simp

lemma int_of_integer_symbolic_code [code]:
  "int_of_integer_symbolic = int_of_integer"
by(simp add: int_of_integer_symbolic_def)

end

end
