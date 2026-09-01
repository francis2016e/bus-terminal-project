import { Link } from "react-router-dom";

const BusinessOpportunitiesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Business Opportunities
              </span>
            </div>
            <h1 className="text-[32px] font-bold leading-[1.05] tracking-tight text-slate-900 md:text-[40px]">
              Business Opportunities & Advertising
            </h1>
            <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-slate-600 md:text-[16px]">
              The terminal environment brings together passengers, transport operators, businesses and
              service providers. Approved businesses may have opportunities to make their services
              visible to the terminal community through appropriate public-facing channels.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {/* Discover Businesses */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-slate-900">Discover Businesses</h2>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Future directory</p>
            <p className="mt-4 text-[14px] leading-6 text-slate-600">
              A future area for discovering businesses and services operating within the terminals.
              Listings will be published here as approved businesses are onboarded.
            </p>
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="text-[13px] font-semibold text-slate-700">No business listings published yet</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">Approved businesses will appear here when available</p>
            </div>
          </div>

          {/* Advertise Your Business */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-slate-900">Advertise Your Business</h2>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Enquiry pathway</p>
            <p className="mt-4 text-[14px] leading-6 text-slate-600">
              Approved businesses interested in advertising within the terminal ecosystem may register
              interest. Details will be communicated through official channels when the programme is
              active.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                Advertise Your Business
              </Link>
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                Select <span className="font-semibold">Business Advertising</span> as the contact subject
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 rounded-xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm font-semibold text-blue-900">Public information</p>
          <p className="mt-1 text-[13px] leading-6 text-slate-600">
            No advertising rates, audience numbers, guaranteed impressions or featured listings are
            published at this time. Information will be provided through official terminal management
            communications when available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessOpportunitiesPage;
