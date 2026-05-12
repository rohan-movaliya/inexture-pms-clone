type TableData = {
  headers: string[];
  rows: string[][];
};

type OverviewItem = {
  label: string;
  value: string;
  color?: string;
};

export type ModalContentProps = {
  title: string;
  overview: OverviewItem[];
  tabledata: TableData;
};

type RowItem = {
  label: string;
  value: string;
};

export type LeaveAndAttendanceOverviewProps = {
  title: string;
  headline: string;
  headline_color?: string;
  rows: RowItem[];
  iconSrc: string;
  modalContent: ModalContentProps;
};

