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
  officialsWithOffices: OfficialWithOffice[];
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

export interface OfficialWithOffice extends Official {
  office: Office;
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
// ================== Selected Elections Data ==================

export interface ElectionItem {
  election: {
    id: string;
    name: string;
    electionDay: string;
    ocdDivisionId: string;
  };
  normalizedInput: NormalizedAddressInput;
  contests: Contest[];
  kind: string;
  state: StateInfo[];
}

export interface StateInfo {
  name: string;
  electionAdministrationBody: {
    name: string;
    electionInfoUrl: string;
    electionRegistrationUrl: string;
    electionRegistrationConfirmationUrl: string;
    absenteeVotingInfoUrl: string;
    votingLocationFinderUrl: string;
    ballotInfoUrl: string;
    correspondenceAddress: NormalizedAddressInput;
  };
  sources: Source[];
}

export interface Source {
  name: string;
  official: boolean;
}

export interface Contest {
  type: string;
  office: string;
  level: string[];
  roles: string[];
  district: District;
  sources: Source[];
  candidates: Candidate[];
}

export interface District {
  name: string;
  scope: string;
  id: string;
}

export interface Candidate {
  name: string;
  party: string;
  candidateUrl: string;
  channels: Channel[];
}