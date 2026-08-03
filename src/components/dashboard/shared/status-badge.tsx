import { Badge } from "@/components/ui/badge";

type Props = {
  status: string;
};

const StatusBadge = ({ status }: Props) => {
  const variant =
    status === "APPROVED"
      ? "default"
      : status === "REJECTED"
        ? "destructive"
        : "secondary";

  return <Badge variant={variant}>{status}</Badge>;
};

export default StatusBadge;
