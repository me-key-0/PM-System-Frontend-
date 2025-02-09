import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectCard from "@/project/ProjectCard";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

export const tags = [
  "all",
  "react",
  "nextjs",
  "spring boot",
  "mysql",
  "mongodb",
  "angular",
  "python",
  "flask",
  "django",
];

const ProjectList = () => {
  const [keyword, setKeyword] = useState("");

  const handleFilterChange = (section, value) => {
    console.log("value:", value, ", section:", section);
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <div className="relative px-5 lg:px-0 lg:flex gap-10 justify-center py-5">
        {/* Filter - Section (Left-side-bar) */}
        <section className="filterSection">
          <Card className="p-5 sticky top-10">
            <div className="flex justify-between lg:w-[20rem]">
              <p className="text-xl -tracking-wider">filters</p>

              <Button variant="ghost" size="icon">
                <MixerHorizontalIcon />
              </Button>
            </div>

            <CardContent className="mt-5">
              <ScrollArea className="space-y-7 h-[70vh]">
                {/* Category - Section */}
                <div>
                  <h1 className="pb-3 text-gray-400 border-b">category</h1>
                  <div className="pt-5">
                    <RadioGroup
                      className="space-y-3 pt-5"
                      defaultValue="all"
                      onValueChange={(value) =>
                        handleFilterChange("category", value)
                      }
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="all" id="r1" />
                        <Label htmlFor="h1">All</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="full-stack" id="r2" />
                        <Label htmlFor="h1">Full-Stack</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="front-end" id="r3" />
                        <Label htmlFor="h1">Front-End</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="back-end" id="r4" />
                        <Label htmlFor="h1">Back-End</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Tag - Section */}
                <div className="pt-9">
                  <h1 className="pb-3 text-gray-400 border-b">Tag</h1>
                  <div className="pt-5">
                    <RadioGroup
                      className="space-y-3 pt-5"
                      defaultValue="all"
                      onValueChange={(value) =>
                        handleFilterChange("tag", value)
                      }
                    >
                      {tags.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <RadioGroupItem value={item} id={`r1-${item}`} />
                          <Label htmlFor={`h1-${item}`}>{item}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        {/* Project - list - section (main-section) */}
        <section className="projectListSection w-full lg:w-[48rem] ">
          {/* Search - Bar */}
          <div className="flex gap-2 items-center pb-5 justify-between">
            <div className="relative p-0 w-full">
              <Input
                onChange={handleSearchChange}
                placeholder="serach for projects"
                className="40% px-9"
              />
              <MagnifyingGlassIcon className="absolute top-3 left-4" />
            </div>
          </div>

          <div>
            <div className="space-y-5 min-h-[74vh]">
              {keyword
                ? [1, 1, 1].map((item) => <ProjectCard key={item} />)
                : [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5].map(
                    (item) => <ProjectCard key={item} />
                  )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectList;
