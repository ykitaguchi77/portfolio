import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Workflow } from 'lucide-react';

const projects = {
  corneapp: {
    title: 'Secure Smartphone Photo Collection',
    description: 'Smartphone app to support safe and anonymous collection of photos across multiple facilities',
    image: '/images/corneapp.jpg',
    details: 'This app allows for secure and anonymous collection of medical photos across multiple healthcare facilities. It ensures patient privacy while facilitating important research and diagnosis. The app uses advanced encryption techniques to protect sensitive data and complies with medical data protection regulations.',
    anonymizationProcess: [
      "ID and Name Anonymization: Patient IDs and names are automatically converted into anonymized strings.",
      "Local Storage of Correspondence Table: A secure table linking original data to anonymized versions is stored only on the local smartphone.",
      "Security Benefits:",
      "- Safe data transmission without exposing personal information",
      "- Compliance with data protection regulations",
      "- Allows for data sharing while maintaining confidentiality",
      "Practical Use: Seamless interface between anonymized IDs and actual patient information for efficient work by medical professionals."
    ],
    screenshots: [
      { 
        src: '/images/corneapp/title.jpg', 
        alt: 'App Title Screen',
        description: 'The main screen of the Cornea app displays the app name, a close-up image of an eye, and four main function buttons: Patient Information Input, Take Photo, Send, and Load. An additional "Next Patient" button is located at the bottom right.'
      },
      { 
        src: '/images/corneapp/info_input.jpg', 
        alt: 'Patient Information Input',
        description: 'The Patient Information Input screen allows users to enter key data such as Date, ID, Facility, Side (Right/Left), and Condition. It also provides a "Scan Text" option next to the ID field and a free text input area at the bottom. A "Save" button is prominently displayed for data submission.'
      },
      { 
        src: '/images/corneapp/photo_confirm.jpg', 
        alt: 'Photo Confirmation Screen',
        description: 'On the Photo Confirmation screen, users can review the captured image (in this case, a water bottle) along with the associated patient information. This includes the capture date, ID, facility, and diagnosis. A "Send" button at the bottom allows for secure transmission of the data.'
      },
      { 
        src: '/images/corneapp/json_data.jpg', 
        alt: 'Anonymized JSON Data',
        description: 'This screen displays the anonymized and encrypted data in JSON format. The long string of alphanumeric characters represents the patient information and diagnostic details entered in the previous screens, ensuring data privacy and security during transmission or storage.'
      },
    ],
  },
};

const ProjectDetails = ({ projectId }) => {
  const project = projects[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <div className="w-full h-96 mb-8 overflow-hidden rounded-lg shadow-lg">
        <img 
          src={`${process.env.PUBLIC_URL}${project.image}`} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-xl mb-8">{project.description}</p>
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold flex items-center">
          <Info className="mr-3" size={28} />
          Project Details
        </h2>
        <p className="text-lg">{project.details}</p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold mb-4">Anonymization Process</h3>
        <div className="space-y-2 pl-6">
          {project.anonymizationProcess.map((item, index) => (
            <p key={index} className="text-lg">{item}</p>
          ))}
        </div>
      </div>
      {project.screenshots && (
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold flex items-center">
            <Workflow className="mr-3" size={28} />
            App Workflow
          </h2>
          <div className="space-y-8">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="flex space-x-6">
                <div className="w-1/3">
                  <img
                    src={`${process.env.PUBLIC_URL}${screenshot.src}`}
                    alt={screenshot.alt}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="w-2/3">
                  <h4 className="text-xl font-semibold mb-2">{screenshot.alt}</h4>
                  <p className="text-lg">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Link to="/" className="inline-block mt-8 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors text-lg font-semibold">
        Back to Home
      </Link>
    </div>
  );
};

export default ProjectDetails;
