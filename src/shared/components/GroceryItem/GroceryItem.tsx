import React, { useMemo } from "react";
import {
  ContainerView,
  MainTouchable,
  RemoveTouchable,
  StatusTouchable,
  RowView,
  BoldText,
  SubText,
  IconImage,
  StartRowView,
  styles,
} from "./groceryItemStyle";
import { TGroceryItem } from "../../models/models";
import { EStatus } from "../../constants/constants";
import moment from "moment";
import Typography from "../Typography";
import RemoceIcon from "../../../../assets/remove.png";
import DoneIcon from "../../../../assets/done.png";
import WarnIcon from "../../../../assets/warn.png";
// TODO:

interface IGroceryItemProps {
  data: TGroceryItem;
  onToggle: (item: TGroceryItem) => void;
  onRemove: (item: TGroceryItem) => void;
  onDetails: (id: number) => void;
}

const GroceryItem: React.FC<IGroceryItemProps> = ({
  data,
  onToggle,
  onRemove,
  onDetails,
}) => {
  const isOut: boolean = useMemo(() => data.status === EStatus.out, [data]);

  return (
    <ContainerView>
      <StatusTouchable
        onPress={() => onToggle(data)}
        style={[isOut ? styles.warningStatusStyle : {}]}
      >
        {isOut ? (
          <IconImage source={WarnIcon} />
        ) : (
          <IconImage source={DoneIcon} />
        )}
      </StatusTouchable>
      <MainTouchable onPress={() => onDetails(data.id)}>
        <RowView>
          <SubText>
            Priority: <BoldText>{data.priority}</BoldText>
          </SubText>

          <SubText>upd.: {moment(data.date).format("h:mm a, DD.MM")}</SubText>
        </RowView>

        <StartRowView>
          <Typography>{data.name}</Typography>
          {Number(data.count) ? <Typography>({data.count})</Typography> : null}
        </StartRowView>
      </MainTouchable>
      <RemoveTouchable onPress={() => onRemove(data)}>
        <IconImage source={RemoceIcon} />
      </RemoveTouchable>
    </ContainerView>
  );
};

export default React.memo(GroceryItem);
