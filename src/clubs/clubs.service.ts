import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Club } from './entities/club.entity';
import { ClubDocument } from './schemas/club.schema';

@Injectable()
export class ClubsService {
  constructor(@InjectModel(Club.name) private clubModel: Model<ClubDocument>) {}

  async getAllClubs() {
    return this.clubModel.find({ enabled: true });
  }

  async createClub(newClubDto: CreateClubDto): Promise<ClubDocument> {
    const clubDocument = await this.clubModel.create(newClubDto);
    return clubDocument;
  }

  async findOneClub(id: string): Promise<Club | null> {
    const clubDocument = await this.clubModel.findById(id);
    return new Club(clubDocument.toObject());
  }

  async updateClub(id: string, updateClubDto: UpdateClubDto): Promise<Club | null> {
    const clubDocument = await this.clubModel.findByIdAndUpdate(id, updateClubDto, { new: true });
    console.log(clubDocument);
    return new Club(clubDocument.toObject());
  }

  async removeClub(id: string) {
    const clubDocument = await this.clubModel.findByIdAndUpdate(id, { enabled: false });
    return clubDocument;
  }
}
