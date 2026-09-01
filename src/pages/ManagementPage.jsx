import { Link } from "react-router-dom";

const ManagementPage = () => {
  return (
    <section className="min-h-[60vh] bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Enugu East-Zone Bus Terminal Management
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Management Team
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
          Information about the leadership and management of the Enugu East-Zone Bus
          Terminal Management will be published here.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Coming Soon
          </p>
          <p className="mt-3 text-slate-600">
            This section is being prepared as part of the ongoing website
            restructuring. Profiles and responsibilities of the management team will
            appear here.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Return to Home
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              About the Terminals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementPage;
