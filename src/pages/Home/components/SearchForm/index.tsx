import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchFormContainer } from "./styles";

const SearchTransactionsFormSchema = zod.object({
  query: zod.string(),
});

type SearchTransactionsFormData = zod.infer<
  typeof SearchTransactionsFormSchema
>;

export const SearchForm = () => {
  const { handleSubmit, register } = useForm<SearchTransactionsFormData>({
    resolver: zodResolver(SearchTransactionsFormSchema),
    defaultValues: {
      query: "",
    },
  });

  const handleSearchTransaction = (data: SearchTransactionsFormData) => {
    console.log(data.query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Search for transactions..."
        {...register("query")}
      />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
};
