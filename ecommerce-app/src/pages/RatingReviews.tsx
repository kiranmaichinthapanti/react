interface RatingBreakdown {
  stars: number;
  count: number;
  percent: number;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
}

function StarRating({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <span className="text-warning">
      {"★".repeat(value)}
      {"☆".repeat(max - value)}
    </span>
  );
}

const RATING_BREAKDOWN: RatingBreakdown[] = [
  { stars: 5, count: 12, percent: 48 },
  { stars: 4, count: 8, percent: 32 },
  { stars: 3, count: 3, percent: 12 },
  { stars: 2, count: 1, percent: 4 },
  { stars: 1, count: 1, percent: 4 },
];

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Priya S.",
    rating: 5,
    date: "10 Feb 2026",
    text: "Excellent product. Build quality and performance are impressive."
  },
  {
    id: 2,
    name: "Rahul K.",
    rating: 4,
    date: "8 Feb 2026",
    text: "Good value for money. Camera could be better."
  },
  {
    id: 3,
    name: "Anita M.",
    rating: 5,
    date: "5 Feb 2026",
    text: "Battery life is amazing. Lasts two days easily."
  }
];

const AVERAGE_RATING = 4.2;
const TOTAL_REVIEWS = 25;

function RatingsReviews() {
  return (
    <div className="mt-4">

      <h5 className="fw-bold mb-3">Ratings & Reviews</h5>

      <div className="row g-4">

        {/* LEFT SIDE SUMMARY */}
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm rounded-3 p-3">
            <div className="text-center">
              <h2 className="fw-bold mb-1">{AVERAGE_RATING}</h2>
              <StarRating value={Math.round(AVERAGE_RATING)} />
              <p className="text-muted small mt-2">
                {TOTAL_REVIEWS} Reviews
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE BREAKDOWN */}
        <div className="col-12 col-md-8">
          {RATING_BREAKDOWN.map((item) => (
            <div key={item.stars} className="d-flex align-items-center mb-2">
              <span className="me-2 small">{item.stars} ★</span>

              <div className="progress flex-grow-1 me-2" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-success"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>

              <span className="small text-muted">
                {item.count}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* REVIEW LIST */}
      <div className="mt-4">
        {REVIEWS.map((review) => (
          <div key={review.id} className="card border-0 shadow-sm rounded-3 mb-3">
            <div className="card-body">

              <div className="d-flex justify-content-between">
                <h6 className="mb-1">{review.name}</h6>
                <small className="text-muted">{review.date}</small>
              </div>

              <div className="mb-2">
                <StarRating value={review.rating} />
              </div>

              <p className="mb-0 text-secondary small">
                {review.text}
              </p>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default RatingsReviews;