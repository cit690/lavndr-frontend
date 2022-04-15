import MessageForm from "../../components/MessageForm/MessageForm";
import './SendMessage.css'

const SendMessage = ({ profiles, addMessage }) => {
  return ( 
    <>
    <MessageForm addMessage={addMessage} />
    </>
  );
}

export default SendMessage;