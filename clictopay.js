import React from 'react';
import { Button } from 'react-bootstrap';

const ClickToPay = ({ amount }) => {

  const handleClick = async (event) => {
    event.preventDefault();
    const date = new Date().toISOString().replace(/-|:|\.\d+/g, '');
    const url = `https://ipay.clictopay.com/payment/rest/register.do?amount=${
      amount * 1000
    }&currency=788&language=fr&orderNumber=${date}&password={yourpassword}&returnUrl={successurl}&userName={yourpassword}&failUrl={yourfailurl}`;

    const response = await fetch(url);
    const jsonResponse = await response.json();

    window.location.href = jsonResponse.formUrl;
  };



  return (
    <>
      <form onSubmit={handleClick}>
        <Button type='submit' className='btn-block'>
         Pay
        </Button>
      </form>
    </>
  );
};

export default ClickToPay;