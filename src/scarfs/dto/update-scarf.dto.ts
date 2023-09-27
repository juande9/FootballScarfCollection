import { PartialType } from '@nestjs/mapped-types';
import { CreateScarfDto } from './create-scarf.dto';

export class UpdateScarfDto extends PartialType(CreateScarfDto) {}
