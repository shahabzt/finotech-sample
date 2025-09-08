import z from "zod";

export const loginSchema = z.object({
    email: z
      .string()
      .email("آدرس ایمیل معتبر نیست")
      .nonempty("پر کردن این فیلد اجباری است"),
    password: z
      .string()
      .min(6, "رمز عبور حداقل باید ۶ کاراکتر داشته باشد.")
      .nonempty("پر کردن این فیلد اجباری است"),
  });
  
  export type LoginFormInputs = z.infer<typeof loginSchema>;