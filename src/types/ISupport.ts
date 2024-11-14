export interface IArea {
  name: string;
  value: string;
}

export interface IDevice {
  alcCreatedOn: string;
  companyId: number;
  id: number;
  name: string;
  partnerId: string;
  processorId: string;
  taken: number;
  modification: string;
}

export interface IServiceDeskTicketType {
  availableToCustomer: boolean;
  id: number;
  name: string;
  partnerId: string;
  sendReminder: boolean;
}

export interface ISupportPresets {
  area: IArea[];
  devices: IDevice[];
  serviceDeskTicketTypes: IServiceDeskTicketType[];
}
