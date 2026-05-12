type TableData = {
  headers: string[];
  rows: string[][];
};

type OverviewItem = {
  label: string;
  value: number;
  color?: string;
};

export type ModalContentProps = {
  title: string;
  overview: OverviewItem[];
  tabledata: TableData;
};

type RowItem = {
  label: string;
  value: number;
};

export type LeaveAndAttendanceOverviewProps = {
  title: string;
  headline: number;
  headline_color?: string;
  rows: RowItem[];
  iconSrc: string;
  modalContent: ModalContentProps;
};

