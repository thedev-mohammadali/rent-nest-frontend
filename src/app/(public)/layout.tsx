import { ReactNode } from "react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return <main className="flex-1">{children}</main>;
};

export default PublicLayout;
