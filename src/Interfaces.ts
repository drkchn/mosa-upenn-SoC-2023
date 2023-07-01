export interface UserData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

// ================== Representatives Data =====================

export interface RepresentativeDataResponse {
  normalizedInput: NormalizedAddressInput;
  kind: string;
  divisions: any;
  offices: Office[];
  officials: Official[];
}

export interface NormalizedAddressInput {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

export interface Office {
  name: string;
  divisionId: string;
  levels: string[];
  roles: string[];
  officialIndices: number[];
}

export interface Official {
  name: string;
  address: NormalizedAddressInput[];
  party: string;
  phones: string[];
  urls: string[];
  channels: Channel[];
}

export interface Channel {
  type: string;
  id: string;
}

// ================== Representatives Data =====================

// ================== Available Elections Data =================
export interface AvailableElectionsDataResponse {
  kind: string;
  elections: Election[];
}

export interface Election {
  id: string;
  name: string;
  electionDay: string;
  ocdDivisionId: string;
}
// ================== Available Elections Data =================
