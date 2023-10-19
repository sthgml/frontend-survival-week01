type Props = {
    name?: string;
};
const Greeting = ({ name = "uhui" }: Props) => (
    <p>Hello {name}</p>
);

export default Greeting;
