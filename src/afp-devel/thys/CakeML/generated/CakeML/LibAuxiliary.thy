chapter \<open>Generated by Lem from \<open>misc/lem_lib_stub/lib.lem\<close>.\<close>

theory "LibAuxiliary" 

imports
  Main
  "HOL-Library.Datatype_Records"
  "LEM.Lem_pervasives"
  "LEM.Lem_list_extra"
  "LEM.Lem_string"
  "Coinductive.Coinductive_List"
  "Lib"

begin 


\<comment> \<open>\<open>**************************************************\<close>\<close>
\<comment> \<open>\<open>                                                  \<close>\<close>
\<comment> \<open>\<open> Termination Proofs                               \<close>\<close>
\<comment> \<open>\<open>                                                  \<close>\<close>
\<comment> \<open>\<open>**************************************************\<close>\<close>

termination lunion by lexicographic_order



end
