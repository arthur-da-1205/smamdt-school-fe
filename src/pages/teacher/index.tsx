import { PlusCircleOutlined } from '@ant-design/icons';
import { time } from '@libraries/time';
import { useGetTeacherList } from '@resources/api/teacher.rest';
import { TeacherModel } from '@resources/models/teacher.model';
import { Button } from 'antd';
import Table from 'antd/lib/table';
import React, { useEffect, useState } from 'react';

const TeacherPage: React.FC = () => {
  const [getAllTeachers] = useGetTeacherList();

  const [teacherList, setTeacherList] = useState<TeacherModel[]>([]);

  const formatDate = 'DD-MM-YYYY';

  const columns = [
    {
      title: 'Kode Guru',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'NUPTK',
      dataIndex: 'nuptk',
      key: 'nuptk',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Jenis Kelamin',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Tangal Lahir',
      dataIndex: 'birthDate',
      key: 'birthDate',
    },
    {
      title: 'Alamat',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Status Guru',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  useEffect(() => {
    getAllTeachers().then((res) => {
      setTeacherList(
        res.data.data.map(
          (list) =>
            ({
              id: list.id,
              name: list.name,
              nuptk: list.nuptk,
              gender: list.gender.replace('_', '-'),
              birthDate: time(list.birthDate).format(formatDate),
              address: list.address,
              status: list.status,
            } as any)
        )
      );
    });
  }, []);

  return (
    <div>
      <div className="w-[210px] mb-6">
        <Button type="primary" className="btn-submit" icon={<PlusCircleOutlined />}>
          Tambah Data Guru
        </Button>
      </div>
      <Table columns={columns} dataSource={teacherList} pagination={{ pageSize: 20 }} scroll={{ y: '60vh', x: 180 }} />
    </div>
  );
};

export default TeacherPage;
