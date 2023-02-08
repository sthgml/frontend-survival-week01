export default function Greeting({ name }: {
	name: string;
}) {
  return (
    <div>
      <p>
        Hello,
        {name}
        !
      </p>
      <img src="/images/dogs.png" alt="" width="400" />
    </div>
  );
}
