import { useState } from "react";

interface NotificationFormProps {
  onSubmit: (
    message: string,
    category: string,
    notificationType: string
  ) => void;
}

const NotificationForm = ({ onSubmit }: NotificationFormProps) => {
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("1");
  const [notificationType, setNotificationType] = useState("1");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(message, category, notificationType);
    setMessage(""); // Clear the message input after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "5px",
            color: "#4A5568",
            fontWeight: "bold",
          }}
        >
          Message:
        </label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #CBD5E0",
            borderRadius: "5px",
            boxSizing: "border-box",
          }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "5px",
            color: "#4A5568",
            fontWeight: "bold",
          }}
        >
          Category:
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #CBD5E0",
            borderRadius: "5px",
            boxSizing: "border-box",
          }}
        >
          <option value="3">Movies</option>
          <option value="1">Sports</option>
          <option value="2">Finance</option>
        </select>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "5px",
            color: "#4A5568",
            fontWeight: "bold",
          }}
        >
          Notification Type:
        </label>
        <select
          value={notificationType}
          onChange={(e) => setNotificationType(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #CBD5E0",
            borderRadius: "5px",
            boxSizing: "border-box",
          }}
        >
          <option value="1">SMS</option>
          <option value="2">Email</option>
          <option value="3">Push Notifications</option>
        </select>
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#3182CE",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Send Notification
      </button>
    </form>
  );
};

export default NotificationForm;
