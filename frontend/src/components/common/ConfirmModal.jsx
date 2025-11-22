import React from "react";

const ConfirmModal = ({ open, title, message, onConfirm, onCancel, confirmLabel = "Confirm", cancelLabel = "Cancel" }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-0">
      <div className="bg-primary-dark text-secondary-light p-6 w-full max-w-md border border-secondary-light/20">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-secondary-muted mb-6">{message}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-secondary-light/5 hover:bg-secondary-light/10"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white hover:opacity-90"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
