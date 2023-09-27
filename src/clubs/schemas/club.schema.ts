import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type ClubDocument = HydratedDocument<Club>;

@Schema()
export class Club extends Document {
  @Prop({ required: true, unique: true, type: String })
  name!: string;

  @Prop({ required: true })
  founded!: number;

  @Prop({ required: true })
  league!: string;

  @Prop({ required: true })
  country!: string;

  @Prop()
  logo?: string;

  @Prop({ type: Object, required: true })
  stadium!: {
    name: string;
    lat: number;
    log: number;
  };

  @Prop({ type: Boolean, default: true })
  enabled!: boolean;
}

export const ClubSchema = SchemaFactory.createForClass(Club);
