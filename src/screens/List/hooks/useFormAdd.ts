import { useForm } from "react-hook-form";
import { TGroceryItem, TVal } from "../../../shared/models/models";
import {
  EPriorityOptions,
  EStatusOptions,
} from "../../../shared/constants/constants";
import { useState } from "react";
import { addGroceryItem } from "../../../shared/helpers/mutateList";

export default function useFormAdd() {
  const {
    control,
    handleSubmit,
    reset,
    formState: {
      errors: { name: errorName },
    },
  } = useForm({
    defaultValues: {
      name: "",
      count: "0",
    },
  });

  const [priority, setPriority] = useState<number>(EPriorityOptions[0]);
  const [status, setStatus] = useState<string>(EStatusOptions[0]);

  const onChangePriority = (value: TVal): void => {
    Number(value) && setPriority(Number(value));
  };

  const onChangeStatus = (value: TVal): void => {
    String(value) && setStatus(String(value));
  };

  const onSubmit = handleSubmit(({ name, count }) => {
    const item: TGroceryItem = {
      id: Date.now(),
      name,
      count: Number(count),
      priority,
      status,
      date: new Date(),
    };

    addGroceryItem(item);

    reset();
    setPriority(EPriorityOptions[0]);
    setStatus(EStatusOptions[0]);
  });

  return {
    control,
    onSubmit,
    onChangePriority,
    onChangeStatus,
    priority,
    status,
    errorName,
  };
}
