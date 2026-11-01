"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle, XCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { sendEmail } from "../../actions/send-email";
import { formSchema } from "@/lib/schemas/email-schema";

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("loading");
    setStatusMessage("");

    const result = await sendEmail(values);

    if (result.success) {
      setStatus("success");
      setStatusMessage(result.message);
      form.reset();
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  };

  return (
    <section className="mx-auto rounded-md border-2 border-slate-300 p-6 md:p-10 dark:border-gray-400">
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FieldGroup className="space-y-3">
          {/* Name */}
          <Field data-invalid={!!form.formState.errors.name}>
            <FieldLabel htmlFor="name" className="font-semibold text-sky-600">
              Name
            </FieldLabel>
            <Input
              id="name"
              placeholder="What's your name?"
              aria-invalid={!!form.formState.errors.name}
              {...form.register("name")}
              className="border-2 border-slate-300 dark:border-gray-400 dark:bg-slate-700"
            />
            {form.formState.errors.name && (
              <FieldError className="text-sm text-red-500">
                {form.formState.errors.name.message}
              </FieldError>
            )}
          </Field>

          {/* Email */}
          <Field data-invalid={!!form.formState.errors.email}>
            <FieldLabel htmlFor="email" className="font-semibold text-sky-600">
              Email
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              aria-invalid={!!form.formState.errors.email}
              {...form.register("email")}
              className="border-2 border-slate-300 dark:border-gray-400 dark:bg-slate-700"
            />
            {form.formState.errors.email && (
              <FieldError className="text-sm text-red-500">
                {form.formState.errors.email.message}
              </FieldError>
            )}
          </Field>

          {/* Message */}
          <Field data-invalid={!!form.formState.errors.message}>
            <FieldLabel htmlFor="message" className="font-semibold text-sky-600">
              Message
            </FieldLabel>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              rows={5}
              aria-invalid={!!form.formState.errors.message}
              {...form.register("message")}
              className="resize-none border-2 border-slate-300 dark:border-gray-400 dark:bg-slate-700"
            />
            {form.formState.errors.message && (
              <FieldError className="text-sm text-red-500">
                {form.formState.errors.message.message}
              </FieldError>
            )}
          </Field>
        </FieldGroup>

        {/* Status messages */}
        {status === "success" && (
          <div className="mt-4 flex items-center gap-2 rounded-md bg-green-50 px-4 py-3 text-green-700 dark:bg-green-900/20 dark:text-green-400">
            <CheckCircle size={18} />
            <p className="text-sm">{statusMessage}</p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 flex items-center gap-2 rounded-md bg-red-50 px-4 py-3 text-red-700 dark:bg-red-900/20 dark:text-red-400">
            <XCircle size={18} />
            <p className="text-sm">{statusMessage}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-sky-200 p-2 text-center text-sky-900 hover:bg-sky-300 dark:bg-blue-900 dark:text-slate-300 dark:hover:bg-blue-800"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} className="mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </section>
  );
}
