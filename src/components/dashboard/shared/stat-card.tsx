import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  value: string;
  description?: string;
};

const StatCard = ({ title, value, description }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">{value}</p>

        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
