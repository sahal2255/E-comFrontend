import React, { useEffect, useState } from "react";
import { Button } from "antd";
import CommonTable from "../../components/common/CommonTable";
import { VendorsListing } from "../../services/adminservices/AdminVendorsServies";
import { useNavigate } from "react-router-dom";

const VendorsTable = () => {
  const navigate=useNavigate()
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await VendorsListing();
        // console.log('response in component',res)
        setVendors(res.foundedVendors);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  const columns = [
    { title: "Vendor Name", dataIndex: "vendorName", key: "vendorName" },
    { title: "Email", dataIndex: "vendorMail", key: "vendorMail" },
    { title: "Business Name", dataIndex: "businessName", key: "businessName" },
    {
      title: "Status",
      dataIndex: "isAllow",
      key: "isAllow",
      render: (isAllow) => (
        <span className={isAllow ? "text-green-600" : "text-yellow-500"}>
          {isAllow ? "✅ Approved" : "⏳ Pending"}
        </span>
      ),
    },
    {
        title: "Actions",
        key: "actions",
        render: (_, record) => (
          <Button
            type="primary"
            style={{ backgroundColor: "#595959", borderColor: "#595959", color: "white" }}
            onClick={() => navigate(`/admin/vendors/${record._id}`)}
          >
            View Details
          </Button>
        ),
      },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Vendors List</h2>
      <CommonTable columns={columns} data={vendors} loading={loading} />
    </div>
  );
};

export default VendorsTable;
