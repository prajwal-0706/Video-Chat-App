import Button2 from './components/Button2';
import Button from './components/ui/Button';

const App = () => {
  return (
    <div>
      <h1 className="text-red-500 font-bold text-4xl text-center font-poppins m-5 ">
        Hello World
      </h1>
      <Button>
        <Button2 name="Prajwal" clases={12323} />
      </Button>
    </div>
  );
};

export default App;
