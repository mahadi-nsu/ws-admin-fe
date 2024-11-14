export interface IUser {
  accountType: string;
  activatableCompanies: any[];
  activeCompany: ActiveCompany;
  actualCompanyBlocked: boolean;
  email: string;
  id: number;
  isNoSubdivisionManager: boolean;
  language: string;
  name: string;
  objects: any[];
  permission: string[];
  role: string;
  subdivisions: any[];
  surname: string;
  timeZone: string;
}

export interface ActiveCompany {
  blocked: boolean;
  countOvertime: boolean;
  countTime: boolean;
  enableSchedules: boolean;
  enabledServices: string[];
  id: number;
  isTestCompany: boolean;
  language: string;
  name: string;
  partnerId: string;
  randomTesting: boolean;
  stopTime: number;
  trackAirTemp: boolean;
  usedDeviceTypes: string[];
  userLimit: number;
  workTimeManual: boolean;
}
