"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  RentalRequestFormValues,
  rentalRequestSchema,
} from "@/schemas/rental-request.schema";

import { createRentalRequest } from "@/services/dashboard/rental-request.service";
import { useState } from "react";

type Props = {
  propertyId: string;
};

const RequestRentForm = ({ propertyId }: Props) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<RentalRequestFormValues>({
    resolver: zodResolver(rentalRequestSchema),
    defaultValues: {
      tenantMessage: "",
      requestedMoveInDate: "",
      durationInMonths: 1,
    },
  });

  const onSubmit = async (values: RentalRequestFormValues) => {
    try {
      setLoading(true);

      await createRentalRequest({
        propertyId,
        ...values,
      });

      toast.success("Rental request submitted successfully.");

      form.reset();
    } catch {
      toast.error("Failed to submit rental request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mt-6 space-y-4 rounded-lg border p-5"
    >
      <Textarea
        placeholder="Tell the landlord about yourself..."
        {...form.register("tenantMessage")}
      />

      <Input type="date" {...form.register("requestedMoveInDate")} />

      <Input
        type="number"
        min={1}
        placeholder="Duration in months"
        {...form.register("durationInMonths", {
          valueAsNumber: true,
        })}
      />

      <Button disabled={loading}>
        {loading ? "Submitting..." : "Request to Rent"}
      </Button>
    </form>
  );
};

export default RequestRentForm;
