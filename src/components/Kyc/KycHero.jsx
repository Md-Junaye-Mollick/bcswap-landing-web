import React, { useState } from 'react';
import { Camera, Mail, Phone, User, Building, Calendar, GitCommitHorizontal, File } from 'lucide-react';
import KycImg1 from '../../../public/images/KycImg1.jpg';

const KycHero = () => {
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

  return (
    <div className="max-w-7xl mx-auto rounded-xl mt-14 bg-primary text-dispute-color min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl text-dispute-color font-semibold">Profile</h1>
        </div>

        <div className="bg-card border border-custom-border rounded-lg p-6">
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
              <h2 className="text-2xl font-bold text-dispute-color">User</h2>
              <p className="text-dispute-color">EMP64048005</p>
            </div>
          </div>

          <div className="border-t border-custom-border my-6"></div>

          {/* --- Personal Information Section (Display Only) --- */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-dispute-color">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              {/* Email Address */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-red-500" size={20} />
                </div>
                <div>
                  <p className="text-dispute-color text-sm">Email Address</p>
                  <p className="text-dispute-color font-medium">apurbanaskar3206@gmail.com</p>
                </div>
              </div>
              
              {/* Mobile Number */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-500" size={20} />
                </div>
                <div>
                  <p className="text-dispute-color text-sm">Mobile Number</p>
                  <p className="text-dispute-color font-medium">8489461122</p>
                </div>
              </div>

              {/* Department */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Building className="text-purple-500" size={20} />
                </div>
                <div>
                  <p className="text-dispute-color text-sm">Department</p>
                  <p className="text-dispute-color font-medium">N/A</p>
                </div>
              </div>

              {/* Date of Birth */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Calendar className="text-orange-500" size={20} />
                </div>
                <div>
                  <p className="text-dispute-color text-sm">Date of Birth</p>
                  <p className="text-dispute-color font-medium">May 15, 1997</p>
                </div>
              </div>

              {/* Role */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-dispute-color text-sm">Role</p>
                  <p className="text-dispute-color font-medium">N/A</p>
                </div>
              </div>

              {/* Joining Date */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Calendar className="text-teal-500" size={20} />
                </div>
                <div>
                  <p className="text-dispute-color text-sm">Joining Date</p>
                  <p className="text-dispute-color font-medium">May 28, 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-custom-border my-6"></div>

          {/* --- Bank Details Section with Inputs --- */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-dispute-color">Fill Cash Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Full Name Input */}
              <div className="flex items-start gap-4">
                <User className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="fullName" className="text-dispute-color text-sm">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder='Enter your Full Name'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-2 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Mobile Number Input */}
              <div className="flex items-start gap-4">
                <Phone className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="mobile" className="text-dispute-color text-sm">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder='Enter Your Mobile Number'
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-2 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Gender Input */}
              <div className="flex items-start gap-4">
                <User className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="gender" className="text-dispute-color text-sm">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-2 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500"
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
                <Calendar className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="dob" className="text-dispute-color text-sm">D.O.B</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    placeholder='Enter Your D.O.B'
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-2 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Aadhaar Number Input */}
              <div className="flex items-start gap-4">
                <User className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="aadhaar" className="text-dispute-color text-sm">Aadhaar Number</label>
                  <input
                    type="text"
                    id="aadhaar"
                    name="aadhaar"
                    placeholder='Enter Your Aadhaar Number'
                    value={formData.aadhaar}
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-2 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Aadhaar Image Upload */}
              <div className="flex items-start gap-4">
                <File className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="aadhaarImage" className="text-dispute-color text-sm">Aadhaar Image</label>
                  <input
                    type="file"
                    id="aadhaarImage"
                    name="aadhaarImage"
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-1.5 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-900/50 file:text-blue-300 hover:file:bg-blue-800/50"
                  />
                </div>
              </div>

              {/* PAN Card Number Input */}
              <div className="flex items-start gap-4">
                <User className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="panNumber" className="text-dispute-color text-sm">PAN Card Number</label>
                  <input
                    type="text"
                    id="panNumber"
                    name="panNumber"
                    placeholder='Enter Your PAN Number'
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-2 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* PAN Card Image Upload */}
              <div className="flex items-start gap-4">
                <File className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="panImage" className="text-dispute-color text-sm">PAN Card Image</label>
                  <input
                    type="file"
                    id="panImage"
                    name="panImage"
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-1.5 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-900/50 file:text-blue-300 hover:file:bg-blue-800/50"
                  />
                </div>
              </div>

              {/* Bank Account Number Input */}
              <div className="flex items-start gap-4">
                <Building className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="accountNumber" className="text-dispute-color text-sm">Bank Account Number</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    placeholder='Enter Your Account Number'
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-2 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* IFSC Code Input */}
              <div className="flex items-start gap-4">
                <GitCommitHorizontal className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="ifsc" className="text-dispute-color text-sm">IFSC Code</label>
                  <input
                    type="text"
                    id="ifsc"
                    name="ifsc"
                    placeholder='Enter Your IFSC Code'
                    value={formData.ifsc}
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-2 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Bank Name Input */}
              <div className="flex items-start gap-4">
                <Building className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="bankName" className="text-dispute-color text-sm">Bank Name</label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    placeholder='Enter Your Bank Name'
                    value={formData.bankName}
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-2 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Bank Branch Input */}
              <div className="flex items-start gap-4">
                <Building className="text-dispute-color mt-3" />
                <div className="w-full">
                  <label htmlFor="bankBranch" className="text-dispute-color text-sm">Bank Branch</label>
                  <input
                    type="text"
                    id="bankBranch"
                    name="bankBranch"
                    placeholder='Enter Your Bank Branch'
                    value={formData.bankBranch}
                    onChange={handleInputChange}
                    className="w-full bg-sub-card border border-custom-border rounded-md p-2 mt-1 text-dispute-color focus:ring-2 focus:ring-blue-500"
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