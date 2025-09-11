import React from 'react';
import { useModal } from './ModalContext';

const AppointmentModal = () => {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-screen flex flex-col relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
            Book An Appointment
          </h2>
          <p className="text-gray-600 text-sm text-center">
            Fill in your details below to schedule a consultation. We'll confirm shortly.
          </p>
        </div>

        {/* Modal Form */}
        <div className="p-6 overflow-y-auto flex-1">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Add form submission logic here (e.g., API call)
              console.log('Form submitted');
              closeModal();
            }}
          >
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="appointmentTime" className="block text-gray-700 font-medium mb-1">
                Appointment Date & Time
              </label>
              <input
                type="datetime-local"
                id="appointmentTime"
                name="appointmentTime"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="comments" className="block text-gray-700 font-medium mb-1">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows="4"
                placeholder="Leave a note (symptoms, requests, etc.)"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
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