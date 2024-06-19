import { SignOutBtn } from "../SignoutBtn";
import Profile from "./Profile";

const ShowProfile = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex space-x-3">
        <Profile name="Kshitij Jung Shhai" email="shahi.kshitij55@gmail.com" />
      </div>
      <SignOutBtn />
    </div>
  );
};

export default ShowProfile;
