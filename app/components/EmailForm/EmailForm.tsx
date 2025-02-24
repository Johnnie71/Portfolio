import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from "framer-motion";
import SpinLoader from '../Loaders/SpinLoader';

const EmailForm = () => {
  const [showForm, setshowForm] = useState<boolean>(true);
  const [isSending, setIsSending] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<string | null>(null)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null)

    if (formRef.current) {
      setIsSending(true)
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
        setshowForm(false)
      } catch (error) {
        console.error('Failed to send email: ', error)
        setError("Failed to send message!")
      } finally {
        setIsSending(false)
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
      <AnimatePresence mode='wait'>
        {showForm ? (
          <motion.form
            key='form'
            ref={formRef} 
            onSubmit={sendEmail}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
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
              <label className="block text-sm font-medium text-gray-300" htmlFor="from_email">Email Address<span className='text-red-500'>*</span></label>
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
                placeholder='Have thoughts? Let&apos;s chat! I&apos;m all ears...'
                aria-required={true}
                required
              ></textarea>
            </div>
            {error && <span className='text-red-700'>{error}</span>}
            <div className="flex justify-end mt-2">
              <button
                className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-[1px] transition-transform duration-300 text-sm md:text-lg hover:scale-95"
                onClick={() => setshowForm(true)}
              >
                <div
                  className="bg-gray-900 rounded-3xl px-4 py-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-in-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
                  >
                  {isSending ? <SpinLoader /> : error ? "Try Again" : 'Send'}
                </div>
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key='success'
            className='w-full min-h-60 flex flex-col justify-center items-center'
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <h1 className='text-xl mb-5'>Sent! Thanks for connecting!</h1>
            <button
              className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-[1px] transition-transform duration-300 text-sm md:text-lg hover:scale-95"
              onClick={() => setshowForm(true)}
            >
              <div
                className="bg-gray-900 rounded-3xl px-4 py-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-in-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
                >
                  Send another
              </div>
            </button>
        </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default EmailForm;