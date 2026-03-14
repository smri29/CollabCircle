export type PublicationRecord = {
  title: string;
  venue: string;
  doi: string;
  link: string;
  authors: string[];
};

export const journalPublications: PublicationRecord[] = [];

export const conferencePublications: PublicationRecord[] = [];
