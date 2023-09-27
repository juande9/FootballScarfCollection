import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types, HydratedDocument } from 'mongoose';

export type ScarfDocument = HydratedDocument<Scarf>;

@Schema()
export class Scarf extends Document {
  @Prop()
  title: string;

  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'Team' })
  team: Types.ObjectId;

  @Prop({ required: true })
  decade: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: [String] })
  pictures: string[];

  @Prop({ type: Boolean, default: true })
  enabled!: boolean;
}

export const ScarfSchema = SchemaFactory.createForClass(Scarf);
