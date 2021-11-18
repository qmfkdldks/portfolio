import moment from "moment";
import { IDateTimeRange } from "./types";

export const today = (): IDateTimeRange => {
  return {
    from: moment().startOf("day"),
    to: moment().endOf("day"),
    groupBy: "hour",
  };
};

export const yesterday = (): IDateTimeRange => {
  return {
    from: moment().subtract(1, "days").startOf("day"),
    to: moment().subtract(1, "days").endOf("day"),
    groupBy: "hour",
  };
};

export const thisWeek = (): IDateTimeRange => {
  return {
    from: moment().startOf("week"),
    to: moment().endOf("week"),
    groupBy: "day",
  };
};

export const thisMonth = (): IDateTimeRange => {
  return {
    from: moment().startOf("month"),
    to: moment().endOf("month"),
    groupBy: "day",
  };
};

export const customDateTime = (
  startDate: Date,
  endDate: Date
): IDateTimeRange => {
  return {
    from: moment(startDate).startOf("day"),
    to: moment(endDate).endOf("day"),
    groupBy: "day",
  };
};
