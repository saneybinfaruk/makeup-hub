const useGetPageNumber = (totalPosts: number, postsPerPage: number) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return {pageNumbers};
};

export default useGetPageNumber;
