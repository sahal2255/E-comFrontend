import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Steps, Button, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Step } = Steps;

const VendorRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  
  const [files, setFiles] = useState({});

  // Handle File Uploads
  const handleFileUpload = (fieldName, file) => {
    setFiles((prevFiles) => ({ ...prevFiles, [fieldName]: file }));
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));

      // Append files
      Object.keys(files).forEach((key) => formData.append(key, files[key]));

      console.log('registration form data',formData)

      if (res.data.success) {
        message.success("Vendor registered successfully!");
        navigate("/vendor/login");
      }
    } catch (error) {
      message.error("Registration failed!");
    }
  };

  const steps = [
    {
      title: "Basic Info",
      content: (
        <div>
          <label>Vendor Name:</label>
          <input {...register("vendorName", { required: "Vendor Name is required" })} />
          {errors.vendorName && <p>{errors.vendorName.message}</p>}

          <label>Email:</label>
          <input {...register("email", { required: "Email is required" })} />
          {errors.email && <p>{errors.email.message}</p>}

          <label>Password:</label>
          <input type="password" {...register("password", { required: "Password is required" })} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
      ),
    },
    {
      title: "Business Details",
      content: (
        <div>
          <label>Business Name:</label>
          <input {...register("businessName", { required: "Business Name is required" })} />
          {errors.businessName && <p>{errors.businessName.message}</p>}

          <label>Business Type:</label>
          <select {...register("businessType")}>
            <option value="sole">Sole Proprietorship</option>
            <option value="pvt">Private Limited</option>
          </select>

          <label>GST Number:</label>
          <input {...register("gstNumber", { required: "GST Number is required" })} />
          {errors.gstNumber && <p>{errors.gstNumber.message}</p>}
        </div>
      ),
    },
    {
      title: "Upload Documents",
      content: (
        <div>
          <label>Business Registration Certificate:</label>
          <Upload.Dragger beforeUpload={(file) => handleFileUpload("businessReg", file)} showUploadList={false}>
            <p className="ant-upload-drag-icon"><InboxOutlined /></p>
            <p className="ant-upload-text">Click or drag file to upload</p>
          </Upload.Dragger>

          <label>PAN Card:</label>
          <Upload.Dragger beforeUpload={(file) => handleFileUpload("panCard", file)} showUploadList={false}>
            <p className="ant-upload-drag-icon"><InboxOutlined /></p>
          </Upload.Dragger>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Steps current={currentStep}>
        {steps.map((step, index) => (<Step key={index} title={step.title} />))}
      </Steps>

      <form onSubmit={handleSubmit(onSubmit)}>
        {steps[currentStep].content}

        <div>
          {currentStep > 0 && <Button onClick={() => setCurrentStep(currentStep - 1)}>Previous</Button>}
          {currentStep < steps.length - 1 && <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>}
          {currentStep === steps.length - 1 && <Button htmlType="submit">Submit</Button>}
        </div>
      </form>
    </div>
  );
};

export default VendorRegistration;
