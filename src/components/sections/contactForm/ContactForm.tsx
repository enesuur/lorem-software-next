import ContactFormImage from "@/assets/images/contactImage.png";
import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    };

    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required.";
      isValid = false;
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Valid email is required.";
      isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    if (isValid) {
      console.log(formData);
      Swal.fire({
        title: 'Success!',
        html: '<p class="custom-swal-text">Your message has been sent successfully.</p>',
        icon: 'success',
        confirmButtonText: 'Confirm',
        customClass: {
          title: 'custom-swal-title',
          confirmButton: 'custom-swal-confirm-button'
        }
      });
      setFormData({
        name: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setErrors(newErrors);
      Swal.fire({
        title: 'Error!',
        html: '<p class="custom-swal-text">Please fill in all the required fields correctly.</p>',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          title: 'custom-swal-title',
          confirmButton: 'custom-swal-confirm-button'
        }
      });
    }
  };

  return (
    <section>
      <div className={`${styles.contactFormContainer} container`}>
        <form onSubmit={handleSubmit}>
          <h2>
            Connect with Us
            <span> Lets Build Together</span>
          </h2>
          <h4>
            If you have any questions, feel free to reach out to us using the
            form below.
          </h4>

          <label htmlFor="name">
            <input
              type="text"
              id="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </label>

          <label htmlFor="lastName">
            <input
              type="text"
              id="lastName"
              placeholder="Your lastname"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className={styles.error}>{errors.lastName}</p>
            )}
          </label>

          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </label>

          <label htmlFor="subject">
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className={styles.error}>{errors.subject}</p>}
          </label>

          <label htmlFor="message">
            <textarea
              id="message"
              placeholder="Enter your message"
              required
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </label>

          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>

        <figure>
          <Image src={ContactFormImage} alt="Contact Form Image" fill={true} />
        </figure>
      </div>
    </section>
  );
};

export default ContactForm;
