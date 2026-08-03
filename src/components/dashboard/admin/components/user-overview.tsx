import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const users = [
  {
    id: 1,
    name: "Ali",
    email: "ali@example.com",
    role: "TENANT",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
    role: "LANDLORD",
  },
  {
    id: 3,
    name: "Admin",
    email: "admin@example.com",
    role: "ADMIN",
  },
];

const UserOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Users</CardTitle>
      </CardHeader>

      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default UserOverview;
