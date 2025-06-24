function calculatePayroll() {
    const base = parseFloat(document.getElementById('salaryInput').value);
    const hours = parseFloat(document.getElementById('hoursInput').value);
    const hourlyRate = base / 40;
    const overtime = hours > 40 ? (hours - 40) * hourlyRate * 1.5 : 0;
    const gross = base + overtime;
    let tax = 0;
    if (gross <= 500) tax = gross * 0.1;
    else if (gross <= 1000) tax = 500 * 0.1 + (gross - 500) * 0.2;
    else tax = 500 * 0.1 + 500 * 0.2 + (gross - 1000) * 0.3;
    const social = gross * 0.062;
    const net = gross - tax - social;
    document.getElementById('payrollResult').innerText = `Net Pay: $${net.toFixed(2)}`;
  }