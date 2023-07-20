function renderScript(table, dimensions, metrics) {
    return `
        select
        ${dimensions.map(field => `${field} as ${field}`).join(",")},
        ${metrics.map(field => `sum(${field}) as ${field}`).join(",\n")}
        from ${table}
        group by ${dimensions.map((field, i) => `${i + 1}`).join(", ")}
      `;
  }

  module.exports = { renderScript };