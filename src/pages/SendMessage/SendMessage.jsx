import { useParams } from "react-router-dom";
import MessageForm from "../../components/MessageForm/MessageForm";
import './SendMessage.css'


const SendMessage = ({ profiles, addMessage, messages }) => {
  // secondary_id is who i am sending a message to
  const { secondary_id } = useParams()
  console.log(messages)


  return (
    <>
      <h3>user1 and user2's dms</h3>
      <div className="messages">
        {profiles?.map((profile, id)=> {
          return (
            profile.messages?.map((message, id) => {
              return (
                <div key={id}>
                  { profile.messages ? 
                <>
                <div>
                  all messages here
                </div>
                </>
                
                : 
                <>
                <p>loading</p>
                </>}
                </div>
              )
            })
          )
        })}
      </div>
      <p>send message</p>
      <MessageForm addMessage={addMessage} />
    </>
  );
}

export default SendMessage;