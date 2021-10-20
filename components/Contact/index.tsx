import React, { SyntheticEvent, useState } from "react";

export const Contact = () => {
  const emailTo = "jonferth56@gmail.com";

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = form;

  const finallyMessage = `Hola mi nombre es ${name} \n Mi correo es: ${email} \n ${message}`;

  const handleChange = ({ target }: any) => {
    setForm({
      ...form,
      [target.id]: target.value,
    });
  };

  //   const resetForm = () => {
  //     setForm({
  //       ...form,
  //       email: "",
  //       name: "",
  //       subject: "",
  //       message: "",
  //     });
  //   };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log({ name, email, subject, message });
    document.getElementById("emailTo")?.click();
  };

  return (
    <section className="section is-medium" id="contact">
      <h3 className="title">Contacto</h3>
      <p>
        Si tienes alguna pregunta no dudes en contactarme, te dare una respuesta
        lo más pronto posible
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-5"
        style={{
          maxWidth: " 500px",
        }}
      >
        <div className="field">
          <label htmlFor="name" className="label">
            Nombre
          </label>
          <div className="control">
            <input
              id="name"
              className="input"
              type="text"
              required
              placeholder="Pedro Tapia"
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="name" className="label">
            Email
          </label>
          <div className="control">
            <input
              id="email"
              className="input"
              type="email"
              placeholder="pedrotapia@cuidadgotica.com"
              required
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="name" className="label">
            Asunto
          </label>
          <div className="control">
            <input
              id="subject"
              className="input"
              type="text"
              placeholder="Futuro de ciudad gótica"
              required
              value={subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Mensaje</label>
          <div className="control">
            <textarea
              id="message"
              className="textarea"
              placeholder="Hola Jonathan, Batman lleva sin reportarse hace una semana pense que seria buena idea pedirte ayuda"
              value={message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <button className="button is-link">Listo</button>
        <a
          id="emailTo"
          href={`mailto:${emailTo}?subject=${subject}&body=${finallyMessage}`}
        ></a>
      </form>
    </section>
  );
};
