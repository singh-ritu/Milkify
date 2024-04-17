import "./logo.styles.css";

interface LogoProps {
  image: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { image } = props;

  return (
    <div>
      <img src={image} alt="no-img" className="logo" />
    </div>
  );
};

export default Logo;
