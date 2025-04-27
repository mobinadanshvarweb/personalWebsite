import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string({ required_error: "Name is required!" })
    .min(1, { message: "Name is required!" }),
  email: z
    .string({ required_error: "Email is required!" })
    .regex(/^\S+@\S+\.\S+$/, { message: "email be valid" })
    .min(1, { message: "Email name is required" }),
  message: z
    .string({ required_error: "Message is required!" })
    .min(1, { message: "Message is required!" }),
});

export type ContactType = z.infer<typeof ContactSchema>;
