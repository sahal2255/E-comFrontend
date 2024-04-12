import React from "react";
import { Table } from "antd";

const CommonTable = ({ columns, data, loading, pageSize = 10 }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{ pageSize }}
        bordered
        rowKey="_id"
        className="overflow-x-auto"
      />
    </div>
  );
};

export default CommonTable;
