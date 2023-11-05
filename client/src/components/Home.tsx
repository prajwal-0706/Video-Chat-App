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
    <div className="w-full h-[100vh] gap-[50px] flex flex-col items-center justify-center">
      <header>
        <h1 className="font-poppins text-4xl font-bold text-center">
          Video Chat App
        </h1>
      </header>
      <section className="w-full">
        <form
          className="flex items-center justify-center flex-col gap-10"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 w-[40%] border-2 border-black rounded-md sm: w-100"
            value={roomId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRoomId(e.target.value)
            }
            type="text"
            placeholder="Enter the room id"
          />
          <button
            className="w-[10%] bg-slate-300 px-3 rounded-md py-2.5 sm: w-[40%]"
            type="submit"
          >
            Join a room
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
