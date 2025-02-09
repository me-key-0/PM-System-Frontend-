import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const ChatBox = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log("message sent: ", message);
  };
  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>
        <ScrollArea className="h-[32rem] w-full flex p-5 flex-col gap-3 ">
          {[1, 2, 3, 4].map((item) =>
            item % 2 == 0 ? (
              <div key={item} className="flex gap-2 mb-2 justify-start">
                <Avatar>
                  <AvatarFallback>J</AvatarFallback>
                </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                  <p>Raam</p>
                  <p className=" text-gray-300">How are you?</p>
                </div>
              </div>
            ) : (
              <div key={item} className="flex gap-2 mb-2 justify-end">
                <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
                  <p>Raam</p>
                  <p className=" text-gray-300">How are you?</p>
                </div>
                <Avatar>
                  <AvatarFallback>J</AvatarFallback>
                </Avatar>
              </div>
            )
          )}
        </ScrollArea>
        <div className="relative p-0">
          <Input
            className="py-7 border-t rounded-none outline:none focus:outline-none focus:ring-0 border-b-0 border-x-0"
            placeholder="type message..."
            value={message}
            onChange={handleMessageChange}
          />
          <Button
            size="icon"
            variant="ghost"
            onClick={handleSendMessage}
            className="absolute right-2 top-3 rounded-full "
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
