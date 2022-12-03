export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

interface IData {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export const data: IData = {
  report: [
    {
      id: 'id1',
      source: 'Salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'id2',
      source: 'YouTube',
      amount: 2500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'id3',
      source: 'Food',
      amount: 1000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
