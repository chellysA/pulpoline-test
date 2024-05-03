import { ReactNode } from "react";
import SideBar from "../../SideBar";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
}: IMainLayoutProps) => {
  return (
    <div className="md:p-8 flex bg-grey100 gap-7 h-full">
      <SideBar />
      <div className="flex-1">{children}</div>
    </div>
  );
};
export default MainLayout;
