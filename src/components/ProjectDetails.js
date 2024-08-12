import React from 'react';
import { Link } from 'react-router-dom';
import ResearchOpportunities from './ResearchOpportunities';
import { Info, Workflow, Database, Activity } from 'lucide-react';

const projects = {
  corneapp: {
    title: 'Secure Smartphone Photo Collection',
    description: 'Smartphone app to support safe and anonymous collection of photos across multiple facilities',
    image: '/images/corneapp.jpg',
    details: 'This app allows for secure and anonymous collection of medical photos across multiple healthcare facilities. It ensures patient privacy while facilitating important research and diagnosis. The app uses advanced encryption techniques to protect sensitive data and complies with medical data protection regulations',
    status: [
      "Developed for multi-facility research for collecting corneal smartphone photos as part of a Japan Agency for Medical Research and Development (AMED) study",
      " urrently being used in multiple ongoing projects, including studies on eyelid tumors and blepharitis."
    ],
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
  corneai: {
    title: 'CorneAI_for_iOS',
    description: 'Smartphone implementation of anterior segment disease classification AI',
    image: '/images/corneai_ios.png',
    details: 'CorneAI_for_iOS is an innovative application that brings the power of artificial intelligence to ophthalmology, specifically focusing on anterior segment disease classification. This iOS app allows healthcare professionals to quickly and accurately diagnose various eye conditions using smartphone cameras.',
    status: "Currently under development in a project by the Japan Agency for Medical Research and Development (AMED)",
    features: [
      "Real-time AI-powered diagnosis of anterior segment diseases",
      "High accuracy in identifying common eye conditions",
      "User-friendly interface for easy image capture and analysis",
      "Secure storage and handling of patient data",
      "Integration with medical record systems for streamlined workflow"
    ],
    technicalDetails: [
      "Developed using Swift and CoreML for iOS",
      "Do not require web access and runs locally as EdgeAI.",
      "Utilizes a custom-trained convolutional neural network (CNN) for image classification",
      "Implements transfer learning techniques for improved accuracy with limited training data",
      "Regularly updated AI model to incorporate new findings and improve diagnostic accuracy"
    ],
    performanceData: [
      "Accuracy for smartphone images: 70%",
      "Accuracy for slit lamp images: 89%",
      "Agreement rate with the original computer model (Cohen's Kappa): 0.82",
      "Repeatability (Fleiss Kappa): 0.91"
    ],
    impact: "CorneAI_for_iOS demonstrates high reproducibility and robustness across various conditions. The high accuracy, especially for slit lamp photos, and strong agreement with the PC version indicate that AI-supported anterior segment disease diagnosis is feasible using just a smartphone. This could significantly improve eye care accessibility in underserved areas.",
    screenshots: [
      {
        src: '/images/corneai_ios/use_image.jpg',
        alt: 'CorneAI iOS App Usage',
        description: 'This image showcases the CorneAI iOS app in action. It displays the user interface where ophthalmologists can input or capture images of the anterior segment of the eye. The app then uses advanced AI algorithms to analyze the image and provide a classification of potential diseases or conditions.'
      }
    ]
  },
  gravai: {
    title: 'Thyroid Facial Diagnosis (GravApp_for_iOS)',
    description: "Smartphone implementation of Graves' orbitopathy recognition AI model",
    image: '/images/gravai_ios.png',
    details: 'GravApp_for_iOS is an innovative mobile application designed to assist in the early detection and assessment of Graves\' orbitopathy, a condition associated with thyroid eye disease. This app utilizes advanced AI technology to analyze facial images and identify signs of moderate-to-severe or active thyroid eye disease.',
    status: "Under validation. Not commercially available.",
    features: [
      "AI-powered analysis of facial images for Graves' orbitopathy",
      "User-friendly interface for easy self-photography",
      "Quick and non-invasive screening process",
      "Secure, on-device processing without need for internet connection",
      "Results comparable to specialist assessment"
    ],
    technicalDetails: [
      "Developed using Swift and CoreML for iOS",
      "Runs locally as EdgeAI, not requiring web access",
      "Utilizes a custom-trained convolutional neural network (CNN) for image classification",
      "Implements a two-stage deep learning model for detection and classification around the eye area",
      "Trained to distinguish between moderate-to-severe or active thyroid eye disease"
    ],
    performanceData: [
      "Accuracy rate: 86%",
      "Performance comparable to specialist assessment"
    ],
    impact: "GravApp_for_iOS has the potential to revolutionize the screening process for thyroid eye disease, particularly in areas with limited access to specialized ophthalmologists. By enabling quick and accurate assessments, it can facilitate better collaboration between endocrinologists and eye care professionals, ensuring timely intervention for patients with Graves' orbitopathy. This tool addresses the shortage of oculoplastic surgeons by providing a reliable initial screening method, potentially reducing unnecessary referrals and helping to prioritize cases that require immediate specialist attention.",
    screenshots: [
      {
        src: '/images/gravai_ios/grav_ios_use.JPG',
        alt: 'GravApp iOS Usage',
        description: 'The GravApp iOS interface allows users to take a selfie, which is then analyzed by the AI model. The app provides an immediate assessment of the likelihood of Graves\' orbitopathy, helping users and healthcare providers determine if further evaluation is necessary.'
      }
    ]
  },
  neuroband: {
    title: 'Neuroband',
    description: 'Headband-Style Perceptual Trick Device for Alleviating Blepharospasm Symptoms (Patent Pending in Japan)',
    image: '/images/neuroband.png',
    details: `Neuroband is an innovative headband-style device designed to alleviate symptoms of blepharospasm, a condition characterized by involuntary eye closure due to excessive contraction of the orbicularis oculi muscle. This non-invasive device utilizes the principle of sensory trick to provide relief for patients suffering from this debilitating condition. Unlike existing devices, Neuroband does not require the use of glasses, making it more versatile and user-friendly.`,
    status: "Coming soon. Planning to ship worldwide. For inquiries, please <a href=\"mailto:kitaguchi@yk-gankeisei.com\" class=\"text-blue-600 hover:underline\">E-mail</a> me",
    features: [
      "Headband-style design for comfortable, inconspicuous wear",
      "Does not require glasses, unlike existing devices",
      "Utilizes the sensory trick phenomenon to alleviate blepharospasm symptoms",
      "Non-invasive and easy to use",
      "Adjustable pressure points for personalized comfort and efficacy",
      "Potential for long-term symptom management",
      "Complements existing treatments like botulinum toxin injections"
    ],
    technicalDetails: [
      "Flexible, circular structure that extends from the back of the head to the temples",
      "Cone-shaped pressure parts at the ends for effective temple compression",
      "Flat pressing surface at the tip of the pressure parts for localized compression",
      "Curved extension parts utilize restoration force for maintaining appropriate pressure",
      "Adjustable pressure part positions for individual patient customization"
    ],
    performanceData: [
      "Evaluation of correlation between compression strength and symptom relief (planned)",
      "Long-term safety assessment (planned)",
      "Observational study on combined use with botulinum toxin injection therapy (planned)"
    ],
    impact: "Neuroband has the potential to significantly improve the quality of life for blepharospasm patients by providing a non-invasive, low-risk treatment option, allowing for patient self-management of symptoms, reducing the frequency of hospital visits, complementing existing treatments, and offering a discreet solution for symptom management in daily life. Its unique design that doesn't require glasses makes it accessible to a wider range of patients.",
    usage: [
      "Initial Adjustment (at medical institution or optician)",
      "Daily Use (by the patient)",
      "Regular Follow-up",
      "Maintenance",
      "Precautions"
    ],
    futureEnhancements: [
      "Various form factors (e.g., integrated with hats, headband-style)",
      "Customizable pressure part shapes and sizes",
      "Optional heating or cooling functions",
      "Sensor functionality to detect blepharospasm severity and provide feedback for pressure adjustment"
    ],
    screenshots: [
      {
        src: '/images/neuroband/usage.jpg',
        alt: 'Neuroband Usage',
        description: 'Illustration of how to wear and use the Neuroband device, showing proper placement on the head and pressure points on the temples, without the need for glasses.'
      }
    ]
  }
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
      {project.status && (
        <div className="space-y-4 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Activity className="mr-3" size={24} />
            Status
          </h3>
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: project.status }}></p>
        </div>
      )}
      {project.features && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="list-disc pl-6 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-lg">{feature}</li>
            ))}
          </ul>
        </div>
      )}
      {project.technicalDetails && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Technical Details</h3>
          <ul className="list-disc pl-6 space-y-2">
            {project.technicalDetails.map((detail, index) => (
              <li key={index} className="text-lg">{detail}</li>
            ))}
          </ul>
        </div>
      )}
      {project.performanceData && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Database className="mr-3" size={24} />
            Performance Data
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {project.performanceData.map((data, index) => (
              <li key={index} className="text-lg">{data}</li>
            ))}
          </ul>
        </div>
      )}
      {project.anonymizationProcess && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Anonymization Process</h3>
          <ul className="list-disc pl-6 space-y-2">
            {project.anonymizationProcess.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ul>
        </div>
      )}
      {project.impact && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Impact</h3>
          <p className="text-lg">{project.impact}</p>
        </div>
      )}
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
      <ResearchOpportunities />
      <Link to="/" className="inline-block mt-8 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors text-lg font-semibold">
        Back to Home
      </Link>
    </div>
  );
};

export default ProjectDetails;
