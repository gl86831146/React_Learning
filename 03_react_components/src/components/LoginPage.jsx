import LoginForm from "./LoginForm";
import { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState("");
  const handleFormSubmit = (formData) => {
    setForm(formData);
  };
  return (
    <div style={{ margin: "auto", width: "50%" }}>
      <h3>用户注册：</h3>
      <LoginForm onSubmit={handleFormSubmit} />
      {form && (
        <div>
          <h3>提交数据：</h3>
          <p>Name: {form.name}</p>
          <p>Email:{form.email}</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
