import React from 'react';

const Affiliation = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Affiliation
          </h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-y-10">
            <div className="relative">
              <dt>
                <p className="text-lg leading-6 font-medium text-gray-900">Department of Ophthalmology, Osaka University Graduate School of Medicine, Suita, Japan</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <img src={`${process.env.PUBLIC_URL}/images/osaka_univ.jpg`} alt="Osaka University" className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
                  <div>
                    <a href="https://www.hosp.med.osaka-u.ac.jp/departments/ophthalmology.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      https://www.hosp.med.osaka-u.ac.jp/departments/ophthalmology.html
                    </a>
                    <p className="mt-2">
                      Treatment of Graves' orbitopathy including intravenous corticosteroids to orbital decompression, excision and reconstruction for malignant tumors of the eyelid & orbit, and orbital wall reconstruction for trauma.
                    </p>
                  </div>
                </div>
              </dd>
            </div>
            <div className="relative mt-10">
              <dt>
                <p className="text-lg leading-6 font-medium text-gray-900">Nakanoshima Eye Center Clinic, Osaka, Japan</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <img src={`${process.env.PUBLIC_URL}/images/eyecenter.jpg`} alt="Nakanoshima Eye Center" className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
                  <div>
                    <a href="https://eyecenter.jp/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      https://eyecenter.jp/
                    </a>
                    <p className="mt-2">
                      Outpatient surgery for eyelids and lacrimal diseases
                    </p>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;
