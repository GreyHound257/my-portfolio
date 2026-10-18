'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  children: ReactNode;
  label: string;
  onClose: () => void;
  className?: string;
}

export default function Modal({ children, label, onClose, className = '' }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    try {
      if (!dialog.open) {
        dialog.showModal();
      }
    } catch {
      // Fallback if showModal fails
    }

    document.body.style.overflow = 'hidden';

    return () => {
      try {
        if (dialog.open) {
          dialog.close();
        }
      } catch {
        // ignore
      }
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-label={label}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-topbar">
        <span className="eyebrow">{label}</span>
        <button
          type="button"
          className="icon-button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={17} />
        </button>
      </div>
      <div className="modal-content">{children}</div>
    </dialog>
  );
}
