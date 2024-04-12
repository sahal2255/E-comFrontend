import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { SingleVendor } from '../../services/adminservices/AdminVendorsServies';

const SingleVendorDetails = () => {
    const { vendorId } = useParams();

    // React Query Hook
    const { data: vendor, isLoading, isError } = useQuery({
        queryKey: ['vendor', vendorId], 
        queryFn: () => SingleVendor(vendorId),
        enabled: !!vendorId // Prevents fetching if vendorId is undefined
    });

    if (isLoading) return <div className="p-6 text-lg">Loading...</div>;
    if (isError) return <div className="p-6 text-lg text-red-500">Error fetching vendor details.</div>;

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">Vendor Details</h2>
            <p className="text-lg">Vendor ID: {vendorId}</p>
            <p className="text-lg">Name: {vendor?.name}</p>
            <p className="text-lg">Email: {vendor?.email}</p>
            <p className="text-lg">Phone: {vendor?.phone}</p>
            <p className="text-lg">Status: {vendor?.status}</p>
        </div>
    );
};

export default SingleVendorDetails;