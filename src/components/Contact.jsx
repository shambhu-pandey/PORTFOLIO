import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaCopy } from "react-icons/fa";
import { profile } from '../data/profile';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bqonjxlb", userInfo);
      toast.success("Your message has been sent.");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <section id="contact" name="Contact" className="py-5 py-lg-6">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold text-[#00F5A0] letter-spacing">Contact</p>
          <h2 className="display-6 fw-semibold text-white">Let&apos;s build something meaningful together</h2>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-5">
            <div className="glass-card p-4 p-lg-5 h-100">
              <h3 className="h4 text-white mb-3">Get in touch</h3>
              <p className="text-[#94A3B8] mb-4">
                I’m always interested in hearing about new opportunities, collaborations, and thoughtful products.
              </p>

              <div className="d-flex flex-column gap-3">
                <a href={`mailto:${profile.email}`} className="contact-link">
                  <FaEnvelope /> <span>{profile.email}</span>
                </a>
                <a href={`tel:${profile.phone}`} className="contact-link">
                  <FaPhoneAlt /> <span>{profile.phone}</span>
                </a>
                <div className="contact-link">
                  <FaMapMarkerAlt /> <span>{profile.location}</span>
                </div>
              </div>

              <div className="d-flex gap-3 mt-4">
                <a href={profile.github} target="_blank" rel="noreferrer" className="social-pill">
                  <FaGithub size={18} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-pill">
                  <FaLinkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="glass-card p-4 p-lg-5">
              <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3">
                <div>
                  <label className="form-label text-white">Full name</label>
                  <input {...register("name", { required: true })} className="form-control" placeholder="Your name" />
                  {errors.name && <small className="text-danger">This field is required.</small>}
                </div>
                <div>
                  <label className="form-label text-white">Email address</label>
                  <input {...register("email", { required: true })} className="form-control" placeholder="you@example.com" />
                  {errors.email && <small className="text-danger">This field is required.</small>}
                </div>
                <div>
                  <label className="form-label text-white">Message</label>
                  <textarea {...register("message", { required: true })} rows="5" className="form-control" placeholder="Tell me about your idea" />
                  {errors.message && <small className="text-danger">This field is required.</small>}
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <button type="submit" className="btn btn-accent align-self-start">
                    Send Message
                  </button>
                  <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-outline-accent align-self-start">
                    Resume
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;