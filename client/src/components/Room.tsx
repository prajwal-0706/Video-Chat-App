import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

type RoomParams = {
  roomID: string;
};

const Room = () => {
  const { roomID } = useParams<RoomParams>();

  const newMeeting = async (element: any) => {
    const appID = 1412787923;
    const serverSecret = '783100b4a9d0d09afc506ad8bfe922d9';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID!,
      Date.now().toString(),
      'Prajwal'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element as HTMLElement,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      showTurnOffRemoteCameraButton: true,
      showTurnOffRemoteMicrophoneButton: true,
      showRemoveUserButton: true,
    });
  };

  return <div ref={newMeeting}></div>;
};

export default Room;
