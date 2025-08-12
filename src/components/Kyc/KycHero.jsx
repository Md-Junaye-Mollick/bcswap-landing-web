import React, { useState } from 'react';
import { Camera, Mail, Phone, User, Building, Calendar, GitCommitHorizontal, File } from 'lucide-react';
import KycImg1 from '../../../public/images/KycImg1.jpg';

const KycHero = ({ theme = 'dark' }) => {
  // State to hold the values of the input fields
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    gender: '',
    dob: '', // Use YYYY-MM-DD format for date input
    aadhaar: '',
    aadhaarImage: null,
    panNumber: '',
    panImage: null,
    accountNumber: '',
    ifsc: '',
    bankName: '',
    bankBranch: '',
  });

  // Handler to update state when an input changes
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0] // Store the file object
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Define colors based on the theme prop
  const isLightTheme = theme === 'light';
  const bgColor = isLightTheme ? 'bg-white' : 'bg-card';
  const textColor = isLightTheme ? 'text-gray-800' : 'text-white';
  const boxBgColor = isLightTheme ? 'bg-white' : 'bg-gray-800/50';
  const inputBgColor = isLightTheme ? 'bg-gray-100' : 'bg-gray-700/50';
  const inputBorderColor = isLightTheme ? 'border-gray-300' : 'border-gray-600';
  const labelColor = isLightTheme ? 'text-gray-600' : 'text-gray-400';
  const iconColor = isLightTheme ? 'text-gray-500' : 'text-gray-400';
  const borderColor = isLightTheme ? 'border-gray-200' : 'border-custom-border';
  const headingColor = isLightTheme ? 'text-gray-900' : 'text-white';
  const empIdColor = isLightTheme ? 'text-gray-500' : 'text-gray-400';
  const fileInputTextColor = isLightTheme ? 'text-gray-500' : 'text-gray-400';


  return (
    <div className={`${bgColor} ${textColor} min-h-screen p-4 sm:p-6 lg:p-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl font-semibold">Profile</h1>
        </div>

        <div className={`${boxBgColor} border ${borderColor} rounded-lg p-6`}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6">
            <div className="relative mb-4 sm:mb-0">
              <img
                src={KycImg1} // Placeholder
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-2 border-blue-500"
              />
              <button className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full">
                <Camera size={16} color="white" />
              </button>
            </div>

            <div className="flex-grow text-center sm:text-left">
              <h2 className={`text-2xl font-bold ${headingColor}`}>User</h2>
              <p className={empIdColor}>EMP64048005</p>
            </div>
          </div>

          <div className={`border-t ${borderColor} my-6`}></div>

          {/* --- Personal Information Section with Inputs --- */}
          <div>
            <h3 className={`text-xl font-semibold mb-6 ${headingColor}`}>Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Full Name Input */}
              <div className="flex items-start gap-4">
                <User className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="fullName" className={`${labelColor} text-sm`}>Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder='Enter your Full Name'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-2 mt-1 ${textColor} focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </div>
              {/* Mobile Number Input */}
              <div className="flex items-start gap-4">
                <Phone className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="mobile" className={`${labelColor} text-sm`}>Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder='Enter Your Mobile Number'
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-2 mt-1 ${textColor} focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </div>
               {/* Gender Input */}
               <div className="flex items-start gap-4">
                <User className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="gender" className={`${labelColor} text-sm`}>Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-2 mt-1 ${textColor} focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="" disabled>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              {/* Date of Birth Input */}
              <div className="flex items-start gap-4">
                <Calendar className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="dob" className={`${labelColor} text-sm`}>D.O.B</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    placeholder='Enter Your D.O.B'
                    value={formData.dob}
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-2 mt-1 ${textColor} focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </div>
              {/* Aadhaar Number Input */}
              <div className="flex items-start gap-4">
                <User className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="aadhaar" className={`${labelColor} text-sm`}>Aadhaar Number</label>
                  <input
                    type="text"
                    id="aadhaar"
                    name="aadhaar"
                    placeholder='Enter Your Aadhaar Number'
                    value={formData.aadhaar}
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-2 mt-1 ${textColor} focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </div>
              {/* Aadhaar Image Upload */}
              <div className="flex items-start gap-4">
                <File className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="aadhaarImage" className={`${labelColor} text-sm`}>Aadhaar Image</label>
                  <input
                    type="file"
                    id="aadhaarImage"
                    name="aadhaarImage"
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-1.5 mt-1 ${fileInputTextColor} focus:ring-2 focus:ring-blue-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                ${isLightTheme ? 'file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100' : 'file:bg-blue-900/50 file:text-blue-300 hover:file:bg-blue-800/50'}`}
                  />
                </div>
              </div>
               {/* PAN Card Number Input */}
               <div className="flex items-start gap-4">
                <User className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="panNumber" className={`${labelColor} text-sm`}>PAN Card Number</label>
                  <input
                    type="text"
                    id="panNumber"
                    name="panNumber"
                    placeholder='Enter Your PAN Number'
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-2 mt-1 ${textColor} focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </div>
              {/* PAN Card Image Upload */}
              <div className="flex items-start gap-4">
                <File className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="panImage" className={`${labelColor} text-sm`}>PAN Card Image</label>
                  <input
                    type="file"
                    id="panImage"
                    name="panImage"
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-1.5 mt-1 ${fileInputTextColor} focus:ring-2 focus:ring-blue-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                ${isLightTheme ? 'file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100' : 'file:bg-blue-900/50 file:text-blue-300 hover:file:bg-blue-800/50'}`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`border-t ${borderColor} my-6`}></div>

          {/* --- Bank Details Section with Inputs --- */}
          <div>
            <h3 className={`text-xl font-semibold mb-6 ${headingColor}`}>Bank Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Bank Account Number Input */}
              <div className="flex items-start gap-4">
                <Building className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="accountNumber" className={`${labelColor} text-sm`}>Bank Account Number</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    placeholder='Enter Your Account Number'
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-2 mt-1 ${textColor} focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </div>
              {/* IFSC Code Input */}
              <div className="flex items-start gap-4">
                <GitCommitHorizontal className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="ifsc" className={`${labelColor} text-sm`}>IFSC Code</label>
                  <input
                    type="text"
                    id="ifsc"
                    name="ifsc"
                    placeholder='Enter Your IFSC Code'
                    value={formData.ifsc}
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-2 mt-1 ${textColor} focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </div>
              {/* Bank Name Input */}
              <div className="flex items-start gap-4">
                <Building className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="bankName" className={`${labelColor} text-sm`}>Bank Name</label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    placeholder='Enter Your Bank Name'
                    value={formData.bankName}
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-2 mt-1 ${textColor} focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </div>
              {/* Bank Branch Input */}
              <div className="flex items-start gap-4">
                <Building className={`${iconColor} mt-3`} />
                <div className="w-full">
                  <label htmlFor="bankBranch" className={`${labelColor} text-sm`}>Bank Branch</label>
                  <input
                    type="text"
                    id="bankBranch"
                    name="bankBranch"
                    placeholder='Enter Your Bank Branch'
                    value={formData.bankBranch}
                    onChange={handleInputChange}
                    className={`w-full ${inputBgColor} border ${inputBorderColor} rounded-md p-2 mt-1 ${textColor} focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold py-2 px-6 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycHero;