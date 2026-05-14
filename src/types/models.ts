export interface TimeParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface WeddingData {
  id: string;
  img: string,
  song: string,
  title: string;
  weddingDateText: string;
  weddingDate: Date;
  programEvents: {
    name: 'brideHouse' | 'admission' | 'church' | 'party',
    time: string;
    place?: string;
    locationText: string;
    location: string;
  }[];
  infoMessage: string;
  dressCodeMessage: string;
  phoneNumbers: string[];
}
