import { useParams, Link } from "react-router-dom";
import { getTerminalById } from "../data/terminals";

const TerminalDetailPage = () => {
  const { id } = useParams();
  const terminal = getTerminalById(id);

  if (!terminal) {
    return (
      <section className="min-h-[60vh] bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-slate-900">Terminal not found</h1>
          <p className="mt-4 text-slate-600">The terminal you are looking for does not exist.</p>
          <Link to="/" className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Return Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
          ← Back to Home
        </Link>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <img src={terminal.image} alt={terminal.name} className="h-full w-full object-cover" />
          </div>

          <div className="p-8 md:p-10">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">{terminal.label}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{terminal.name}</h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-[16px]">{terminal.description}</p>

            {terminal.connectionNote && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700">
                {terminal.connectionNote}
              </div>
            )}

            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-semibold text-amber-800">Detailed terminal page coming soon</p>
              <p className="mt-1 text-sm leading-6 text-amber-700/90">
                Full information about facilities, operations and services at {terminal.name} will be published here.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/terminals" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                View All Terminals
              </Link>
              <Link to="/" className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalDetailPage;
