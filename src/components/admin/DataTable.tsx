"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
  searchable?: boolean;
  searchField?: keyof T;
  title?: string;
  actionHref?: string;
  actionText?: string;
  loading?: boolean;
}

export default function DataTable<T>({
  data,
  columns,
  keyExtractor,
  searchable = true,
  searchField,
  title,
  actionHref,
  actionText = "Add New",
  loading = false,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = searchable && searchField && searchTerm
    ? data.filter((item) => {
        const value = item[searchField];
        if (typeof value === "string") {
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return true;
      })
    : data;

  return (
    <div className="admin-table-container">
      <div className="admin-table-header">
        {title && <h3>{title}</h3>}
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {searchable && searchField && (
            <input
              type="text"
              placeholder="Search..."
              className="admin-form-control"
              style={{ width: '250px', padding: '8px 12px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          
          {actionHref && (
            <Link href={actionHref} className="admin-btn-primary">
              <i className="fas fa-plus"></i>
              {actionText}
            </Link>
          )}
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: "center", padding: "32px" }}>
                  <i className="fas fa-spinner fa-spin fa-2x" style={{ color: "#38bdf8" }}></i>
                  <p style={{ marginTop: "16px", color: "#94a3b8" }}>Loading data...</p>
                </td>
              </tr>
            ) : filteredData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: "center", padding: "32px", color: "#94a3b8" }}>
                  No records found.
                </td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr key={keyExtractor(item)}>
                  {columns.map((col, i) => (
                    <td key={i}>
                      {typeof col.accessor === "function"
                        ? col.accessor(item)
                        : (item[col.accessor] as unknown as ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
