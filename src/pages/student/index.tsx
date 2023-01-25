import { DeleteFilled, EditFilled, EyeFilled, PlusCircleOutlined } from '@ant-design/icons';
import { time } from '@libraries/time';
import { useDeleteStudent, useGetStudentList } from '@resources/api/student.rest';
import { StudentModel } from '@resources/models/student.model';
import { Button, Modal, Space, Tooltip } from 'antd';
import Table from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import StudentForm from './form';

const StudentPage: React.FC = () => {
  const [getAllStudents] = useGetStudentList();
  const [deleteStudent] = useDeleteStudent();

  const [studentList, setStudentList] = useState<StudentModel[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hasUpdated, setHasUpdated] = useState<boolean>(false);

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
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Tooltip title="Detail">
            <EyeFilled style={{ fontSize: '18px', color: '#16c79a' }} />
          </Tooltip>
          <Tooltip title="Ubah">
            <EditFilled style={{ fontSize: '18px', color: '#008891' }} />
          </Tooltip>
          <Tooltip title="Hapus">
            <DeleteFilled
              onClick={() => deleteStudent({ params: { id: record.id } })}
              style={{ fontSize: '18px', color: '#ef4f4f' }}
            />
          </Tooltip>
        </Space>
      ),
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
  }, [hasUpdated]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onCancelModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="w-[210px] mb-6">
        <Button type="primary" htmlType="submit" className="btn-submit" onClick={showModal} icon={<PlusCircleOutlined />}>
          Tambah Data Siswa
        </Button>
      </div>
      <Table className="rounded-xl" columns={columns} dataSource={studentList} pagination={{ pageSize: 20 }} />
      <Modal title="Tambah Siswa" open={isModalOpen} onCancel={onCancelModal} footer={null}>
        <StudentForm
          callback={(v) => {
            setIsModalOpen(false);
            setHasUpdated(v);
          }}
        />
      </Modal>
    </div>
  );
};

export default StudentPage;
