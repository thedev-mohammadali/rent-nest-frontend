import { ReactNode } from "react";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="container mx-auto flex h-screen items-center justify-center">
      {children}
    </main>
  );
};

export default LoginLayout;
