
type fetchType = {
  episode: number;
  from: number;
  to: number;
  video: string;
  anilist: {
    title: {
      native: string | null;
      romaji: string | null;
      english: string | null;
    };
    synonyms:string[]
  };
};

type infoType = {
  title: {
    native: string | null;
    romaji: string | null;
    english: string | null;
  };
  synonyms: string[];
};

type finalType = {
  episode: number;
  from: number;
  to: number;
  video: string;
  anilist: {
    title: {
      native: string | null;
      romaji: string | null;
      english: string | null;
    };
    synonyms: string[];
  };
  description:string
  image:string
};

export type {fetchType,infoType,finalType};