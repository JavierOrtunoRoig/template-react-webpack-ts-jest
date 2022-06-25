interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button style={{ height: "2.5rem", marginLeft: "1rem" }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
