import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { Response } from 'express';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './schemas/club.schema';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Get()
  async getAllClubs(): Promise<Club[]> {
    return this.clubsService.getAllClubs();
  }

  @Post()
  async createClub(@Body() createClub: CreateClubDto, @Res() res: Response) {
    const createdClub = await this.clubsService.createClub(createClub);
    res.status(HttpStatus.CREATED).send({ message: 'Club created', createdClub });
  }

  @Get(':id')
  async findOneClub(@Param('id') id: string, @Res() res: Response) {
    const foundClub = await this.clubsService.findOneClub(id);
    res.status(HttpStatus.OK).send({ message: 'Club found', foundClub });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto, @Res() res: Response) {
    const updatedClub = await this.clubsService.updateClub(id, updateClubDto);
    res.status(HttpStatus.OK).send({ message: 'Club updated', updatedClub });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const updatedClub = await this.clubsService.removeClub(id);
    res.status(HttpStatus.OK).send({ message: 'Club deleted', updatedClub });
  }
}
