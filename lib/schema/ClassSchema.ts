import { Schema, model, models, Types } from 'mongoose';

interface ICourseRef {
  courseId: Types.ObjectId;
  name: string;
}

export interface IClass {
  _id: Types.ObjectId;
  name: string;
  ageGroup?: string;
  schedule: string;
  course: ICourseRef;
  students?: Types.ObjectId[];
  status?: string;
}

const CourseRefSchema = new Schema<ICourseRef>(
  {
    courseId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
  },
  { _id: false }
);

const ClassSchema = new Schema<IClass>(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    ageGroup: { type: String },
    schedule: { type: String, required: true },
    course: CourseRefSchema,
    students: [{ type: Schema.Types.ObjectId }],
    status: { type: String },
  },
  { collection: 'Classes' }
);

const ClassModel = models.Classes || model<IClass>('Classes', ClassSchema);
export default ClassModel;
