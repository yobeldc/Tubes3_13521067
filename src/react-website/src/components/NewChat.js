import React, { useState, useEffect } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./NewChat.css";

function NewChat() {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      window.location.reload();
    }
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(true);
  };

  return (
    <div className="newchat-container position-absolute top-0 start-0 p-3">
      <div>
        <button className="newchat-button" onClick={handleRefresh}>
          <i className="bi bi-file-plus"></i>
          <span className='newchat-button-text'>New Chat</span>
        </button>
      </div>
    </div>
  );
}

export default NewChat;