import { vegetables } from "@/types/typeGroup";

import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export function BasicCard({ data }: { data: vegetables }) {
  return (
    <Card>
      {/* <Image
        src="/images/dummy.jpg"
        height={100}
        width={100}
        alt="dummy"
        className="img-fluid w-100"
        priority={true}
      /> */}
      {data._id}
      <Card.Body>
        <Card.Title className="text-success">{data.name} </Card.Title>

        <Card.Text className="d-flex justify-content-between">
          <b>Price :</b> {data.price} / {data.unit}
        </Card.Text>
        <Card.Text className="d-flex justify-content-between">
          <b>Unit Per Price :</b> {data.unitPerPrice}
        </Card.Text>
        {/* {data.unit === "unit" ? (
          <Card.Text className="d-flex justify-content-between">
            <b>Unit Per Price :</b> {data.unitPerPrice}
          </Card.Text>
        ) : (
          ""
        )} */}
        <Card.Text className="d-flex justify-content-between">
          <b>Quantity :</b> {data.quantity}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

function Item({ item }: { item: vegetables }) {
  return (
    <Col sm={6} md={4} lg={3} className="py-3">
      <BasicCard data={item} />
    </Col>
  );
}

export default Item;
