import { useState, useEffect } from "react";
import axios from "axios";
import NotificationForm from "./components/NotificationForm";
import NotificationLogs from "./components/NotificationLogs";

interface NotificationLog {
  id: number;
  message: string;
  timestamp: string;
  user: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
  };
  notificationType: {
    id: number;
    name: string;
  };
}

const App = () => {
  const [logs, setLogs] = useState<NotificationLog[]>([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/notification-logs"
      );
      setLogs(response.data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  };

  const handleNotificationSubmit = async (
    message: string,
    category: string,
    notificationType: string
  ) => {
    try {
      console.log("Selected Category:", category);
      const result = await axios.post(
        "http://localhost:3000/api/send-notifications",
        {
          message,
          categoryId: category,
          notificationTypeId: notificationType,
        }
      );

      console.log("API Response:", result);
      fetchLogs(); // Refresh logs after submission
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "10px",
        }}
      >
        <NotificationForm onSubmit={handleNotificationSubmit} />
        <h3 style={{ color: "#2D3748", fontWeight: "bold", marginTop: "20px" }}>
          Notification Logs
        </h3>
        <NotificationLogs logs={logs} />
      </div>
    </div>
  );
};

export default App;
