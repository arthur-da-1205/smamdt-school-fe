import { PlusCircleOutlined } from '@ant-design/icons';
import { time } from '@libraries/time';
import { useGetStudentList } from '@resources/api/student.rest';
import { StudentModel } from '@resources/models/student.model';
import { Button } from 'antd';
import Table from 'antd/lib/table';
import React, { useEffect, useState } from 'react';

const StudentPage: React.FC = () => {
  const [getAllStudents] = useGetStudentList();

  const [studentList, setStudentList] = useState<StudentModel[]>([]);

  const formatDate = 'DD-MM-YYYY';

  const columns = [
    {
      title: 'NISN',
      dataIndex: 'nisn',
      key: 'nisn',
    },
    {
      title: 'ID Pendaftaran',
      dataIndex: 'registrationId',
      key: 'registrationId',
    },
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Jenis Kelamin',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Alamat',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tanggal Masuk',
      dataIndex: 'dateOfEntry',
      key: 'dateOfEntry',
    },
    {
      title: 'Status Siswa',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  useEffect(() => {
    getAllStudents().then((res) => {
      setStudentList(
        res.data.data.map(
          (list) =>
            ({
              nisn: list.nisn,
              registrationId: list.registrationId,
              name: list.name,
              gender: list.gender.replace('_', '-'),
              address: list.address,
              dateOfEntry: time(list.dateOfEntry).format(formatDate),
              status: list.status.replace('_', ' '),
            } as any)
        )
      );
    });
  }, []);

  return (
    <div>
      <div className="w-[210px] mb-6">
        <Button type="primary" className="btn-submit" icon={<PlusCircleOutlined />}>
          Tambah Data Siswa
        </Button>
      </div>
      <Table className="rounded-xl" columns={columns} dataSource={studentList} pagination={{ pageSize: 1 }} />
    </div>
  );
};

export default StudentPage;
