import ItemList from "@/components/ItemList";
import Navigation from "@/components/Navigation";
import Layout from "@/Layout/Layout";
import React from "react";

function ItemListPage() {
  return (
    <div>
      <Layout>
        <ItemList />
      </Layout>
    </div>
  );
}

export default ItemListPage;
