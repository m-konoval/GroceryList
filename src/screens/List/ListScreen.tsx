import React from "react";
import {
  SafeArea,
  ScreenView,
  HeadView,
  ContentView,
  TitleText,
  RowView,
  ErrorText,
  SubText,
  styles,
} from "./listScreenStyle";
import Button from "../../shared/components/Button";
import { Controller } from "react-hook-form";
import { FormView, Input } from "./listScreenStyle";
import LineSelector from "../../shared/components/LineSelector";
import useFormAdd from "./hooks/useFormAdd";
import {
  EPriorityOptions,
  EStatusOptions,
} from "../../shared/constants/constants";
import useListDispay, { FilterOptions } from "./hooks/useListDispay";
import GloceryItem from "../../shared/components/GloceryItem";
import Typography from "../../shared/components/Typography";

const ListScreen: React.FC = () => {
  const {
    control,
    onSubmit,
    onChangePriority,
    onChangeStatus,
    priority,
    status,
    errorName,
  } = useFormAdd();

  const {
    dispalyList,
    onToggleItemStatus,
    onRemoveItem,
    onChangeFilter,
    onGoToDetails,
    filter,
  } = useListDispay();

  return (
    <SafeArea>
      <ScreenView>
        <HeadView>
          <TitleText>Hello! This is your glocery list.</TitleText>

          <FormView>
            <Controller
              control={control}
              rules={{
                minLength: 3,
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  placeholder="Enter product name "
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                />
              )}
              name="name"
            />
            {errorName && (
              <ErrorText>Please, enter more than 3 symbols</ErrorText>
            )}

            <RowView>
              <LineSelector
                values={EPriorityOptions}
                value={priority}
                select={onChangePriority}
                label="Priority:"
              />

              <LineSelector
                values={EStatusOptions}
                value={status}
                select={onChangeStatus}
                label="Status:"
              />
            </RowView>

            <Button
              onPress={onSubmit}
              label="Add"
              style={styles.buttonStyle}
              fullWidth
            />
          </FormView>
        </HeadView>

        <ContentView>
          <RowView>
            <LineSelector
              values={FilterOptions}
              value={filter}
              select={onChangeFilter}
            />

            <SubText>Items: {dispalyList.length}</SubText>
          </RowView>

          {dispalyList?.length ? (
            dispalyList.map((item) => (
              <GloceryItem
                key={item.id}
                data={item}
                onRemove={onRemoveItem}
                onToggle={onToggleItemStatus}
                onDetails={onGoToDetails}
              />
            ))
          ) : (
            <Typography>No Items:</Typography>
          )}
        </ContentView>
      </ScreenView>
    </SafeArea>
  );
};

export default ListScreen;
