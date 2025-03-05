"use client";

import { useFormStatus } from "react-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { postMessage } from "@/app/actions";
import { useRef } from "react";
import { toast } from "sonner"


export function GuestFormBook() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await postMessage(formData);
        formRef.current?.reset();
        toast.success("Your message has been submitted, Thank you!");

      }}
      className="flex justify-between gap-4 flex-col md:flex-row">
      <Input
        type="text"
        name="message"
        maxLength={80}
        placeholder="Your Message ..."
        required
      />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled >
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait ...
        </Button>
      ) : (
        <Button  type="submit"> Send </Button>
      

      )}
    </>
  );
}
