export const parseDisplayDate = (dateString: string | null | undefined): Date | null => {
  if (!dateString || typeof dateString !== "string") return null;

  const parsed = new Date(dateString + "T00:00:00");

  return isNaN(parsed.getTime()) ? null : parsed;
};

export function normalizeDate(date: string | Date): Date {
  // Soporta tanto string como objeto Date
  const parsed = typeof date === "string" ? new Date(date + "T00:00:00") : new Date(date);
  parsed.setHours(0, 0, 0, 0);
  return parsed;
}

export function isSameDay(dateA: Date, dateB: Date): boolean {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
}

export function isTomorrow(date: string | Date | null | undefined): boolean {
  if (!date) return false;

  const inputDate = normalizeDate(date); // puede ser string o Date
  const today = normalizeDate(new Date());
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  return isSameDay(inputDate, tomorrow);
}

export function formatCourseDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  if (isNaN(date.getTime())) return "Fecha inválida";

  const formatter = new Intl.DateTimeFormat('es-MX', {
    month: 'short',
    day: 'numeric',
  });

  const parts = formatter.formatToParts(date);
  const monthPart = parts.find(p => p.type === 'month');
  const dayPart = parts.find(p => p.type === 'day');

  let month = monthPart ? monthPart.value : '';
  const day = dayPart ? dayPart.value : '';

  if (month) {
    month = month.charAt(0).toUpperCase() + month.slice(1);
  }

  return `${month} ${day}`;
}
