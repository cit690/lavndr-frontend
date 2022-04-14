import { useState } from 'react'
import '../../styles/Form.css'

const MessageForm = props => {
  const [msgContent, setMsgContent] = useState ({
    content: "",
    recipient_id: "",
    sent_at: new Date(),
  })

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleTxtChange = event => {
    setMsgContent({ ...msgContent, content: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addMessage(msgContent);
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
          {submitted && !msgContent.content ? ( <span>Add a review first. It's not that hard.</span> ) : null}
          <input
            onChange={handleTxtChange}
            value={msgContent.content}
            type="text"
            placeholder="Message..."
            name="text"/>
          <button 
          // className="review-form-btn" 
          type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default MessageForm;
