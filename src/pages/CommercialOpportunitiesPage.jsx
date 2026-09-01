import { Link } from "react-router-dom";

const CommercialOpportunitiesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Commercial Opportunities
              </span>
            </div>
            <h1 className="text-[32px] font-bold leading-[1.05] tracking-tight text-slate-900 md:text-[40px]">
              A Government-Managed Environment for Legitimate Businesses
            </h1>
            <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-slate-600 md:text-[16px]">
              Our terminals provide a structured environment for legitimate commercial activities
              within public transport infrastructure — supporting employment, commerce and sustainable
              public revenue as part of Enugu State&apos;s transport transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-slate-900">Why Commercial Opportunities Matter</h2>
            <ul className="mt-4 space-y-2 text-[14px] leading-6 text-slate-600">
              <li className="flex gap-2"><span className="text-blue-600">•</span> Supporting commerce within the terminal environment</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Creating economic activity around transport operations</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Serving passengers, operators and the terminal community</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Supporting employment</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Contributing to sustainable public revenue</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-slate-900">Available Opportunities</h2>
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="text-[14px] font-semibold text-slate-700">Current commercial opportunities will be published here by terminal management.</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">No specific spaces are listed at this time</p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-900">Enquire About a Commercial Space</h3>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">
                Information about eligibility and the application process will be published here. For now,
                please register your interest through the contact channel.
              </p>
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm font-semibold text-blue-900">How to register interest</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Use the contact form and select <span className="font-semibold">Commercial Opportunities</span> as the subject. Include your business name, type of activity and preferred terminal (Holy Ghost 1, Holy Ghost 2, Gariki or Abakpa).
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                  Enquire About a Commercial Space
                </Link>
                <Link
                  to="/terminals"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  View Terminals
                </Link>
              </div>
              <p className="mt-6 text-xs leading-5 text-slate-500">
                No prices, lease terms or availability details are published at this time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialOpportunitiesPage;
