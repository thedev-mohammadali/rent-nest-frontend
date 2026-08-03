import { Badge } from "@/components/ui/badge";

import {
  PaymentStatus,
  RentalAgreementStatus,
  RentalRequestStatus,
} from "@/types/dashboard";

type Status = PaymentStatus | RentalAgreementStatus | RentalRequestStatus;

type Props = {
  status: Status;
};

const statusVariant = {
  APPROVED: "default",
  ACTIVE: "default",

  PAID: "default",
  COMPLETED: "default",

  REJECTED: "destructive",
  FAILED: "destructive",

  PENDING: "secondary",
  PENDING_PAYMENT: "secondary",
  CANCELLED: "secondary",
} as const;

const formatStatus = (status: string) => {
  return status
    .toLowerCase()
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const StatusBadge = ({ status }: Props) => {
  return <Badge variant={statusVariant[status]}>{formatStatus(status)}</Badge>;
};

export default StatusBadge;
