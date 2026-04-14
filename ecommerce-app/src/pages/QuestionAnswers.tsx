import { useState } from "react";

interface QA {
  id: number;
  question: string;
  answer: string;
  askedBy: string;
  date: string;
}

const Q_AND_A: QA[] = [
  {
    id: 1,
    question: "Does this phone support 5G?",
    answer: "Yes, this model supports 5G connectivity on both SIM slots.",
    askedBy: "Vikram",
    date: "6 Feb 2026",
  },
  {
    id: 2,
    question: "Is there a charger included in the box?",
    answer:
      "Yes, a 22.5W fast charger is included in the box along with a USB Type-C cable.",
    askedBy: "Sneha",
    date: "4 Feb 2026",
  },
  {
    id: 3,
    question: "Can the storage be expanded with a memory card?",
    answer:
      "Yes, it has a dedicated microSD slot that supports expansion up to 512 GB.",
    askedBy: "Arun",
    date: "2 Feb 2026",
  },
];

function QuestionAnswers() {
  const [openId, setOpenId] = useState<number | null>(
    Q_AND_A.length > 0 ? Q_AND_A[0].id : null
  );

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mt-4">
      <h5 className="fw-bold mb-3">Questions & Answers</h5>

      <div className="list-group">

        {Q_AND_A.map((item) => (
          <div
            key={item.id}
            className="list-group-item border rounded-3 mb-2 shadow-sm"
          >
            {/* QUESTION */}
            <div
              className="d-flex justify-content-between align-items-center cursor-pointer"
              onClick={() => toggleQuestion(item.id)}
              style={{ cursor: "pointer" }}
            >
              <div>
                <strong>Q:</strong> {item.question}
                <div className="small text-muted">
                  Asked by {item.askedBy} • {item.date}
                </div>
              </div>

              <span className="fs-5">
                {openId === item.id ? "−" : "+"}
              </span>
            </div>

            {/* ANSWER */}
            {openId === item.id && (
              <div className="mt-3 ps-3 border-start">
                <strong>A:</strong> {item.answer}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

export default QuestionAnswers;