import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ProfileProps = {
  name: string;
  email?: string;
};

const Profile = ({ name, email }: ProfileProps) => {
  return (
    <>
      <Avatar className="md:h-12 md:w-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-sm md:text-md leading-tight text-muted-foreground">
        <p className="tracking-wider">{name}</p>
        {email && <p>{email}</p>}
      </div>
    </>
  );
};

export default Profile;
