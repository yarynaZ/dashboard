import React, { useEffect, useState } from 'react';

interface CompanyInfoProps {
    ticker: string;
}

const CompanyInfoWidget: React.FC<CompanyInfoProps> = ({ ticker }) => {
    const [companyData, setCompanyData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/companies-lookup.json`);
            const data = await response.json();
            const companyInfo = data.find((company: any) => company.ticker === ticker);
            setCompanyData(companyInfo);
        };

        fetchData();
    }, [ticker]);

    if (!companyData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto sm:max-w-none sm:w-full">
            <h2 className="text-2xl font-bold mb-2">{companyData.name}</h2>
            <p className="text-gray-700 mb-4">{companyData.short_description}</p>
            <a
                href={`https://${companyData.company_url}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
            >
                {companyData.company_url}
            </a>
            <div className="mt-4">
                <p className="text-sm text-gray-500">
                    CEO: <span className="font-medium">{companyData.ceo}</span>
                </p>
                <p className="text-sm text-gray-500">
                    Employees: <span className="font-medium">{companyData.employees}</span>
                </p>
            </div>
        </div>
    );
};

export default CompanyInfoWidget;
