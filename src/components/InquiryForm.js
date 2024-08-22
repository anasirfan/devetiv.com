import React, { useState } from "react";
import Image from "next/image";
import contactImage from "../../public/assets/images/contact-form.jpg";
import { motion } from "framer-motion";

const InquiryForm = ({industry, parentCategory, childcategory , disableIndustry, disableCatgory}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = {
    "App Development": ["Web App", "Mobile App", "Cloud App", "E-commerce App", "App Management"],
    "Software Development": ["CRM", "ERP", "Project Rescue", "Digital Transformation", "Support & Management", "Custom"],
    "Website, BI, and More": ["Website", "Business Intelligence", "Data Analytics", "DevOps", "Q/A & Testing", "UI/UX Design", "Brand Design"],
  };
  const Industries = ["Education", "Fintech", "Healthcare", "Hospitality", "Manufacturing", "Retail", "SaaS", "Other"];

  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherIndustry, setOtherIndustry] = useState('');

  const handleIndustryChange = (e) => {
    const value = e.target.value;
    if (value === 'Other') {
      setShowOtherInput(true);
      setFormData(prev => ({ ...prev, Industry: value }));
    } else {
      setShowOtherInput(false);
      setFormData(prev => ({ ...prev, Industry: value }));
      setOtherIndustry(''); 
    }
  };

  const handleOtherIndustryChange = (e) => {
    const value = e.target.value;
    setOtherIndustry(value);
    setFormData(prev => ({
      ...prev,
      Industry: value ? `Other:${value}` : 'Other:',
    }));
  }; const [selectedCategory, setSelectedCategory] = useState(parentCategory || '');

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    setFormData((prev) => ({ ...prev, projectType: selectedCategory, subCategory: '' }));
    setActiveCategory(selectedCategory);
  };

  const handleSubCategoryChange = (e) => {
    setFormData((prev) => ({ ...prev, subCategory: e.target.value }));
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    email: "",
    Industry: industry || '',
    projectType: parentCategory || "",
    subCategory: childcategory || "",
    deadline: "",
    budget: "",
    details: "",
  });
  const [status, setStatus] = useState("");

  console.log(formData)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (result.success) {
      setStatus('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        jobTitle: '',
        email: '',
        projectType: '',
        deadline: '',
        budget: '',
        details: ''
      });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="my-12 bg-custom-gradient py-2 px-4 flex items-center rounded-2xl w-[60%] custom-md:w-[95%] lg:w-[85%] xl:w-[70%] sm:w-[100%] sm:flex-col sm:space-x-0 sm:space-y-6 mx-auto shadow-lg shadow-[#8b8b8b]">
      <div className="flex flex-col space-y-6 mx-4 my-6 justify-between items-start">
        <div className="flex flex-col space-y-4 mx-2">
          <h4 className="text-black text-2xl font-semibold">
            Send in your projects Inquiry!
          </h4>
          <p className="text-black w-[70%]">
            Submit your project inquiries today for expert assistance and
            personalized solutions!
          </p>
        </div>
        <Image
          src={contactImage}
          alt="contactus"
          className="rounded-2xl basis-3/4"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto custom-inset-shadow p-4 rounded-3xl custom-md:basis-3/4"
      >
        <div className="grid grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
              placeholder=" "
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#CDAC00] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
              placeholder=" "
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#CDAC00] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="companyName"
              id="floating_company_name"
              className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
              placeholder=" "
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_company_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#CDAC00] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="jobTitle"
              id="floating_job_title"
              className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
              placeholder=" "
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_job_title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#CDAC00] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Job title
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#CDAC00] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your email
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <select
            name="Industry"
            id="industry_select"
            className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
            value={formData.Industry}
            onChange={handleIndustryChange}
            disabled={disableIndustry}
            required
          >
            <option value="" disabled>
              Select Industry
            </option>
            {Industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>

          {showOtherInput && (
            <input
              type="text"
              name="otherIndustry"
              id="other_industry"
              className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer mt-4"
              placeholder="Specify other industry"
              value={otherIndustry}
              onChange={handleOtherIndustryChange}
              required
            />
          )}

          <label
            htmlFor="industry_select"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#CDAC00] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Industry
          </label>
        </div>
        <div className={`grid ${selectedCategory ? 'grid-cols-2' : 'grid-cols-1'}  md:gap-6`}>
          <div className="relative z-0 w-full mb-5 group">
            <select
              name="projectType"
              id="projectType"
              className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
              value={formData.projectType}
              onChange={handleCategoryChange}
              onMouseLeave={() => setActiveCategory(null)}
              disabled={disableCatgory}
              required
            >
              <option value="" disabled defaultValue={''}>
                Select Project Type
              </option>
              {Object.keys(categories).map((mainCategory) => (
                <option key={mainCategory} value={mainCategory}>
                  {mainCategory}
                </option>
              ))}
            </select>
            <label
              htmlFor="projectType"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#CDAC00] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Project Type
            </label>
          </div>
          {selectedCategory && (
            <div className="relative z-0 w-full mb-5 group">
              <select
                name="subCategory"
                id="subCategory"
                className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
                value={formData.subCategory}
                onChange={handleSubCategoryChange}
                disabled={disableCatgory}
                required
              >
                <option value="" disabled defaultValue={''}>
                  Select Subcategory
                </option>
                {categories[selectedCategory].map((subCategory) => (
                  <option key={subCategory} value={subCategory}>
                    {subCategory}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>


        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="deadline"
            id="floating_deadline"
            className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
            placeholder=" "
            value={formData.deadline}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_deadline"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#CDAC00] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Deadline
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="budget"
            id="floating_budget"
            className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
            placeholder=" "
            value={formData.budget}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_budget"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#CDAC00] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Budget
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            name="details"
            id="floating_details"
            className="block py-2.5 px-0 w-full text-sm text-[#6c6c6c] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#CDAC00] focus:outline-none focus:ring-0 focus:border-[#CDAC00] peer"
            placeholder=" "
            value={formData.details}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_details"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#CDAC00] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Details
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#CDAC00] text-white hover:bg-[#0A192F] focus:ring-4 focus:ring-[#CDAC00] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#CDAC00] dark:hover:bg-[#A97B1B] dark:focus:ring-[#A97B1B]"
        >
          Submit
        </button>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default InquiryForm;
