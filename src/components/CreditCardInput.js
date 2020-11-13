import React from "react";
import { useForm } from "react-hook-form";
import {
  Wrapper,
  Container,
  Form,
  Input,
  Label,
  Submit,
  SubmitSuccess,
  Error,
} from "./stylesComponents/StylesComponents";

export default function CreditCardInput() {
  const { register, errors, handleSubmit, formState } = useForm();

  const onSubmit = (data, e) => {
    alert(JSON.stringify(data));
    e.target.reset();
  };

  const { isSubmitSuccessful } = formState;

  return (
    <div>
      <Wrapper>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="cardNumber">Card number</Label>
            <Input
              type="text"
              name="cardNumber"
              className="card-number"
              placeholder="**** **** **** ****"
              ref={register({
                required: true,
                pattern: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
              })}
            />
            {errors.cardNumber?.type === "required" && (
              <Error>Your card number is required</Error>
            )}
            {errors.cardNumber && (
              <Error>Please enter a valid card number!</Error>
            )}
            <Label htmlFor="cardExpiry">Card Expiry</Label>
            <Input
              type="text"
              name="cardExpiry"
              placeholder="MM / YY"
              ref={register({
                required: true,
                minLength: 4,
                maxLength: 4,
                pattern: /^[0][1-9]|[1][0-2]-[0-9]{2}$/,
              })}
            />
            {errors.cardExpiry?.type === "required" && (
              <Error>Your card expiry is required</Error>
            )}
            {errors.cardExpiry && (
              <Error>Please enter a valid card expiry!</Error>
            )}
            <Label htmlFor="cardCVV">CVV2</Label>
            <Input
              type="password"
              name="cardCVV"
              placeholder="***"
              ref={register({
                required: true,
                minLength: 3,
                maxLength: 3,
                pattern: /^\d{1,}$/,
              })}
            />
            {errors.cardCVV && (
              <Error>Please enter a valid security code!</Error>
            )}
            {errors.cardCVV?.type === "required" && (
              <Error>Your CVC is required</Error>
            )}
            {isSubmitSuccessful && (
              <SubmitSuccess>Successful submit!</SubmitSuccess>
            )}
            <Submit type="submit" value="Submit"></Submit>
          </Form>
        </Container>
      </Wrapper>
    </div>
  );
}
