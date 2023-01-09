export const enum Gender {
  male = 'Laki-laki',
  female = 'Perumpuan',
}

export type StudentModel = {
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
  dateOfEntry: string;
  studentFile?: string;
  studentUrl?: string;
};
