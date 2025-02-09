import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserList = () => {
  return (
    <div className="space-y-2">
      <div className="rounded-md border">
        <p className="py-2 px-3">{"Raam"}</p>
      </div>
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="py-2 group hover:pg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4"
        >
          <Avatar>
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm leading-none">John Doe</p>
            <p className="text-sm text-muted-foreground">@JohnDoe</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
