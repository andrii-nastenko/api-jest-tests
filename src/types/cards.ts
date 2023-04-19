export interface CreateCardPayload {
  cardName: string;
  idList: string;
}

export interface CreateCardsPayload {
  count: number;
  idList: string;
}

export interface UpdateCardPayload {
  cardId: string;
  cardName: string;
}

export interface CardResponse {
  id: string;
  badges: Badges;
  checkItemStates?: null[] | null;
  closed: boolean;
  dueComplete: boolean;
  dateLastActivity: string;
  desc: string;
  descData: DescData;
  due?: null;
  dueReminder?: null;
  email?: null;
  idBoard: string;
  idChecklists?: null[] | null;
  idList: string;
  idMembers?: null[] | null;
  idMembersVoted?: null[] | null;
  idShort: number;
  idAttachmentCover?: null;
  labels?: null[] | null;
  idLabels?: null[] | null;
  manualCoverAttachment: boolean;
  name: string;
  pos: number;
  shortLink: string;
  shortUrl: string;
  start?: null;
  subscribed: boolean;
  url: string;
  cover: Cover;
  isTemplate: boolean;
  cardRole?: null;
}

export interface Badges {
  attachmentsByType: AttachmentsByType;
  location: boolean;
  votes: number;
  viewingMemberVoted: boolean;
  subscribed: boolean;
  fogbugz: string;
  checkItems: number;
  checkItemsChecked: number;
  checkItemsEarliestDue?: null;
  comments: number;
  attachments: number;
  description: boolean;
  due?: null;
  dueComplete: boolean;
  start?: null;
}

export interface AttachmentsByType {
  trello: Trello;
}

export interface Trello {
  board: number;
  card: number;
}

export interface DescData {
  emoji: Emoji;
}

export type Emoji = Record<string, unknown>;

export interface Cover {
  idAttachment?: null;
  color?: null;
  idUploadedBackground?: null;
  size: string;
  brightness: string;
  idPlugin?: null;
}
