chapter \<open>Generated by Lem from \<open>maybe.lem\<close>.\<close>

theory "Lem_maybe" 

imports
  Main
  "Lem_bool"
  "Lem_basic_classes"
  "Lem_function"

begin 

 

\<comment> \<open>\<open>open import Bool Basic_classes Function\<close>\<close>

\<comment> \<open>\<open> ========================================================================== \<close>\<close>
\<comment> \<open>\<open> Basic stuff                                                                \<close>\<close>
\<comment> \<open>\<open> ========================================================================== \<close>\<close>

\<comment> \<open>\<open>type maybe 'a = 
  | Nothing
  | Just of 'a\<close>\<close>


\<comment> \<open>\<open>val maybeEqual : forall 'a. Eq 'a => maybe 'a -> maybe 'a -> bool\<close>\<close>
\<comment> \<open>\<open>val maybeEqualBy : forall 'a. ('a -> 'a -> bool) -> maybe 'a -> maybe 'a -> bool\<close>\<close>

fun maybeEqualBy  :: "('a \<Rightarrow> 'a \<Rightarrow> bool)\<Rightarrow> 'a option \<Rightarrow> 'a option \<Rightarrow> bool "  where 
     " maybeEqualBy eq None None = ( True )"
|" maybeEqualBy eq None (Some _) = ( False )"
|" maybeEqualBy eq (Some _) None = ( False )"
|" maybeEqualBy eq (Some x') (Some y') = ( (eq x' y'))"
  


fun maybeCompare  :: "('b \<Rightarrow> 'a \<Rightarrow> ordering)\<Rightarrow> 'b option \<Rightarrow> 'a option \<Rightarrow> ordering "  where 
     " maybeCompare cmp None None = ( EQ )"
|" maybeCompare cmp None (Some _) = ( LT )"
|" maybeCompare cmp (Some _) None = ( GT )"
|" maybeCompare cmp (Some x') (Some y') = ( cmp x' y' )"


definition instance_Basic_classes_Ord_Maybe_maybe_dict  :: " 'a Ord_class \<Rightarrow>('a option)Ord_class "  where 
     " instance_Basic_classes_Ord_Maybe_maybe_dict dict_Basic_classes_Ord_a = ((|

  compare_method = (maybeCompare 
  (compare_method   dict_Basic_classes_Ord_a)),

  isLess_method = (\<lambda> m1 .  (\<lambda> m2 .  maybeCompare 
  (compare_method   dict_Basic_classes_Ord_a) m1 m2 = LT)),

  isLessEqual_method = (\<lambda> m1 .  (\<lambda> m2 .  ((let r = (maybeCompare 
  (compare_method   dict_Basic_classes_Ord_a) m1 m2) in (r = LT) \<or> (r = EQ))))),

  isGreater_method = (\<lambda> m1 .  (\<lambda> m2 .  maybeCompare 
  (compare_method   dict_Basic_classes_Ord_a) m1 m2 = GT)),

  isGreaterEqual_method = (\<lambda> m1 .  (\<lambda> m2 .  ((let r = (maybeCompare 
  (compare_method   dict_Basic_classes_Ord_a) m1 m2) in (r = GT) \<or> (r = EQ)))))|) )"


\<comment> \<open>\<open> ----------------------- \<close>\<close>
\<comment> \<open>\<open> maybe                   \<close>\<close>
\<comment> \<open>\<open> ----------------------- \<close>\<close>

\<comment> \<open>\<open>val maybe : forall 'a 'b. 'b -> ('a -> 'b) -> maybe 'a -> 'b\<close>\<close>
\<comment> \<open>\<open>let maybe d f mb=  match mb with 
  | Just a -> f a
  | Nothing -> d
end\<close>\<close>

\<comment> \<open>\<open> ----------------------- \<close>\<close>
\<comment> \<open>\<open> isJust / isNothing      \<close>\<close>
\<comment> \<open>\<open> ----------------------- \<close>\<close>

\<comment> \<open>\<open>val isJust : forall 'a. maybe 'a -> bool\<close>\<close>
\<comment> \<open>\<open>let isJust mb=  match mb with 
  | Just _ -> true
  | Nothing -> false
end\<close>\<close>

\<comment> \<open>\<open>val isNothing : forall 'a. maybe 'a -> bool\<close>\<close>
\<comment> \<open>\<open>let isNothing mb=  match mb with 
  | Just _ -> false
  | Nothing -> true
end\<close>\<close>

\<comment> \<open>\<open> ----------------------- \<close>\<close>
\<comment> \<open>\<open> fromMaybe               \<close>\<close>
\<comment> \<open>\<open> ----------------------- \<close>\<close>

\<comment> \<open>\<open>val fromMaybe : forall 'a. 'a -> maybe 'a -> 'a\<close>\<close>
\<comment> \<open>\<open>let fromMaybe d mb=  match mb with
   | Just v  -> v
   | Nothing -> d
end\<close>\<close>

\<comment> \<open>\<open> ----------------------- \<close>\<close>
\<comment> \<open>\<open> map                     \<close>\<close>
\<comment> \<open>\<open> ----------------------- \<close>\<close>

\<comment> \<open>\<open>val map : forall 'a 'b. ('a -> 'b) -> maybe 'a -> maybe 'b\<close>\<close> 
\<comment> \<open>\<open>let map f=  maybe Nothing (fun v -> Just (f v))\<close>\<close>


\<comment> \<open>\<open> ----------------------- \<close>\<close>
\<comment> \<open>\<open> bind                    \<close>\<close>
\<comment> \<open>\<open> ----------------------- \<close>\<close>

\<comment> \<open>\<open>val bind : forall 'a 'b. maybe 'a -> ('a -> maybe 'b) -> maybe 'b\<close>\<close> 
\<comment> \<open>\<open>let bind mb f=  maybe Nothing f mb\<close>\<close>
end
