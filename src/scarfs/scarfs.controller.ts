import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ScarfsService } from './scarfs.service';
import { Response } from 'express';
import { CreateScarfDto } from './dto/create-Scarf.dto';
import { UpdateScarfDto } from './dto/update-Scarf.dto';
import { Scarf } from './schemas/Scarf.schema';

@Controller('scarfs')
export class ScarfsController {
  constructor(private readonly scarfsService: ScarfsService) {}

  @Get()
  async getAllScarfs(): Promise<Scarf[]> {
    return this.scarfsService.getAllScarfs();
  }

  @Post()
  async createScarf(@Body() createScarf: CreateScarfDto, @Res() res: Response) {
    const createdScarf = await this.scarfsService.createScarf(createScarf);
    res.status(HttpStatus.CREATED).send({ message: 'Scarf created', createdScarf });
  }

  @Get(':id')
  async findOneScarf(@Param('id') id: string, @Res() res: Response) {
    const foundScarf = await this.scarfsService.findOneScarf(id);
    res.status(HttpStatus.OK).send({ message: 'Scarf found', foundScarf });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateScarfDto: UpdateScarfDto, @Res() res: Response) {
    const updatedScarf = await this.scarfsService.updateScarf(id, updateScarfDto);
    res.status(HttpStatus.OK).send({ message: 'Scarf found', updatedScarf });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const updatedScarf = await this.scarfsService.removeScarf(id);
    res.status(HttpStatus.OK).send({ message: 'Scarf found', updatedScarf });
  }
}
