import { useCallback, useEffect, useRef, useState } from "react";
import { useStateWithCallback } from "./useStateWithCallback";
import socketInit from "../socket";
import { ACTIONS } from "../actions";

const users = [
  { id: 1, name: "Himanshu" },
  { id: 2, name: "Rakesh" },
];
export const useWebRTC = (roomId: string, user: any) => {
  const [clients, setClients] = useStateWithCallback([]);
  const audioElements: any = useRef({});
  const connections: any = useRef({}); // all peer connection.
  const localMediaStream: any = useRef(null);

  const socket: any = useRef(null);
  useEffect(() => {
    socket.current = socketInit();
    console.log("BROTHER")

  }, []);

  const provideRef = (instance: any, userId: string) => {
    audioElements.current[userId] = instance; //isme audio element aagaya
  };

  const addNewClients = useCallback(
    (newClient: any, cb: any) => {
      const lookingFor = clients.find(
        (client: any) => client.id === newClient.id
      );
      if (lookingFor === undefined) {
        setClients((existingClients: any) => {
          return [...existingClients, newClient];
        }, cb);
      }
    },
    [clients, setClients]
  );
  // capture media
  useEffect(() => {
    const startCapture = async () => {
      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        //used to get access to user's audo.localMediaStream.current is a reference to a MediaStream object, which represents a stream of audio or video data, typically obtained from the user's microphone or camera using the getUserMedia API.
        audio: true,
      });
    };
    console.log("BROTHER")

    startCapture().then(() => {
      addNewClients(user, () => {
        const localElement = audioElements.current[user.id]; //accessing the audio element saved earlier using ref.localElement is presumably an HTML audio element (or another element that can handle media content).
        if (localElement) {
          localElement.volumne = 0; //i will hear my voice twice else.
          localElement.srcObject = localMediaStream.current; //When you set the srcObject property of an HTML media element (like an audio or video element) to a MediaStream object, it associates the media stream with that element. This allows the element to play or display the media content from the stream.
        }
        //socket emit jsoin socket io
        socket.current.emit(ACTIONS.JOIN, {roomId, user});
      });
    });
  }, []);
  return { clients, provideRef };
};
