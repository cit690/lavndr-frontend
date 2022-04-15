import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MessageForm from "../../components/MessageForm/MessageForm";
import './SendMessage.css'

const SendMessage = ({ user, profiles, addMessage }) => {
  const [recipient, setRecipient] = useState("")
  const primary_id = user?.id
  const { id } = useParams()

  useEffect(() => {
    const find = (x) => {
      profiles?.forEach((profilex) => {
        if (parseInt(profilex.id) === parseInt(x)) {
          setRecipient(profilex.name)
        }
      })
    }
    find(id)
  }, [profiles, id])

  if (recipient === "") {
    return (
      <div>
        loading
      </div>
    )
  }



  return (
    <>
      <h3> {user?.name}'s and {recipient}'s dms</h3>
      <div className="messages">
        {profiles?.map((profile) => {
          return (
            profile.messages?.map((message, idx) => {
              return (
                <div key={idx}>
                  {message ?
                    <>
                      <div>
                        {(parseInt(message?.sender_id) === parseInt(id) || parseInt(message?.recipient_id) === parseInt(id))
                          &&
                          (parseInt(message?.sender_id) === parseInt(primary_id) || parseInt(message?.recipient_id) === parseInt(primary_id))
                          ?
                          <div>
                            {message?.content}
                          </div>
                          :
                          null
                        }
                      </div>
                    </>
                    : null
                  }
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