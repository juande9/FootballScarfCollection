class Stadium {
  constructor(
    public name: string,
    public lat: number,
    public log: number,
  ) {}
}

export class Club {
  constructor(private data: ClubData) {}
}

interface ClubData {
  _id: string;
  name: string;
  founded: number;
  league: string;
  country: string;
  logo: string;
  stadium: Stadium;
  enabled: boolean;
}
