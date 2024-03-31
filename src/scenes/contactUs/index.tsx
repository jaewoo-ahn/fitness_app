import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import ContactUsPageGrapic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle = "mt-5 rounded-md w-full bg-primary-300 px-5 py-3 ";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isVaild = await trigger();
    if (!isVaild) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.ContactUs);
        }}
        className="md:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <HText>
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </HText>
        <p className="my-5">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </motion.div>
      <div className="mt-10 justify-between md:flex gap-8">
        <motion.div
          className="mt-10 basis-3/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/ahnjaewoo3042@gmail.com"
          >
            <input
              type="text"
              className={inputStyle}
              placeholder="NAME"
              {...register("name", { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is Required"}
                {errors.name.type === "maxLength" && "Max Length is 100 har"}
              </p>
            )}
            <input
              type="text"
              className={inputStyle}
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This field is Required"}
                {errors.email.type === "pattern" && "invalid email address"}
              </p>
            )}
            <textarea
              rows={4}
              cols={50}
              className={inputStyle}
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" && "This field is Required"}
                {errors.message.type === "maxLength" && "Max Length is 100 har"}
              </p>
            )}
            <button
              type="submit"
              className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>
        <motion.div></motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
