import React, { useEffect, useState } from "react";
import api from "@lib/api";
import { toast } from "sonner";
import QuoteDetailsModal from "@components/pages/admin/QuoteDetailsModal";
import ConfirmModal from "@components/common/ConfirmModal";

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const [selectedQuote, setSelectedQuote] = useState(null);

  // Delete modal states
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const loadQuotes = async () => {
    try {
      setLoading(true);
      const res = await api.quote.getAll(page);
      setQuotes(res.quotes);
      setPages(res.pages);
    } catch (err) {
      toast.error("Unable to load quotes");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadQuotes();
  }, [page]);

  // Toggle contacted
  const toggleContact = async (id, contacted) => {
    try {
      await api.quote.markContacted(id, !contacted);
      toast.success("Updated");
      loadQuotes();
    } catch {
      toast.error("Failed to update");
    }
  };

  // Open delete modal
  const openDeleteModal = (id) => {
    setDeleteTarget(id);
    setConfirmOpen(true);
  };

  // Delete action
  const confirmDelete = async () => {
    if (!deleteTarget) return;

    try {
      await api.quote.deleteQuote(deleteTarget);
      toast.success("Quote deleted");
      loadQuotes();
    } catch (err) {
      toast.error("Failed to delete quote");
    }

    setConfirmOpen(false);
    setDeleteTarget(null);
  };

  return (
    <section className="container py-20">
      <div className="bg-primary-dark text-secondary-light p-10">
        <h1 className="text-2xl font-semibold mb-6">Quote Requests</h1>

        {loading && <p>Loading...</p>}

        <div className="grid gap-5">
          {!loading &&
            quotes.map((q) => (
              <div
                key={q._id}
                className="p-5 border border-secondary-light/20 bg-primary-light/10 rounded"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{q.fullName}</p>
                    <p className="text-sm text-secondary-muted">{q.email}</p>
                    <p className="text-sm text-secondary-muted">{q.phone}</p>
                  </div>

                  <span
                    className={
                      q.contacted
                        ? "px-3 py-1 bg-green-500/20 text-green-400 rounded text-xs"
                        : "px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs"
                    }
                  >
                    {q.contacted ? "Contacted" : "Pending"}
                  </span>
                </div>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => setSelectedQuote(q)}
                    className="text-blue-300 hover:underline"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => toggleContact(q._id, q.contacted)}
                    className="text-primary-yellow hover:underline"
                  >
                    {q.contacted ? "Mark Uncontacted" : "Mark Contacted"}
                  </button>

                  <button
                    onClick={() => openDeleteModal(q._id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>

        {pages > 1 && (
          <div className="flex justify-center gap-4 mt-10">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-2 bg-secondary-light/10 rounded"
            >
              Prev
            </button>

            <button
              disabled={page === pages}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 bg-secondary-light/10 rounded"
            >
              Next
            </button>
          </div>
        )}

        {/* VIEW DETAILS MODAL */}
        <QuoteDetailsModal
          open={!!selectedQuote}
          quote={selectedQuote}
          onClose={() => setSelectedQuote(null)}
        />

        {/* DELETE CONFIRM MODAL */}
        <ConfirmModal
          open={confirmOpen}
          title="Delete Quote?"
          message="Are you sure you want to permanently delete this quote?"
          confirmLabel="Delete"
          onConfirm={confirmDelete}
          onCancel={() => setConfirmOpen(false)}
        />
      </div>
    </section>
  );
};

export default AllQuotes;
