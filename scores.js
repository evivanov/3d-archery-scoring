// scores.js
// Map arrows hit and result type to points
window.scores = {
  TOTAL_TARGETS: 25,
  1: { // Kill (code 1)
    0: 0,  // Miss
    1: 20,
    2: 14,
    3: 8
  },
  2: { // Wound (code 2)
    0: 0,
    1: 17,
    2: 11,
    3: 5
  }
};

// // Hunter round points
// window.hunterRoundPoints = {
//   1: { // Kill (code 1)
//     1: 20
//   },
//   2: { // Wound (code 2)
//     1: 10
//   }
//   // Normal hunter is 10
// };