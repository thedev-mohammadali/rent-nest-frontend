import { z } from "zod";

export const rentalRequestSchema = z.object({
  tenantMessage: z.string().min(10, "Message must be at least 10 characters"),

  requestedMoveInDate: z.string().min(1, "Move-in date is required"),

  durationInMonths: z.number().min(1, "Duration must be at least 1 month"),
});

export type RentalRequestFormValues = z.infer<typeof rentalRequestSchema>;
