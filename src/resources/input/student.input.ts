import { StudentStatus } from '@resources/enum/student-status.enum';
import { Gender } from '@resources/models/student.model';

export interface StudentInput {
  nisn: string;
  registrationId: string;
  name: string;
  placeOfBirth: string;
  birthDate: string;
  address?: string;
  motherName: string;
  fatherName?: string;
  gender: Gender;
  email?: string;
  dateOfEntry: string;
  status: StudentStatus;
  studentFile?: string;
}
