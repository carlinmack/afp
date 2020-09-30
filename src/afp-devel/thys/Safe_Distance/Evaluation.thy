\<^marker>\<open>creator "Albert Rizaldi" "Fabian Immler\<close>

section \<open>Evaluation\<close>

theory Evaluation
imports
  Safe_Distance
  "HOL-Library.Float"
begin

subsection \<open>Code Generation Setup for Numeric Values\<close>

definition real_div_down :: "nat \<Rightarrow> int \<Rightarrow> int \<Rightarrow> real" where 
  "real_div_down p i j = truncate_down (Suc p) (i / j)"

definition real_div_up :: "nat \<Rightarrow> int \<Rightarrow> int \<Rightarrow> real" where 
  "real_div_up p i j = truncate_up (Suc p) (i / j)"

context includes float.lifting begin
lift_definition float_div_down :: "nat \<Rightarrow> int \<Rightarrow> int \<Rightarrow> float" is real_div_down
  by (simp add: real_div_down_def)

lift_definition float_div_up :: "nat \<Rightarrow> int \<Rightarrow> int \<Rightarrow> float" is real_div_up
  by (simp add: real_div_up_def)
end

lemma compute_float_div_up[code]: "float_div_up p i j = - float_div_down p (-i) j"
  including float.lifting
  by transfer (simp add: real_div_up_def real_div_down_def truncate_up_eq_truncate_down)

lemma compute_float_div_down[code]:
  "float_div_down prec m1 m2 = lapprox_rat (Suc prec) m1 m2"
  including float.lifting by transfer (simp add: real_div_down_def)

definition real2_of_real :: "nat \<Rightarrow> real \<Rightarrow> (real * real)" where
  "real2_of_real p x = (truncate_down (Suc p) x, truncate_up (Suc p) x)"

context includes float.lifting begin
lift_definition float2_of_real :: "nat \<Rightarrow> real \<Rightarrow> float \<times> float" is real2_of_real
  by (auto simp: real2_of_real_def)
end

definition float2_opt_of_real :: "nat \<Rightarrow> real \<Rightarrow> float interval option" where
  "float2_opt_of_real prec x = Interval' (fst (float2_of_real prec x)) (snd (float2_of_real prec x))"

hide_const (open) Fraction_Field.Fract
lemma real_of_rat_Fract[simp]: "real_of_rat (Fract a b) = a / b"
  by (simp add: Fract_of_int_quotient of_rat_divide)

lemma [code]: "float2_of_real p (Ratreal r) =
  (let (a, b) = quotient_of r in
  (float_div_down p a b, float_div_up p a b))"
  including float.lifting
  apply transfer
  apply (auto split: prod.split simp: real2_of_real_def real_div_down_def real_div_up_def)
  apply (metis of_rat_divide of_rat_of_int_eq quotient_of_div)+
  done

fun real_of_dec :: "integer \<times> integer \<Rightarrow> real" where
  "real_of_dec (m, e) =
    real_of_int (int_of_integer m) *
      (if e \<ge> 0 then 10 ^ (nat_of_integer e) else inverse (10 ^ (nat (-(int_of_integer e)))))"

lemma "real_of_dec (m, e) = int_of_integer m * 10 powr (int_of_integer e)"
proof -
  have 1: "e \<ge> 0 \<Longrightarrow> real (nat_of_integer e) = real_of_int (int_of_integer e)"
    using less_eq_integer.rep_eq nat_of_integer.rep_eq by auto
  have 2: "e \<le> 0 \<Longrightarrow> real_of_int (int_of_integer e) = - real (nat (- int_of_integer e))"
    using less_eq_integer.rep_eq by auto
  show ?thesis
    using 1
    apply (auto simp: powr_realpow[symmetric] divide_simps)
    apply (subst (asm) 2)
    apply (auto simp: powr_add[symmetric])
    done
qed

subsection \<open>Data Evaluation\<close>

definition trans6 where
  "trans6 c chk    se     ve     ae     so     vo     ao =
            chk (c se) (c ve) (c ae) (c so) (c vo) (c ao)"

definition checker_dec where 
  "checker_dec chk p u = 
    trans6 (float2_opt_of_real (nat_of_integer u) o real_of_dec) (chk (nat_of_integer p))"

definition "checker_interval = checker_dec checker'"
definition "checker_symbolic = trans6 real_of_dec symbolic_checker"
definition "checker_rational = trans6 real_of_dec checker"
lemmas[code] = movement.p_def

ML \<open>
  exception InvalidArgument of string;

  fun split_string s = String.fields (fn c => c = the (Char.fromString s))

  fun dec_of_string s =
    case split_string "." s
    of [r] => (the (IntInf.fromString r), 0)
    | [d1, d2] => (the (IntInf.fromString (d1 ^ d2)), ~ (String.size d2))
    | _ => raise (InvalidArgument s)

  fun check_string chk data =
    case split_string "," data of
      [_, so, _, ve, ae, _, vo, ao] => chk data (0, 0)
        (dec_of_string ve) (dec_of_string ae) (dec_of_string so) (dec_of_string vo) (dec_of_string ao)
    | _ => raise (InvalidArgument data)
\<close>

text \<open>The precision of the input data is roughly 12 and yields similar performance as Sturm\<close>

ML \<open>
val prec = 12

fun check_stream' chk i n y s =
  case TextIO.inputLine s of
    NONE   => (TextIO.closeIn s; (y, i))
  | SOME l =>
    let
      val l = String.substring (l, 0, String.size l - 1)
      val c = check_string chk l
    in
      if i < n then check_stream' chk (i + 1) n (if c then y + 1 else y) s
      else (TextIO.closeIn s; (y, i))
    end

fun check_stream chk f n = check_stream' chk 0 n 0 (TextIO.openIn f)

val check_stream_symbolic            = check_stream (fn _ => @{code checker_symbolic})
fun check_stream_interval prec uncer = check_stream (fn _ => @{code checker_interval} prec uncer)
val check_stream_rational            = check_stream (fn _ => @{code checker_rational})
\<close>

text \<open>Number of data points:
  \<^item> data01: 1121215
  \<^item> data02: 1341135
  \<^item> data03: 1452656
\<close>

ML \<open>
  val data01 = "./data/data01.csv"
  val data02 = "./data/data02.csv"
  val data03 = "./data/data03.csv"
\<close>

ML \<open>
    val t_start1 = Timing.start ();
    check_stream_rational data01 100;
    val t_end1 = Timing.result t_start1;
\<close>

ML \<open>
    val t_start2 = Timing.start ();
    check_stream_rational data02 100;
    val t_end2 = Timing.result t_start2;
\<close>

ML \<open>
    val t_start3 = Timing.start ();
    check_stream_rational data03 100;
    val t_end3 = Timing.result t_start3;
\<close>

text \<open>Precision: 12, Uncertainty: 7 digits\<close>
ML \<open>check_stream_interval 12 7 data01 100\<close> 
ML \<open>check_stream_rational data01 100\<close>
ML \<open>check_stream_symbolic data01 100\<close>

end
