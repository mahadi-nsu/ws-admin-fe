export interface IEmployee {
  alwaysCheck: boolean;
  alwaysCheckSdid: boolean;
  blocked: boolean;
  checkAlco: boolean;
  checkSdid: boolean;
  checkTemperature: boolean;
  companyId: number;
  createDateTime: Date;
  doRecognition: boolean;
  employeeNumber: number;
  id: number;
  name: string;
  position: string;
  randomTesting: boolean;
  subdivisionId: number;
  surname: string;
  takePhoto: boolean;
  updateDateTime: Date;
  useTestValidity: boolean;
  rfid: string;
  rfidLength: string;
  rfidType: string;
}

export interface IMeasurement {
  blowingTemperatureFraud: boolean;
  companyId: number;
  dateTime: any;
  deviceId: number;
  employeeNumber: number;
  endTime: number;
  id: number;
  lateMeas: number;
  latitude: number;
  longitude: number;
  measurementResult: number;
  mini: boolean;
  partnerId: string;
  processorId: string;
  status: string;
  strawless: boolean;
  temperatureMeasurementResult: string;
  testType: number;
  timeZoneOffset: string;
  workTimeStatus: string;
}

export interface IMeasurementPhotoDetail {
  faceFound: boolean;
  faceSignature: number[];
  id: number;
  measurementId: number;
  photoFileName: string;
  faceMatchScoreCompanyLimit?: number;
  faceMatchScoreIdealLimit?: number;
  faceRecognisedCompanyLimit?: boolean;
  faceRecognisedIdealLimit?: boolean;
  tryCountFaceRecognisedCompanyLimit?: number;
  tryCountFaceRecognisedIdealLimit?: number;
}

export interface ISubdivision {
  companyId: number;
  id: number;
  isNoSubdivision: boolean;
  minPromile: number;
  name: string;
}

export interface IMeasurementTemperatureDetails {
  cheeksTemperature: number;
  dateTime: Date;
  environmentTemperature: number;
  faceTemperature: number;
  foreheadTemperature: number;
  fpaTemperature: number;
  id: number;
  innerCanthusTemperature: number;
  measurementId: number;
  noseTemperature: number;
  reliability: number;
  sensorTemperature: number;
  tempFileHeight: number;
  tempFileName: string;
  tempFileWidth: number;
  tempStatus: number;
  temperature: number;
  timeAfterKeyframe: number;
}

export interface IEventsResponse {
  companyName: string;
  employee: IEmployee;
  maxMeasurementPromiles: number;
  measurement: IMeasurement;
  measurementPhotoDetail: IMeasurementPhotoDetail;
  subdivision: ISubdivision;
  measurementTemperatureDetails: IMeasurementTemperatureDetails;
}
