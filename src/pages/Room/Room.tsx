import { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useWebRTC } from "../../hooks/useWebRTC ";
import { useSelector } from "react-redux";

export const Room = () => {
  const user = useSelector((state: any) => state.auth.user);
  const { id: roomId } = useParams();

  const { clients, provideRef }: { clients: any, provideRef: any } = useWebRTC(roomId!, user);
console.log(clients, provideRef, "hello");
  return (
    <>
      <div>
        {console.log("this is log1")}
        <h1>All Connected Clients</h1>
        {clients.map((client: any) => {
          console.log(client, "client")
          return (
            <div key={client.id}>
         
              <audio ref={(instance)=>provideRef(instance,client.id)} controls autoPlay>//This behavior is expected because when you pass a ref function to the ref attribute of an element, React automatically assigns the DOM element to the current property of the ref. There is no transformation or alteration of the reference within the ref function itself unless you explicitly modify it.
            
                <h4>{client.name}</h4>
              </audio>
            </div>
          );
        })}
      </div>
    </>
  );
};
