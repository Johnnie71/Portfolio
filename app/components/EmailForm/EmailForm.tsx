import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion";

const EmailForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<string | null>(null)
  const [buttonText, setButtonText] = useState<string>('Send')

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...")
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
        setButtonText('Send')
      } catch (error) {
        console.error('Failed to send email: ', error)
        setError("Failed to send message!")
        setButtonText('Try again')
      }
    }

  };

  return (
    <motion.div
      className="w-[90%] md:w-[40%] mt-8 p-2"
      initial={{ scale: 0.5, opacity: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>

      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="from_name" >Full Name <span className='text-red-500'>*</span></label>
          <input
            className="mt-1 p-2 w-full shadow-xs bg-transparent border border-gray-300 rounded-full text-white shadow-[inset_0_-8px_10px_#8fdfff1f]"
            type="text"
            name="from_name"
            aria-required={true}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="from_email">Email Address <span className='text-red-500'>*</span></label>
          <input
            className="mt-1 p-2 w-full shadow-xs bg-transparent border border-gray-300 rounded-full text-white shadow-[inset_0_-8px_10px_#8fdfff1f]"
            name="from_email"
            id="email"
            type="email"
            aria-required={true}
            required
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-300" htmlFor="message">Message <span className='text-red-500'>*</span></label>
          <textarea
            className="block w-full h-40 px-5 py-2.5 leading-7 resize-none bg-transparent border border-gray-300 rounded-2xl shadow-[inset_0_-8px_10px_#8fdfff1f]"
            rows={3}
            name="message"
            id="message"
            aria-required={true}
            required
          ></textarea>
        </div>
        {error && <span className='text-red-700'>{error}</span>}
        <div className="flex justify-end mt-2">
          <button
            className="bg-gradient-to-r bg-primary text-white px-4 py-2 font-bold rounded-full hover:opacity-80 filter brightness-90"
            type="submit"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default EmailForm;