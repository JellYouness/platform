"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Toast } from "@/components/ui/toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";
import { SearchIcon } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/courses/${response.data.id}`);
      console.log("Course created");
    } catch {
      toast.error("Something went wrong");
    }
  }

  return ( 
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full pt-40">
      <div>
        <h1 className="text-5xl text-center font-bold">
          Name your course
        </h1>
        
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Course title
                  </FormLabel>
                  <FormControl className="relative ">
                    
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Advanced web development'"
                      {...field}
                    />
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-1">
              
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                variant='blueHover'
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
   );
}
 
export default CreatePage;