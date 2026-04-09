import React from 'react';

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="mb-4 inline-block p-3 bg-blue-50 text-blue-900 rounded-lg group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;