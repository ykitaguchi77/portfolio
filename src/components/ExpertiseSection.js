import React, { useState } from 'react';
import { Eye, Brain, ChevronRight, GraduationCap, Briefcase, Award, FileText, Users } from 'lucide-react';

const ExpertiseSection = () => {
  const [showCV, setShowCV] = useState(false);

  const toggleCV = () => {
    setShowCV(!showCV);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-10">My Expertise</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-4">
            <Eye className="w-16 h-16 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-4">Oculoplastic Surgeon</h3>
          <ul className="text-sm space-y-2">
            <li><ChevronRight className="inline w-4 h-4 text-green-600" /> Blephaoptosis, Epiblepharon, Entropion, and Facial nerve palsy reconstruction, etc. for East Asian eyelids</li>
            <li><ChevronRight className="inline w-4 h-4 text-green-600" /> Eyelid & Orbital Tumor biopsy, excision and reconstruction, utilizing the latest techniques to ensure functional and aesthetic restoration.</li>
            <li><ChevronRight className="inline w-4 h-4 text-green-600" /> Rehabilitative surgeries for Grave's orbitopathy including Orbital decompression, squint surgery, and eyelid surgery</li>
            <li><ChevronRight className="inline w-4 h-4 text-green-600" /> Blowout fracture repair</li>
            <li><ChevronRight className="inline w-4 h-4 text-green-600" /> Dacryocystorhinostomy (DCR) & Lacrimal endoscopic stenting for tear duct obstruction</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-4">
            <Brain className="w-16 h-16 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-4">AI Researcher & Creator</h3>
          <ul className="text-sm space-y-2">
            <li><ChevronRight className="inline w-4 h-4 text-blue-600" /> Pioneering AI applications in ophthalmology</li>
            <li><ChevronRight className="inline w-4 h-4 text-blue-600" /> Developing AI for Grave's orbitopathy diagnosis</li>
            <li><ChevronRight className="inline w-4 h-4 text-blue-600" /> Creating blink tracking for blepharospasm</li>
            <li><ChevronRight className="inline w-4 h-4 text-blue-600" /> Edge implementation of AI for anterior segment disease classification</li>
            <li><ChevronRight className="inline w-4 h-4 text-blue-600" /> Innovating tools and devices to improve patient care and surgical outcomes</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={toggleCV}
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors flex items-center mx-auto"
        >
          {showCV ? "Hide Details" : "Learn More About Me"}
          <ChevronRight className="ml-2 w-4 h-4" />
        </button>
      </div>
      {showCV && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold mb-6">Curriculum Vitae</h3>
          
          <section className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Osaka University Graduate School of Medicine</strong>, Suita, Japan
                <br />PhD in Ophthalmic Optics, 2004-2009</li>
              <li><strong>Osaka University School of Medicine</strong>, Suita, Japan
                <br />MD, 1996-2004</li>
            </ul>
          </section>

          <section className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 flex items-center">
              <Briefcase className="mr-2" /> Professional Experience
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Chief, Senior Consultant (Oculoplastics)</strong>, Department of Ophthalmology, Osaka University Graduate School of Medicine
                <br />Present</li>
              <li><strong>Fellowship</strong>, Department of Oculoplastic, Orbital, and Lacrimal Surgeries, Aichi Medical University
                <br />2015-2017</li>
              <li><strong>Residency</strong>, Department of Ophthalmology, Osaka National Hospital
                <br />2003-2004</li>
              <li><strong>Internship</strong>, Department of Neurosurgery, Osaka University Graduate School of Medicine
                <br />2002</li>
            </ul>
          </section>

          <section className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 flex items-center">
              <Award className="mr-2" /> Certifications
            </h4>
            <ul className="list-disc pl-5">
              <li>Board-certified Ophthalmologist, 2011</li>
            </ul>
          </section>

          <section className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 flex items-center">
              <Brain className="mr-2" /> Research Experience
            </h4>
            <h5 className="text-xl font-medium mb-2">Current Research Projects</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>Facial diagnosis of Grave's orbitopathy</li>
              <li>Blink tracker in blepharospasm</li>
              <li>Classification of anterior segment diseases</li>
            </ul>
            <h5 className="text-xl font-medium mb-2">Collaborations</h5>
            <ul className="list-disc pl-5">
              <li>The Anterior Segment AI AMED Research Group (JASAIR)</li>
              <li>Olympia Eye Hospital (diagnosis of thyroid eye disease)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 flex items-center">
              <Award className="mr-2" /> Grants and Awards
            </h4>
            <ul className="list-disc pl-5">
              <li>Grants-in-Aid for Scientific Research, 2019-2023</li>
            </ul>
          </section>

          <section className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2" /> Publications and Presentations
            </h4>
            <p className="mb-4">
              Full list available on <a href="https://scholar.google.co.jp/citations?hl=ja&user=k7rDJcWEOEIC" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Scholar Profile</a>
            </p>
            <h5 className="text-xl font-medium mb-2">Recent Conference Presentations</h5>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li>"Validation Study of a Smartphone-based AI System for Thyroid Eye Disease Identification Integrated with Electronic Medical Records" - 127th Annual Meeting of the Japanese Ophthalmological Society, April 2023, Tokyo</li>
              <li>"Smartphone Implementation of AI for Anterior Segment Disease Diagnosis Support and Accuracy Comparison with PC Version" - 77th Annual Meeting of the Japanese Clinical Ophthalmology Society, October 2023, Tokyo</li>
              <li>"Reproducibility Verification of Smartphone AI App for Anterior Segment Disease Diagnosis Support" - 77th Annual Meeting of the Japanese Clinical Ophthalmology Society, October 2023, Tokyo</li>
            </ol>
            <h5 className="text-xl font-medium mb-2">Recent Invited Talks</h5>
            <ol className="list-decimal pl-5 space-y-2">
              <li>"Practical Applications of AI for Ophthalmologists" - 77th Annual Meeting of the Japanese Clinical Ophthalmology Society, October 2023, Tokyo</li>
              <li>"Functional Considerations in Eyelid Surgery" - Aravind Eye Hospital CME Program, October 2023, Madurai, India</li>
              <li>"Development of AI-based Digital Exophthalmometer: Overcoming Constraints" - 4th Annual Meeting of the Japanese Society for Ophthalmic AI, November 2023, Yokohama</li>
            </ol>
          </section>

          <section>
            <h4 className="text-2xl font-semibold mb-4 flex items-center">
              <Users className="mr-2" /> Professional Memberships
            </h4>
            <ul className="list-disc pl-5">
              <li>Asia Pacific Society of Ophthalmic Plastic and Reconstructive Surgery (APSOPRS)</li>
              <li>Japanese Society of Ophthalmic Plastic and Reconstructive Surgery (JSOPRS)</li>
              <li>Japanese Society of Lacrimal Passage and Tear Dynamics (JSCT)</li>
              <li>Japanese Society of Artificial Intelligence of Ophthalmology (JSAIO)</li>
              <li>Japanese Ophthalmological Society</li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default ExpertiseSection;