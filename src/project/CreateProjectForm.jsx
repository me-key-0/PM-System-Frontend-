import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tags } from "@/projectList/ProjectList";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { useState } from "react";

const CreateProjectForm = () => {
  const filteredTags = tags.filter((tag) => tag != "all");
  const [availableTags, setAvailableTags] = useState(filteredTags);

  const handleTagsChange = (newValue) => {
    let selectedTags = form.getValues("tags");

    if (selectedTags.includes(newValue)) {
      selectedTags = selectedTags.filter((tag) => tag != newValue);
      setAvailableTags([...availableTags, newValue]);
    } else {
      selectedTags = [...selectedTags, newValue];
      setAvailableTags(availableTags.filter((tag) => tag != newValue));
    }

    form.setValue("tags", selectedTags);
  };

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: [],
    },
  });

  const onSubmit = (data) => {
    console.log("Create project data", data);
  };
  return (
    <div>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="project name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="project description..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    defaultValue="fullstack"
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                    className="border w-full border-gray-700 py-5 px-5"
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-stack">Full-Stack</SelectItem>
                      <SelectItem value="front-end">Front-End</SelectItem>
                      <SelectItem value="back-end">Back-End</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    value=""
                    onValueChange={(value) => {
                      handleTagsChange(value);
                    }}
                    className="border w-full border-gray-700 py-5 px-5"
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="tags" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTags.map((item) => (
                        <SelectItem key={item} value={item} placeholder="tags">
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <div className="flex gap-1 flex-wrap">
                  {field.value.map((item) => (
                    <div
                      key={item}
                      onClick={() => handleTagsChange(item)}
                      className="cursor-pointer rounded-full flex border items-center py-1 gap-2 px-4"
                    >
                      <span key={item} className="text-sm">
                        {item}
                      </span>
                      <Cross1Icon className="h-3 w-3" />
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogClose>
            <Button type="submit" className="w-full my-5">
              Create Project
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
