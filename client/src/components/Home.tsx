import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (): React.ReactNode => {
  const [roomId, setRoomId] = useState<string>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="">
      <header>
        <h1 className="font-poppins font-bold text-center">Video Chat App</h1>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            value={roomId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRoomId(e.target.value)
            }
            type="text"
            placeholder="Enter the room id"
          />
          <button type="submit">Join a room</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
