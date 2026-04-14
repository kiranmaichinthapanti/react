function ProductHighlights() {

    return (
        <ul className="list-group list-group-flush">

            {/* RAM */}
            <li className="list-group-item border-0 border-bottom py-3 d-flex align-items-start gap-2">
            <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0 p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="6" width="16" height="12" rx="2" />
                    <line x1="8" y1="10" x2="16" y2="10" />
                    <line x1="8" y1="14" x2="16" y2="14" />
                </svg>
            </span>
            <span className="text-secondary small">
                8 GB RAM | 128 GB ROM
            </span>
            </li>

            {/* Processor */}
            <li className="list-group-item border-0 border-bottom py-3 d-flex align-items-start gap-2">
            <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0 p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                    <line x1="9" y1="1" x2="9" y2="5" />
                    <line x1="15" y1="1" x2="15" y2="5" />
                    <line x1="9" y1="19" x2="9" y2="23" />
                    <line x1="15" y1="19" x2="15" y2="23" />
                </svg>
            </span>
            <span className="text-secondary small">
                Dimensity 7400 Ultra | Octa Core Processor | 2.6 GHz Clock Speed
            </span>
            </li>

            {/* Camera */}
            <li className="list-group-item border-0 border-bottom py-3 d-flex align-items-start gap-2">
            <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0 p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="7" width="18" height="14" rx="2" />
                    <circle cx="12" cy="14" r="3" />
                </svg>
            </span>
            <span className="text-secondary small">
                50MP + 8MP Rear Camera
            </span>
            </li>

            {/* Front Camera */}
            <li className="list-group-item border-0 border-bottom py-3 d-flex align-items-start gap-2">
            <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0 p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            </span>
            <span className="text-secondary small">
                16MP Front Camera
            </span>
            </li>

            {/* Display */}
            <li className="list-group-item border-0 border-bottom py-3 d-flex align-items-start gap-2">
            <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0 p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                </svg>
            </span>
            <span className="text-secondary small">
                6.8 inch Display
            </span>
            </li>

            {/* Battery */}
            <li className="list-group-item border-0 py-3 d-flex align-items-start gap-2">
            <span className="rounded bg-light d-flex align-items-center justify-content-center flex-shrink-0 p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="18" height="10" rx="2" />
                    <line x1="22" y1="10" x2="22" y2="14" />
                </svg>
            </span>
            <span className="text-secondary small">
                10001 mAh Battery
            </span>
            </li>

            </ul>
        );
    }

export default ProductHighlights;