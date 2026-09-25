import {
  getOperatorContracts,
} from "@togotravel/shared/data/operatorContracts";

function fileLabel(path: string) {
  return path.split(".").pop()?.toUpperCase() ?? "FILE";
}

export default function OperatorContractsList() {
  const contracts = getOperatorContracts("join");

  return (
    <ul className="operator-contracts">
      {contracts.map((item) => (
        <li key={item.id}>
          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="operator-contracts__link"
          >
            <span className="operator-contracts__title">{item.title}</span>
            {item.subtitle && (
              <span className="operator-contracts__subtitle">{item.subtitle}</span>
            )}
            <span className="operator-contracts__type">{fileLabel(item.file)}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
