/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Modal,
  Avatar,
  Typography,
  Select,
  Form,
  Input,
} from "antd";

import { EyeOutlined, ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import { useState } from "react";

const { Title } = Typography;

const { Option } = Select;

const layout = {
  marginTop: 5,
  labelCol: { span: 5 },
  wrapperCol: { span: 15 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const pencil = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
      className="fill-gray-7"
    ></path>
    <path
      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
      className="fill-gray-7"
    ></path>
  </svg>,
];

// table code start
const columns = [
  {
    title: "PIPELINE NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "PROJECT",
    dataIndex: "project",
    key: "project",
  },
  {
    title: "CREATION DATE",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "",
    key: "action",
    dataIndex: "action",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
          // src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>CR CREATION</Title>
            <p> Release </p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    project: (
      <>
        <div className="author-info">
          <Title level={5}>DRA</Title>
          <p>ILFCRM</p>
        </div>
      </>
    ),
    date: (
      <>
        <div className="author-info">
          <Title level={5}>2023-01-20</Title>
        </div>
      </>
    ),
    action: (
      <>
        <Link className="darkbtn" to="/pipeline/1">
          <EyeOutlined /> VIEW DETAILS
        </Link>
      </>
    ),
  },
  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
          // src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>AUTO-DEPLOYMENT</Title>
            <p> Release </p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    project: (
      <>
        <div className="author-info">
          <Title level={5}>DRA</Title>
          <p>ILFCRM</p>
        </div>
      </>
    ),
    date: (
      <>
        <div className="author-info">
          <Title level={5}>2023-10-20</Title>
        </div>
      </>
    ),


    action: (
      <>
        <Link className="darkbtn" to="/pipeline/2">
          <EyeOutlined /> VIEW DETAILS
        </Link>
      </>
    ),
  },

];

const PipelineList = () => {
  const [openModal, setOpenModal] = useState(false)
  const [form] = Form.useForm();

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  const onFinish = () => {
    console.log("onFinish")
  }

  const onFill = () => {
    console.log("onFinish")
  }

  const onReset = () => {
    console.log("onFinish")
  }

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>

            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Pipelines List"
              extra={[
                <Button type="primary" onClick={handleOpenModal}>
                  <span>NEW PIPELINE</span>
                </Button>,
              ]}
            >
              <Modal
                visible={openModal}
                onCancel={handleCloseModal}
                onOk={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Form
                  {...layout}
                  form={form}
                  name="control-hooks"
                  onFinish={onFinish}
                  style={{ maxWidth: 600 }}
                >
                  <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name="project" label="Project" rules={[{ required: true }]}>
                    <Select
                      placeholder="Select a option and change input text above"

                      allowClear
                    >
                      <Option value="male">DRA</Option>
                      <Option value="female">CE POD</Option>
                      <Option value="other">VIS POD</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                  >
                    {({ getFieldValue }) =>
                      getFieldValue('gender') === 'other' ? (
                        <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                      ) : null
                    }
                  </Form.Item>

                </Form>
              </Modal>
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PipelineList;
