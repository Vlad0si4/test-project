import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./shared/components/SharedLayout/SharedLayout";

import { ProductPage } from "./pages/ProductPage";

import { IncomePage } from "./pages/IncomePage";
import { PromotePage } from "./pages/PromotePage";
import { HelpPage } from "./pages/HelpPage";
import { DashboardPage } from "./pages/DashboardPage";
import { CustomersPage } from "./pages/CustomersPage/CustomersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/promote" element={<PromotePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={null} />
      </Route>
    </Routes>
  );
}
export default App;
