import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("user logged-in successfully: ", data);
  };

  return (
    <div className="w-full h-[90vh] flex flex-col justify-center items-center pt-0 ">
      <div className="border-gray-200  text-4xl  w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] h-auto max-w-md p-6 sm:p-8 md:p-10  rounded-lg shadow-lg flex justify-center items-center  pb-0 m-0">
        <p className="font-serif text-4xl font-thin text-center">
          Manage Your Projects
        </p>
      </div>
      <div className="w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] h-auto max-w-md p-6 sm:p-8 md:p-10  rounded-lg border border-gray-500 shadow-lg mb-[100px]">
        <Form {...form}>
          <form
            className="w-full space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="border w-full border-gray-700 py-3 px-4 rounded-md"
                      placeholder="Your email..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      className="border w-full border-gray-700 py-3 px-4 rounded-md"
                      placeholder="Your password..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full my-4 bg-gray-200 hover:bg-gray-300"
            >
              Log-In
            </Button>
            <div className=" w-full my-4 ">
              <p className="text-sm text-gray-400">
                Dont have an account?{" "}
                <Link className="text-gray-100 hover:underline" to="/register">
                  Sign-Up
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
