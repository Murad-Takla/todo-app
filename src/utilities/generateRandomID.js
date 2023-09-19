
function generateRandomID(min = 1, max = 1000000) {
  return Math.random() * (max - min) + min;
}

export default generateRandomID;