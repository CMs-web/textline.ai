import send from "../assets/send.png"
import { useFetchedData } from "../store";


function InputField() {
  const fetchData = useFetchedData((state) => state.fetchData);
  const isLoading = useFetchedData((state) => state.isLoading);
  const data = useFetchedData((state) => state.data);
  const input = useFetchedData((state) => state.input);
  const setInput = useFetchedData((state) => state.setInput);
  const handleSubmit = (e) => {
    e.preventDefault();
    input && fetchData(input);
    setInput("");
  };
  return (
    <div className=" text-center px-5 mb-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-[50rem] m-auto flex border rounded-3xl overflow-auto "
      >
        <input
          type="text"
          placeholder="Let's Chat"
          className="border-0 w-full py-2 px-5 rounded-none focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          className="bg-slate-300 p-2 px-3 rounded-r-3xl border-none "
        >
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <img src={send} alt="send" className="w-5 h-5" />
          )}
        </button>
      </form>
    </div>
  );
}

export default InputField;
