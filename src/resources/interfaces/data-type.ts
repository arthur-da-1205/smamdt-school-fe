const enum Gender {
  male = 'Laki-laki',
  female = 'Perumpuan',
}

export interface DataType {
  key: string;
  nisn: string;
  userId: string;
  registrationId: string;
  name: string;
  gender: Gender;
  pob: string;
  dob: string;
  address: string;
  motherName: string;
  fatherName: string;
  email: string;
  status: string;
  studentFile?: string;
  studentUrl?: string;
}
