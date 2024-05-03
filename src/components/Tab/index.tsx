import { Typography } from "../Typography";
interface IProps {
  onClick: () => void;
  isActive: boolean;
  label: string;
}

const Tab: React.FC<IProps> = ({ onClick, isActive, label }) => {
  return (
    <li
      className={`${
        isActive && "border-b-2 border-black"
      } mx-2 md:w-full place-self-start text-center cursor-pointer text-grey hover:text-black hover:border-b-2 hover:border-black`}
      onClick={onClick}
    >
      <Typography
        variant="custom"
        className={`${isActive && "text-black"} text-xl font-medium`}
      >
        {label}
      </Typography>
    </li>
  );
};
export default Tab;
