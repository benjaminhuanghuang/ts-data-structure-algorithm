function flipAndInvertImage(image: number[][]): number[][] {
  for (const row of image) {
    let l = 0;
    let r = row.length - 1;
    while (l < r) {
      [row[l], row[r]] = [row[r], row[l]];
      l++;
      r--;
    }
  }
  return image;
}
