import { Link } from "react-router-dom";

const NoticesPage = () => {
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
          Public Notices
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
          Official announcements, operational updates and public information from
          the Enugu East-Zone Bus Terminal Management will be published here.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Notice Board
          </p>
          <p className="mt-3 text-slate-600">
            No notices have been published yet. This section is being prepared
            and will be updated as part of the ongoing website restructuring.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/terminals"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Explore Our Terminals
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticesPage;
