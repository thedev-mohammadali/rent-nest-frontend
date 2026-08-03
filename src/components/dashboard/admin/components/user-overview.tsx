import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { AdminUser } from "@/types/dashboard";
import EmptyState from "../../shared/empty-state";

type Props = {
  users: AdminUser[];
};

const UserOverview = ({ users }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Users</CardTitle>
      </CardHeader>

      <CardContent>
        {users.length === 0 ? (
          <EmptyState message="No users found." />
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-medium">{user.name}</h3>

                  <p className="text-muted-foreground text-sm">{user.email}</p>
                </div>

                <Badge variant="secondary">{user.role}</Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserOverview;
