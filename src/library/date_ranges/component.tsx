import React from "react";
import { DateRange } from "react-date-range";
import { IComponentProps } from "./types";
import { Container, Button, Dropdown } from "./style";
import {
  today,
  yesterday,
  thisWeek,
  thisMonth,
  customDateTime,
} from "./ranges";
import useDropdown from "../../hooks/useDropdown";

const DateRanges: React.FC<IComponentProps> = ({ t, onDateChange }) => {
  const [openDropdown, setOpenDropDown, containerRef] = useDropdown();

  const [dateRange, setDateRange] = React.useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <Container>
      <Button
        type="button"
        onClick={() => {
          onDateChange(today());
        }}
      >
        {t("Today")}
      </Button>
      <Button
        type="button"
        onClick={() => {
          onDateChange(yesterday());
        }}
      >
        {t("Yesterday")}
      </Button>
      <Button
        type="button"
        onClick={() => {
          onDateChange(thisWeek());
        }}
      >
        {t("This Week")}
      </Button>
      <Button
        type="button"
        onClick={() => {
          onDateChange(thisMonth());
        }}
      >
        {t("This Month")}
      </Button>

      <div style={{ display: "inline-block" }} ref={containerRef}>
        <Button
          id="calendar-menu"
          onClick={() => {
            setOpenDropDown((prev) => !prev);
          }}
        >
          {t("select-dates")}
        </Button>
        <Dropdown active={openDropdown}>
          <DateRange
            onChange={(item: any) => {
              setDateRange([item.selection]);
              onDateChange(
                customDateTime(item.selection.startDate, item.selection.endDate)
              );
            }}
            ranges={dateRange}
            rangeColors={["#4285f4"]}
          />
        </Dropdown>
      </div>
    </Container>
  );
};

export default DateRanges;
