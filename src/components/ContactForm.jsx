import React from "react";
import "../css/ContactForm.css";

export default function ContactForm() {
  return (
    <section className="section_form">
      <form className="form_qb">
        <div className="contact_form_qb">
          <label className="field_label_qb" htmlFor="nameInput">
            Nom / prénom
            <input className="field_input" type="text" name="nameInput" />
          </label>
          <label className="field_label_qb" htmlFor="emailInput">
            Email
            <input className="field_input" type="text" name="emailInput" />
          </label>
          <label className="field_label_qb" htmlFor="sujetlInput">
            Sujet
            <input className="field_input" type="text" name="sujetlInput" />
          </label>
        </div>
        <div className="form_message_qb">
          <label className="field_label_qb" htmlFor="messageInput">
            Message
            <br />
            <textarea className="contact_textaera_qb" name="messageInput" />
          </label>
          <button type="submit" value="send" className="button_form">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}
