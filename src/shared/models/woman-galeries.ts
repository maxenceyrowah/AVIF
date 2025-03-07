export interface IWomanGaleries {
  name: string;
  fonction: string;
  description: string;
  image: string;
}

export interface Podcast {
  id: number;
  title: string;
  host: string;
  guest: string;
  duration: string;
  description: string;
  image: string;
  audio: string;
}
export interface NavCardProps {
  to: string;
  emoji: string;
  color: string;
  title: string;
  description: string;
}
