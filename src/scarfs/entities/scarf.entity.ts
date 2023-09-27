export class Scarf {
  _id: string;
  title: string;
  team: string;
  decade: Decade;
  description: string;
  pictures: string[];
  enabled: boolean;
}

interface Decade {
  label: '80s' | '90s' | '00s' | '10s';
}