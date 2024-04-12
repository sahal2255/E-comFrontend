import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Steps, Button, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { VendorRegister } from "../../services/vendorservices/vendorRegister";

const { Step } = Steps;

const VendorRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();
  const navigate = useNavigate();
  const [files, setFiles] = useState({});

  // Handle File Upload
  const handleFileUpload = (fieldName, { file }) => {
    setFiles((prevFiles) => ({ ...prevFiles, [fieldName]: file }));
    return false; // Prevent automatic upload
  };

  // Validate before moving to the next step
  const handleNext = async () => {
    const fieldsToValidate = steps[currentStep].validateFields;
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    } else {
      message.error("Please fill all required fields before proceeding.");
    }
  };

  // Handle Form Submission
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));
      Object.keys(files).forEach((key) => formData.append(key, files[key]));

      console.log("Form Data:", Object.fromEntries(formData.entries())); // Debugging
      const res = await VendorRegister(formData);
      navigate("/vendor/login");
    } catch (error) {
      message.error("Registration failed!");
    }
  };

  const steps = [
    {
      title: "Basic Info",
      validateFields: ["vendorName", "email", "password"],
      content: (
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Vendor Name:</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              {...register("vendorName", { required: "Vendor Name is required" })}
            />
            {errors.vendorName && <p className="text-red-500 text-sm">{errors.vendorName.message}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Email:</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Password:</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
        </div>
      ),
    },
    {
      title: "Business Details",
      validateFields: ["businessName", "gstNumber"],
      content: (
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Business Name:</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              {...register("businessName", { required: "Business Name is required" })}
            />
            {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName.message}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700">GST Number:</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              {...register("gstNumber", { required: "GST Number is required" })}
            />
            {errors.gstNumber && <p className="text-red-500 text-sm">{errors.gstNumber.message}</p>}
          </div>
        </div>
      ),
    },
    {
      title: "Upload Documents",
      validateFields: [],
      content: (
        <div className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Business Registration Certificate:</label>
            <Upload
              beforeUpload={(file) => handleFileUpload("businessReg", { file })}
              showUploadList={false}
              className="border-dashed border-gray-400 rounded-md"
            >
              <Button className="w-full bg-gray-200 hover:bg-gray-300">
                <InboxOutlined /> Click or Drag to Upload
              </Button>
            </Upload>
            {files.businessReg && (
              <p className="text-green-600 mt-2">Uploaded: {files.businessReg.name}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">PAN Card:</label>
            <Upload
              beforeUpload={(file) => handleFileUpload("panCard", { file })}
              showUploadList={false}
              className="border-dashed border-gray-400 rounded-md"
            >
              <Button className="w-full bg-gray-200 hover:bg-gray-300"> 
                <InboxOutlined /> Click or Drag to Upload
              </Button>
            </Upload> 
            {files.panCard && (
              <p className="text-green-600 mt-2">Uploaded: {files.panCard.name}</p>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Vendor Registration</h2>

        <Steps current={currentStep} className="mb-6">
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {steps[currentStep].content}

          <div className="flex justify-between mt-6">
            {currentStep > 0 && (
              <Button onClick={() => setCurrentStep(currentStep - 1)} className="bg-gray-500 text-white px-6 py-2 rounded-md">
                Previous
              </Button>
            )}
            {currentStep < steps.length - 1 && (
              <Button onClick={handleNext} className="bg-blue-600 text-white px-6 py-2 rounded-md">
                Next
              </Button>
            )}
            {currentStep === steps.length - 1 && (
              <Button htmlType="submit" className="bg-green-600 text-white px-6 py-2 rounded-md">
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorRegistration;
