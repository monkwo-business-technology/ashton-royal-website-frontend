const items = [
  "TV & WiFi Internet",
  "Laundry Room",
  "VIP Furnished Rooms",
  "Grants Available",
  "Meal Preparation",
  "Medication Assistance",
  "Utilities Included",
  "24/7 Support",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-orange-400/20 bg-blue-900/[0.03] py-5">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {items.map((item) => (
              <span key={`${dup}-${item}`} className="flex items-center">
                <span className="px-7 font-display text-lg italic text-blue-800/80">
                  {item}
                </span>
                <span className="text-orange-500">&#10022;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
