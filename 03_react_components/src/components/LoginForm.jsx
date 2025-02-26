import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">姓名：</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="请输入姓名"
          required
        />
      </div>
      <div>
        <label htmlFor="email">邮箱：</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="请输入邮箱"
          required
        />
      </div>
      <button type="submit">提交</button>
    </form>
  );
};

export default LoginForm;
