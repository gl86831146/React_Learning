import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LOCAL_USERS = [
  { username: "admin", password: "admin123", name: "管理员" },
  { username: "user1", password: "123456", name: "张三" },
];

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = LOCAL_USERS.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (user) {
      navigate("/dashboard", {
        state: {
          user: {
            name: user.name,
            username: user.username,
          },
        },
      });
    } else {
      setError("用户名或密码错误");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>用户登录</h2>
        <div style={styles.inputGroup}>
          <label>用户名：</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>密码：</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            style={styles.input}
            required
          />
        </div>
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button}>
          登录
        </button>
      </form>
    </div>
  );
};

// 样式对象
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  },
  form: {
    padding: "2rem",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  inputGroup: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginTop: "0.5rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    background: "#1890ff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    margin: "0.5rem 0",
    textAlign: "center",
  },
};

export default Login;
