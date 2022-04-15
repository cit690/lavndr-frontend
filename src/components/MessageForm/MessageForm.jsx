import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './MessageForm.css'

const MessageForm = ({ addMessage }) => {
  const { id } = useParams()
  const [msgContent, setMsgContent] = useState ({
    content: "",
    sent_at: new Date(),
  })
  
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  
  const handleTxtChange = event => {
    setMsgContent({ ...msgContent, content: event.target.value });
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    addMessage(msgContent);
    if (msgContent.content) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {submitted && valid ? ( <div className="success-msg">Sent</div> ) : null}
          {submitted && !msgContent.content ? ( <span>x</span> ) : null}
          <input
            onChange={handleTxtChange}
            value={msgContent.content}
            type="text"
            placeholder="Message..."
            name="text"/>
          <button 
          onSubmit={addMessage}
          type="submit">SEND</button>
        </form>
      </div>
    </>
  );
};

export default MessageForm;
