export const inputBase =
  "w-full rounded-2xl border bg-white/80 px-4 py-3 text-ink outline-none transition placeholder:text-ink-soft/50 focus:ring-4 focus:ring-orange-400/15";
export const inputOk = "border-blue-900/12 focus:border-orange-400";
export const inputErr = "border-red-400 focus:border-red-500 focus:ring-red-400/15";
export const labelCls = "mb-1.5 block text-sm font-medium text-blue-900";
export const errCls = "mt-1 text-xs font-medium text-red-600";

export function fieldCls(hasError: boolean) {
  return `${inputBase} ${hasError ? inputErr : inputOk}`;
}
