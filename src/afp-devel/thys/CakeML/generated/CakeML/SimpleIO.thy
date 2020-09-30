chapter \<open>Generated by Lem from \<open>semantics/ffi/simpleIO.lem\<close>.\<close>

theory "SimpleIO" 

imports
  Main
  "HOL-Library.Datatype_Records"
  "LEM.Lem_pervasives"
  "LEM.Lem_pervasives_extra"
  "Lib"
  "Ffi"

begin 

\<comment> \<open>\<open>open import Pervasives\<close>\<close>
\<comment> \<open>\<open>open import Pervasives_extra\<close>\<close>
\<comment> \<open>\<open>open import Lib\<close>\<close>
\<comment> \<open>\<open>open import Ffi\<close>\<close>

datatype_record simpleIO = 
 input ::"  8 word llist " 
 output0 ::"  8 word llist " 


\<comment> \<open>\<open>val isEof : oracle_function simpleIO\<close>\<close>
fun isEof  :: " simpleIO \<Rightarrow>(8 word)list \<Rightarrow>(8 word)list \<Rightarrow>(simpleIO)oracle_result "  where 
     " isEof st conf ([]) = ( Oracle_fail )"
|" isEof st conf (x # xs) = ( Oracle_return st ((if(input   st) = LNil then of_nat (( 1 :: nat)) else of_nat (( 0 :: nat)))# xs))"


\<comment> \<open>\<open>val getChar : oracle_function simpleIO\<close>\<close>
fun getChar  :: " simpleIO \<Rightarrow>(8 word)list \<Rightarrow>(8 word)list \<Rightarrow>(simpleIO)oracle_result "  where 
     " getChar st conf ([]) = ( Oracle_fail )"
|" getChar st conf (x # xs) = (
      (case  lhd'(input   st) of
        Some y => Oracle_return (( st (| input := (Option.the (ltl'(input   st))) |))) (y # xs)
      | _ => Oracle_fail
      ))"


\<comment> \<open>\<open>val putChar : oracle_function simpleIO\<close>\<close>
definition putChar  :: " simpleIO \<Rightarrow>(8 word)list \<Rightarrow>(8 word)list \<Rightarrow>(simpleIO)oracle_result "  where 
     " putChar st conf input1 = (
  (case  input1 of
    [] => Oracle_fail
  | x # _ => Oracle_return (( st (| output0 := (LCons x(output0   st)) |))) input1
  ))"


\<comment> \<open>\<open>val exit : oracle_function simpleIO\<close>\<close>
definition exit0  :: " simpleIO \<Rightarrow>(8 word)list \<Rightarrow>(8 word)list \<Rightarrow>(simpleIO)oracle_result "  where 
     " exit0 st conf input1 = ( Oracle_diverge )"


\<comment> \<open>\<open>val simpleIO_oracle : oracle simpleIO\<close>\<close>
definition simpleIO_oracle  :: " string \<Rightarrow> simpleIO \<Rightarrow>(8 word)list \<Rightarrow>(8 word)list \<Rightarrow>(simpleIO)oracle_result "  where 
     " simpleIO_oracle s st conf input1 = (
  if s = (''isEof'') then
    isEof st conf input1
  else if s = (''getChar'') then
    getChar st conf input1
  else if s = (''putChar'') then
    putChar st conf input1
  else if s = (''exit'') then
    exit0 st conf input1
  else
    Oracle_fail )"

end
