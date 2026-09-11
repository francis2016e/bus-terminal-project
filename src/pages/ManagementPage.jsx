import { managementTeam } from "../data/management";

const ManagementPage = () => {
  const md = managementTeam.find((p) => p.category === "md");

  const Card = ({ person }) => (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-[15px] font-semibold leading-tight text-slate-900">
          {person.name}
        </h3>
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] leading-5 text-slate-500">
          {person.designation}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10 py-12 md:py-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Management
              </span>
              <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
            </div>
            <h1 className="text-[30px] font-bold leading-[1.05] tracking-tight text-slate-900 md:text-[36px]">
              Management Team
            </h1>
            <p className="mx-auto mt-4 max-w-150 text-[14px] leading-7 text-slate-600">
              The management team of Enugu East-Zone Bus Terminals.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10 py-10 md:py-14">
        {/* 1. MANAGING DIRECTOR — strongest prominence */}
        {md && (
          <div className="mx-auto max-w-95">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
                <img
                  src={md.image}
                  alt={md.name}
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-blue-600"
                  aria-hidden="true"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-[18px] font-bold leading-tight text-slate-900">
                  {md.name}
                </h2>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] leading-5 text-slate-500">
                  {md.designation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Remaining team — sorted per approved order, no grouping */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {managementTeam
            .filter((p) => p.category !== "md")
            .sort((a, b) => a.order - b.order)
            .map((person) => (
              <Card key={person.id} person={person} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
