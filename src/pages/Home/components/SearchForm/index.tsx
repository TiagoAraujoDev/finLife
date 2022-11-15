import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";

import { TransactionsContext } from "../../../../contexts/TransactionsContext";

import { SearchFormContainer } from "./styles";

const SearchTransactionsFormSchema = zod.object({
  query: zod.string(),
});

type SearchTransactionsFormData = zod.infer<
  typeof SearchTransactionsFormSchema
>;

export const SearchForm = () => {
  const { fetchTransactions } = useContext(TransactionsContext);
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SearchTransactionsFormData>({
    resolver: zodResolver(SearchTransactionsFormSchema),
    defaultValues: {
      query: "",
    },
  });

  const handleSearchTransaction = async (data: SearchTransactionsFormData) => {
    await fetchTransactions(data.query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Search for transactions..."
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
};
