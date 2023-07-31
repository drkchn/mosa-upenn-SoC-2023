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


//{
//     "election": {
//         "id": "2000",
//         "name": "VIP Test Election",
//         "electionDay": "2025-06-06",
//         "ocdDivisionId": "ocd-division/country:us"
//     },
//     "normalizedInput": {
//         "line1": "336 Briar Patch",
//         "city": "Mountainside",
//         "state": "NJ",
//         "zip": "0709"
//     },
//     "contests": [
//         {
//             "type": "General",
//             "office": "US Senate",
//             "level": [
//                 "country"
//             ],
//             "roles": [
//                 "legislatorUpperBody"
//             ],
//             "district": {
//                 "name": "New Jersey",
//                 "scope": "statewide",
//                 "id": "ocd-division/country:us/state:nj"
//             },
//             "sources": [
//                 {
//                     "name": "Ballot Information Project",
//                     "official": false
//                 }
//             ],
//             "candidates": [
//                 {
//                     "name": "Cory Booker",
//                     "party": "Democratic",
//                     "candidateUrl": "http://corybooker.com/",
//                     "channels": [
//                         {
//                             "type": "YouTube",
//                             "id": "https://www.youtube.com/channel/UC0rt6GK1jP3gCtPVRtt4EPQ"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "Jeff Bell",
//                     "party": "Republican",
//                     "candidateUrl": "http://bell2014.com/",
//                     "channels": [
//                         {
//                             "type": "Facebook",
//                             "id": "https://www.facebook.com/BellforNJ"
//                         },
//                         {
//                             "type": "Twitter",
//                             "id": "https://twitter.com/JeffBell2014"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "Joseph Baratelli",
//                     "party": "Libertarian",
//                     "candidateUrl": "http://joeforsenate.com/",
//                     "channels": [
//                         {
//                             "type": "Facebook",
//                             "id": "https://www.facebook.com/BaratelliforSenate"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "Jeff Boss",
//                     "party": "Independent",
//                     "candidateUrl": "http://www.bossforsenate.com/",
//                     "channels": [
//                         {
//                             "type": "Twitter",
//                             "id": "https://twitter.com/JeffBoss4Senate"
//                         },
//                         {
//                             "type": "YouTube",
//                             "id": "https://www.youtube.com/channel/UCvuDswUPaKbf8AOqeM-dEhQ"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "Eugene Martin Lavergne",
//                     "party": "D-R Party",
//                     "candidateUrl": "http://democratic-republicanparty.org/vote-for-eugene-martin-lavergne-for-nj-senator-vote-the-middle/"
//                 },
//                 {
//                     "name": "Antonio N. Sabas",
//                     "party": "Independent",
//                     "candidateUrl": "http://antonionsabas4ussenate.nationbuilder.com/",
//                     "channels": [
//                         {
//                             "type": "Facebook",
//                             "id": "https://www.facebook.com/AntonioSabasNJ"
//                         },
//                         {
//                             "type": "Twitter",
//                             "id": "https://twitter.com/sabas_antonio"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "Hank Schroeder",
//                     "party": "Economic Growth"
//                 }
//             ]
//         },
//         {
//             "type": "General",
//             "office": "US House of Representatives, District 7",
//             "level": [
//                 "country"
//             ],
//             "roles": [
//                 "legislatorLowerBody"
//             ],
//             "district": {
//                 "name": "New Jersey's 7th congressional district",
//                 "scope": "congressional",
//                 "id": "ocd-division/country:us/state:nj/cd:7"
//             },
//             "sources": [
//                 {
//                     "name": "Ballot Information Project",
//                     "official": false
//                 }
//             ],
//             "candidates": [
//                 {
//                     "name": "Leonard Lance",
//                     "party": "Republican",
//                     "candidateUrl": "http://www.lanceforcongress.com/",
//                     "channels": [
//                         {
//                             "type": "Facebook",
//                             "id": "https://www.facebook.com/LanceforCongress"
//                         },
//                         {
//                             "type": "Twitter",
//                             "id": "https://twitter.com/LeonardLanceNJ7"
//                         },
//                         {
//                             "type": "YouTube",
//                             "id": "https://www.youtube.com/channel/UCectdmAWXTXYsCjtVRhChEA"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "Janice Kovach",
//                     "party": "Democratic",
//                     "candidateUrl": "http://janicekovach.com/",
//                     "channels": [
//                         {
//                             "type": "Facebook",
//                             "id": "https://www.facebook.com/JaniceKovachNJ"
//                         },
//                         {
//                             "type": "Twitter",
//                             "id": "https://twitter.com/janicekovach"
//                         },
//                         {
//                             "type": "YouTube",
//                             "id": "https://www.youtube.com/channel/UCWJQ4b1gReuQ6duNoHtYgHA"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "James Gawron",
//                     "party": "Libertarian",
//                     "candidateUrl": "http://www.jimgawron.com/",
//                     "channels": [
//                         {
//                             "type": "Facebook",
//                             "id": "https://www.facebook.com/Gawron4Congress"
//                         },
//                         {
//                             "type": "Twitter",
//                             "id": "https://twitter.com/Gawron4Congress"
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "type": "General",
//             "office": "County Surrogate",
//             "level": [
//                 "administrativeArea2"
//             ],
//             "roles": [
//                 "governmentOfficer"
//             ],
//             "district": {
//                 "name": "Union County",
//                 "scope": "countywide",
//                 "id": "ocd-division/country:us/state:nj/county:union"
//             },
//             "sources": [
//                 {
//                     "name": "Ballot Information Project",
//                     "official": false
//                 }
//             ],
//             "candidates": [
//                 {
//                     "name": "James S. La Corte",
//                     "party": "Democratic"
//                 }
//             ]
//         },
//         {
//             "type": "General",
//             "office": "Members of the Board of Chosen Freeholders (Vote for 3)",
//             "level": [
//                 "administrativeArea2"
//             ],
//             "roles": [
//                 "legislatorUpperBody"
//             ],
//             "district": {
//                 "name": "Union County",
//                 "scope": "countywide",
//                 "id": "ocd-division/country:us/state:nj/county:union"
//             },
//             "sources": [
//                 {
//                     "name": "Ballot Information Project",
//                     "official": false
//                 }
//             ],
//             "candidates": [
//                 {
//                     "name": "Angel Estrada",
//                     "party": "Democratic"
//                 },
//                 {
//                     "name": "Christopher Hudak",
//                     "party": "Democratic"
//                 },
//                 {
//                     "name": "Vernell V. Wright",
//                     "party": "Democratic"
//                 },
//                 {
//                     "name": "P. Mark Martini",
//                     "party": "Republican"
//                 }
//             ]
//         },
//         {
//             "type": "General",
//             "office": "Sheriff",
//             "level": [
//                 "administrativeArea2"
//             ],
//             "district": {
//                 "name": "Union County",
//                 "scope": "countywide",
//                 "id": "ocd-division/country:us/state:nj/county:union"
//             },
//             "sources": [
//                 {
//                     "name": "Ballot Information Project",
//                     "official": false
//                 }
//             ],
//             "candidates": [
//                 {
//                     "name": "Joseph Cryan",
//                     "party": "Democratic"
//                 },
//                 {
//                     "name": "Michael C. Ince",
//                     "party": "Republican",
//                     "channels": [
//                         {
//                             "type": "Facebook",
//                             "id": "https://www.facebook.com/289573901243976"
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "type": "Referendum",
//             "district": {
//                 "name": "New Jersey",
//                 "scope": "statewide",
//                 "id": "ocd-division/country:us/state:nj"
//             },
//             "referendumTitle": "PUBLIC QUESTION #1: CONSTITUTIONAL AMENDMENT TO ALLOW A COURT TO ORDER PRETRIAL DETENTION OF A PERSON IN A CRIMINAL CASE",
//             "referendumSubtitle": "Do you approve amending the Constitution to allow a court to order pretrial detention of a person in a criminal case? This would change the current constitutional right to bail.  The change to the Constitution would mean that a court could order that a person remain in jail prior to trial, even without a  chance for the person to post bail, in some situations.  The amendment also removes language in the Constitution about bail eligibility for death penalty cases. The death penalty no longer exists in New Jersey.",
//             "referendumUrl": "http://www.njelections.org/2014-results/2014-PQ1_English.pdf",
//             "sources": [
//                 {
//                     "name": "Ballot Information Project",
//                     "official": false
//                 }
//             ]
//         },
//         {
//             "type": "Referendum",
//             "district": {
//                 "name": "New Jersey",
//                 "scope": "statewide",
//                 "id": "ocd-division/country:us/state:nj"
//             },
//             "referendumTitle": "PUBLIC QUESTION #2: CONSTITUTIONAL AMENDMENT DEDICATING STATE FUNDS FOR OPEN SPACE, FARMLAND, AND HISTORIC PRESERVATION, AND CHANGING EXISTING DEDICATION FOR WATER PROGRAMS, UNDERGROUND STORAGE TANKS, AND HAZARDOUS SITE CLEANUPS",
//             "referendumSubtitle": "Do you approve amending the Constitution to dedicate certain State revenues each year for environmental programs?  The Constitution now dedicates four percent of the money collected from the Corporation Business Tax to help pay for some environmental programs. This amendment raises the amount from four percent to six percent beginning on July 1, 2019.  The amendment also changes, beginning July 1, 2015, some of the programs funded by the current dedication. The new dedication would be used mostly to preserve and steward open space, farmland, historic sites, and flood-prone areas. Funds would also be used to improve water quality, remove and clean up underground tanks, and clean up polluted sites. Lastly, the amendment dedicates money received from leases and other uses of State open space lands to pay for open space, farmland, and historic preservation.",
//             "referendumUrl": "http://www.njelections.org/2014-results/2014-PQ2_English.pdf",
//             "sources": [
//                 {
//                     "name": "Ballot Information Project",
//                     "official": false
//                 }
//             ]
//         }
//     ],
//     "state": [
//         {
//             "name": "New Jersey",
//             "electionAdministrationBody": {
//                 "name": "Secretary of State",
//                 "electionInfoUrl": "https://www.state.nj.us/state/elections/index.shtml",
//                 "electionRegistrationUrl": "https://voter.svrs.nj.gov/register",
//                 "electionRegistrationConfirmationUrl": "https://voter.svrs.nj.gov/registration-check",
//                 "absenteeVotingInfoUrl": "https://www.state.nj.us/state/elections/assets/pdf/forms-vote-by-mail/vote-by-mail-english.pdf",
//                 "votingLocationFinderUrl": "https://voter.svrs.nj.gov/polling-place-search",
//                 "ballotInfoUrl": "https://www.nj.gov/state/elections/vote-track-my-ballot.shtml",
//                 "correspondenceAddress": {
//                     "line1": "20 W State Street, 4th Floor",
//                     "city": "Trenton",
//                     "state": "New Jersey",
//                     "zip": "8608"
//                 }
//             },
//             "sources": [
//                 {
//                     "name": "",
//                     "official": false
//                 }
//             ]
//         }
//     ],
//     "kind": "civicinfo#voterInfoResponse"
// }