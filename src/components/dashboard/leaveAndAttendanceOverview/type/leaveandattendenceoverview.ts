type TableData = {
  headers: string[];
  rows: React.ReactNode[][];
};

type OverviewItem = {
  label: string;
  value: number | string;
  color?: string;
};

export type ModalContentProps = {
  title: string;
  overview: OverviewItem[];
  tabledata: TableData;
};

type RowItem = {
  label: string;
  value: number | string;
};

export type LeaveAndAttendanceOverviewProps = {
  title: string;
  headline: number | string;
  headline_color?: string;
  rows: RowItem[];
  iconSrc: string;
  modalContent: ModalContentProps;
};
