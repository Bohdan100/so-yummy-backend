const setPaginationSlice = (page, limit, arrLength) => {
  if (limit && arrLength) {
    page = parseInt(page);
    limit = parseInt(limit);

    if (!isNaN(page) && page >= 0 && !isNaN(limit) && limit > 0) {
      const start = (page - 1) * limit;
      if (start >= arrLength) return null;

      const end = start + limit;
      return { start, end };
    }
  }
  return null;
};

module.exports = setPaginationSlice;
