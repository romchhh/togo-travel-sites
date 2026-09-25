import {
  getOperatorContracts,
  type OperatorContractsSite,
} from "@togotravel/shared/data/operatorContracts";

function fileLabel(path: string) {
  const ext = path.split(".").pop()?.toUpperCase();
  return ext ?? "FILE";
}

type Props = {
  site: OperatorContractsSite;
  accentClass?: string;
};

export default function OperatorContractsList({
  site,
  accentClass = "group-hover:text-brand",
}: Props) {
  const contracts = getOperatorContracts(site);

  return (
    <ul className="mt-6 space-y-3">
      {contracts.map((item) => (
        <li key={item.id}>
          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-soft)] transition hover:border-brand/30 hover:shadow-[var(--shadow-lift)] sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <span className={`font-medium text-ink ${accentClass}`}>
                {item.title}
              </span>
              {item.subtitle && (
                <span className="mt-0.5 block text-sm text-muted">
                  {item.subtitle}
                </span>
              )}
            </div>
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-muted">
              {fileLabel(item.file)}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
