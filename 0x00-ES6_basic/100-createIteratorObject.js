export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  function* iterate() {
    for (const department of departments) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }
  return iterate();
}
