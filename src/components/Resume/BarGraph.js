export default function BarGraph({ name }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between w-3/4 px-6 text-lg ">
        <h2>{name}</h2>
      </div>  
    </div>
  );
}
