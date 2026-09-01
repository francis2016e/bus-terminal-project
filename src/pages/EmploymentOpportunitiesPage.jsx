import { Link } from "react-router-dom";

const EmploymentOpportunitiesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Employment Opportunities
              </span>
            </div>
            <h1 className="text-[32px] font-bold leading-[1.05] tracking-tight text-slate-900 md:text-[40px]">
              Employment Opportunities
            </h1>
            <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-slate-600 md:text-[16px]">
              Employment opportunities may arise through terminal management activities, approved
              engagements and other legitimate activities associated with the terminal environment.
              Current vacancies and recruitment announcements will be published here as they become
              available.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-slate-900">Current Vacancies</h2>
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <p className="text-[14px] font-semibold text-slate-700">No current vacancies have been published.</p>
              <p className="mt-2 text-[13px] leading-6 text-slate-500 max-w-md mx-auto">
                When vacancies are available, they will appear here with full details including position,
                location/terminal, eligibility, application deadline and instructions.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-900">How vacancies will be published</h3>
              <ul className="mt-3 space-y-2 text-[13px] leading-6 text-slate-600">
                <li className="flex gap-2"><span className="text-blue-600">•</span> Position and terminal/location</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> Eligibility and required documents</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> Application deadline and submission channel</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> Official application instructions</li>
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-semibold text-amber-800">Important notice</p>
              <p className="mt-1 text-[13px] leading-6 text-slate-600">
                All recruitment will be communicated through official terminal management channels.
                Applicants should follow only the instructions published with each vacancy announcement.
                No application fees will be requested outside an official announcement.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
                Enquire About Employment
              </Link>
              <Link to="/terminals" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
                View Terminals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentOpportunitiesPage;
