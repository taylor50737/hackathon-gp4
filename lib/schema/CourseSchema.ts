import { Schema, model, models, Types } from 'mongoose';

interface IClassRef {
  classId: Types.ObjectId;
  name: string;
}

export interface ICourse {
  _id: Types.ObjectId;
  name: string;
  ageGroup?: string;
  year: number;
  quarter: string;
  classes: IClassRef[];
}

const ClassRefSchema = new Schema<IClassRef>(
  {
    classId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
  },
  { _id: false }
);

const CourseSchema = new Schema<ICourse>(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    ageGroup: { type: String },
    year: { type: Number, required: true },
    quarter: { type: String, required: true },
    classes: [{ type: ClassRefSchema }],
  },
  { collection: 'Courses' }
);

// Check if the model exists before defining it
const CourseModel = models.Courses || model<ICourse>('Courses', CourseSchema);
export default CourseModel;
