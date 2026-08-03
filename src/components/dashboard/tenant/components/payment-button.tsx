"use client";

import { Button } from "@/components/ui/button";
import { createCheckoutSession } from "@/services/payment.service";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  agreementId: string;
};

const PaymentButton = ({ agreementId }: Props) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      const response = await createCheckoutSession(agreementId);

      window.location.href = response.data.checkoutUrl;
    } catch {
      toast.error("Failed to start payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handlePayment} disabled={loading}>
      {loading ? "Redirecting..." : "Proceed to Payment"}
    </Button>
  );
};

export default PaymentButton;
