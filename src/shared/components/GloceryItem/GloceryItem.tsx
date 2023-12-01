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
  styles,
} from "./gloceryItemStyle";
import { TGloceryItem } from "../../models/models";
import { EStatus } from "../../constants/constants";
import moment from "moment";
import Typography from "../Typography";
import RemoceIcon from "../../../../assets/remove.png";
import DoneIcon from "../../../../assets/done.png";
import WarnIcon from "../../../../assets/warn.png";
// TODO:

interface IGloceryItemProps {
  data: TGloceryItem;
  onToggle: (item: TGloceryItem) => void;
  onRemove: (item: TGloceryItem) => void;
  onDetails: (id: number) => void;
}

const GloceryItem: React.FC<IGloceryItemProps> = ({
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

        <Typography>{data.name}</Typography>
      </MainTouchable>
      <RemoveTouchable onPress={() => onRemove(data)}>
        <IconImage source={RemoceIcon} />
      </RemoveTouchable>
    </ContainerView>
  );
};

export default React.memo(GloceryItem);
