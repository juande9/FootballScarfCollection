import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateScarfDto } from './dto/create-scarf.dto';
import { UpdateScarfDto } from './dto/update-scarf.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Scarf, ScarfDocument } from './schemas/Scarf.schema';

@Injectable()
export class ScarfsService {
  constructor(@InjectModel(Scarf.name) private ScarfModel: Model<ScarfDocument>) {}

  async getAllScarfs() {
    return this.ScarfModel.find({ enabled: true });
  }

  async createScarf(newScarfDto: CreateScarfDto): Promise<ScarfDocument> {
    const createdScarf = this.ScarfModel.create(newScarfDto);
    return createdScarf;
  }

  async findOneScarf(id: string) {
    const foundScarf = this.ScarfModel.findById(id);
    return foundScarf;
  }

  async updateScarf(id: string, updateScarfDto: UpdateScarfDto) {
    const updatedScarf = this.ScarfModel.findByIdAndUpdate(id, updateScarfDto);
    return updatedScarf;
  }

  async removeScarf(id: string) {
    const removedScarf = this.ScarfModel.findByIdAndUpdate(id, { enabled: false });
    return removedScarf;
  }
}
