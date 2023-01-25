import { PlusOutlined } from '@ant-design/icons';
import { usePostStudent } from '@resources/api/student.rest';
import { StudentInput } from '@resources/input/student.input';
import { Button, DatePicker, Form, Input, message, Radio, Upload } from 'antd';
import React, { useEffect } from 'react';

interface IProps {
  callback: (updated: boolean) => void;
}

const StudentForm: React.FC<IProps> = ({ callback }) => {
  const [form] = Form.useForm();

  const [addStudent, { data, loading }] = usePostStudent();

  const onFinish = (values: StudentInput) => {
    addStudent({
      data: {
        nisn: values.nisn,
        registrationId: values.registrationId,
        name: values.name,
        placeOfBirth: values.placeOfBirth,
        birthDate: values.birthDate,
        address: values.address,
        gender: values.gender,
        motherName: values.motherName,
        fatherName: values.fatherName,
        status: values.status,
        dateOfEntry: values.dateOfEntry,
      },
    });
  };

  useEffect(() => {
    if (data) {
      message.success('Berhasil menambah data siswa');
      callback(true);
      form.resetFields();
    }
  }, [loading]);

  return (
    <Form form={form} onFinish={onFinish} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
      <Form.Item label="NISN" name="nisn">
        <Input name="nisn" />
      </Form.Item>
      <Form.Item label="ID Registrasi" name="registrationId">
        <Input name="registrationId" />
      </Form.Item>
      <Form.Item label="Nama" name="name">
        <Input name="name" />
      </Form.Item>
      <Form.Item label="Tempat Lahir" name="placeOfBirth">
        <Input name="placeOfBirth" />
      </Form.Item>
      <Form.Item label="DatePicker" name="birthDate">
        <DatePicker name="birthDate" />
      </Form.Item>
      <Form.Item label="Alamat" name="address">
        <Input name="address" />
      </Form.Item>
      <Form.Item label="Jenis Kelamin" name="gender">
        <Radio.Group name="gender">
          <Radio value="Laki_laki"> Laki-laki </Radio>
          <Radio value="Perempuan"> Perempuan </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Nama Ibu" name="motherName">
        <Input name="motherName" />
      </Form.Item>
      <Form.Item label="Nama Ayah" name="fatherName">
        <Input name="fatherName" />
      </Form.Item>
      <Form.Item label="Status" name="status">
        <Radio.Group name="status">
          <Radio value="Siswa_Baru"> Siswa Baru </Radio>
          <Radio value="Pindahan"> Siswa Pindahan </Radio>
          <Radio value="Lulus"> Lulus </Radio>
          <Radio value="Tidak_Lulus"> Tidak Lulus </Radio>
          <Radio value="Berhenti"> Berhenti </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="DatePicker" name="dateOfEntry">
        <DatePicker name="dateOfEntry" />
      </Form.Item>
      <Form.Item label="Upload">
        <Upload
          listType="picture-card"
          maxCount={1}
          multiple={false}
          beforeUpload={() => {
            return false;
          }}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Simpan
      </Button>
    </Form>
  );
};

export default StudentForm;
