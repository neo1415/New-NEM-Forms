// components/ObjectDisplay/types.ts
type ValueType =
  | string
  | number
  | boolean
  | null
  | undefined
  | object
  | Array<any>;

interface DisplayConfig {
  label?: string;
  format?: (value: any) => string;
  hide?: boolean;
  order?: number;
}

interface FieldConfig {
  [key: string]: DisplayConfig;
}

// components/ObjectDisplay/utils.ts
const defaultFormatters = {
  date: (value: string) => new Date(value).toLocaleDateString(),
  boolean: (value: boolean) => (value ? "Yes" : "No"),
  number: (value: number) => value.toLocaleString(),
  array: (value: any[]) => value.join(", "),
  object: (value: object) => JSON.stringify(value),
  default: (value: any) => String(value),
};

const formatValue = (value: ValueType): string => {
  if (value === null || value === undefined) return "-";
  if (value instanceof Date) return defaultFormatters.date(value.toISOString());
  if (Array.isArray(value)) return defaultFormatters.array(value);
  if (typeof value === "object") return defaultFormatters.object(value);
  if (typeof value === "boolean") return defaultFormatters.boolean(value);
  if (typeof value === "number") return defaultFormatters.number(value);
  return defaultFormatters.default(value);
};

const humanizeString = (str: string): string => {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/_/g, " ")
    .trim();
};

// components/ObjectDisplay/ObjectDisplay.tsx
interface ObjectDisplayProps {
  data: Record<string, ValueType>;
  config?: FieldConfig;
  title?: string;
  className?: string;
}

const ObjectDisplay: React.FC<ObjectDisplayProps> = ({
  data,
  config = {},
  title,
  className = "",
}) => {
  const renderValue = (key: string, value: ValueType) => {
    const fieldConfig = config[key] || {};

    if (fieldConfig.hide) return null;

    const label = fieldConfig.label || humanizeString(key);
    const formattedValue = fieldConfig.format
      ? fieldConfig.format(value)
      : formatValue(value);

    if (Array.isArray(value) && typeof value[0] === "object") {
      return (
        <div key={key} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{label}</h3>
          <div className="pl-4">
            {value.map((item, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-50 rounded">
                <ObjectDisplay data={item as Record<string, ValueType>} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (value && typeof value === "object" && !Array.isArray(value)) {
      return (
        <div key={key} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{label}</h3>
          <div className="pl-4">
            <ObjectDisplay data={value as Record<string, ValueType>} />
          </div>
        </div>
      );
    }

    return (
      <div key={key} className="mb-2 flex flex-wrap">
        <span className="font-medium text-gray-600 w-1/3">{label}:</span>
        <span className="text-gray-800 w-2/3">{formattedValue}</span>
      </div>
    );
  };

  const sortedEntries = Object.entries(data).sort(([keyA], [keyB]) => {
    const orderA = config[keyA]?.order ?? Infinity;
    const orderB = config[keyB]?.order ?? Infinity;
    return orderA - orderB;
  });

  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      {sortedEntries.map(([key, value]) => renderValue(key, value))}
    </div>
  );
};

// Usage Example:
const Example: React.FC = () => {
  const data = {
    // Your JSON data here
  };

  const config: FieldConfig = {
    firstName: {
      label: "First Name",
      order: 1,
    },
    lastName: {
      label: "Last Name",
      order: 2,
    },
    dateOfBirth: {
      label: "Birth Date",
      format: (value) => new Date(value).toLocaleDateString(),
      order: 3,
    },
    socialSecurityNumber: {
      hide: true, // Hide sensitive information
    },
    proficiencyLevels: {
      label: "Skills Proficiency",
      format: (value) =>
        Object.entries(value)
          .map(([skill, level]) => `${humanizeString(skill)}: ${level}`)
          .join(", "),
    },
  };

  return (
    <ObjectDisplay
      data={data}
      config={config}
      title="Application Details"
      className="max-w-4xl mx-auto"
    />
  );
};

export default ObjectDisplay;
