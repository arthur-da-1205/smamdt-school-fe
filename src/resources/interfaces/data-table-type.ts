import { Gender } from '@resources/models/student.model';

export interface StudentDataType {
  key: string;
  nisn: string;
  userId: string;
  registrationId: string;
  name: string;
  gender: Gender;
  placeOfBirth: string;
  birthDate: string;
  address: string;
  motherName: string;
  fatherName: string;
  email: string;
  status: string;
  studentFile?: string;
  studentUrl?: string;
}
