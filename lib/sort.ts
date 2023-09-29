const ascendingSort = (a: any, b: any): number => {
  if (a > b) {
    return 1
  }

  if (a < b) {
    return -1
  }

  return 0
}

const descendingSort = (a: any, b: any): number => {
  if (a > b) {
    return -1
  }

  if (a < b) {
    return 1
  }

  return 0
}

export const sortByDate = (elementToSort: Array<BlogPost>, order: string = 'descending'): Array<BlogPost> => {
  return elementToSort.sort((a, b) => order === "descending" ? descendingSort(a.createdAt, b.createdAt) : ascendingSort(a.createdAt, b.createdAt))

}