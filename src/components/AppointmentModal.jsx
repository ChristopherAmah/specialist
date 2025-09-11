import React from 'react';
import { useModal } from './ModalContext';
import logo from '../assets/logo.jpg';
const AppointmentModal = () => {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-[4px] shadow-lg w-full max-w-md max-h-[90vh] flex flex-col relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-[#626262] hover:text-gray-700"
        >
          ✕
        </button>

        {/* Modal Header with Logo */}
        <div className="p-6 text-center border-b border-gray-200">
          <img src={logo} alt="Model Specialist Hospital Logo" className="mx-auto w-[81.68px] h-[57.11px] mb-2" />
          <h2 className="text-[26px] text-[#313131]">Book An Appointment</h2>
          <p className="text-[#666666] text-[12px]">
            Fill in your details below to schedule a consultation with the doctor. We'll confirm your appointment shortly.
          </p>
        </div>

        {/* Modal Form */}
        <div className="p-6 overflow-y-auto flex-1">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              console.log('Form submitted');
              closeModal();
            }}
          >
            <div>
              <label htmlFor="fullName" className="block text-[#313131] text-[16px] mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-[#C0D5DE] rounded-[6px] text-gray-700 placeholder-[#939393] focus:outline-none focus:border-[#1B7FF2]"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-[#313131] text-[16px] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-[#C0D5DE] rounded-[6px] text-gray-700 placeholder-[#939393] focus:outline-none focus:border-[#1B7FF2]"
                required
              />
            </div>
            <div>
              <label htmlFor="appointmentTime" className="block text-[#313131] text-[16px] mb-1">
                Appointment Date & Time
              </label>
              <input
                type="datetime-local"
                id="appointmentTime"
                name="appointmentTime"
                className="w-full px-3 py-2 border border-[#C0D5DE] rounded-[6px] text-gray-700 placeholder-[#939393] focus:outline-none focus:border-[#1B7FF2]"
                required
              />
            </div>
            <div>
              <label htmlFor="comments" className="block text-[#313131] text-[16px] mb-1">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows="4"
                placeholder="Leave a note for the doctor (symptoms/requests, etc.)"
                className="w-full px-3 py-2 border border-[#C0D5DE] rounded-[6px] text-gray-700 placeholder-[#939393] focus:outline-none focus:border-[#1B7FF2]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#1B7FF2] text-white font-semibold rounded-[8px] hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;