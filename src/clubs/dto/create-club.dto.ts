import { IsString, IsNumber, IsObject, IsBoolean, IsOptional } from 'class-validator';
import { Country } from 'country-list';
import { IsCountry } from '../validators/isValidCountry.constraint';

export class CreateClubDto {
  @IsString()
  name: string;

  @IsNumber()
  founded: number;

  @IsString()
  league: string;

  @IsCountry()
  country: Country;

  @IsString()
  @IsOptional()
  logo: string;

  @IsObject()
  stadium: {
    name: string;
    coord: {
      lat: number;
      log: number;
    };
    cap: number;
  };

  @IsBoolean()
  enabled: boolean = true;
}
