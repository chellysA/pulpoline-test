import Search from "../../assets/icons/Search";
import Button from "../ButtonBase";

const SearchBar = () => {
  return (
    <div className="flex w-full justify-between items-center rounded-full bg-white py-2 md:py-4 2xl:py-5 px-8">
      <input
        type="text"
        placeholder="Search"
        className="block h-full w-full rounded-full bg-white text-xs md:text-lg font-poppinns outline-none placeholder:!font-poppinns placeholder:!text-softGrey"
      />
      <Button onClick={() => {}} children={<Search />} />
    </div>
  );
};
export default SearchBar;
