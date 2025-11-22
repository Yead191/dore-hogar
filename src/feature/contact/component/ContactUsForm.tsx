"use client";

import { Form, Input, Button, Select } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  message: string;
}

export default function ContactUsForm() {
  const [form] = Form.useForm<FormValues>();

  const onFinish: FormProps<FormValues>["onFinish"] = (values) => {
    console.log("Form submitted:", values);
    // Handle form submission here
  };

  return (
    <Form<FormValues>
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="contact-form"
    >
      {/* First name and Last name in row */}
      <div className="grid grid-cols-2 gap-4">
        <Form.Item
          label={<span className="md:text-lg font-semibold leading-[150%]">First Name</span>}
          name="firstName"
          rules={[{ required: true, message: "Please enter your first name" }]}
          className="mb-0"
        >
          <Input
            placeholder="Your name"
            className="h-12! text-base! border-[#06825C] rounded-lg!"
            style={{
              borderColor: "#0f766e",
            }}
          />
        </Form.Item>

        <Form.Item
          label={<span className="md:text-lg font-semibold leading-[150%]">Last Name</span>}
          name="lastName"
          rules={[{ required: true, message: "Please enter your last name" }]}
          className="mb-0"
        >
          <Input
            placeholder="Last name"
            className="h-12! text-base! border-[#06825C] rounded-lg!"
            style={{
              borderColor: "#0f766e",
            }}
          />
        </Form.Item>
      </div>

      {/* Email */}
      <Form.Item
        label={<span className="md:text-lg font-semibold leading-[150%]">Email</span>}
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
        className="mt-6 mb-6"
      >
        <Input
          placeholder="Your email"
          className="h-12! text-base! border-[#06825C] rounded-lg!"
          style={{
            borderColor: "#0f766e",
          }}
        />
      </Form.Item>

      {/* Phone number with country selector */}
      <Form.Item label={<span className="md:text-lg font-semibold leading-[150%]">Phone number</span>} className="mb-6">
        <div className="flex gap-3">
          <Form.Item name="country" noStyle initialValue="US">
            <Select
              style={{ width: "100px", height: "48px" }}
              options={[
                { label: "US", value: "US" },
                { label: "CA", value: "CA" },
                { label: "UK", value: "UK" },
              ]}
              className="rounded-lg! border-[#06825C]"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            noStyle
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input
              placeholder="+10 (000) 000-0000"
              className="flex-1 h-12! text-base! border-[#06825C] rounded-lg!"
              style={{
                borderColor: "#0f766e",
              }}
            />
          </Form.Item>
        </div>
      </Form.Item>

      {/* Message */}
      <Form.Item
        label={<span className="md:text-lg font-semibold leading-[150%]">Message</span>}
        name="message"
        rules={[{ required: true, message: "Please enter a message" }]}
        className="mb-8"
      >
        <Input.TextArea
          placeholder="Type your message"
          rows={5}
          className="text-base! border-[#06825C] rounded-lg!"
          style={{
            borderColor: "#0f766e",
          }}
        />
      </Form.Item>

      {/* Submit button */}
      <Form.Item className="mb-0">
        <Button
          data-aos="fade-up"
          data-aos-delay={150}
          type="primary"
          htmlType="submit"
          size="large"
          className="h-12! px-8! rounded-lg! bg-[#06825C]! border-0! font-semibold flex items-center gap-2"
        >
          Send Message <span>{<ArrowRightOutlined />}</span>
        </Button>
      </Form.Item>
    </Form>
  );
}
