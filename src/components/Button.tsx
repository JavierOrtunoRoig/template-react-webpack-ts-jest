import "../styles/button.scss"

interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button className="button__button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
