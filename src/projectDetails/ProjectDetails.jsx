import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon } from "@radix-ui/react-icons";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById } from "@/redux/project/Action";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { project } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, []);

  console.log("project details:", project.projectDetails);
  const handleProjectInvitation = () => {
    console.log("invited");
  };
  return (
    <>
      <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full">
              <h1 className="text-lg font-semibold pb-5">
                {project.projectDetails.name}
              </h1>
              <div className="space-y-5 pb-10 text-sm">
                <p className="w-full md:max-w-lg lg:max-w-xl ">
                  {project.projectDetails.description}
                </p>
                <div className="flex">
                  <p className="w-36">Project Lead: </p>
                  <p>{project.projectDetails.owner.full_name}</p>
                </div>
                <div className="flex">
                  <p className="w-36">Members: </p>
                  <div className="flex items-center gap-2">
                    {project.projectDetails.team.map((item) => (
                      <Avatar className="cursor-pointer " key={item.id}>
                        <AvatarFallback>{item.full_name}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-2"
                          onClick={handleProjectInvitation}
                        >
                          <span>Invite </span>
                          <PlusIcon className="h-3 w-3" />
                        </Button>
                      </DialogClose>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>Invite User</DialogHeader>
                      <InviteUserForm />
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex">
                  <p className="w-36">Category: </p>
                  <p>{project.projectDetails.category}</p>
                </div>
                <div className="flex">
                  <p className="w-36">Status: </p>
                  <Badge>In progress</Badge>
                </div>
              </div>
              <section className="py-5 border-b text-lg -tracking-wider">
                Tasks
              </section>
              <div className="lg:flex md:flex gap-3 justify-between py-5">
                <IssueList
                  status="pending"
                  title="Todo List"
                  issues={project.projectDetails.issues}
                />
                <IssueList
                  status="in_progress"
                  title="In Progress"
                  issues={project.projectDetails.issues}
                />
                <IssueList
                  status="completed"
                  title="Completed"
                  issues={project.projectDetails.issues}
                />
              </div>
            </div>
          </ScrollArea>
          <div className="lg:w-[30%] rounded-md sticky right-5 top-0">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
