export default function Pagination({
  setPage,
  page,
  hasPrevPage,
  hasNextPage,
}) {
  return (
    <>
      <button disabled={!hasPrevPage} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button disabled={!hasNextPage} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
}
