import MessageForm from "../../components/MessageForm/MessageForm";
import './SendMessage.css'

const SendMessage = (props) => {
  return ( 
    <>
    <h1> DMS Between (sender profile) and (recipiiant profile) </h1>

    <MessageForm />
    </>
  );
}

export default SendMessage;