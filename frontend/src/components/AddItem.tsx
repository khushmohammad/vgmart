import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { vegetables } from "@/types/typeGroup";
import { addItem } from "@/services/utility";
//  price, unitPerPrice, quantity
const schema = yup
  .object({
    name: yup.string().required(),
    unit: yup.string().required(),
    price: yup.number().positive().integer().required(),
    unitPerPrice: yup.number().positive().integer().required(),
    quantity: yup.number().positive().integer().required(),
  })
  .required();

function AddItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: vegetables) => addItem(data);

  return (
    <div>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Form.Group className="mb-3" as={Col} sm={6}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  {...register("name")}
                  defaultValue="tomato"
                  type="Text"
                  placeholder=""
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
                </div>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} sm={6}>
                <Form.Label>Unit</Form.Label>
                <Form.Select {...register("unit")} defaultValue="kg">
                  <option value="kg">Kg</option>
                  <option value="dozen">Dozen</option>
                </Form.Select>
                {/* <Form.Control
                  {...register("unit")}
                  type="text"
                  defaultValue="kg"
                /> */}
                <div className="invalid-feedback d-block">
                  {errors.unit?.message}
                </div>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" as={Col} sm={6}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  {...register("quantity")}
                  type="Text"
                  defaultValue="1"
                />
                <div className="invalid-feedback d-block">
                  {errors.quantity?.message}
                </div>
              </Form.Group>
              <Form.Group className="mb-3" as={Col} sm={6}>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  {...register("price")}
                  type="Text"
                  defaultValue="10"
                />
                <div className="invalid-feedback d-block">
                  {errors.price?.message}
                </div>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Unit Per Price</Form.Label>
              <Form.Control
                {...register("unitPerPrice")}
                type="Text"
                defaultValue="1"
              />
              <div className="invalid-feedback d-block">
                {errors.unitPerPrice?.message}
              </div>
            </Form.Group>

            <Button variant="success" type="submit">
              Add Item
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default AddItem;
