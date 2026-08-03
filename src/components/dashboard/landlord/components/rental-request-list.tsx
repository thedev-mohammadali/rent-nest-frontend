"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import StatusBadge from "@/components/dashboard/shared/status-badge";
import {
  approveRentalRequest,
  rejectRentalRequest,
} from "@/services/dashboard/rental-request.service";
import { RentalRequest } from "@/types/dashboard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  requests: RentalRequest[];
};

type Action = "APPROVE" | "REJECT";

const RentalRequestList = ({ requests }: Props) => {
  const [loadingAction, setLoadingAction] = useState<{
    id: string;
    action: Action;
  } | null>(null);

  const router = useRouter();

  const handleStatusChange = async (id: string, action: Action) => {
    try {
      setLoadingAction({
        id,
        action,
      });

      if (action === "APPROVE") {
        await approveRentalRequest(id);

        toast.success("Rental request approved successfully.");
      } else {
        await rejectRentalRequest(id);

        toast.success("Rental request rejected successfully.");
      }

      router.refresh();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoadingAction(null);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rental Requests</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="space-y-4 rounded-lg border p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-medium">{request.tenant.name}</h3>

                <p className="text-muted-foreground text-sm">
                  {request.property.title}
                </p>
              </div>

              <StatusBadge status={request.status} />
            </div>

            {request.status === "PENDING" && (
              <div className="flex gap-3">
                <Button
                  disabled={loadingAction?.id === request.id}
                  onClick={() => handleStatusChange(request.id, "APPROVE")}
                >
                  {loadingAction?.id === request.id &&
                  loadingAction.action === "APPROVE"
                    ? "Approving..."
                    : "Approve"}
                </Button>

                <Button
                  variant="destructive"
                  disabled={loadingAction?.id === request.id}
                  onClick={() => handleStatusChange(request.id, "REJECT")}
                >
                  {loadingAction?.id === request.id &&
                  loadingAction.action === "REJECT"
                    ? "Rejecting..."
                    : "Reject"}
                </Button>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RentalRequestList;
