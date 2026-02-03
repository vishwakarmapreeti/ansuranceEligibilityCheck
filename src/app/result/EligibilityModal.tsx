"use client";

import { Modal, Button } from "react-bootstrap";
import Image from "next/image";

export default function EligibilityModal({
  show,
  handleClose,
  result,
}: any) {
  if (!result) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sukooon Insurance Result</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center" id="eligible_result"
      data-result={result.eligible ? 'eligible' : 'not-eligible'}
>
        {result.eligible ? (
          <>
            <Image
              src="/checked.png"
              alt="Eligible"
              width={80}
              height={80}
            />

            <h3 style={{ color: "green", marginTop: "15px" }}>
              Patient Eligible 
            </h3>

            <p>
              <b>Patient Name:</b> {result.name}
            </p>

            <p>{result.message}</p>
          </>
        ) : (
          <>
            <Image
              src="/close.png"
              alt="Not Eligible"
              width={80}
              height={80}
            />

            <h3 style={{ color: "red", marginTop: "15px" }}>
              Patient Not Eligible 
            </h3>

            <p>
              <b>Patient Name:</b> {result.name}
            </p>

            <p style={{ color: "red" }}>{result.message}</p>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button type="button" variant="secondary" onClick={handleClose} id="eligible-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
y