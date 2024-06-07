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

interface NotificationLogsProps {
  logs: NotificationLog[];
}

const NotificationLogs = ({ logs }: NotificationLogsProps) => {
  return (
    <div
      style={{
        marginTop: "10px",
        maxHeight: "200px",
        overflowY: "scroll",
        paddingRight: "10px", // Adds some padding for the scrollbar
      }}
    >
      <ul style={{ padding: "0", listStyleType: "none", margin: 0 }}>
        {logs.map((log) => (
          <li
            key={log.id}
            style={{
              padding: "10px 0",
              borderBottom: "1px solid #CBD5E0",
              color: "#4A5568",
            }}
          >
            {log.message} - {log.timestamp} - {log.category.name} -{" "}
            {log.notificationType.name} - {log.user.name}
          </li>
        ))}
      </ul>
      <style>{`
        /* Style for WebKit-based browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
      
        ::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 10px;
        }
      
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
      
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      
        /* Style for Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #888 #f5f5f5;
        }
      
        *:hover {
          scrollbar-color: #555 #f5f5f5;
        }
      `}</style>
    </div>
  );
};

export default NotificationLogs;
