import { Types } from 'mongoose';

export function convertToObjectId(id: string): Types.ObjectId {
  console.log(`Convert string to ObjectId: ${id}`);
  return new Types.ObjectId(id);
}
