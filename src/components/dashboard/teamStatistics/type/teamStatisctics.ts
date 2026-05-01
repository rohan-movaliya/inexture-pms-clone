export type TeamStatusDataItem = {
  name: string;
    value: string;    
    count: string;
    color: string;
};

export type TeamStatusData = {
    data: TeamStatusDataItem[];
    overall: number;
    total_employee: number;
};