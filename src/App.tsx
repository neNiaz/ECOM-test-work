import { UsersPage } from "features/users/components/user-page";
import { Layout } from "features/users/components/layout/layout.tsx";

export const App = () => {
  return (
    <Layout>
      <UsersPage />
    </Layout>
  );
};
