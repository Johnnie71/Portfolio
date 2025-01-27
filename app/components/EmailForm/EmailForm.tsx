import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion";

const EmailForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<string | null>(null)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null)

    if (formRef.current) {
      
      try{
        const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!;
        const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!;

        await emailjs.sendForm(
          serviceID,
          templateID,
          formRef.current,
          publicKey
        );
        formRef.current.reset()
      } catch (error) {
        console.error('Failed to send email: ', error)
      } finally {
        setIsLoading(false)
      }
    }

  };

  return (
    <motion.div
      className="w-[90%] md:w-[40%] mt-8 relative overflow-hidden bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-primary before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-secondary after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
      initial={{ scale: 0.5, opacity: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}  // Triggers only once when it comes into view
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>

      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="from_name" >Full Name </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="from_name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="from_email">Email Address</label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="from_email"
            id="email"
            type="email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="message">Message</label>
          <textarea
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            rows={3}
            name="message"
            id="message"
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-gradient-to-r bg-primary text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
            type="submit"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default EmailForm;