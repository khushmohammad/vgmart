import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Item from "./Item";

import NotFound from "./NotFound";
import { vegetables } from "@/types/typeGroup";
import axios from "axios";
import Loading from "./Loading";

function ItemList() {
  const [items, setItems] = useState<vegetables[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getItems = async () => {
    try {
      setLoading(true);
      // Simulate an API call
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVICE_PATH}/get/vegetables`
      );
      const { data } = response;
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching items:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!items || items.length === 0) {
    return <NotFound Message="Items Not Found" />;
  }
  return (
    <Row>
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Item item={item} />
          </React.Fragment>
        );
      })}
    </Row>
  );
}

export default ItemList;
