import {
  CheckOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

import { CopyIcon } from "../../../../ui/src/icons";
import InfoBar from "../InfoBar";

import * as Styled from "./SignUpForm.styled";
import { useCopyPassword, useSignUpForm } from "./hooks";

const SignUpForm: React.FC = () => {
  const { validUser, onSignUp, setCheckboxVlaue, formValdation, signUpForm } =
    useSignUpForm();

  return (
    <Form form={signUpForm} name="signUpForm" onFinish={onSignUp}>
      <Form.Item
        name="username"
        rules={formValdation.username}
        validateFirst={true}
        validateTrigger="onBlur"
      >
        <Input
          placeholder="Enter username"
          suffix={validUser ? <CheckOutlined /> : ""}
        />
      </Form.Item>
      <p>Your auto-generated password</p>
      <Form.Item
        name="password"
        rules={formValdation.password}
        validateFirst={true}
        validateTrigger="onBlur"
      >
        {/* <GeneratedPassordInput /> */}
        <Styled.GeneratedPassordInput
          iconRender={(visible) => (
            <div>
              <CopyIcon
                onClick={() =>
                  useCopyPassword(signUpForm.getFieldValue("password"))
                }
              />
              {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </div>
          )}
        />
      </Form.Item>
      <Form.Item
        name="passwordCheck"
        rules={formValdation.passwordCheck}
        validateFirst={true}
        validateTrigger="onBlur"
      >
        <Input.Password
          placeholder="Re-enter your auto-generated password"
          visibilityToggle={false}
        />
      </Form.Item>
      <InfoBar />
      <Form.Item
        name="confirm"
        rules={formValdation.confirm}
        valuePropName="confirmed"
      >
        <Styled.Checkbox onChange={setCheckboxVlaue}>
          I understand Peerplays cannot recover my lost password
        </Styled.Checkbox>
      </Form.Item>
      <Form.Item name="saved" rules={formValdation.saved} valuePropName="saved">
        <Styled.Checkbox onChange={setCheckboxVlaue}>
          I have securely saved my password
        </Styled.Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create account
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;