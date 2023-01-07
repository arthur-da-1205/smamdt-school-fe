export const enum Gender {
  male = 'Laki_laki',
  female = 'Perumpuan',
}

export type TeacherModel = {
  id: string;
  name: string;
  userId: string;
  gender: Gender;
  placeOfBirth: string;
  birthDate: string;
  address: string;
  nik: string;
  nuptk: string;
  nip: string;
  email: string;
  status: string;
  teacherFile?: string;
  teacherUrl?: string;
};
