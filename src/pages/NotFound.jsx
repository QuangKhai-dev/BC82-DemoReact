import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h2>Trang không có vui lòng quay về trang chủ</h2>
      <Link to="/" className="py-2 px-5 bg-red-500 text-white rounded-md">
        Quay về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
