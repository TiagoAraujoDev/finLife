import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

const createNewTransactionSchema = zod.object({
  description: zod.string(),
  amount: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"]),
});

type TransactionFormData = zod.infer<typeof createNewTransactionSchema>;

export const NewTransactionModal = () => {
  const { createTransaction } = useContext(TransactionsContext);
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<TransactionFormData>({
    resolver: zodResolver(createNewTransactionSchema),
    defaultValues: {
      description: '',
      category: "",
      amount: 0,
      type: "income",
    },
  });

  const handleCreateNewTransaction = async (data: TransactionFormData) => {
    await createTransaction(data);
    reset();
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>New Transaction</Dialog.Title>
        {/* Form... */}
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Amount"
            required
            {...register("amount", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register("category")}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Income
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Outcome
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />
          <button type="submit" disabled={isSubmitting}>
            Add transaction
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
