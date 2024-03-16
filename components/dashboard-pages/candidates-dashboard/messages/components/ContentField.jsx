"use client"

import Image from "next/image";
import ChatHamburger from "../../../employers-dashboard/messages/components/ChatHamburger";
import { useEffect, useRef, useState } from "react";



const ChatBoxContentField = () => {

  const messageContainerRef = useRef(null)


  const [conversation, setConversation] = useState(

    [
      {
        id: 1,
        message: "How likely are you to recommend our company to your friends and family?",
        sender: false,
        name: "Albert Flores"
      },
      {
        id: 2,
        message: " Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.",
        sender: true,
      },
      {
        id: 3,
        message: "  Ok, Understood!",
        sender: false,
        name: " Cameron Williamson"
      },

    ])



  //scroll to top after adding a message 
  useEffect(() => {
    messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
  }, [conversation]);


  //dummy image component 
  const img = <Image
    width={48}
    height={48}
    src="/images/resource/candidate-8.png"
    alt="48"
    className="rounded-circle user_img"
  />


  // adding message to existing message state
  function addMessage(e) {
    e.preventDefault()

    setConversation(p => {
      const messages = [...p, { id: p.length + 1, message: e.target.elements.text.value, sender: true, }]
      return messages
    })

    setTimeout(() => {
      e.target.elements.text.value = "";
    }, 100)


  }

  return (
    <div className="card message-card">

      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            {img}
          </div>
          <div className="user_info">
            <span>Arlene McCoy</span>
            <p>Active</p>
          </div>
        </div>

        <div className="btn-box">
          <button className="dlt-chat">Delete Conversation</button>
          <ChatHamburger />
        </div>
      </div>
      {/* End .cart-header */}

      <div
        ref={messageContainerRef}
        className="card-body msg_card_body"
      >


        {
          conversation?.map(({ name, message, sender }, i) => {

            return (
              <div key={i} className={`d-flex   ${sender ? " mb-2 justify-content-end reply " : " justify-content-start "} `}>
                <div className="img_cont_msg">
                  {img}
                  <div className="name">
                    {name ? name : "You"} <span className="msg_time">35 mins</span>
                  </div>
                </div>
                <div className="msg_cotainer">
                  {message}
                </div>
              </div>
            )

          })
        }

      </div>
      {/* End .card-body */}

      <div className="card-footer">
        <div className="form-group mb-0">
          <form onSubmit={addMessage} >
            <textarea
              className="form-control type_msg"
              placeholder="Type a message..."
              name="text"
              required
            ></textarea>
            <button
              type="submit"
              className="theme-btn btn-style-one submit-btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* End .card-footer */}
    </div>
  );
};

export default ChatBoxContentField;
