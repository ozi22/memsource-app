export interface IDomain {
  name: string;
  id: string;
  uid: string;
}

export interface ISubDomain {
  name: string;
  id: string;
  uid: string;
}

export interface IOwner {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  role: string;
  id: string;
  uid: string;
}

export interface IReference {
  id: string;
  filename: string;
  note: string;
}

export interface IMachineTranslateSettings {
  id: string;
  uid: string;
  name: string;
  type: string;
}

export interface IMtSettingsPerLanguageList {
  targetLang: string;
  machineTranslateSettings: IMachineTranslateSettings;
}

export interface IContent {
  uid: string;
  internalId: number;
  id: string;
  name: string;
  dateCreated: string;
  domain: IDomain;
  subDomain: ISubDomain;
  owner: IOwner;
  sourceLang: string;
  targetLangs: string[];
  references: IReference[];
  mtSettingsPerLanguageList: IMtSettingsPerLanguageList[];
  userRole: string;
  status: string;
}

export interface IProjects {
  totalElements: number;
  totalPages: number;
  pageSize: number;
  pageNumber: number;
  numberOfElements: number;
  content: IContent[];
}


export interface IDomain {
  name: string;
  id: string;
  uid: string;
}

export interface ISubDomain {
  name: string;
  id: string;
  uid: string;
}

export interface IOwner {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  role: string;
  id: string;
  uid: string;
}

export interface IReference {
  id: string;
  filename: string;
  note: string;
}

export interface IMachineTranslateSettings {
  id: string;
  uid: string;
  name: string;
  type: string;
}

export interface IMtSettingsPerLanguageList {
  targetLang: string;
  machineTranslateSettings: IMachineTranslateSettings;
}

export interface IProgress {
  totalCount: number;
  finishedCount: number;
  overdueCount: number;
}

export interface IClient {
  id: string;
  uid: string;
  name: string;
}

export interface ICostCenter {
  name: string;
  id: string;
  uid: string;
}

export interface IBusinessUnit {
  name: string;
  id: string;
  uid: string;
}

export interface ICreatedBy {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  role: string;
  id: string;
  uid: string;
}

export interface IWorkflowStep {
  id: number;
  abbreviation: string;
  name: string;
  workflowLevel: number;
  workflowStep: {};
}

export interface IVendorOwner {
  type: string;
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
}

export interface IVendor {
  id: string;
  uid: string;
  name: string;
}

export interface IProject {
  uid: string;
  internalId: number;
  id: string;
  name: string;
  dateCreated: string;
  domain: IDomain;
  subDomain: ISubDomain;
  owner: IOwner;
  sourceLang: string;
  targetLangs: string[];
  references: IReference[];
  mtSettingsPerLanguageList: IMtSettingsPerLanguageList[];
  userRole: string;
  shared: boolean;
  progress: IProgress;
  client: IClient;
  costCenter: ICostCenter;
  businessUnit: IBusinessUnit;
  dateDue: string;
  status: string;
  purchaseOrder: string;
  isPublishedOnJobBoard: boolean;
  note: string;
  createdBy: ICreatedBy;
  qualityAssuranceSettings: {};
  workflowSteps: IWorkflowStep[];
  analyseSettings: {};
  accessSettings: {};
  financialSettings: {};
  vendorOwner: IVendorOwner;
  vendor: IVendor;
}
