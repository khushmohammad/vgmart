import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Item from "./Item";

import { vegetables as vegItems } from "./../mock/vegetables-list.json";
import NotFound from "./NotFound";
import { vegetables } from "@/types/typeGroup";

function ItemList() {
  const [items, setItems] = useState<vegetables[]>(vegItems);

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
