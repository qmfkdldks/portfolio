import type { WithTranslation } from "react-i18next";
import type { Moment } from "moment";

export interface IComponentProps extends WithTranslation {
  onDateChange: (range: any) => void;
}

export interface IDateTimeRange {
  from: Moment;
  to: Moment;
  groupBy: string;
}
