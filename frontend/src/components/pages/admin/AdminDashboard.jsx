import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiPackage, FiFileText } from 'react-icons/fi';

const AdminDashboard = () => {
  return (
    <section className="container py-24">
      <h1 className="text-3xl font-semibold text-secondary-light mb-10">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Create Shipment */}
        <Link
          to="/admin/create-shipment"
          className="p-8 rounded-lg border border-secondary-light/20 bg-primary-dark hover:border-primary-yellow transition"
        >
          <FiPlusCircle className="text-primary-yellow mb-3" size={28} />
          <h2 className="text-xl font-semibold text-secondary-light">
            Create Shipment
          </h2>
          <p className="mt-2 text-secondary-muted">
            Add a new shipment to the system
          </p>
        </Link>

        {/* All Shipments */}
        <Link
          to="/admin/all-shipments"
          className="p-8 rounded-lg border border-secondary-light/20 bg-primary-dark hover:border-primary-yellow transition"
        >
          <FiPackage className="text-primary-yellow mb-3" size={28} />
          <h2 className="text-xl font-semibold text-secondary-light">
            All Shipments
          </h2>
          <p className="mt-2 text-secondary-muted">
            View and manage all shipments
          </p>
        </Link>

        {/* All Quotes */}
        <Link
          to="/admin/quotes"
          className="p-8 rounded-lg border border-secondary-light/20 bg-primary-dark hover:border-primary-yellow transition"
        >
          <FiFileText className="text-primary-yellow mb-3" size={28} />
          <h2 className="text-xl font-semibold text-secondary-light">
            All Quotes
          </h2>
          <p className="mt-2 text-secondary-muted">
            View and manage all quotes
          </p>
        </Link>
      </div>
    </section>
  );
};

export default AdminDashboard;
