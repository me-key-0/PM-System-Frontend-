import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import CommentCard from "./CommentCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const IssueDetails = () => {
  const { issueId } = useParams();
  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border p-10 rounded-lg">
        <ScrollArea className="w-[60%] h-[80vh]">
          <div>
            <h1 className="text-lg font-semibold text-gray-400">
              Create Nav-bar
            </h1>
            <div className="py-5">
              <h2 className="font-semibold text-gray-400">Description</h2>
              <p className="text-gray-400 text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium quasi corporis incidunt corrupti, dolore dicta ab
                quas fugit. Dicta iste consequuntur, natus officiis eum
                explicabo laborum atque nam error.
              </p>
            </div>
            <div className="mt-5">
              <h1 className="pb-3">
                <Tabs className="w-[400px]" defaultValue="comments">
                  <TabsList className="mb-5">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="comments">Comments</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all">Everything is here</TabsContent>
                  <TabsContent value="history">Make a History</TabsContent>
                  <TabsContent value="comments">
                    <CreateCommentForm issueId={issueId} />
                    <div className="mt-8 space-y-6">
                      {[1, 2, 3].map((comment) => (
                        <CommentCard key={comment} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </h1>
            </div>
          </div>
        </ScrollArea>
        {/* THe right section */}
        <div className="w-full lg:w-[30%] space-y-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="To Do" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">To Do</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <div className="border rounded-lg">
            <p className="border-b py-3 px-5">Details</p>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex items-center gap-10">
                  <p className="w-[7rem]">Assignee</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>J</AvatarFallback>
                    </Avatar>
                    <p>John Doe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex items-center gap-10">
                  <p className="w-[7rem]">Lables</p>
                  <div className="flex items-center gap-3">
                    <p className="px-4">None</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex items-center gap-10">
                  <p className="w-[7rem]">Status</p>
                  <div className="flex items-center gap-3">
                    <Badge>
                      <p>In Progress</p>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex items-center gap-10">
                  <p className="w-[7rem]">Release</p>
                  <div className="flex items-center gap-3">
                    <p>2025-04-12</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex items-center gap-10">
                  <p className="w-[7rem]">Reporter</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <p>Juan Carlos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
