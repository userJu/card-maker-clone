import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    onAdd(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
        ref={nameRef}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
        ref={companyRef}
      />
      <select
        className={styles.select}
        name="theme"
        placeholder="theme"
        ref={themeRef}
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
        ref={titleRef}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
        ref={emailRef}
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="message"
        ref={messageRef}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
