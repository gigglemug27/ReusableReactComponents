// formConfig.js
const formConfig = {
    fields: [
      {
        label: "First Name",
        type: "text",
        name: "firstName",
        required: true,
      },
      {
        label: "Last Name",
        type: "text",
        name: "lastName",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        name: "emailId",
        required: true,
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
      {
        label: "Password",
        type: "password",
        name: "password",
        required: true,
        // regex: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/,
      },
      {
        label: "Date Of Birth",
        type: "date",
        name: "dateOfBirth",
        required: true,
      },
      {
        label: "Address",
        type: "text",
        name: "addressLine1",
        required: true,
      },
      {
        label: "City",
        type: "text",
        name: "city",
        required: true,
      },
      {
        label: "PostalCode",
        type: "text",
        name: "postalCode",
        required: true,
        regex: /^\d{6}$/,
      },
      {
        label: "Mobile Number",
        type: "tel",
        name: "mobile",
        required: true,
        // regex: /^\d{10}$/,
      },
      {
        label: "Country",
        type: "select",
        name: "country",
        required: true,
        options: ["USA", "Canada", "UK", "Australia","India"],
      },
      {
        label: "Gender",
        type: "radio",
        name: "gender",
        options: ["Male", "Female", "Other"],
        required: true,
      },
      {
        name: "status",
        type: "hidden",
        required:true,
        defaultCheceked: true,
      },
    ],
  };
  
  export default formConfig;
  