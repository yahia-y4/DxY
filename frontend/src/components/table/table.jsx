import "./table.css";

export default function Table({ columns, data, onRowClick }) {
  return (
    <table className="table">
      <thead>
        <tr>
            {columns.map((column, index) => (
                <th key={index}>{column.label}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} onClick={() => onRowClick(row)}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
