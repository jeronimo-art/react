import { init, send } from "emailjs-com";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../css/estilos_contacto.css";
//import "../js/validar";

init("user_aUU0Vn7SifIuuMMkkLn9o");


export default function Contacto() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send(
      "gmail_mensaje",
      "template_u60fnwe",
      toSend,
      "user_aUU0Vn7SifIuuMMkkLn9o"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <Input
          id="fromName"
          type="text"
          name="from_name"
          placeholder="Tu nombre (obligatorio)"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="to_name"
          placeholder="Nombre al que se dirige"
          value={toSend.to_name}
          onChange={handleChange}
        />
        <Input
          id="mensaje"
          type="text"
          name="message"
          placeholder="Tu mensaje (obligatorio)"
          value={toSend.message}
          onChange={handleChange}
        />
        <Input
          id="email"
          type="text"
          name="reply_to"
          placeholder="Tu email (obligatorio)"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <Button type="submit" id="btn-contact">
          Enviar
        </Button>
      </form>
    </div>
  );
}
