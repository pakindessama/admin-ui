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
  Statistic,
  Button,
  List,
  Descriptions,
  Avatar,
  Select,
  Modal,
  Form,
  Input
} from "antd";

import { PlusOutlined, ExclamationOutlined } from "@ant-design/icons";
import mastercard from "../assets/images/mastercard-logo.png";
import paypal from "../assets/images/paypal-logo-2.png";
import visa from "../assets/images/visa-logo.png";
import { useEffect, useState } from "react";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import TextArea from "antd/lib/input/TextArea";

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

const deletebtn = [
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
      fill="#111827"
      className="fill-danger"
    ></path>
  </svg>,
];

const dummyTasks = [
  {
    id: 1,
    name: "Welcome message",
    plugin: "Jenkins",
    definition: "echho 'Hello world'",
    condition: "",
  }
];

const pipelileIdentity = [
  {
    title: "Name",
    amount: "CR Creation",
    textclass: "text-fill",
    itemColor: "text-success",
  },
  {
    title: "Project",
    amount: "DRA",
    textclass: "text-fill",
    itemColor: "text-success",
  },
  {
    title: "Webhook link",
    amount: "https:xxx.xxx.xxx.xxx",
    textclass: "text-fill",
    itemColor: "text-success",
  }
];

const Pipeline = () => {

  const [tasks, setTasks] = useState(dummyTasks)

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

  const deleteTask = (id) => {
    const temp = tasks.filter(task => task.id != id);
    setTasks(temp)
  }

  const addTask = (values) => {
    form.validateFields()
      .then((values) => {
        const item = {
          id: tasks.length,
          name: values.name,
          plugin: values.plugin,
          definition: values.definition,
          condition: values.condition,
        }
        setTasks([...tasks, item])
      })
      .catch((errorInfo) => { });
  }

  useEffect(() => {
    setOpenModal(false);
  }, [tasks])

  return (
    <>
      <Modal
        visible={openModal}
        onCancel={handleCloseModal}
        onOk={addTask}
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
          <Form.Item name="plugin" label="Plugin" rules={[{ required: true }]}>
            <Select
              placeholder="Select the plugin"
              allowClear
            >
              <Option value="Jenkins">Jenkins</Option>
              <Option value="Command">Command</Option>
            </Select>
          </Form.Item>
          <Form.Item name="definition" label="Definition" rules={[{ required: true }]}>
            <TextArea />
          </Form.Item>
          <Form.Item name="condition" label="Condition" rules={[{ required: false }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Row gutter={[24, 0]}>
        <Col span={24} md={16} className="mb-24">
          <Card
            className="header-solid h-full"
            bordered={false}
            title={[<h6 className="font-semibold m-0">Tasks</h6>]}
            bodyStyle={{ paddingTop: "0" }}
            extra={[
              <Button type="primary" onClick={handleOpenModal}>
                <span>NEW Task</span>
              </Button>,
            ]}
          >
            <Row gutter={[24, 24]}>
              {tasks.map((i, index) => {
                const info = tasks[index]
                return < Col span={24} key={index} >
                  <Card className="card-billing-info" bordered="false">
                    <div className="col-info">
                      <Descriptions title={info.name}>
                        <Descriptions.Item label="Plugin" span={3}>
                          {info.plugin}
                        </Descriptions.Item>
                        <Descriptions.Item label="Definition" span={3}>
                          {info.definition}
                        </Descriptions.Item>
                        <Descriptions.Item label="Condition" span={3}>
                          {info.condition}
                        </Descriptions.Item>
                      </Descriptions>
                    </div>
                    <div className="col-action">
                      <Button type="link" danger onClick={() => deleteTask(info.id)}>
                        {deletebtn}DELETE
                      </Button>
                      <Button type="link" className="darkbtn">
                        {pencil} EDIT
                      </Button>
                    </div>
                  </Card>
                </Col>
              })
              }
            </Row>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            bodyStyle={{ paddingTop: 0 }}
            className="header-solid h-full  ant-list-yes"
            title={<h6 className="font-semibold m-0">Pipeline details</h6>}
          >
            <List
              header={<h6>Identity</h6>}
              className="transactions-list ant-newest"
              itemLayout="horizontal"
              dataSource={pipelileIdentity}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar size="small" className={item.textclass}>
                        {item.avatar}
                      </Avatar>
                    }
                    title={item.title}
                    description={item.description}
                  />
                  <div className="amount">
                    <span className={item.itemColor}>{item.amount}</span>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row >
    </>
  );
}

export default Pipeline;
