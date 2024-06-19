import Aside from "./Aside";
import AvatarComponent from "./Avatar";
import ToogleButton from "./ToogleSideBar";
import Links from "./Links";

const SideBar = () => {
  return (
    <Aside>
      <div className="flex justify-center">
        <AvatarComponent />
        <ToogleButton />
      </div>
      <div className="flex-1 place-content-center">
        <Links />
      </div>
    </Aside>
  );
};

export default SideBar;
