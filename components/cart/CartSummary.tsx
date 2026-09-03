export default function CartSummary({
  itemCount,
  subtotal,
}: {
  itemCount: number;
  subtotal: number;
}) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-6 shadow-sm lg:w-72">
      <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>
      <div className="flex justify-between border-t border-gray-100 pt-4 text-base font-semibold text-gray-900">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
